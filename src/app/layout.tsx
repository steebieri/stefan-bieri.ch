import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", adjustFontFallback: false });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", style: ["normal", "italic"], adjustFontFallback: false });

export const metadata: Metadata = {
    title: "Stefan Bieri | Digital Architect",
    description: "Personal website of Stefan Bieri - Digital Native, AI Enthusiast, Explorer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(inter.variable, newsreader.variable, "bg-paper text-ink font-sans antialiased")}>
                {children}
            </body>
        </html>
    );
}
