import { planRetrievalTools } from "@/lib/chat/retrieval/plan-tools";
import {
  executeRetrievalTool,
  toolRunningLabels,
} from "@/lib/chat/retrieval/tools";
import type { RetrievalStep } from "@/lib/chat/retrieval/types";

/** Minimum time each retrieval step stays visible */
export const RETRIEVAL_STEP_DELAY_MS = 1000;

export async function runRetrieval(
  query: string,
  emit: (step: RetrievalStep) => void | Promise<void>,
): Promise<string> {
  const tools = planRetrievalTools(query);
  const contextBlocks: string[] = [];

  for (const tool of tools) {
    const id = `${tool}-${crypto.randomUUID()}`;
    const label = toolRunningLabels[tool](query);

    await emit({
      id,
      tool,
      label,
      status: "running",
    });

    await new Promise((resolve) =>
      setTimeout(resolve, RETRIEVAL_STEP_DELAY_MS),
    );

    const result = executeRetrievalTool(tool, query);
    contextBlocks.push(`## ${tool}\n${result.content}`);

    await emit({
      id,
      tool,
      label,
      status: "done",
      result: result.summary,
    });
  }

  return contextBlocks.join("\n\n");
}
