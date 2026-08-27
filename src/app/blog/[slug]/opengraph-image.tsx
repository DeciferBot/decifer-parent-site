import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";
import { ogFontOptions } from "@/lib/og-fonts";
import { OG_SIZE, OG_COLORS, ogFrameStyle, OgHeader, OgFooter } from "@/lib/og";

export const alt = "A Decifer article";
export const size = OG_SIZE;
export const contentType = "image/png";

/**
 * Prerender one card per post and refuse every other slug, mirroring
 * page.tsx. Without these the image route stays dynamic and would read
 * src/content at request time, where the MDX files are not bundled into
 * the serverless function.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

/** Per-post social card: topic, title and date over the brand frame. */
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const fontOptions = await ogFontOptions();
  const titleSize = post.title.length > 55 ? 56 : 66;

  return new ImageResponse(
    (
      <div style={ogFrameStyle}>
        <OgHeader />

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: OG_COLORS.orangeText,
              display: "flex",
            }}
          >
            {post.topic}
          </div>
          <div
            style={{
              fontSize: titleSize,
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              maxWidth: 1000,
              display: "flex",
            }}
          >
            {post.title}
          </div>
        </div>

        <OgFooter left={`${post.author}, ${formatDate(post.publishedAt)}`} right="decifer.io/blog" />
      </div>
    ),
    { ...size, ...fontOptions }
  );
}
