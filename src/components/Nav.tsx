"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        {/* Logo / monogram */}
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-lg font-semibold tracking-tighter"
          aria-label="Back to top"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-paper text-xs transition-colors duration-300 group-hover:bg-ember">
            MN
          </span>
          <span className="hidden sm:inline">{personal.name}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm">
            Get in touch
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative h-10 w-10 md:hidden"
        >
          <span
            className={`absolute left-1/2 top-1/2 block h-px w-6 -translate-x-1/2 bg-ink transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 block h-px w-6 -translate-x-1/2 bg-ink transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden bg-paper transition-[max-height] duration-500 ease-out-expo md:hidden ${
          open ? "max-h-96 border-b border-line" : "max-h-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 font-display text-2xl tracking-tight"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 self-start"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
