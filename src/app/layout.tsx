import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyCta } from "@/components/StickyCta";
import { siteConfig } from "@/data/siteConfig";
import { cormorant, shippori, zenKaku } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    locale: "ja_JP",
    type: "website",
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#10151d",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${cormorant.variable} ${shippori.variable} ${zenKaku.variable}`}>
      <body>
        <Link className="skip-link" href="/#concept">
          本文へスキップ
        </Link>
        <Header />
        {children}
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
