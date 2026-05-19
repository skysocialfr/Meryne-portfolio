import Reveal from "./Reveal";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="bg-paper py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Skills</span>
          <h2 className="display mt-6 max-w-3xl text-fluid-h2">
            A toolkit, sharpened in real conditions.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
          <Reveal>
            <SkillColumn title="Tools" items={skills.tools} />
          </Reveal>
          <Reveal delay={0.08}>
            <SkillColumn title="Expertise" items={skills.expertise} />
          </Reveal>
          <Reveal delay={0.16}>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                Languages
              </h3>
              <ul className="mt-6 space-y-3">
                {skills.languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-baseline justify-between border-b border-line pb-3"
                  >
                    <span className="font-display text-lg">{l.name}</span>
                    <span className="text-sm text-muted">{l.level}</span>
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
      <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
        {title}
      </h3>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="group flex items-center gap-3 border-b border-line pb-3"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember transition-all duration-300 group-hover:w-6" />
            <span className="font-display text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
