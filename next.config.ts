import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/arac-takip-sistemi",
  assetPrefix: "/arac-takip-sistemi/", // CSS/JS yollarının doğru yüklenmesi için
  trailingSlash: true, // <-- BU SATIR ÇOK ÖNEMLİ (GitHub Pages alt sayfa yönlendirmesi)
  images: {
    unoptimized: true,
  },
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
