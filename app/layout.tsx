import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Using Outfit for headings as it looks modern/futuristic
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Netra Elite Travel Guardian",
    description: "Your Smart Companion for Safe and Seamless Travel",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground`}>
                {children}
            </body>
        </html>
    );
}
