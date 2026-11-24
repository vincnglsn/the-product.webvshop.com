import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { SITE } from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "The Product by WebVShop — Le N°1 des tendances validé pour vous",
  description: "The Product by WebVShop : Découvrez notre sélection exclusive du N°1 des tendances testé et approuvé. Câble plat 240W avec support téléphone invisible.",
  openGraph: {
    title: "The Product by WebVShop — Le N°1 des tendances validé pour vous",
    description: "The Product by WebVShop : Câble plat 240W avec support de téléphone escamotable à 90°. La pépite technologique du moment.",
    url: SITE.url,
    siteName: "The Product by WebVShop",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://img.kwcdn.com/product/open/b8abf5bc29f241d98d1408e5f781976a-goods.jpeg",
        width: 1200,
        height: 630,
        alt: "The Product by WebVShop"
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-[#f8fafc] font-sans relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
        <div className="ambient-glow" aria-hidden="true">
          <div className="glow-1" />
          <div className="glow-2" />
          <div className="glow-3" />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
