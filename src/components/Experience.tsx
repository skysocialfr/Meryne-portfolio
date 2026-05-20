import Reveal from "./Reveal";
import { experiences } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-graphite py-24 text-paper md:py-36">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow text-paper/60 before:bg-paper/40">
            Experience
          </span>
          <h2 className="display mt-6 max-w-3xl text-fluid-h2">
            Three years of learning, creating, building.
          </h2>
        </Reveal>

        <ul className="mt-16 md:mt-24">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.05} as="li">
              <article className="group grid gap-6 border-t border-paper/15 py-10 md:grid-cols-12 md:py-12">
                <div className="md:col-span-3">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
                    {exp.period}
                  </div>
                  {exp.location && (
                    <div className="mt-1 text-xs text-paper/40">
                      {exp.location}
                    </div>
                  )}
                </div>

                <div className="md:col-span-9">
                  <header className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                      {exp.company}
                    </h3>
                    <span className="text-paper/70">{exp.role}</span>
                  </header>

                  <p className="mt-4 max-w-3xl text-paper/75 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.tags && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-paper/20 px-3 py-1 text-xs text-paper/70 transition-colors group-hover:border-ember/80 group-hover:text-ember"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
