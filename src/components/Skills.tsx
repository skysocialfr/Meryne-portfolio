import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-ink/10">
      <div className="container-x">
        <SectionHeading id="skills" />

        <div className="mt-stack-xl grid gap-stack-lg md:grid-cols-3 md:gap-grid">
          <Reveal>
            <SkillColumn title="Outils" items={skills.tools} />
          </Reveal>
          <Reveal delay={0.06}>
            <SkillColumn title="Expertise" items={skills.expertise} />
          </Reveal>
          <Reveal delay={0.12}>
            <div>
              <h3 className="label text-ink/60">Langues</h3>
              <ul className="mt-5 border-t border-ink/15">
                {skills.languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-baseline justify-between border-b border-ink/15 py-3"
                  >
                    <span className="font-display text-lg font-semibold">{l.name}</span>
                    <span className="text-small text-ink/70">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SkillColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="label text-ink/60">{title}</h3>
      <ul className="mt-5 border-t border-ink/15">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 border-b border-ink/15 py-3">
            <span className="inline-block h-1.5 w-1.5 shrink-0 bg-accent" />
            <span className="font-display text-lg font-semibold">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
