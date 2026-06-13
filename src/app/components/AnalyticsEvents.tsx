"use client";

import { useEffect } from "react";

/**
 * Delegated GA event tracker. Fires a gtag event for any clicked element
 * carrying a `data-event` attribute (e.g. trading_clicked, learning_clicked),
 * so outbound CTAs are measurable without making the page a client component.
 */
export default function AnalyticsEvents() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest<HTMLElement>("[data-event]");
      const name = el?.getAttribute("data-event");
      if (!name) return;

      const w = window as Window &
        typeof globalThis & { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === "function") {
        w.gtag("event", name, { transport_type: "beacon" });
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
