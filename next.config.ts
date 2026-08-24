import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Required by @next/mdx. No .mdx lives under app/, so this has no routing
  // effect; content sits in src/content and is imported by /blog/[slug].
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      {
        // Redirect bare apex to www (permanent 301)
        source: "/:path*",
        has: [{ type: "host", value: "decifer.io" }],
        destination: "https://www.decifer.io/:path*",
        permanent: true,
      },
      // Memorable aliases for conversation and ads; one canonical page each.
      { source: "/book-a-call", destination: "/contact", permanent: true },
      { source: "/case-studies", destination: "/work", permanent: true },
      { source: "/case-studies/:slug", destination: "/work/:slug", permanent: true },
      // 2026-08-24 repositioning: capabilities and stack folded into
      // /how-we-work; products demoted to About (Built by Decifer).
      { source: "/capabilities", destination: "/how-we-work", permanent: true },
      { source: "/stack", destination: "/how-we-work", permanent: true },
      { source: "/products", destination: "/about", permanent: true },
    ];
  },
};

// Turbopack is the default builder in Next 16, so plugins must be named as
// strings with serialisable options. Functions cannot be passed to Rust.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-frontmatter", "remark-gfm"],
    rehypePlugins: ["rehype-slug", ["rehype-autolink-headings", { behavior: "wrap" }]],
  },
});

export default withMDX(nextConfig);
