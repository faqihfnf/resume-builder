import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zktek0awywaz3vff.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
