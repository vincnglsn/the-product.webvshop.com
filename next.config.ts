import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/the-product",
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://webvshop.com/the-product",
        permanent: true,
        basePath: false,
      },
      {
        source: "/:path((?!the-product|_next|api).*)",
        destination: "https://webvshop.com/the-product/:path*",
        permanent: true,
        basePath: false,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
