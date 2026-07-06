export const starterQuestions = [
  "What does SAHAARA do?",
  "How can I volunteer?",
  "What are your initiatives?",
  "Who leads SAHAARA?",
  "Where can I find health resources?",
] as const;

const followUpPools: Record<string, string[]> = {
  mission: [
    "What are the three pillars?",
    "Why focus on South Asian health?",
    "How can I support the mission?",
  ],
  initiatives: [
    "Tell me about health screenings",
    "What cooking workshops do you run?",
    "How does the research program work?",
  ],
  leadership: [
    "How do I contact the team?",
    "Who are the cofounders?",
    "How can I get involved?",
  ],
  volunteer: [
    "What volunteer roles are available?",
    "How do I sign up?",
    "Do you need help at events?",
  ],
  donate: [
    "How can I donate?",
    "What does my support fund?",
    "Other ways to help besides donating?",
  ],
  resources: [
    "South Asian heart health stats?",
    "Links to trusted health articles?",
    "How do I join a research study?",
  ],
  contact: [
    "What's SAHAARA's email?",
    "Where are you located?",
    "How do I partner with SAHAARA?",
  ],
  default: [
    "How can I get involved?",
    "What initiatives do you run?",
    "Who is on the leadership team?",
  ],
};

function pickPool(userMessage: string, assistantMessage: string): string[] {
  const text = `${userMessage} ${assistantMessage}`.toLowerCase();

  if (/leader|board|ceo|team|cofounder/.test(text)) return followUpPools.leadership;
  if (/initiative|screening|workshop|research|prana/.test(text)) {
    return followUpPools.initiatives;
  }
  if (/volunteer|involv|join/.test(text)) return followUpPools.volunteer;
  if (/donat|support|fund/.test(text)) return followUpPools.donate;
  if (/resource|article|link|study/.test(text)) return followUpPools.resources;
  if (/contact|email|address/.test(text)) return followUpPools.contact;
  if (/mission|sahaara|nonprofit|501/.test(text)) return followUpPools.mission;

  return followUpPools.default;
}

export function getFallbackFollowUps(
  userMessage: string,
  assistantMessage: string,
  askedQuestions: string[],
): string[] {
  const pool = pickPool(userMessage, assistantMessage);
  const normalizedAsked = new Set(
    askedQuestions.map((q) => q.trim().toLowerCase()),
  );

  const unique = pool.filter(
    (q) => !normalizedAsked.has(q.trim().toLowerCase()),
  );

  if (unique.length >= 3) return unique.slice(0, 3);

  const extras = followUpPools.default.filter(
    (q) =>
      !normalizedAsked.has(q.trim().toLowerCase()) &&
      !unique.some((u) => u.toLowerCase() === q.toLowerCase()),
  );

  return [...unique, ...extras].slice(0, 3);
}

export function sanitizeFollowUps(
  followUps: unknown,
  userMessage: string,
  assistantMessage: string,
  askedQuestions: string[],
): string[] {
  if (!Array.isArray(followUps)) {
    return getFallbackFollowUps(userMessage, assistantMessage, askedQuestions);
  }

  const cleaned = followUps
    .filter((q): q is string => typeof q === "string")
    .map((q) => q.trim())
    .filter((q) => q.length > 0 && q.length <= 80);

  const normalizedAsked = new Set(
    askedQuestions.map((q) => q.trim().toLowerCase()),
  );

  const unique = [...new Set(cleaned)].filter(
    (q) => !normalizedAsked.has(q.toLowerCase()),
  );

  if (unique.length >= 2) return unique.slice(0, 3);

  return getFallbackFollowUps(userMessage, assistantMessage, askedQuestions);
}
