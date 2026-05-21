import Reveal from "./Reveal";
import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Education</span>
          <h2 className="display mt-6 max-w-3xl text-fluid-h2">
            Built between Paris and California.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-[2px] border border-line bg-chalk p-8 transition-colors duration-500 hover:border-ink md:p-10">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {edu.period}
                </div>
                <h3 className="mt-4 font-display text-2xl tracking-tight md:text-3xl">
                  {edu.school}
                </h3>
                <p className="mt-3 text-ink/80">{edu.degree}</p>
                <p className="text-ink/60">{edu.field}</p>

                {edu.courses && (
                  <div className="mt-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                      Key courses
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {edu.courses.map((c) => (
                        <li
                          key={c}
                          className="rounded-full border border-line px-3 py-1 text-xs text-ink/70 transition-colors group-hover:border-ink/30"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6 text-xs uppercase tracking-[0.18em] text-muted">
                  {edu.location}
                </div>

                {/* Decorative accent stroke that scales on hover */}
                <span className="absolute bottom-0 left-0 h-1 w-12 origin-left scale-x-100 bg-ember transition-transform duration-500 ease-out-expo group-hover:scale-x-[20]" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
