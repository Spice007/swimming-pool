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

const siteUrl = "https://adlat-pool-business.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ADLAT | Luxury Swimming Pool Builder in Lagos, Nigeria",
  description: "ADLAT designs, engineers, and builds custom luxury swimming pools, infinity pools, and high-end outdoor living spaces across Lagos, Nigeria — Ikoyi, Lekki, Victoria Island, Ikeja GRA & beyond.",
  keywords: "luxury pool builder Lagos, swimming pool construction Lagos, infinity pool Nigeria, pool renovation Lagos, custom pool design Ikoyi, swimming pool company Lekki, pool builder Victoria Island, outdoor architecture Nigeria",
  authors: [{ name: "ADLAT" }],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "ADLAT",
    title: "ADLAT | Luxury Swimming Pool Builder in Lagos, Nigeria",
    description: "Custom luxury swimming pools, infinity pools, and high-end outdoor living spaces designed and built across Lagos, Nigeria.",
    images: [
      {
        url: "/images/hero-fallback.png",
        width: 1200,
        height: 630,
        alt: "ADLAT luxury swimming pool design in Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADLAT | Luxury Swimming Pool Builder in Lagos, Nigeria",
    description: "Custom luxury swimming pools, infinity pools, and high-end outdoor living spaces designed and built across Lagos, Nigeria.",
    images: ["/images/hero-fallback.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "ADLAT",
  description: "ADLAT designs, engineers, and builds custom luxury swimming pools and high-end outdoor living spaces across Lagos, Nigeria.",
  url: siteUrl,
  telephone: "+2348169718959",
  email: "lattyadebayo3@gmail.com",
  image: `${siteUrl}/images/hero-fallback.png`,
  areaServed: {
    "@type": "City",
    name: "Lagos",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  sameAs: [
    "https://instagram.com/adlat_global",
  ],
  priceRange: "₦₦₦₦",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans bg-white text-[#6B7280] min-h-screen selection:bg-[#0A5C9E]/20 selection:text-[#0F172A]">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
