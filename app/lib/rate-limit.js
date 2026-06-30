import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const PER_MINUTE = 10;
const PER_DAY = 50;
const WINDOW_MS = 60_000;

const memoryHits = new Map();

function createUpstashLimiters() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const redis = new Redis({ url, token });
  return {
    minute: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(PER_MINUTE, "60 s"),
      prefix: "tv:rl:min",
    }),
    day: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(PER_DAY, "24 h"),
      prefix: "tv:rl:day",
    }),
  };
}

const upstash = createUpstashLimiters();

function isMemoryLimited(ip) {
  const now = Date.now();
  const hits = (memoryHits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= PER_MINUTE) {
    memoryHits.set(ip, hits);
    return true;
  }
  hits.push(now);
  memoryHits.set(ip, hits);

  if (memoryHits.size > 5000) {
    for (const [key, times] of memoryHits) {
      if (times.every((t) => now - t >= WINDOW_MS)) memoryHits.delete(key);
    }
  }
  return false;
}

/** @returns {Promise<{ limited: boolean; reason?: "minute" | "daily" }>} */
export async function checkRateLimit(ip) {
  if (upstash) {
    const [minute, day] = await Promise.all([
      upstash.minute.limit(ip),
      upstash.day.limit(ip),
    ]);
    if (!minute.success) return { limited: true, reason: "minute" };
    if (!day.success) return { limited: true, reason: "daily" };
    return { limited: false };
  }

  if (isMemoryLimited(ip)) {
    return { limited: true, reason: "minute" };
  }
  return { limited: false };
}

export function rateLimitMessage(reason) {
  if (reason === "daily") {
    return "Du har nått dagens gräns för textgenerering. Försök igen imorgon.";
  }
  return "För många förfrågningar. Vänta en minut och försök igen.";
}
