/** Skicka GA4-event (no-op om gtag saknas eller consent nekas). */
export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
