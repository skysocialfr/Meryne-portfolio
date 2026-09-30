import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { personal, seo } from "@/data/content";
import "./globals.css";

// Display font — Bricolage Grotesque, modern editorial sans with
// enough character to avoid the generic AI-template feel.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Body font — Inter, a clean grotesque sans, highly legible everywhere.
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// Absolute base URL so Open Graph / Twitter image links resolve when shared.
// Vercel sets VERCEL_PROJECT_PRODUCTION_URL automatically; NEXT_PUBLIC_SITE_URL
// can override it once a custom domain is attached.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.shareDescription,
    type: "website",
    locale: "en_US",
    siteName: personal.name,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.shareDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
