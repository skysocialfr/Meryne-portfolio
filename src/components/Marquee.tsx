import { marqueeKeywords } from "@/data/content";

/**
 * Horizontal ticker — pure CSS animation, runs across the full viewport.
 * The list is rendered twice so the loop is seamless.
 */
export default function Marquee() {
  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-line bg-ink py-6 text-paper md:py-8"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeKeywords, ...marqueeKeywords].map((word, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-8 font-display text-3xl font-medium tracking-tight md:text-5xl"
          >
            {word}
            <span className="inline-block h-2 w-2 rounded-full bg-ember" />
          </span>
        ))}
      </div>
    </section>
  );
}
