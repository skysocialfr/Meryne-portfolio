# Meryne Ndjeyi — Portfolio

Personal portfolio of Meryne Ndjeyi, Social Media Manager, looking for a
six-month internship from January 2027. The site is in French
(`<html lang="fr">`); all visible text lives in `src/data/content.ts`,
plus a few interface labels (buttons, menu) in the components.
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion.
Deployed on Vercel.

---

## 1. Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build — run it before every push
```

---

## 2. Edit the content

All text, links and media paths live in **one file**: `src/data/content.ts`.

- `personal`: name, status line, email, LinkedIn, CV link
- `seo`: browser title and share texts (Google, LinkedIn, WhatsApp, X)
- `sections`: section order, navigation labels and big titles (words in
  `*asterisks*` are set in the italic serif)
- `workItems`: Selected work (`archivedWorkItems` holds pieces taken out)
- `international`: the Sky Social / Gabon case study
- `experiences`, `education`, `skills`, `projects`, `lifeOutsideWork`, `contact`

### Placeholders

None are used right now. Items with `placeholder: true` are slots waiting for your media. They are
shown locally and on Vercel **preview** deployments, and **hidden on
production**, so recruiters never see an empty box. The International
section (and its nav link) only appears on production once at least one
project no longer has `placeholder: true`.

To fill a slot: drop the file at the path shown in the grey box, replace
the `[À compléter]` texts, then delete the `placeholder: true` line.
Force the behaviour with the `SHOW_PLACEHOLDERS=true|false` environment
variable in Vercel if needed.

---

## 3. Media

Every media slot is filled; nothing is waiting to be provided. To add or
replace media later, export photos as **JPG, sRGB, quality 80–85, under
1 MB** (Next.js then serves AVIF/WebP at the right size). Videos are
**links** (Instagram / LinkedIn); an MP4 in `public/videos/` is fine for
the International section if it stays **under 10 MB** (H.264).

### International (`public/images/international/`)

| Project | Files |
| --- | --- |
| CDC — Funel | `cdc/cover.jpg` (16:9), `cdc/photo-01.jpg` (16:9), `public/videos/cdc-event.mp4` |
| Compte rendu parlementaire | `senate/cover.jpg` (16:9), `senate/photo-01.jpg` (16:9) |
| FEG × UDB | `feg/cover.jpg` (3:2) |

A new project goes in `international.projects` in `src/data/content.ts`:
`cover` at 2400 × 1350 (16:9, cropped to 4:3 on mobile), gallery photos
at 1600 × 2000 (4:5) or 2400 × 1350 with `orientation: "landscape"`.

### Existing images (already in place, replace at the same path if needed)

| Section | Path | Format |
| --- | --- | --- |
| Hero portrait | `public/images/hero/portrait.jpg` | 1600 × 2000 px (4:5) |
| About photo | `public/images/about/portrait.jpeg` | 1600 × 2000 px (4:5) |
| Life outside work | `public/images/life/*.jpg` | 1600 × 2000 px (4:5) |
| Social video thumbnails | `public/images/work/social/video-*.jpg` | 1920 × 1080 px (16:9) |
| Instagram carousel | `public/images/work/social/social-02.png` | 1600 × 2000 px (4:5) |
| Emailings | `public/images/work/email/*.png` | full-length screenshot, 700 px wide min. |

### CV

Overwrite `public/cv/meryne-ndjeyi-cv.pdf` (same filename, under 2 MB).
See `public/cv/README.txt`.

---

## 4. Design tokens

Colours, spacing, type sizes and motion are CSS variables at the top of
`src/app/globals.css`, wired into Tailwind in `tailwind.config.ts`
(`bg-paper`, `text-ink`, `text-accent`, `text-h1`, `py-section`,
`gap-grid`…). Change a value there to re-skin the whole site. Motion
values used by Framer Motion are mirrored in `src/lib/motion.ts`.

- Palette: `--color-paper` (cream), `--color-ink`, `--color-accent` (red)
- Fonts (loaded in `src/app/layout.tsx`): Bricolage Grotesque (titles),
  Instrument Serif italic (accent words), Inter (text)

---

## 5. Project structure

```
src/
├── app/
│   ├── layout.tsx            # Fonts, metadata (title, Open Graph, Twitter)
│   ├── opengraph-image.tsx   # Generated share image
│   ├── page.tsx              # Section order on the homepage
│   └── globals.css           # Design tokens + base styles
├── components/
│   ├── Nav.tsx               # Scroll-spy navigation, mobile menu
│   ├── Hero.tsx · About.tsx · Work.tsx · International.tsx
│   ├── Experience.tsx · Education.tsx · Skills.tsx · Projects.tsx
│   ├── LifeOutsideWork.tsx · Contact.tsx · Footer.tsx
│   ├── SectionHeading.tsx    # "02 — Selected work" + big title
│   ├── Media.tsx             # next/image wrapper + placeholder box
│   ├── Lightbox.tsx · Reveal.tsx · RichTitle.tsx · Marquee.tsx
├── data/content.ts           # Single source of truth for text & media
└── lib/                      # motion tokens, placeholders, sections
```

---

## 6. Deploy

Vercel builds every push: branches get a preview URL (placeholders
visible), `main` goes to production (placeholders hidden).
