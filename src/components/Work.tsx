"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import SafeImage from "./SafeImage";
import { workItems, type WorkCategory, type WorkItem } from "@/data/content";

const CATEGORIES: ("All" | WorkCategory)[] = [
  "All",
  "Email & Newsletters",
  "Social Media",
];

// Different aspect ratios make the grid feel editorial instead of templated.
const aspectClass: Record<NonNullable<WorkItem["aspect"]>, string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
};

export default function Work() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [open, setOpen] = useState<WorkItem | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? workItems : workItems.filter((w) => w.category === active)),
    [active]
  );

  return (
    <section id="work" className="relative py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <span className="eyebrow">Selected work</span>
            <h2 className="display mt-6 max-w-3xl text-fluid-h2">
              A glimpse at what I build, day to day.
            </h2>
          </Reveal>

          {/* Category filter */}
          <Reveal delay={0.1}>
            <div
              role="tablist"
              aria-label="Filter work by category"
              className="flex flex-wrap gap-2"
            >
              {CATEGORIES.map((c) => {
                const isActive = active === c;
                return (
                  <button
                    key={c}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(c)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                      isActive
                        ? "border-ink bg-ink text-paper"
                        : "border-ink/20 text-ink/70 hover:border-ink hover:text-ink"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Masonry-ish grid */}
        <motion.ul
          layout
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-20 md:gap-6 lg:grid-cols-3"
        >
          {filtered.map((item, i) => (
            <motion.li
              key={item.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <WorkCard item={item} onOpen={() => setOpen(item)} />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}

function WorkCard({ item, onOpen }: { item: WorkItem; onOpen: () => void }) {
  const inner = (
    <>
      <div
        className={`relative overflow-hidden rounded-[2px] bg-line ${
          aspectClass[item.aspect ?? "square"]
        }`}
      >
        <SafeImage
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="p-5 text-paper">
            <div className="font-display text-lg">{item.title}</div>
            {item.subtitle && (
              <div className="text-sm text-paper/70">{item.subtitle}</div>
            )}
          </div>
        </div>
        {/* Category chip */}
        <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink backdrop-blur">
          {item.category}
        </span>
        {/* Centered play badge for linked videos */}
        {item.href && item.linkType !== "post" && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-paper/90 text-ink shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
                <path d="M6 4l10 6-10 6V4z" fill="currentColor" />
              </svg>
            </span>
          </span>
        )}
        {/* Corner arrow badge for linked posts */}
        {item.href && item.linkType === "post" && (
          <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-paper/90 text-ink shadow transition-transform duration-300 group-hover:scale-110">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path
                d="M3 11L11 3M5 3h6v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </span>
        )}
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-3">
        <span className="font-display text-base">{item.title}</span>
        <span className="text-xs text-muted">{item.subtitle}</span>
      </div>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${item.title} on social media`}
        className="group block w-full text-left"
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      onClick={onOpen}
      aria-label={`Open ${item.title}`}
      className="group block w-full text-left"
    >
      {inner}
    </button>
  );
}
