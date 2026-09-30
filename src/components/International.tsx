"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Media from "./Media";
import SectionHeading from "./SectionHeading";
import Lightbox, { type LightboxItem } from "./Lightbox";
import { international, type CaseMedia, type InternationalProject } from "@/data/content";
import { SHOW_PLACEHOLDERS, visible } from "@/lib/placeholders";

const projects = visible(international.projects);

/**
 * International — Sky Social's work in Gabon, laid out as a case study:
 * context and key facts, then one chapter per project with a full-width
 * opening visual and a large gallery (photos + video).
 */
export default function International() {
  const [open, setOpen] = useState<LightboxItem | null>(null);
  if (projects.length === 0) return null;

  return (
    <section id="international" className="section border-t border-ink/10">
      <div className="container-x">
        <SectionHeading id="international" intro={international.context} />

        {/* On-the-ground portrait + key facts */}
        <div className="mt-stack-lg grid gap-stack-lg md:grid-cols-12 md:gap-grid">
          <Reveal className="md:col-span-5">
            <figure>
              <Media
                src={international.portrait.src}
                alt={international.portrait.alt}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="aspect-[3/4]"
                spec="1800 × 2400 px (3:4) · JPG"
              />
              <figcaption className="label mt-3 text-ink/60">
                {international.portrait.caption}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-6 md:col-start-7 md:self-end">
            <dl className="grid grid-cols-2 border-t-2 border-ink">
              {international.facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`border-b border-ink/15 py-5 ${
                    i % 2 === 1 ? "border-l pl-4" : "pr-4"
                  }`}
                >
                  <dt className="label text-ink/60">{f.label}</dt>
                  <dd className="mt-1 font-display text-lg font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-stack-xl space-y-section">
          {projects.map((p, i) => (
            <ProjectChapter key={p.id} project={p} index={i} onOpen={setOpen} />
          ))}
        </div>
      </div>

      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}

function ProjectChapter({
  project,
  index,
  onOpen,
}: {
  project: InternationalProject;
  index: number;
  onOpen: (item: LightboxItem) => void;
}) {
  const gallery = SHOW_PLACEHOLDERS
    ? project.gallery
    : project.gallery.filter((m) => !m.placeholder);

  return (
    <article aria-labelledby={`${project.id}-title`}>
      <Reveal>
        <div className="flex items-baseline gap-4 border-t-2 border-ink pt-4">
          <span className="label shrink-0 text-accent">
            Projet {String(index + 1).padStart(2, "0")}
          </span>
          <span className="label text-ink/70">{project.client}</span>
        </div>
        <h3 id={`${project.id}-title`} className="display mt-stack-md text-h2">
          {project.title}
        </h3>
      </Reveal>

      {/* Opening visual — as large as the screen allows */}
      <Reveal className="mt-stack-lg">
        <MediaTile media={project.cover} title={project.title} onOpen={onOpen} large />
      </Reveal>

      <div className="mt-stack-lg grid gap-stack-lg md:grid-cols-12 md:gap-grid">
        <Reveal className={gallery.length ? "md:col-span-5" : "md:col-span-7"}>
          <p className="text-lead leading-relaxed text-ink/80">{project.summary}</p>
          <ul className="mt-stack-md border-t border-ink/15">
            {project.deliverables.map((d) => (
              <li key={d} className="flex gap-3 border-b border-ink/15 py-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-accent" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Gallery — swipe on mobile, 2-column grid from tablet up */}
        {gallery.length > 0 && (
          <ul className="snap-row md:col-span-7 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0">
            {gallery.map((m, i) => (
              <li
                key={i}
                className={`shrink-0 snap-start md:w-auto ${
                  m.orientation === "landscape" ? "w-[88vw] md:col-span-2" : "w-[80vw]"
                }`}
              >
                <Reveal delay={i * 0.05}>
                  <MediaTile media={m} title={project.title} onOpen={onOpen} />
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

function MediaTile({
  media,
  title,
  onOpen,
  large,
}: {
  media: CaseMedia;
  title: string;
  onOpen: (item: LightboxItem) => void;
  large?: boolean;
}) {
  const landscape = media.orientation === "landscape";
  const aspect = large
    ? "aspect-[4/3] md:aspect-video"
    : landscape
      ? "aspect-video"
      : "aspect-[4/5]";
  const sizes = large
    ? "(min-width: 1440px) 1312px, 100vw"
    : landscape
      ? "(min-width: 768px) 55vw, 88vw"
      : "(min-width: 768px) 30vw, 80vw";
  const spec = large
    ? "2400 × 1350 px (16:9) · JPG — mobile crops to 4:3"
    : landscape
      ? "2400 × 1350 px (16:9) · JPG"
      : "1600 × 2000 px · JPG";

  if (media.kind === "video") {
    // Self-hosted MP4: play inline.
    if (media.file && !media.placeholder) {
      return (
        <video
          controls
          playsInline
          // Without a poster, load just enough to show the first frame.
          preload={media.poster ? "none" : "metadata"}
          poster={media.poster}
          className={`${aspect} w-full bg-ink object-cover`}
          aria-label={media.alt}
        >
          <source src={media.poster ? media.file : `${media.file}#t=0.1`} type="video/mp4" />
        </video>
      );
    }
    const tile = (
      <div className="relative">
        <Media
          src={media.poster}
          alt={media.alt}
          placeholder={media.placeholder}
          sizes={sizes}
          spec={`Video poster ${landscape ? "2400 × 1350" : "1600 × 2000"} px · JPG + link or MP4`}
          className={aspect}
          imgClassName="transition-transform duration-slow ease-out-expo group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex h-16 w-16 items-center justify-center bg-accent text-paper transition-transform duration-base ease-out-expo group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 20 20" aria-hidden>
              <path d="M6 4l10 6-10 6V4z" fill="currentColor" />
            </svg>
          </span>
        </span>
      </div>
    );
    return media.href ? (
      <a
        href={media.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${media.alt} (nouvel onglet)`}
        className="group block"
      >
        {tile}
      </a>
    ) : (
      <div className="group">{tile}</div>
    );
  }

  return (
    <button
      onClick={() =>
        onOpen({ src: media.src, alt: media.alt, title, placeholder: media.placeholder })
      }
      aria-label={`Agrandir : ${media.alt}`}
      className="group block w-full"
    >
      <Media
        src={media.src}
        alt={media.alt}
        placeholder={media.placeholder}
        sizes={sizes}
        spec={spec}
        className={aspect}
        imgClassName="transition-transform duration-slow ease-out-expo group-hover:scale-[1.03]"
      />
    </button>
  );
}
