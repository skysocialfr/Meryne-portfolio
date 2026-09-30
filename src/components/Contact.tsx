import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { contact, personal } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="section bg-ink text-paper">
      <div className="container-x">
        <SectionHeading id="contact" tone="dark" intro={contact.sub} />

        <Reveal delay={0.1}>
          <a
            href={`mailto:${personal.email}`}
            className="mt-stack-lg inline-flex flex-wrap items-baseline gap-3 font-display text-h3 font-bold tracking-heading text-accent"
          >
            <span className="link-underline break-all pb-1">{personal.email}</span>
            <svg width="28" height="28" viewBox="0 0 22 22" fill="none" aria-hidden>
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

        <div className="mt-stack-xl grid gap-stack-md border-t border-paper/15 pt-stack-md md:grid-cols-3">
          <ContactLine label="LinkedIn" value="meryne-ndjeyi" href={personal.linkedin} external />
          <ContactLine label="Location" value={personal.location} />
          <ContactLine label="Status" value={personal.availability} />
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
      <div className="label text-paper/60">{label}</div>
      <div className="mt-2 font-display text-lg font-semibold">{value}</div>
    </>
  );
  if (!href) return <div>{content}</div>;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block transition-colors duration-fast hover:text-accent"
    >
      {content}
    </a>
  );
}
