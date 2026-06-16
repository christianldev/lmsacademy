import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async rewrites() {
    return [
      {
        source: '/', // the URL you want in browser
        destination: '/home',   // actual page under /pages/index.tsx
      },
     ];
  },

 output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
