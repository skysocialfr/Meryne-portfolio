// Motion tokens for Framer Motion — mirror the CSS variables in globals.css.
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.25,
  base: 0.5,
  slow: 0.9,
} as const;

// Distance (px) elements travel when they fade in on scroll. Kept small on
// purpose: the animations should be felt, not watched.
export const REVEAL_OFFSET = 24;
