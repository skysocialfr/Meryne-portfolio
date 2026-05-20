"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SafeImage from "./SafeImage";

export type LightboxItem = {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  category?: string;
  description?: string;
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
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/85 px-4 py-16 backdrop-blur-sm"
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
            className="fixed right-6 top-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-paper text-ink transition-transform hover:rotate-90"
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
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <SafeImage
              src={item.src}
              alt={item.alt}
              className="mx-auto max-h-[68vh] w-auto max-w-full rounded-[2px] object-contain"
            />
            <figcaption className="mt-5 text-paper">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-display text-xl md:text-2xl">
                  {item.title}
                </span>
                {meta && (
                  <span className="text-sm text-paper/60">{meta}</span>
                )}
              </div>
              {item.description && (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper/75 md:text-base">
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
