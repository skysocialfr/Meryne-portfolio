import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Display font — Fraunces, a refined editorial serif. Big type IS the design.
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
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
  title: "Meryne Ndjeyi — Marketing, Communication & Account Coordination",
  description:
    "Portfolio of Meryne Ndjeyi — organized, detail-driven and bilingual coordinator with a passion for brands, craft and culture. Seeking a V.I.E role abroad in account coordination, marketing or communication.",
  openGraph: {
    title: "Meryne Ndjeyi — Marketing, Communication & Account Coordination",
    description:
      "Portfolio of Meryne Ndjeyi — coordination, client service and production for brands and creative teams.",
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
