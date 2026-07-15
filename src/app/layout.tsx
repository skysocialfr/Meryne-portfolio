import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Meryne Ndjeyi — Social Media Manager, alternance ready",
  description:
    "Portfolio of Meryne Ndjeyi — curious, creative and bilingual, building brand presence on social from editorial strategy and content to community, trend watch and performance. Looking for an alternance as a Social Media Manager, starting September 2026.",
  openGraph: {
    title: "Meryne Ndjeyi — Social Media Manager, alternance ready",
    description:
      "Portfolio of Meryne Ndjeyi — social media, editorial strategy, content and community for brands and creative teams.",
    type: "website",
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
