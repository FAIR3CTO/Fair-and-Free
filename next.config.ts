import type { NextConfig } from "next";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      new URL(
        "https://fair3.oss-ap-southeast-1.aliyuncs.com/**",
      ),
    ],
  },
};

if (process.env.NODE_ENV === "development") {
  setupDevPlatform();
}

export default nextConfig;
