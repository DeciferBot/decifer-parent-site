import type { MetadataRoute } from "next";

const BASE = "https://www.decifer.io";

/**
 * The legal pages state "Last updated: May 2026" (LegalLayout default), so the
 * sitemap reports that date rather than the build date. Reporting today's date
 * for a page that has not changed is a false freshness signal. Update this when
 * the policies themselves change.
 */
const LEGAL_LAST_MODIFIED = new Date("2026-05-01T00:00:00.000Z");

/**
 * Same principle for the homepage. It used to report `new Date()`, which meant
 * every deploy restamped it as freshly changed even when the page itself was
 * untouched. `src/app/page.tsx` last changed on 2026-07-08. Update this date
 * when the homepage content actually changes.
 */
const HOME_LAST_MODIFIED = new Date("2026-07-08T00:00:00.000Z");

const legalPaths = [
  "/legal/privacy",
  "/legal/terms",
  "/legal/ai-policy",
  "/legal/child-safety",
  "/legal/education-disclaimer",
  "/legal/financial-disclaimer",
  "/legal/refunds",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: HOME_LAST_MODIFIED, changeFrequency: "monthly", priority: 1 },
    ...legalPaths.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    })),
  ];
}
