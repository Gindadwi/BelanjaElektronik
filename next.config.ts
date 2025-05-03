import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ulhmktkelnueoldjdpqy.supabase.co",
      },
    ],
  },
};

export default nextConfig;
