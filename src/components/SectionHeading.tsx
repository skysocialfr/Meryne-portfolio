import Reveal from "./Reveal";
import RichTitle from "./RichTitle";
import { sections, type SectionId } from "@/data/content";
import { sectionNumber } from "@/lib/sections";

/**
 * Section opener: "02 — Selected work" in the accent colour, a hairline,
 * then the large title. Number, label and title all come from `sections`
 * in content.ts so the navigation and headings never drift apart.
 */
export default function SectionHeading({
  id,
  tone = "light",
  intro,
  className = "",
}: {
  id: SectionId;
  tone?: "light" | "dark";
  intro?: string;
  className?: string;
}) {
  const section = sections.find((s) => s.id === id)!;
  const muted = tone === "dark" ? "text-paper/70" : "text-ink/70";
  const rule = tone === "dark" ? "bg-paper/20" : "bg-ink/15";

  return (
    <header className={className}>
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="label text-accent">
            {sectionNumber(id)}
          </span>
          <span className={`label ${muted}`}>{section.label}</span>
          <span aria-hidden className={`h-px flex-1 ${rule}`} />
        </div>
        <h2 className="display mt-stack-md max-w-[16ch] text-h1">
          <RichTitle text={section.title} />
        </h2>
        {intro && (
          <p className={`mt-stack-md max-w-2xl text-lead leading-relaxed ${muted}`}>
            {intro}
          </p>
        )}
      </Reveal>
    </header>
  );
}
