import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { ServiceKey } from "@/app/data/services";

/**
 * Blog post metadata reader. Posts live in src/content/blog/<slug>.mdx.
 * The slug is the filename, so it cannot drift from the URL.
 *
 * draft: true posts show in development and are excluded from the build,
 * the index and the sitemap. updatedAt feeds sitemap lastModified, keeping
 * the "no false freshness" rule from sitemap.ts.
 */

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");
const MAX_HEADLINE = 110; // Google drops the rich result above this

/** One description for the blog everywhere it is named: page metadata and the RSS channel. */
export const BLOG_DESCRIPTION =
  "Plain-English writing on AI agents, automation and building products, from a Dubai company that runs its own. Costs shown, myths broken, methods shown in full.";

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  topic: string;
  tags: string[];
  readingMinutes: number;
  draft?: boolean;
  image?: string;
  imageAlt?: string;
  relatedServiceKeys?: ServiceKey[];
  relatedPostSlugs?: string[];
  canonical?: string;
}

function readMeta(file: string): PostMeta {
  const slug = file.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data } = matter(raw);
  const meta = { slug, ...(data as Omit<PostMeta, "slug">) };
  for (const k of ["title", "description", "publishedAt", "author", "topic"] as const) {
    if (!meta[k]) throw new Error(`Blog post ${file} is missing frontmatter "${k}"`);
  }
  if (meta.title.length > MAX_HEADLINE) {
    throw new Error(`Blog post ${file} title exceeds ${MAX_HEADLINE} characters`);
  }
  if (/—/.test(raw)) {
    throw new Error(`Blog post ${file} contains an em dash (brand rule)`);
  }
  meta.tags = meta.tags ?? [];
  meta.readingMinutes = meta.readingMinutes ?? Math.max(1, Math.round(raw.split(/\s+/).length / 220));
  return meta;
}

// Content cannot change mid-build, and getAllPosts is called from the
// sitemap, feed, llms.txt and every blog route, so cache the parsed set per
// process. Development skips the cache so edits show without a restart.
let postsCache: PostMeta[] | undefined;

export function getAllPosts(): PostMeta[] {
  if (postsCache && process.env.NODE_ENV !== "development") return postsCache;
  if (!fs.existsSync(BLOG_DIR)) return [];
  postsCache = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(readMeta)
    .filter((p) => process.env.NODE_ENV === "development" || !p.draft)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
  return postsCache;
}

export function getPost(slug: string): PostMeta | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function lastPostChange(): Date | undefined {
  const posts = getAllPosts();
  if (!posts.length) return undefined;
  return new Date(Math.max(...posts.map((p) => +new Date(p.updatedAt ?? p.publishedAt))));
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
