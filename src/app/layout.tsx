import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADLAT | Award-Winning Luxury Swimming Pools & Outdoor Architecture",
  description: "ADLAT designs, engineers, and builds world-class custom swimming pools, infinity horizons, and high-end outdoor architectural environments for premium living.",
  keywords: "luxury pools, custom pool builder, infinity pool construction, architectural swimming pools, modern pool design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="font-sans bg-[#F8FAFC] text-[#0F172A] min-h-screen selection:bg-[#57D6FF]/30 selection:text-[#071A35]">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
