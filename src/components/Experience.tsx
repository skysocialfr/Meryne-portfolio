"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import Reveal from "./Reveal";
import { experiences, type Experience as Exp } from "@/data/content";

export default function Experience() {
  const [open, setOpen] = useState<Exp | null>(null);

  return (
    <section
      id="experience"
      className="relative bg-graphite py-24 text-paper md:py-36"
    >
      <div className="container-x">
        <Reveal>
          <span className="eyebrow text-paper/60 before:bg-paper/40">
            Experience
          </span>
          <h2 className="display mt-6 max-w-3xl text-fluid-h2">
            Three years of learning, creating, building.
          </h2>
        </Reveal>

        <ul className="mt-16 md:mt-24">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.05} as="li">
              <button
                onClick={() => setOpen(exp)}
                aria-label={`View details for ${exp.company}`}
                className="group block w-full border-t border-paper/15 py-10 text-left transition-colors hover:bg-paper/[0.03] md:py-12"
              >
                <div className="grid gap-6 md:grid-cols-12">
                  <div className="md:col-span-3">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
                      {exp.period}
                    </div>
                    {exp.location && (
                      <div className="mt-1 text-xs text-paper/40">
                        {exp.location}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-9">
                    <header className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
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
                              className="rounded-full border border-paper/20 px-3 py-1 text-xs text-paper/70 transition-colors group-hover:border-ember/80 group-hover:text-ember"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      )}
                      <span className="inline-flex items-center gap-2 text-sm text-paper/60 transition-colors group-hover:text-ember">
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
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/85 px-4 py-16 backdrop-blur-sm"
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

          <motion.div
            className="relative my-auto w-full max-w-2xl rounded-[4px] bg-graphite p-8 text-paper shadow-2xl md:p-12"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-ember">
              {exp.period}
              {exp.location && (
                <span className="text-paper/40"> · {exp.location}</span>
              )}
            </div>
            <h3 className="display mt-3 text-3xl md:text-4xl">{exp.company}</h3>
            <div className="mt-1 text-paper/70">{exp.role}</div>

            <p className="mt-6 leading-relaxed text-paper/80">
              {exp.description}
            </p>

            {exp.highlights && (
              <ul className="mt-7 space-y-3 border-t border-paper/15 pt-7">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-paper/85">
                    <span className="mt-[0.5rem] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
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
                    className="rounded-full border border-paper/20 px-3 py-1 text-xs text-paper/70"
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
