import type { NextConfig } from "next";

/** GitHub Pages: https://kaisei2004311-boop.github.io/proposal-service/ */
const repoName = "proposal-service";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
  // GitHub Pages は /legal のようなパスをフォルダとして解決するため
  trailingSlash: true,
  images: {
    // 静的エクスポートでは Image Optimization サーバーが使えない
    unoptimized: true,
  },
};

export default nextConfig;
