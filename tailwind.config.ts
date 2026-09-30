import type { Config } from "tailwindcss";

// Tailwind is wired to the CSS design tokens declared in src/app/globals.css.
// Change a value there (not here) to re-skin the site.
const rgb = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: rgb("--color-paper"),
        ink: rgb("--color-ink"),
        accent: rgb("--color-accent"),
      },
      fontFamily: {
        // Loaded via next/font in app/layout.tsx — keep names in sync.
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        display: "var(--fs-display)",
        h1: "var(--fs-h1)",
        h2: "var(--fs-h2)",
        h3: "var(--fs-h3)",
        lead: "var(--fs-lead)",
        body: "var(--fs-body)",
        small: "var(--fs-small)",
        label: "var(--fs-label)",
      },
      lineHeight: {
        display: "var(--lh-display)",
        heading: "var(--lh-heading)",
      },
      letterSpacing: {
        display: "var(--tracking-display)",
        heading: "var(--tracking-heading)",
        label: "var(--tracking-label)",
      },
      spacing: {
        gutter: "var(--gutter)",
        section: "var(--section-y)",
        "stack-xl": "var(--stack-xl)",
        "stack-lg": "var(--stack-lg)",
        "stack-md": "var(--stack-md)",
        grid: "var(--grid-gap)",
        nav: "var(--nav-h)",
      },
      gap: {
        grid: "var(--grid-gap)",
      },
      maxWidth: {
        page: "var(--page-max)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out)",
      },
      transitionDuration: {
        fast: "var(--dur-fast)",
        base: "var(--dur-base)",
        slow: "var(--dur-slow)",
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
