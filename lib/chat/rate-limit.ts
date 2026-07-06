import { chatRateLimitMax, chatRateLimitWindowMs } from "@/lib/chat/config";

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

function pruneExpired(now: number) {
  for (const [key, entry] of store) {
    if (entry.resetAt <= now) store.delete(key);
  }
}

export function checkChatRateLimit(clientKey: string): {
  allowed: boolean;
  retryAfterSec?: number;
} {
  const now = Date.now();

  if (store.size > 5000) pruneExpired(now);

  const entry = store.get(clientKey);

  if (!entry || entry.resetAt <= now) {
    store.set(clientKey, {
      count: 1,
      resetAt: now + chatRateLimitWindowMs,
    });
    return { allowed: true };
  }

  if (entry.count >= chatRateLimitMax) {
    return {
      allowed: false,
      retryAfterSec: Math.ceil((entry.resetAt - now) / 1000),
    };
  }

  entry.count += 1;
  return { allowed: true };
}

export function getClientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";
  return ip;
}
