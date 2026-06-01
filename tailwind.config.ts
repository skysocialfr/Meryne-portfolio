import type { Config } from "tailwindcss";

// Tailwind config — design tokens centralized here so you can re-skin the
// portfolio (palette, fonts, spacing) without touching components.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Editorial luxury palette: near-black ink on warm off-white,
        // with a single restrained champagne accent (kept under the
        // existing "ember" key to avoid touching every component).
        paper: "#FAF9F6",
        ink: "#0E0E0E",
        graphite: "#1A1A1A",
        muted: "#6B6B6B",
        ember: "#C2A878",
        emberDark: "#A4895E",
        chalk: "#FFFFFF",
        line: "#E5E0D7",
      },
      fontFamily: {
        // Loaded via next/font in app/layout.tsx — keep names in sync.
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        // Fluid type scale using clamp() — works mobile-first up to desktop.
        "fluid-hero": "clamp(3.5rem, 12vw, 11rem)",
        "fluid-h1": "clamp(2.5rem, 7vw, 6rem)",
        "fluid-h2": "clamp(2rem, 4.5vw, 3.5rem)",
        "fluid-lead": "clamp(1.125rem, 1.6vw, 1.375rem)",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
