import type { RetrievalToolName } from "@/lib/chat/retrieval/types";

export function planRetrievalTools(query: string): RetrievalToolName[] {
  const q = query.toLowerCase();
  const tools: RetrievalToolName[] = ["search_site_pages"];

  if (/leader|board|ceo|cofounder|team|who runs|who leads|director|officer/.test(q)) {
    tools.push("get_leadership");
  }
  if (
    /initiative|program|screening|workshop|access|awareness|research|prana|pillar/.test(
      q,
    )
  ) {
    tools.push("get_initiatives");
  }
  if (/resource|link|article|study|masala|heart\.org|cdc/.test(q)) {
    tools.push("get_resources");
  }
  if (/contact|email|address|ein|reach out|phone/.test(q)) {
    tools.push("get_contact");
  }
  if (/media|photo|event|gallery|picture|image/.test(q)) {
    tools.push("get_media");
  }
  if (/volunteer|donat|involv|support|join|help|get involved/.test(q)) {
    tools.push("get_involvement");
  }
  if (
    /mission|what is sahaara|about sahaara|nonprofit|501|who are you|what do you do/.test(
      q,
    )
  ) {
    tools.push("get_mission_overview");
  }

  if (tools.length === 1) {
    tools.push("get_mission_overview");
  }

  return [...new Set(tools)];
}
