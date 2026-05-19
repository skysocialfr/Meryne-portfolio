# Meryne Ndjeyi — Portfolio

Personal portfolio built for the V.I.E application at HAPIK.
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion.

---

## 1. Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Build & preview the production version:

```bash
npm run build
npm run start
```

---

## 2. Edit the content

Everything is centralized in **one file**:

```
src/data/content.ts
```

You can change every piece of text (hero copy, experience, skills, contact info, etc.) without touching any component.

---

## 3. Replace the images

Placeholder SVGs ship with the project so you can preview the site immediately. Replace them with your real images — same path, same filename if possible.

| Section | Path | Aspect ratio | Notes |
| --- | --- | --- | --- |
| Hero portrait | `public/images/hero/portrait.jpg` | 3:4 portrait | Main photo on the right of the hero |
| About photo | `public/images/about/portrait.jpg` | 4:5 portrait | Candid / movement shot recommended |
| Email work #1 | `public/images/work/email/email-01.jpg` | 3:4 | Newsletter screenshot |
| Email work #2 | `public/images/work/email/email-02.jpg` | 1:1 | Email campaign |
| Email work #3 | `public/images/work/email/email-03.jpg` | 16:10 | CSR announcement |
| Social #1 | `public/images/work/social/social-01.jpg` | 1:1 | LinkedIn carousel |
| Social #2 | `public/images/work/social/social-02.jpg` | 3:4 | Instagram post |
| Social #3 | `public/images/work/social/social-03.jpg` | 16:10 | Influencer takeover |
| Social #4 | `public/images/work/social/social-04.jpg` | 1:1 | Visual system |
| Web #1 | `public/images/work/web/web-01.jpg` | 16:10 | Sky Social site |
| Web #2 | `public/images/work/web/web-02.jpg` | 3:4 | Veyra Studio |
| Web #3 | `public/images/work/web/web-03.jpg` | 1:1 | Bestievent |

### After dropping your `.jpg` files

Open `src/data/content.ts` and switch the extensions from `.svg` to `.jpg` (find & replace `.svg` → `.jpg` works fine — only the placeholder image paths use `.svg`).

### CV

Drop your CV PDF at `public/cv/meryne-ndjeyi-cv.pdf`. It's linked from the "Download CV" button in the hero.

---

## 4. Deploy on Vercel

The fastest path:

1. Push the repo to GitHub (already done if you're reading this on GitHub).
2. Go to <https://vercel.com/new> and import the repository.
3. Keep all defaults — Vercel auto-detects Next.js.
4. Click **Deploy**. Done.

You'll get a URL like `meryne-portfolio.vercel.app`. Add a custom domain in **Project Settings → Domains** if you want (e.g. `meryne.com`).

---

## 5. Customize the design

Design tokens live in `tailwind.config.ts`:

- `colors.ember` — the accent color. Change it to shift the whole accent palette.
- `colors.paper` / `colors.ink` — background / foreground.
- `fontFamily.display` / `fontFamily.sans` — typography (loaded via `next/font` in `src/app/layout.tsx`).

---

## 6. Project structure

```
src/
├── app/
│   ├── layout.tsx       # Fonts, metadata, global wrapping
│   ├── page.tsx         # Section order on the homepage
│   └── globals.css      # Base styles + Tailwind layers
├── components/          # One component per section, all reusable
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Marquee.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Work.tsx         # Grid + category filter
│   ├── Lightbox.tsx     # Click on a work item to open it full screen
│   ├── Education.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Reveal.tsx       # Scroll-triggered fade-in helper
└── data/
    └── content.ts       # Single source of truth for all text & images
```

---

## 7. Tips

- The site is **mobile-first** — open DevTools and test on a phone size first.
- Animations honor `prefers-reduced-motion` (accessibility).
- Run `npm run lint` before pushing to catch any issue.

Good luck with HAPIK — go take that international challenge.
