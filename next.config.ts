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
    ];
  },
};

export default nextConfig;
