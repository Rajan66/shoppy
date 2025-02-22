import type { Metadata } from "next";
import { Geist, Geist_Mono, Spectral } from "next/font/google";
import "./globals.css";

const spectral = Geist({
    variable: "--font-spectral",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Shoppy",
    description: "A ecommerce app powered by Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${spectral.variable} antialiased`}>{children}</body>
        </html>
    );
}
