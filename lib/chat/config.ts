function readInt(name: string, fallback: number): number {
  const raw = process.env[name];
  if (!raw) return fallback;
  const value = Number.parseInt(raw, 10);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

/** Max user messages per IP per window. Override with CHAT_RATE_LIMIT_MAX */
export const chatRateLimitMax = readInt("CHAT_RATE_LIMIT_MAX", 40);

/** Rate limit window in ms. Override with CHAT_RATE_LIMIT_WINDOW_MS */
export const chatRateLimitWindowMs = readInt(
  "CHAT_RATE_LIMIT_WINDOW_MS",
  60 * 60 * 1000,
);

/** Max characters per user message. Override with CHAT_MAX_MESSAGE_LENGTH */
export const chatMaxMessageLength = readInt("CHAT_MAX_MESSAGE_LENGTH", 1200);
