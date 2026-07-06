export type RetrievalToolName =
  | "search_site_pages"
  | "get_mission_overview"
  | "get_leadership"
  | "get_initiatives"
  | "get_resources"
  | "get_contact"
  | "get_media"
  | "get_involvement";

export type RetrievalStepStatus = "running" | "done";

export interface RetrievalStep {
  id: string;
  tool: RetrievalToolName;
  label: string;
  status: RetrievalStepStatus;
  result?: string;
}

export type ChatStreamEvent =
  | { type: "tool"; step: RetrievalStep }
  | { type: "generating" }
  | { type: "done"; message: string; followUps: string[] }
  | { type: "error"; error: string };
