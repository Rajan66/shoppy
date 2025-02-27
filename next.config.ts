import type { NextConfig } from "next";

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**",
            },
            {
                protocol: "https",
                hostname: "shoppy-server-1.onrender.com",
            },
        ],
    },
};

export default nextConfig;
