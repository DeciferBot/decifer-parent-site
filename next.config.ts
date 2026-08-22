import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
