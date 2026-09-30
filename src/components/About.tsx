import Reveal from "./Reveal";
import Media from "./Media";
import SectionHeading from "./SectionHeading";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading id="about" />

        <div className="mt-stack-xl grid gap-stack-lg md:grid-cols-12 md:gap-grid">
          <Reveal className="md:col-span-5">
            <Media
              src={about.image}
              alt="Meryne Ndjeyi"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="aspect-[4/5]"
              spec="1600 × 2000 px · JPG"
            />
          </Reveal>

          <div className="md:col-span-6 md:col-start-7 md:self-end">
            <div className="space-y-5 text-lead leading-relaxed text-ink/80">
              {about.body.map((p, i) => (
                <Reveal key={i} delay={0.05 + i * 0.05}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <ul className="mt-stack-lg grid grid-cols-2 border-t border-ink/15">
                {about.stats.map((s, i) => (
                  <li
                    key={s.label}
                    className={`flex flex-col gap-2 border-b border-ink/15 py-6 ${
                      i % 2 === 0 ? "pr-4" : "border-l pl-4"
                    }`}
                  >
                    <span className="display text-h2 text-accent">{s.value}</span>
                    <span className="label text-ink/70">{s.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
