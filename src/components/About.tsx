import Reveal from "./Reveal";
import SafeImage from "./SafeImage";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="container-x grid gap-16 md:grid-cols-12">
        {/* Image + signature block */}
        <div className="md:col-span-5">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-line">
              <SafeImage
                src={about.image}
                alt="Meryne Ndjeyi in motion"
                className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </Reveal>
        </div>

        {/* Text + stats */}
        <div className="md:col-span-7 md:pl-8">
          <Reveal>
            <span className="eyebrow">About</span>
            <h2 className="display mt-6 text-fluid-h2">{about.heading}</h2>
          </Reveal>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80 md:text-xl">
            {about.body.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          {/* Stats grid */}
          <Reveal delay={0.3}>
            <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-line bg-line lg:grid-cols-4">
              {about.stats.map((s) => (
                <li
                  key={s.label}
                  className="flex flex-col gap-2 bg-paper p-6"
                >
                  <span className="font-display text-4xl font-semibold tracking-tighter text-ember">
                    {s.value}
                  </span>
                  <span className="text-xs uppercase tracking-[0.15em] text-muted">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
