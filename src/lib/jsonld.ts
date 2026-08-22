/**
 * Serialise structured data for a <script type="application/ld+json"> tag.
 * Escapes "<" so authored content (blog frontmatter, case copy) can never
 * close the script tag early. Recommended by the Next.js JSON-LD guide.
 */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const SITE = "https://www.decifer.io";
