import { initiativeTabs } from "@/lib/constants/initiatives";
import { mediaIntro, mediaTabs } from "@/lib/constants/media";
import { healthResources } from "@/lib/constants/resources";
import { sitePages } from "@/lib/constants/site-pages";
import type { RetrievalToolName } from "@/lib/chat/retrieval/types";

export interface ToolResult {
  summary: string;
  content: string;
}

const publishedLeadership = [
  { name: "Vivek Nalluri", role: "CEO & Cofounder" },
  { name: "Arnav Surpur", role: "Chairperson of Board & Cofounder" },
  { name: "Sana Singru", role: "CFO" },
  { name: "Shreyaa Gunasekar", role: "Secretary" },
  { name: "Dilsi Bhagat", role: "Director" },
];

function scoreText(text: string, query: string): number {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 2);

  const haystack = text.toLowerCase();
  return terms.reduce((score, term) => (haystack.includes(term) ? score + 1 : score), 0);
}

function searchSitePages(query: string): ToolResult {
  const ranked = sitePages
    .map((page) => ({
      page,
      score:
        scoreText(`${page.label} ${page.description} ${page.path}`, query) +
        (query.toLowerCase().includes(page.label.toLowerCase()) ? 2 : 0),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  const hits = ranked.length > 0 ? ranked.map((r) => r.page) : sitePages.slice(0, 3);

  return {
    summary: `Found ${hits.map((p) => p.label).join(", ")}.`,
    content: hits
      .map((p) => `- [${p.label}](${p.path}): ${p.description}`)
      .join("\n"),
  };
}

function getMissionOverview(): ToolResult {
  return {
    summary: "Loaded mission and three pillars.",
    content: `SAHAARA is a 501(c) nonprofit founded by UC Berkeley students.
Mission: improve cardiovascular and metabolic health for South Asian communities via screenings, education, and research.
South Asians face ~45% higher cardiovascular risk, ~46% hypertension prevalence, and ~2x heart disease risk vs. non-South Asians.
Three pillars: Access, Awareness, Research.`,
  };
}

function getLeadership(): ToolResult {
  return {
    summary: `Found ${publishedLeadership.length} leaders.`,
    content: publishedLeadership.map((m) => `- ${m.name} — ${m.role}`).join("\n"),
  };
}

function getInitiatives(query: string): ToolResult {
  const tabs = initiativeTabs.map((tab) => {
    const subs =
      tab.subSections
        ?.map((s) => `  - ${s.title}: ${s.description}`)
        .join("\n") ?? "";
    const highlights = tab.highlights?.map((h) => `  - ${h}`).join("\n") ?? "";
    return `### ${tab.label}\n${tab.description}\n${highlights}\n${subs}`;
  });

  const matched = initiativeTabs.filter(
    (tab) => scoreText(`${tab.label} ${tab.description}`, query) > 0,
  );

  return {
    summary:
      matched.length > 0
        ? `Found ${matched.map((t) => t.label).join(", ")} programs.`
        : "Loaded all initiative programs.",
    content: tabs.join("\n\n"),
  };
}

function getResources(): ToolResult {
  return {
    summary: `Found ${healthResources.length} health resources.`,
    content: healthResources
      .map((r) => `- ${r.title}: ${r.description} (${r.href})`)
      .join("\n"),
  };
}

function getContact(): ToolResult {
  return {
    summary: "Loaded contact info.",
    content: `- Email: contact@sahaara.org, vivek.nalluri@berkeley.edu
- Address: 286 E Ramsey Dr, Mountain House, CA 95391
- EIN: 41-4995579`,
  };
}

function getMedia(): ToolResult {
  return {
    summary: `Found ${mediaTabs.length} media galleries.`,
    content: `${mediaIntro}\n\n${mediaTabs.map((t) => `- ${t.label}: ${t.description}`).join("\n")}`,
  };
}

function getInvolvement(): ToolResult {
  const page = sitePages.find((p) => p.path === "/get-involved");
  const support = sitePages.find((p) => p.path === "/support");

  return {
    summary: "Loaded volunteer and support options.",
    content: `Get involved:
- Volunteer at screenings and workshops
- Participate in research (Prana Study, Stanford survey)
- Spread the word in your community, temple, or cultural organization
${page ? `- [${page.label}](${page.path}): ${page.description}` : ""}
${support ? `- [${support.label}](${support.path}): ${support.description} (donations coming soon)` : ""}`,
  };
}

export const toolRunningLabels: Record<
  RetrievalToolName,
  (query: string) => string
> = {
  search_site_pages: () => "Searching site pages",
  get_mission_overview: () => "Loading mission overview",
  get_leadership: () => "Loading leadership team",
  get_initiatives: () => "Loading initiatives",
  get_resources: () => "Loading health resources",
  get_contact: () => "Loading contact info",
  get_media: () => "Loading media gallery",
  get_involvement: () => "Loading ways to get involved",
};

export function executeRetrievalTool(
  tool: RetrievalToolName,
  query: string,
): ToolResult {
  switch (tool) {
    case "search_site_pages":
      return searchSitePages(query);
    case "get_mission_overview":
      return getMissionOverview();
    case "get_leadership":
      return getLeadership();
    case "get_initiatives":
      return getInitiatives(query);
    case "get_resources":
      return getResources();
    case "get_contact":
      return getContact();
    case "get_media":
      return getMedia();
    case "get_involvement":
      return getInvolvement();
  }
}
