import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // 後から自社撮影・AI生成画像を /public/images に置く想定
    unoptimized: false,
  },
};

export default nextConfig;
