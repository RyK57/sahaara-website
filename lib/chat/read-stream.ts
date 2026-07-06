"use client";

import type { ChatStreamEvent, RetrievalStep } from "@/lib/chat/retrieval/types";

export async function readChatStream(
  response: Response,
  handlers: {
    onToolStep: (step: RetrievalStep) => void;
    onGenerating: () => void;
    onDone: (message: string, followUps: string[]) => void;
    onError: (error: string) => void;
  },
) {
  if (!response.ok) {
    const data = (await response.json().catch(() => ({}))) as { error?: string };
    handlers.onError(data.error ?? "Request failed");
    return;
  }

  const reader = response.body?.getReader();
  if (!reader) {
    handlers.onError("No response stream");
    return;
  }

  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const chunks = buffer.split("\n\n");
    buffer = chunks.pop() ?? "";

    for (const chunk of chunks) {
      const line = chunk.trim();
      if (!line.startsWith("data:")) continue;

      const payload = line.slice(5).trim();
      if (!payload) continue;

      let event: ChatStreamEvent;
      try {
        event = JSON.parse(payload) as ChatStreamEvent;
      } catch {
        continue;
      }

      switch (event.type) {
        case "tool":
          handlers.onToolStep(event.step);
          break;
        case "generating":
          handlers.onGenerating();
          break;
        case "done":
          handlers.onDone(event.message, event.followUps);
          break;
        case "error":
          handlers.onError(event.error);
          break;
      }
    }
  }
}

function upsertRetrievalStep(
  steps: RetrievalStep[],
  step: RetrievalStep,
): RetrievalStep[] {
  const index = steps.findIndex((s) => s.id === step.id);
  if (index === -1) return [...steps, step];
  const next = [...steps];
  next[index] = step;
  return next;
}

export function mergeRetrievalStep(
  steps: RetrievalStep[],
  step: RetrievalStep,
): RetrievalStep[] {
  return upsertRetrievalStep(steps, step);
}
