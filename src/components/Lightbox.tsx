"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import SafeImage from "./SafeImage";
import type { WorkItem } from "@/data/content";

type Props = {
  item: WorkItem | null;
  onClose: () => void;
};

export default function Lightbox({ item, onClose }: Props) {
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

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 backdrop-blur-sm"
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
            className="absolute right-6 top-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-paper text-ink transition-transform hover:rotate-90"
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
            className="relative mx-4 max-h-[88vh] w-full max-w-5xl"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <SafeImage
              src={item.src}
              alt={item.alt}
              className="max-h-[80vh] w-full rounded-[2px] object-contain"
            />
            <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-2 text-paper">
              <span className="font-display text-xl">{item.title}</span>
              <span className="text-paper/60 text-sm">
                {item.subtitle} · {item.category}
              </span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
