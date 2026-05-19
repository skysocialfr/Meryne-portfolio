import { personal } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-paper/15 bg-ink py-8 text-paper">
      <div className="container-x flex flex-col items-start justify-between gap-4 text-sm md:flex-row md:items-center">
        <div className="text-paper/60">
          © {year} {personal.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-paper/60">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ember"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="transition-colors hover:text-ember"
          >
            Email
          </a>
          <a href="#top" className="transition-colors hover:text-ember">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
