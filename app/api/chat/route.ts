import { buildSahaaraSystemPrompt } from "@/lib/chat/system-prompt";
import { checkChatRateLimit, getClientKey } from "@/lib/chat/rate-limit";
import { validateChatMessage } from "@/lib/chat/moderation";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
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

  try {
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
        max_completion_tokens: 600,
        messages: [
          { role: "system", content: buildSahaaraSystemPrompt() },
          ...trimmed,
        ],
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("xAI API error:", response.status, detail);
      return Response.json(
        { error: "Unable to get a response right now. Please try again." },
        { status: 502 },
      );
    }

    const data = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };

    const content = data.choices?.[0]?.message?.content?.trim();

    if (!content) {
      return Response.json(
        { error: "Empty response from assistant." },
        { status: 502 },
      );
    }

    return Response.json({ message: content });
  } catch (error) {
    console.error("Chat route error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
