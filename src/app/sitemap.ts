import type { MetadataRoute } from "next";
import { getAllPosts, lastPostChange } from "@/lib/blog";
import { servicesOrdered } from "./data/services";
import { publishedCaseShapes } from "./data/caseShapes";

const BASE = "https://www.decifer.io";

/**
 * Principle (from commit efd9b85): never report `new Date()`. Every route's
 * lastModified comes from the data that generates it, so a deploy that
 * changes nothing does not restamp anything as fresh.
 *
 * Data-driven routes read updatedAt from services.ts, caseShapes.ts and the
 * blog frontmatter. Hand-written pages carry a constant here; bump it when
 * the page content actually changes.
 */
const HOME_LAST_MODIFIED = new Date("2026-08-24T00:00:00.000Z");
const STATIC_LAST_MODIFIED = new Date("2026-08-24T00:00:00.000Z"); // /about /stack /contact /products /services /work /blog
const LEGAL_LAST_MODIFIED = new Date("2026-05-01T00:00:00.000Z");
const CONFIDENTIALITY_LAST_MODIFIED = new Date("2026-08-24T00:00:00.000Z");

const legalPaths = [
  "/legal/privacy",
  "/legal/terms",
  "/legal/ai-policy",
  "/legal/child-safety",
  "/legal/education-disclaimer",
  "/legal/financial-disclaimer",
  "/legal/refunds",
];

function newest(dates: string[], floor: Date): Date {
  const max = Math.max(floor.getTime(), ...dates.map((d) => +new Date(d)));
  return new Date(max);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const blogTouched = lastPostChange() ?? STATIC_LAST_MODIFIED;

  return [
    { url: BASE, lastModified: HOME_LAST_MODIFIED, changeFrequency: "monthly", priority: 1 },

    {
      url: `${BASE}/services`,
      lastModified: newest(servicesOrdered.map((s) => s.updatedAt), STATIC_LAST_MODIFIED),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicesOrdered.map((s) => ({
      url: `${BASE}/services/${s.key}`,
      lastModified: new Date(s.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    { url: `${BASE}/contact`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "yearly", priority: 0.9 },

    {
      url: `${BASE}/work`,
      lastModified: newest(publishedCaseShapes.map((c) => c.updatedAt), STATIC_LAST_MODIFIED),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...publishedCaseShapes.map((c) => ({
      url: `${BASE}/work/${c.key}`,
      lastModified: new Date(c.updatedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),

    { url: `${BASE}/blog`, lastModified: blogTouched, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt ?? p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    { url: `${BASE}/about`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/products`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/stack`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "yearly", priority: 0.5 },

    {
      url: `${BASE}/legal/client-confidentiality`,
      lastModified: CONFIDENTIALITY_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...legalPaths.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
