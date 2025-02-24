import type { NextConfig } from "next";

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**",
            },
        ],
    },
};

export default nextConfig;
