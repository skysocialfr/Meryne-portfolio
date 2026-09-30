"use client";

import { motion, useReducedMotion } from "framer-motion";
import Media from "./Media";
import { hero, personal } from "@/data/content";
import { DURATION, EASE_OUT } from "@/lib/motion";

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: DURATION.slow, ease: EASE_OUT },
  });

  return (
    <section id="top" className="relative pb-section pt-[calc(var(--nav-h)+var(--stack-md))]">
      <div className="container-x">
        {/* Meta row */}
        <motion.div
          {...rise(0.05)}
          className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/15 pb-4"
        >
          <span className="label text-ink/70">{hero.eyebrow}</span>
          <span className="label flex items-center gap-2 text-ink">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-block h-2 w-2 rounded-full bg-accent" />
            </span>
            {personal.availability}
          </span>
        </motion.div>

        {/* Headline — each line slides up from a mask */}
        <h1 className="display mt-stack-md text-display">
          {hero.title.map((line, i) => {
            const isLast = i === hero.title.length - 1;
            const words = line.split(" ");
            return (
              <span key={i} className="block overflow-hidden whitespace-nowrap pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={{ y: reduce ? 0 : "105%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.15 + i * 0.12, duration: 1, ease: EASE_OUT }}
                >
                  {isLast ? (
                    <>
                      {words.slice(0, -1).join(" ")}{" "}
                      <span className="serif-accent text-accent">{words.slice(-1)}</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            );
          })}
        </h1>

        <div className="mt-stack-lg grid gap-stack-lg md:grid-cols-12 md:gap-grid">
          {/* Portrait — large, first thing after the title on mobile */}
          <motion.div
            {...rise(0.35)}
            className="relative md:order-2 md:col-span-5 md:col-start-8"
          >
            <Media
              src={hero.portrait}
              alt="Portrait de Meryne Ndjeyi"
              sizes="(min-width: 768px) 40vw, 100vw"
              priority
              className="aspect-[4/5]"
              spec="1600 × 2000 px · JPG"
            />
            <span className="label absolute -bottom-4 left-4 bg-accent px-3 py-2 text-paper">
              Depuis 2022
            </span>
          </motion.div>

          <motion.div {...rise(0.5)} className="md:order-1 md:col-span-6 md:self-end">
            <p className="text-lead leading-relaxed text-ink/80">{hero.lead}</p>

            <div className="mt-stack-md flex flex-wrap gap-3">
              <a href="#work" className="btn-primary">
                Voir mes projets
                <Arrow />
              </a>
              <a
                href={personal.cvUrl}
                download={personal.cvDownloadName}
                className="btn-ghost"
                aria-label="Télécharger le CV (PDF)"
              >
                Télécharger le CV
              </a>
              <a href="#contact" className="btn-ghost">
                Me contacter
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
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
