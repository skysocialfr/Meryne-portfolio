import type { Config } from "tailwindcss";

// Tailwind config — design tokens centralized here so you can re-skin the
// portfolio (palette, fonts, spacing) without touching components.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm off-white "paper" background, deep ink foreground, and a
        // vibrant ember accent that nods to HAPIK's red without copying it.
        paper: "#F6F2EC",
        ink: "#0E0E0E",
        graphite: "#1A1A1A",
        muted: "#6B6B6B",
        ember: "#FF3D2E",
        emberDark: "#D9301F",
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
