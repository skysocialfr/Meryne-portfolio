"use client";

import { motion, useReducedMotion } from "framer-motion";
import SafeImage from "./SafeImage";
import { hero, personal } from "@/data/content";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 lg:pt-40">
      {/* Diagonal accent line — subtle "movement" cue */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-24 hidden h-[140%] w-px rotate-[14deg] bg-ink/10 md:block"
      />

      <div className="container-x">
        {/* Top meta row */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 md:mb-16">
          <span className="eyebrow">{hero.eyebrow}</span>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-ember/60" />
              <span className="relative inline-block h-2 w-2 rounded-full bg-ember" />
            </span>
            {personal.availability}
          </div>
        </div>

        {/* Headline */}
        <h1 className="display text-fluid-hero">
          {hero.title.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: reduce ? 0 : "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.15 + i * 0.12,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* The accent word gets the ember color */}
                {i === hero.title.length - 1 ? (
                  <>
                    {line.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="italic text-ember">
                      {line.split(" ").slice(-1)}
                    </span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Lead + side block */}
        <div className="mt-12 grid gap-10 md:mt-20 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 lg:col-span-6"
          >
            <p className="text-fluid-lead text-ink/80 leading-relaxed">
              {hero.lead}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="btn-primary">
                View my work
                <Arrow />
              </a>
              <a
                href={personal.cvUrl}
                download
                className="btn-ghost"
                aria-label="Download CV (PDF)"
              >
                Download CV
              </a>
              <a href="#contact" className="btn-ghost">
                Contact me
              </a>
            </div>
          </motion.div>

          {/* Portrait card — drop /public/images/hero/portrait.jpg */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative md:col-span-5 md:col-start-8 lg:col-span-5 lg:col-start-8"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-line">
              <SafeImage
                src={hero.portrait}
                alt="Portrait of Meryne Ndjeyi"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
            </div>
            <div className="absolute -bottom-3 -left-3 hidden h-24 w-24 rounded-full bg-ember md:block">
              <div className="flex h-full w-full items-center justify-center font-mono text-[10px] uppercase tracking-[0.2em] text-paper">
                <span className="rotate-[-8deg]">since 2022</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
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
