import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true // 静态导出时需要禁用图片优化
  },
  trailingSlash: true,
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
