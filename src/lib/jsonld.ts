/**
 * Serialise structured data for a <script type="application/ld+json"> tag.
 * Escapes "<" so authored content (blog frontmatter, case copy) can never
 * close the script tag early. Recommended by the Next.js JSON-LD guide.
 */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const SITE = "https://www.decifer.io";

/**
 * RSS autodiscovery entry for metadata `alternates.types`. Next.js replaces
 * a parent's whole `alternates` object when a page defines its own, so any
 * page that sets `alternates.canonical` must spread this back in to keep
 * the feed link. Applied in the root layout and on the blog and learn pages,
 * where feed discovery matters.
 */
export const RSS_ALTERNATE_TYPES = {
  "application/rss+xml": [{ url: "/feed.xml", title: "Decifer blog" }],
};
