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
  title: "Meryne Ndjeyi — Event Communication, Marketing & Account Coordination",
  description:
    "Portfolio of Meryne Ndjeyi — organized, detail-driven and bilingual coordinator bringing brands to life through events and the communication around them. Seeking a V.I.E role abroad in event communication, marketing or account coordination.",
  openGraph: {
    title: "Meryne Ndjeyi — Event Communication & Account Coordination",
    description:
      "Portfolio of Meryne Ndjeyi — events from concept to delivery, content, social and editorial communication for brands and creative teams.",
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
