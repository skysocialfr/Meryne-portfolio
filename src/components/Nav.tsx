"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/content";
import { activeSections, sectionNumber as number } from "@/lib/sections";

const links = activeSections.filter((s) => s.nav);

/**
 * Top navigation. The accent colour marks the section currently in view
 * (number + underline), so the red literally tells you where you are.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: the section crossing the upper third of the screen is active.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-30% 0px -65% 0px" }
    );
    activeSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    const top = document.getElementById("top");
    if (top) observer.observe(top);
    return () => observer.disconnect();
  }, []);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-base ease-out-expo ${
        scrolled || open ? "border-b border-ink/10 bg-paper" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-nav items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-3 font-display text-lg font-bold tracking-heading"
          aria-label="Retour en haut de page"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center bg-ink text-small text-paper transition-colors duration-fast group-hover:bg-accent">
            MN
          </span>
          <span className="hidden whitespace-nowrap sm:inline">{personal.name}</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-6 xl:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`group relative flex items-baseline gap-1.5 whitespace-nowrap py-2 text-small transition-colors duration-fast ${
                  isActive ? "text-ink" : "text-ink/60 hover:text-ink"
                }`}
              >
                <span className="text-label text-accent">{number(l.id)}</span>
                {l.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-accent transition-transform duration-base ease-out-expo ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
          <a href="#contact" className="btn-primary whitespace-nowrap">
            Me contacter
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="relative -mr-2 h-11 w-11 xl:hidden"
        >
          <span
            className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 bg-ink transition-transform duration-fast ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 bg-ink transition-transform duration-fast ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu — full screen, big numbered links */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-nav overflow-y-auto bg-paper transition-[opacity,visibility] duration-base ease-out-expo xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Navigation mobile" className="container-x flex flex-col py-stack-md">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "location" : undefined}
                className={`flex items-baseline gap-4 border-b border-ink/10 py-4 font-display text-h3 font-bold tracking-heading ${
                  isActive ? "text-accent" : "text-ink"
                }`}
              >
                <span className="w-6 shrink-0 text-label text-accent">{number(l.id)}</span>
                {l.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-stack-md self-start"
          >
            Me contacter
          </a>
          <p className="label mt-stack-md text-ink/60">{personal.availability}</p>
        </nav>
      </div>
    </header>
  );
}
