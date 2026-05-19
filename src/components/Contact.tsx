import Reveal from "./Reveal";
import { contact, personal } from "@/data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-24 text-paper md:py-36"
    >
      {/* Big background word — adds depth, fades on small screens */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[28vw] font-bold leading-none tracking-tightest text-paper/[0.04] md:text-[20vw]"
      >
        Let&apos;s talk
      </span>

      <div className="container-x relative">
        <Reveal>
          <span className="eyebrow text-paper/60 before:bg-paper/40">
            Contact
          </span>
          <h2 className="display mt-6 max-w-4xl text-fluid-h1">
            {contact.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-paper/70 text-lg leading-relaxed">
            {contact.sub}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={`mailto:${personal.email}`}
            className="mt-12 inline-flex items-baseline gap-3 font-display text-3xl tracking-tighter text-ember md:mt-16 md:text-5xl"
          >
            <span className="link-underline pb-1">{personal.email}</span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden
            >
              <path
                d="M5 17L17 5M17 5H7M17 5V15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-paper/15 pt-12 text-sm md:grid-cols-4 md:mt-24">
          <Reveal>
            <ContactLine label="Phone" value={personal.phone} href={`tel:${personal.phone.replace(/\s/g, "")}`} />
          </Reveal>
          <Reveal delay={0.05}>
            <ContactLine label="LinkedIn" value="meryne-ndjeyi" href={personal.linkedin} external />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactLine label="Location" value={personal.location} />
          </Reveal>
          <Reveal delay={0.15}>
            <ContactLine label="Status" value={personal.availability} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
        {label}
      </div>
      <div className="mt-2 font-display text-lg">{value}</div>
    </>
  );
  if (!href) return <div>{content}</div>;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block transition-colors hover:text-ember"
    >
      {content}
    </a>
  );
}
