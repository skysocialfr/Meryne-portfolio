"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, EASE_OUT, REVEAL_OFFSET } from "@/lib/motion";

/**
 * Reveal — wraps children in a discreet scroll-triggered fade + rise.
 * Honors `prefers-reduced-motion` automatically.
 */
type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

export default function Reveal({
  children,
  delay = 0,
  y = REVEAL_OFFSET,
  className,
  as = "div",
}: Props) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.slow, delay, ease: EASE_OUT },
    },
  };

  const MotionTag = motion[as as "div"];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
