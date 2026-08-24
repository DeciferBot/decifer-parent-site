import { getAllPosts, lastPostChange, BLOG_DESCRIPTION } from "@/lib/blog";
import { SITE } from "@/lib/jsonld";

/**
 * RSS 2.0 feed for the blog, generated from the same data the site renders.
 * Advertised via metadata alternates.types (see RSS_ALTERNATE_TYPES in
 * lib/jsonld.ts) on the layout and the blog and learn pages.
 */

export const dynamic = "force-static";

function xml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const posts = getAllPosts();
  const lastBuildDate = lastPostChange()?.toUTCString();

  const items = posts
    .map((p) =>
      [
        "    <item>",
        `      <title>${xml(p.title)}</title>`,
        `      <link>${SITE}/blog/${p.slug}</link>`,
        `      <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>`,
        `      <description>${xml(p.description)}</description>`,
        `      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>`,
        ...p.tags.map((t) => `      <category>${xml(t)}</category>`),
        "    </item>",
      ].join("\n")
    )
    .join("\n");

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    "    <title>Decifer blog</title>",
    `    <link>${SITE}/blog</link>`,
    `    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>`,
    `    <description>${xml(BLOG_DESCRIPTION)}</description>`,
    "    <language>en</language>",
    ...(lastBuildDate ? [`    <lastBuildDate>${lastBuildDate}</lastBuildDate>`] : []),
    items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
