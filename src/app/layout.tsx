import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

// Display font — Bricolage Grotesque gives a modern editorial feel with
// just enough character to avoid the generic AI-template look.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Body font — Inter, clean and highly legible on every screen size.
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meryne Ndjeyi — Marketing & Digital Communication",
  description:
    "Portfolio of Meryne Ndjeyi — Master's student in Marketing & Digital Communication at ISC Paris. Building brands at the crossroads of strategy, content and events.",
  openGraph: {
    title: "Meryne Ndjeyi — Marketing & Digital Communication",
    description:
      "Portfolio of Meryne Ndjeyi — strategy, social, email marketing and events.",
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
