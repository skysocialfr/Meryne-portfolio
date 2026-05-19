"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Reveal — wraps children in a scroll-triggered fade + rise animation.
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
  y = 28,
  className,
  as = "div",
}: Props) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const MotionTag = motion[as as "div"];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
