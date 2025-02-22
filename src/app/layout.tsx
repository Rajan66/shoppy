import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import { ThemeProvider } from "@/providers/ThemeProvider";

import "./globals.css";

const figtree = Figtree({
    variable: "--font-figtree",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
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
            <body className={`${figtree.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="dark">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
