import type { MetadataRoute } from "next";
import { getAllPosts, lastPostChange } from "@/lib/blog";
import { servicesOrdered } from "./data/services";
import { workflowsOrdered } from "./data/workflows";
import { publishedCaseShapes } from "./data/caseShapes";
import { tools } from "./data/tools";

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
const STATIC_LAST_MODIFIED = new Date("2026-08-24T00:00:00.000Z"); // /about /contact /services /work /blog /how-we-work
const LEGAL_LAST_MODIFIED = new Date("2026-05-01T00:00:00.000Z"); // privacy, terms, ai-policy
const SCOPED_LEGAL_LAST_MODIFIED = new Date("2026-08-24T00:00:00.000Z"); // refunds, disclaimers, child-safety
const CONFIDENTIALITY_LAST_MODIFIED = new Date("2026-08-24T00:00:00.000Z");
const STACK_LAST_MODIFIED = new Date("2026-08-25T00:00:00.000Z"); // /stack, restored with role and why rendered

const legalPaths: { path: string; lastModified: Date }[] = [
  { path: "/legal/privacy", lastModified: LEGAL_LAST_MODIFIED },
  { path: "/legal/terms", lastModified: LEGAL_LAST_MODIFIED },
  { path: "/legal/ai-policy", lastModified: LEGAL_LAST_MODIFIED },
  { path: "/legal/child-safety", lastModified: SCOPED_LEGAL_LAST_MODIFIED },
  { path: "/legal/education-disclaimer", lastModified: SCOPED_LEGAL_LAST_MODIFIED },
  { path: "/legal/financial-disclaimer", lastModified: SCOPED_LEGAL_LAST_MODIFIED },
  { path: "/legal/refunds", lastModified: SCOPED_LEGAL_LAST_MODIFIED },
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
      lastModified: newest(
        [...servicesOrdered, ...workflowsOrdered].map((s) => s.updatedAt),
        STATIC_LAST_MODIFIED
      ),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...[...servicesOrdered, ...workflowsOrdered].map((s) => ({
      url: `${BASE}/services/${s.key}`,
      lastModified: new Date(s.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    { url: `${BASE}/contact`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "yearly", priority: 0.9 },

    { url: `${BASE}/how-we-work`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.85 },

    { url: `${BASE}/stack`, lastModified: STACK_LAST_MODIFIED, changeFrequency: "monthly", priority: 0.65 },

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

    { url: `${BASE}/learn`, lastModified: blogTouched, changeFrequency: "monthly", priority: 0.85 },

    {
      url: `${BASE}/tools`,
      lastModified: newest(tools.map((t) => t.updatedAt), STATIC_LAST_MODIFIED),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...tools.map((t) => ({
      url: `${BASE}/tools/${t.key}`,
      lastModified: new Date(t.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    { url: `${BASE}/blog`, lastModified: blogTouched, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt ?? p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    { url: `${BASE}/about`, lastModified: STATIC_LAST_MODIFIED, changeFrequency: "yearly", priority: 0.7 },

    {
      url: `${BASE}/legal/client-confidentiality`,
      lastModified: CONFIDENTIALITY_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...legalPaths.map(({ path, lastModified }) => ({
      url: `${BASE}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
