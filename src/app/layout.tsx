import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
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
      className={`${manrope.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="font-sans bg-white text-[#6B7280] min-h-screen selection:bg-[#0A5C9E]/20 selection:text-[#0F172A]">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
