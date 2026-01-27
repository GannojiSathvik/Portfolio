import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Optimization: Use next/font
import "./globals.css";
import "./portfolio.css"; // Import migrated styles

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Gannoji Sathvik | Full-Stack Developer & AI Enthusiast",
  description: "Portfolio of Gannoji Sathvik - Full-Stack Developer and AI Enthusiast building efficient, privacy-focused solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fallback for exact font matching if next/font differs slightly, but next/font is preferred.
              Keeping original links as comments or just relying on next/font. 
              Let's use next/font for better performance as per standard Next.js apps.
           */}
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
