import { personal } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-paper/15 bg-ink py-stack-md text-paper">
      <div className="container-x flex flex-col items-start justify-between gap-4 text-small md:flex-row md:items-center">
        <div className="flex flex-col gap-1">
          <span className="text-paper">{personal.availability}</span>
          <span className="text-paper/60">
            © {year} {personal.name}. Tous droits réservés.
          </span>
        </div>
        <div className="flex items-center gap-6 text-paper/70">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-fast hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="transition-colors duration-fast hover:text-accent"
          >
            E-mail
          </a>
          <a href="#top" className="transition-colors duration-fast hover:text-accent">
            Haut de page ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
