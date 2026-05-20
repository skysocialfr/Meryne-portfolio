"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SafeImage from "./SafeImage";
import Lightbox, { type LightboxItem } from "./Lightbox";
import { lifeOutsideWork, type LifeImage } from "@/data/content";

const aspectClass: Record<LifeImage["aspect"], string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
};

export default function LifeOutsideWork() {
  const [open, setOpen] = useState<LightboxItem | null>(null);

  return (
    <section id="life" className="py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Life outside work</span>
          <h2 className="display mt-6 max-w-3xl text-fluid-h2">
            {lifeOutsideWork.heading}
          </h2>
          {lifeOutsideWork.intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
              {lifeOutsideWork.intro}
            </p>
          )}
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-6 md:gap-6">
          {lifeOutsideWork.images.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.05} className={img.span}>
              <button
                onClick={() =>
                  setOpen({
                    src: img.src,
                    alt: img.alt,
                    title: img.label,
                    description: img.description,
                  })
                }
                aria-label={`Open ${img.label}`}
                className="group block w-full text-left"
              >
                <figure
                  className={`relative w-full overflow-hidden rounded-[2px] bg-line ${
                    aspectClass[img.aspect]
                  }`}
                >
                  <SafeImage
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <figcaption className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink backdrop-blur">
                    {img.label}
                  </figcaption>
                </figure>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
