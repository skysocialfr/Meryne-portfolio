"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Lightbox from "./Lightbox";
import Media from "./Media";
import SectionHeading from "./SectionHeading";
import { workCategories, workItems, type WorkCategory, type WorkItem } from "@/data/content";
import { visible } from "@/lib/placeholders";
import { DURATION, EASE_OUT } from "@/lib/motion";

const items = visible(workItems);

// Only categories with at least one visible item show up as a filter tab.
const CATEGORIES: ("All" | WorkCategory)[] = [
  "All",
  ...workCategories.filter((c) => items.some((i) => i.category === c)),
];

// Large formats: one column on mobile, two from tablet up. Wide items
// (video thumbnails) take the full row.
const aspectClass: Record<NonNullable<WorkItem["aspect"]>, string> = {
  tall: "aspect-[4/5]",
  wide: "aspect-video",
  square: "aspect-square",
};

const specFor: Record<NonNullable<WorkItem["aspect"]>, string> = {
  tall: "1600 × 2000 px · JPG",
  wide: "1920 × 1080 px · JPG",
  square: "1600 × 1600 px · JPG",
};

export default function Work() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [open, setOpen] = useState<WorkItem | null>(null);
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((w) => w.category === active)),
    [active]
  );

  return (
    <section id="work" className="section">
      <div className="container-x">
        <SectionHeading id="work" />

        {/* Category filter — swipeable on mobile */}
        <div
          role="tablist"
          aria-label="Filter work by category"
          className="snap-row mt-stack-lg md:mx-0 md:flex-wrap md:px-0"
        >
          {CATEGORIES.map((c) => {
            const isActive = active === c;
            const count = c === "All" ? items.length : items.filter((i) => i.category === c).length;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(c)}
                className={`flex min-h-[2.75rem] shrink-0 snap-start items-center gap-2 border px-4 text-small transition-colors duration-fast ${
                  isActive
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/20 text-ink/80 hover:border-ink hover:text-ink"
                }`}
              >
                {c}
                <span className={isActive ? "text-accent" : "text-ink/50"}>{count}</span>
              </button>
            );
          })}
        </div>

        <motion.ul layout className="mt-stack-lg grid grid-flow-dense grid-cols-1 gap-x-grid gap-y-stack-lg md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((item, i) => (
              <motion.li
                key={item.id}
                layout
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: DURATION.slow, ease: EASE_OUT }}
                className={item.aspect === "wide" ? "md:col-span-2" : ""}
              >
                <WorkCard item={item} index={i} onOpen={() => setOpen(item)} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}

function WorkCard({
  item,
  index,
  onOpen,
}: {
  item: WorkItem;
  index: number;
  onOpen: () => void;
}) {
  const aspect = item.aspect ?? "tall";
  const inner = (
    <>
      <div className="relative">
        <Media
          src={item.src}
          alt={item.alt}
          placeholder={item.placeholder}
          spec={specFor[aspect]}
          sizes={aspect === "wide" ? "(min-width: 1440px) 1312px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          className={aspectClass[aspect]}
          imgClassName="object-top transition-transform duration-slow ease-out-expo group-hover:scale-[1.03]"
        />
        {/* Play badge for linked videos */}
        {item.href && item.linkType === "video" && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center bg-accent text-paper transition-transform duration-base ease-out-expo group-hover:scale-110 md:h-20 md:w-20">
              <svg width="22" height="22" viewBox="0 0 20 20" aria-hidden>
                <path d="M6 4l10 6-10 6V4z" fill="currentColor" />
              </svg>
            </span>
          </span>
        )}
        {/* Corner arrow for linked posts */}
        {item.href && item.linkType === "post" && (
          <span className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center bg-paper text-ink transition-colors duration-fast group-hover:bg-accent group-hover:text-paper">
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

      <div className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 border-t border-ink/15 pt-3">
        <span className="label pt-1.5 text-accent">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3 className="heading text-h3 transition-colors duration-fast group-hover:text-accent">
            {item.title}
          </h3>
          <p className="mt-1 text-small text-ink/70">
            {[item.subtitle, item.category].filter(Boolean).join(" · ")}
          </p>
        </div>
      </div>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${item.title} (opens in a new tab)`}
        className="group block w-full text-left"
      >
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onOpen} aria-label={`Open ${item.title}`} className="group block w-full text-left">
      {inner}
    </button>
  );
}
