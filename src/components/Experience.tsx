"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { DURATION, EASE_OUT } from "@/lib/motion";
import { experiences, type Experience as Exp } from "@/data/content";

export default function Experience() {
  const [open, setOpen] = useState<Exp | null>(null);

  return (
    <section id="experience" className="section bg-ink text-paper">
      <div className="container-x">
        <SectionHeading id="experience" tone="dark" />

        <ul className="mt-stack-xl border-b border-paper/15">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.05} as="li">
              <button
                onClick={() => setOpen(exp)}
                aria-label={`View details for ${exp.company}`}
                className="group block w-full border-t border-paper/15 py-stack-md text-left md:py-stack-lg"
              >
                <div className="grid gap-4 md:grid-cols-12 md:gap-grid">
                  <div className="md:col-span-3">
                    <div className="label text-accent">{exp.period}</div>
                    {exp.location && (
                      <div className="mt-1 text-small text-paper/60">
                        {exp.location}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-9">
                    <header className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="heading text-h2 transition-colors duration-fast group-hover:text-accent">
                        {exp.company}
                      </h3>
                      <span className="text-paper/70">{exp.role}</span>
                    </header>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                      {exp.tags && (
                        <ul className="flex flex-wrap gap-2">
                          {exp.tags.map((t) => (
                            <li
                              key={t}
                              className="border border-paper/20 px-3 py-1 text-small text-paper/70"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      )}
                      <span className="inline-flex items-center gap-2 text-small text-paper/70 transition-colors duration-fast group-hover:text-accent">
                        View details
                        <Arrow />
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <ExperienceModal exp={open} onClose={() => setOpen(null)} />
    </section>
  );
}

function ExperienceModal({
  exp,
  onClose,
}: {
  exp: Exp | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!exp) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [exp, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {exp && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/90 px-4 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={exp.company}
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

          <motion.div
            className="relative my-auto w-full max-w-2xl bg-ink p-6 text-paper ring-1 ring-paper/15 md:p-12"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: DURATION.base, ease: EASE_OUT }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="label text-accent">
              {exp.period}
              {exp.location && (
                <span className="text-paper/60"> · {exp.location}</span>
              )}
            </div>
            <h3 className="display mt-3 text-h2">{exp.company}</h3>
            <div className="mt-1 text-paper/70">{exp.role}</div>

            <p className="mt-6 leading-relaxed text-paper/80">
              {exp.description}
            </p>

            {exp.highlights && (
              <ul className="mt-7 space-y-3 border-t border-paper/15 pt-7">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-paper/85">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-accent" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            )}

            {exp.tags && (
              <ul className="mt-7 flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <li
                    key={t}
                    className="border border-paper/20 px-3 py-1 text-small text-paper/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M1 13L13 1M13 1H4M13 1V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
