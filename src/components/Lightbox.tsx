"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Media from "./Media";
import { DURATION, EASE_OUT } from "@/lib/motion";

export type LightboxItem = {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  category?: string;
  description?: string;
  placeholder?: boolean;
};

type Props = {
  item: LightboxItem | null;
  onClose: () => void;
};

export default function Lightbox({ item, onClose }: Props) {
  // Portal target only exists in the browser, so wait until mounted.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Close on Escape and lock background scroll while open.
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [item, onClose]);

  if (!mounted) return null;

  const meta = item
    ? [item.subtitle, item.category].filter(Boolean).join(" · ")
    : "";

  return createPortal(
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/95 px-4 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="fixed right-4 top-4 z-10 inline-flex h-12 w-12 items-center justify-center bg-paper text-ink transition-colors duration-fast hover:bg-accent hover:text-paper"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
              <path
                d="M2 2L14 14M14 2L2 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <motion.figure
            className="relative my-auto w-full max-w-4xl"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: DURATION.base, ease: EASE_OUT }}
            onClick={(e) => e.stopPropagation()}
          >
            <Media
              src={item.src}
              alt={item.alt}
              sizes="(min-width: 1024px) 896px, 100vw"
              fit="contain"
              placeholder={item.placeholder}
              className="h-[65vh] w-full bg-transparent"
            />
            <figcaption className="mt-5 text-paper">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="heading text-h3">
                  {item.title}
                </span>
                {meta && (
                  <span className="label text-paper/70">{meta}</span>
                )}
              </div>
              {item.description && (
                <p className="mt-3 max-w-2xl leading-relaxed text-paper/80">
                  {item.description}
                </p>
              )}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
