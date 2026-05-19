import Reveal from "./Reveal";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-36">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Live projects</span>
          <h2 className="display mt-6 max-w-3xl text-fluid-h2">
            Out in the wild.
          </h2>
        </Reveal>

        <ul className="mt-14 divide-y divide-line border-y border-line md:mt-20">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.04} as="li">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 py-8 transition-colors md:flex-row md:items-center md:justify-between md:gap-8 md:py-10"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl tracking-tight transition-colors group-hover:text-ember md:text-5xl">
                    {p.name}
                  </h3>
                </div>
                <div className="flex items-center gap-6 md:max-w-md">
                  <p className="text-ink/70">{p.description}</p>
                  <span
                    aria-hidden
                    className="hidden h-px w-12 bg-ink/30 transition-all duration-500 ease-out-expo group-hover:w-24 group-hover:bg-ember md:block"
                  />
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    aria-hidden
                    className="shrink-0 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1"
                  >
                    <path
                      d="M5 17L17 5M17 5H7M17 5V15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
