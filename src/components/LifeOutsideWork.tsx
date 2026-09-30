"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Media from "./Media";
import SectionHeading from "./SectionHeading";
import Lightbox, { type LightboxItem } from "./Lightbox";
import { lifeOutsideWork } from "@/data/content";

export default function LifeOutsideWork() {
  const [open, setOpen] = useState<LightboxItem | null>(null);

  return (
    <section id="life" className="section border-t border-ink/10">
      <div className="container-x">
        <SectionHeading id="life" intro={lifeOutsideWork.intro} />

        {/* Swipeable row on mobile, 3-column grid from tablet up */}
        <ul className="snap-row mt-stack-xl md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {lifeOutsideWork.images.map((img, i) => (
            <li key={img.src} className="w-[80vw] shrink-0 snap-start md:w-auto">
              <Reveal delay={(i % 3) * 0.05}>
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
                  <Media
                    src={img.src}
                    alt={img.alt}
                    sizes="(min-width: 768px) 33vw, 80vw"
                    className="aspect-[4/5]"
                    imgClassName="transition-transform duration-slow ease-out-expo group-hover:scale-[1.03]"
                    spec="1600 × 2000 px · JPG"
                  />
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="label text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-semibold">{img.label}</span>
                  </div>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
