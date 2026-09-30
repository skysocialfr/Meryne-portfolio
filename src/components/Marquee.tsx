import { marqueeKeywords } from "@/data/content";

/**
 * Horizontal ticker — pure CSS animation, runs across the full viewport.
 * The list is rendered twice so the loop is seamless.
 */
export default function Marquee() {
  return (
    <section aria-hidden className="relative overflow-hidden bg-ink py-5 text-paper md:py-7">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...marqueeKeywords, ...marqueeKeywords].map((word, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-12 font-display text-h3 font-bold tracking-heading md:mx-8"
          >
            {word}
            <span className="inline-block h-2.5 w-2.5 bg-accent" />
          </span>
        ))}
      </div>
    </section>
  );
}
