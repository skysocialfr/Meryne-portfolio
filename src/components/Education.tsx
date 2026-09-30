import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-x">
        <SectionHeading id="education" />

        <div className="mt-stack-xl grid gap-stack-lg md:grid-cols-3 md:gap-grid">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 0.06}>
              <article className="h-full border-t-2 border-ink pt-6">
                <div className="label text-accent">{edu.period}</div>
                <h3 className="heading mt-4 text-h3">{edu.school}</h3>
                <p className="mt-3 font-medium">{edu.degree}</p>
                <p className="text-ink/70">{edu.field}</p>

                {edu.courses && (
                  <div className="mt-6">
                    <div className="label text-ink/60">Key courses</div>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {edu.courses.map((c) => (
                        <li
                          key={c}
                          className="border border-ink/15 px-3 py-1 text-small text-ink/80"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="label mt-6 text-ink/60">{edu.location}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
