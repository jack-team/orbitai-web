import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [{
          loader: "@svgr/webpack",
          options: {
            svgo: false,
          }
        }],
        // This line should be `as: "*.js"`
        as: "*.js",
      },
    },
  }
};

export default nextConfig;
