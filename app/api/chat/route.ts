import { buildSahaaraSystemPrompt } from "@/lib/chat/system-prompt";
import { checkChatRateLimit, getClientKey } from "@/lib/chat/rate-limit";
import { validateChatMessage } from "@/lib/chat/moderation";
import { runRetrieval } from "@/lib/chat/retrieval/run-retrieval";
import type { ChatStreamEvent } from "@/lib/chat/retrieval/types";
import {
  getFallbackFollowUps,
  sanitizeFollowUps,
} from "@/lib/chat/suggested-questions";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const followUpSystemAddendum = `

## Response format
Reply with valid JSON only (no markdown fences):
{"message":"<your markdown reply>","followUps":["<short follow-up 1>","<short follow-up 2>","<short follow-up 3>"]}

Rules for followUps:
- Exactly 3 natural next questions the user might ask based on your reply
- Each under 60 characters
- SAHAARA-related only
- Do not repeat what the user already asked

Use the "## Retrieved from website" context as your primary source. Do not invent facts outside that context and the base SAHAARA knowledge.`;

function encodeSse(event: ChatStreamEvent): Uint8Array {
  return new TextEncoder().encode(`data: ${JSON.stringify(event)}\n\n`);
}

export async function POST(request: Request) {
  const apiKey = process.env.XAI_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Chat is not configured. Add XAI_API_KEY to your environment." },
      { status: 503 },
    );
  }

  const clientKey = getClientKey(request);
  const rateLimit = checkChatRateLimit(clientKey);

  if (!rateLimit.allowed) {
    return Response.json(
      {
        error: `Too many messages. Please wait ${rateLimit.retryAfterSec ?? 60} seconds and try again.`,
      },
      {
        status: 429,
        headers: rateLimit.retryAfterSec
          ? { "Retry-After": String(rateLimit.retryAfterSec) }
          : undefined,
      },
    );
  }

  let body: { messages?: ChatMessage[] };

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const messages = body.messages;

  if (!messages?.length || messages.at(-1)?.role !== "user") {
    return Response.json({ error: "A user message is required." }, { status: 400 });
  }

  const lastUserMessage = messages.at(-1)!.content;
  const moderation = validateChatMessage(lastUserMessage);

  if (!moderation.allowed) {
    return Response.json({ error: moderation.reason }, { status: 400 });
  }

  const trimmed = messages.slice(-12);
  const askedQuestions = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content);

  const stream = new ReadableStream({
    async start(controller) {
      const send = (event: ChatStreamEvent) => {
        controller.enqueue(encodeSse(event));
      };

      try {
        const retrievedContext = await runRetrieval(lastUserMessage, (step) => {
          send({ type: "tool", step });
        });

        send({ type: "generating" });

        const response = await fetch("https://api.x.ai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: process.env.XAI_MODEL ?? "grok-4.3",
            reasoning_effort: "none",
            temperature: 0.4,
            max_completion_tokens: 700,
            response_format: { type: "json_object" },
            messages: [
              {
                role: "system",
                content: buildSahaaraSystemPrompt() + followUpSystemAddendum,
              },
              {
                role: "system",
                content: `## Retrieved from website\n${retrievedContext}`,
              },
              ...trimmed,
            ],
          }),
        });

        if (!response.ok) {
          const detail = await response.text();
          console.error("xAI API error:", response.status, detail);
          send({
            type: "error",
            error: "Unable to get a response right now. Please try again.",
          });
          controller.close();
          return;
        }

        const data = (await response.json()) as {
          choices?: { message?: { content?: string } }[];
        };

        const content = data.choices?.[0]?.message?.content?.trim();

        if (!content) {
          send({ type: "error", error: "Empty response from assistant." });
          controller.close();
          return;
        }

        let message = content;
        let followUps: string[];

        try {
          const parsed = JSON.parse(content) as {
            message?: string;
            followUps?: unknown;
          };
          message = parsed.message?.trim() ?? content;
          followUps = sanitizeFollowUps(
            parsed.followUps,
            lastUserMessage,
            message,
            askedQuestions,
          );
        } catch {
          message = content;
          followUps = getFallbackFollowUps(
            lastUserMessage,
            message,
            askedQuestions,
          );
        }

        send({ type: "done", message, followUps });
      } catch (error) {
        console.error("Chat route error:", error);
        send({
          type: "error",
          error: "Something went wrong. Please try again.",
        });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
