import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-ink/10">
      <div className="container-x">
        <SectionHeading id="projects" />

        <ul className="mt-stack-xl border-t border-ink/15">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.04} as="li">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 border-b border-ink/15 py-stack-md md:flex-row md:items-center md:justify-between md:gap-8"
              >
                <div className="flex items-baseline gap-4 md:gap-6">
                  <span className="label text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display text-h2 transition-colors duration-fast group-hover:text-accent">
                    {p.name}
                  </h3>
                </div>
                <div className="flex items-center justify-between gap-6 pl-8 md:max-w-md md:pl-0">
                  <p className="text-ink/70">{p.description}</p>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    aria-hidden
                    className="shrink-0 transition-transform duration-base ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
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
