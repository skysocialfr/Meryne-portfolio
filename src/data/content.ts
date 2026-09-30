/**
 * Central content file — every piece of text, link or image path the site
 * displays lives here. Edit this file to update the portfolio; you don't
 * need to touch the components.
 */

export const personal = {
  name: "Meryne Ndjeyi",
  role: "Social Media & Content",
  location: "Saint-Germain-en-Laye, France",
  // Short status line (hero badge, contact "Status", footer).
  availability: "Open to work · 6-month internship from Jan 2027",
  // Full sentence version, reused in page metadata.
  availabilityLong:
    "Looking for a six-month internship as a Social Media Manager, starting January 2027.",
  email: "meryne.ndjeyi@outlook.com",
  linkedin: "https://www.linkedin.com/in/meryne-ndjeyi-bb5169198",
  // To update the CV, overwrite /public/cv/meryne-ndjeyi-cv.pdf with the new
  // PDF (same filename). Vercel revalidates files in /public on every
  // deploy, so visitors get the new version right away.
  cvUrl: "/cv/meryne-ndjeyi-cv.pdf",
  // Filename the visitor's browser saves the download as.
  cvDownloadName: "Meryne-Ndjeyi-CV.pdf",
};

// Page title and meta description (browser tab, Google, Open Graph, Twitter).
export const seo = {
  title: "Meryne Ndjeyi — Social Media Manager, 6-month internship from Jan 2027",
  description:
    "Portfolio of Meryne Ndjeyi — curious, creative and bilingual, building brand presence on social from editorial strategy and content to community, trend watch and performance. Looking for a six-month internship as a Social Media Manager, starting January 2027.",
  shareDescription:
    "Social media, editorial strategy, content and community. Looking for a six-month Social Media Manager internship from January 2027.",
};

// Page sections, in order. Drives the navigation, the section numbers
// ("02 / Selected work") and the section titles.
export type SectionId =
  | "about"
  | "work"
  | "international"
  | "experience"
  | "education"
  | "skills"
  | "projects"
  | "life"
  | "contact";

export type Section = {
  id: SectionId;
  label: string;
  // Large title under the label. The words wrapped in *asterisks* are set
  // in the contrasting italic serif.
  title: string;
  // Show this section in the top navigation.
  nav?: boolean;
};

export const sections: Section[] = [
  { id: "about", label: "About", title: "Turning brands into *stories* on social.", nav: true },
  { id: "work", label: "Selected work", title: "A glimpse at what I build, *day to day.*", nav: true },
  { id: "international", label: "International", title: "Sky Social, on the ground in *Gabon.*", nav: true },
  { id: "experience", label: "Experience", title: "Three years of learning, creating, *building.*", nav: true },
  { id: "education", label: "Education", title: "Built between Paris and *California.*" },
  { id: "skills", label: "Skills", title: "A toolkit, sharpened in *real conditions.*" },
  { id: "projects", label: "Live projects", title: "Out in the *wild.*", nav: true },
  { id: "life", label: "Life outside work", title: "Life outside *work.*", nav: true },
  { id: "contact", label: "Contact", title: "Let's build something *memorable.*" },
];

export const hero = {
  // Eyebrow above the big title.
  eyebrow: "Portfolio 2026",
  // Each word becomes a separately animated line. Keep 2 lines max for impact.
  title: ["Marketing,", "in motion."],
  lead:
    "Hello! I'm Meryne, a Master's student in Marketing & Digital Communication at ISC Paris. Curious, creative and bilingual (French / English), I build brand presence on social media, from editorial strategy and content production to community, trend watch and performance. I'm currently looking for a six-month internship as a Social Media Manager, starting January 2027.",
  // Image shown on the right of the hero on desktop.
  // To replace: drop your portrait at /public/images/hero/portrait.jpg (3:4)
  // then change this path to "/images/hero/portrait.jpg".
  portrait: "/images/hero/portrait.jpg",
};

// Words that scroll horizontally across the page — the "movement" signature.
export const marqueeKeywords = [
  "Social media strategy",
  "Editorial calendar",
  "Content creation",
  "Community management",
  "Trend watch",
  "Brand storytelling",
  "Copywriting",
  "Performance analysis",
  "Client relationship",
  "Bilingual FR / EN",
];

export const about = {
  body: [
    "Curious, creative and bilingual (French / English), I love the craft of social media: reading a brief, shaping an editorial line, producing content, animating a community, then reading the numbers to sharpen the next round. I stay in constant watch on formats, trends and cultural moments to keep brands relevant.",
    "Outside work, sport, piano and painting keep me curious and balanced, three sides of the same instinct for craft, focus and progress.",
  ],
  // Optional secondary photo (candid / action shot).
  // To replace: drop a 4:5 image at /public/images/about/portrait.jpg
  // then change this path to "/images/about/portrait.jpg".
  image: "/images/about/portrait.jpeg",
  stats: [
    { value: "8", label: "Sites managed across FR & MA" },
    { value: "€100K", label: "Top event budget handled" },
    { value: "2 yrs", label: "Influencer partnerships led" },
    { value: "3", label: "Brands & products launched" },
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  tags?: string[];
  // Bullet points shown in the detail view when an experience is clicked.
  highlights?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Sky Social",
    role: "Founder, Social & Digital studio",
    period: "Feb 2025 — Present",
    location: "Remote",
    description:
      "Sky Social is the studio I founded to help brands, mostly freelancers and SMEs, grow on social media and online. I take projects from the first brief to delivery: understanding the client's need, shaping the editorial line, producing content and campaigns, and building or updating their website when needed. It's my closest parallel to agency work, where editorial thinking, creativity and client relationship make or break the result.",
    tags: ["Social", "Content", "Client service", "Web"],
    highlights: [
      "Client-service approach: understand the brief, scope the work, define deliverables",
      "Social media strategy, content production and campaigns for several brands",
      "Example: organised a client's Valentine's Day event, ran the social strategy to drive sign-ups, then built the website",
      "Coordinate creative partners (designers, photographers) and the production calendar",
    ],
  },
  {
    company: "Accenture",
    role: "Social Media & Communication, Apprenticeship",
    period: "Aug 2024 — Present",
    location: "Paris, France",
    description:
      "At Accenture, I run the social media (Instagram and LinkedIn) of AFD.TECH (part of Accenture), a recently integrated subsidiary. I own the editorial calendar, produce and supervise content (posts, videos, campaigns), keep a constant watch on trends and formats, and read performance to sharpen the next round. On top of that, I write and send the monthly newsletter and email campaigns via Mailjet, lead influencer partnerships, and coordinate internal events end to end, including a gathering of 750 employees.",
    tags: ["Social", "Content", "Editorial", "Influencer", "Events"],
    highlights: [
      "Run Instagram & LinkedIn for AFD.TECH (part of Accenture), across 8 sites in France and Morocco",
      "Own the editorial calendar; produce and supervise content (posts, videos, campaigns)",
      "Constant trend watch; read performance to sharpen the next round",
      "Write and send the monthly newsletter and email campaigns via Mailjet",
      "Lead influencer partnerships (Twitch creator, Paralympic medalist)",
      "Coordinate 35+ events end to end; largest gathering: 750 employees; budgets €50K–€100K",
    ],
  },
  {
    company: "Epana Official",
    role: "Founder, Premium Concept",
    period: "Dec 2023 — Jan 2025",
    location: "Paris, France",
    description:
      "Epana is a premium ready-to-wear concept for tall women that I developed end to end during my Bachelor in the United States. I led the business plan and brand strategy, defined the brand identity and negotiated with suppliers, co-designed the collections with my designer and built the brand website. The project was selected for ISC Paris's startup incubator, and is currently paused while I focus on my studies and experience, with plans to relaunch.",
    tags: ["Brand", "Concept", "Strategy"],
    highlights: [
      "Premium ready-to-wear concept for tall women, developed end to end",
      "Business plan and brand strategy",
      "Brand identity and supplier negotiations",
      "Collections co-designed with my designer; built the brand website",
      "Selected for ISC Paris's startup incubator",
      "Currently paused to focus on studies and experience, with plans to relaunch",
    ],
  },
  {
    company: "DpointGroup",
    role: "Digital Communication & Events Assistant",
    period: "Jan 2023 — Jun 2023",
    location: "Barcelona, Spain",
    description:
      "Six-month international experience in a Spanish-speaking environment. Designed digital communication strategies, organised client events, and analysed campaign performance.",
    tags: ["Events", "Analytics", "International"],
    highlights: [
      "Six-month international experience in a Spanish-speaking environment",
      "Designed digital communication strategies",
      "Organised client events",
      "Analysed campaign performance",
    ],
  },
  {
    company: "Bulleiit Startup",
    role: "Community Manager & Business Developer",
    period: "Jun 2022 — Apr 2023",
    location: "Paris, France",
    description:
      "Internship focused on community management and social media for an early-stage startup, with a business development side. It was my first hands-on contact with animating a community, producing content and growing an audience day after day.",
    tags: ["Community", "Social", "Content", "Growth"],
    highlights: [
      "Community management and social media for the startup",
      "Content production and daily audience growth",
      "Client and prospect relationships (business development)",
      "Early-stage startup environment",
    ],
  },
];

export type WorkCategory =
  | "Email & Newsletters"
  | "Event organized & Social media"
  | "Photo & Video"
  | "Pitch & Campaign Decks";

export type WorkItem = {
  id: string;
  category: WorkCategory;
  title: string;
  subtitle?: string;
  // Drop your image at this path (see README for the full image list).
  src: string;
  alt: string;
  // Aspect hint for the grid: "tall" | "wide" | "square"
  aspect?: "tall" | "wide" | "square";
  // If set, clicking the item opens this URL in a new tab (e.g. a social post)
  // instead of the lightbox.
  href?: string;
  // Badge style for linked items: "video" shows a play button, "post" an arrow.
  linkType?: "video" | "post";
  // A few lines shown under the title when the image is opened full screen.
  description?: string;
  // Placeholder slot waiting for your real media (hidden in production).
  placeholder?: boolean;
};

// Order of the filter tabs in Selected work.
export const workCategories: WorkCategory[] = [
  "Event organized & Social media",
  "Photo & Video",
  "Email & Newsletters",
  "Pitch & Campaign Decks",
];

// Display order = order in "All": social & video first, then Photo & Video,
// then email (kept to three pieces).
export const workItems: WorkItem[] = [
  // ------ Social media & event videos ------
  {
    id: "video-techdays",
    category: "Event organized & Social media",
    title: "TECH_DAYS event video",
    subtitle: "Watch on LinkedIn",
    src: "/images/work/social/video-techdays.jpg",
    alt: "TECH_DAYS event video post",
    aspect: "wide",
    href: "https://www.linkedin.com/posts/afd-technologies_techdays-afdtech-accenture-activity-7452298867443855360-7ieb",
    linkType: "video",
  },
  {
    id: "video-sfa2025",
    category: "Event organized & Social media",
    title: "End-of-year party in Paris",
    subtitle: "Watch on Instagram",
    src: "/images/work/social/video-SFA2025.jpg",
    alt: "End-of-year party event video",
    aspect: "wide",
    href: "https://www.instagram.com/reel/DSUn2JKEom2/",
    linkType: "video",
  },
  {
    id: "social-02",
    category: "Event organized & Social media",
    title: "Instagram carousel",
    subtitle: "View on Instagram",
    src: "/images/work/social/social-02.png",
    alt: "Instagram carousel preview",
    aspect: "tall",
    href: "https://www.instagram.com/p/DPi18P0jTdx/",
    linkType: "post",
  },

  // ------ Photo & Video (placeholders — replace with your shoots & videos) ------
  {
    id: "photo-shoot-01",
    category: "Photo & Video",
    title: "[Placeholder] Photo shoot title",
    subtitle: "Art direction & shooting",
    // Drop a 4:5 photo (1600 × 2000 px) at this path, then remove `placeholder`.
    src: "/images/work/photo/shoot-01.jpg",
    alt: "Photo from a shoot directed by Meryne",
    aspect: "tall",
    description:
      "[Placeholder] Two lines on the shoot: brand or client, the brief, your role (concept, styling, shooting, editing) and where the photos were used.",
    placeholder: true,
  },
  {
    id: "facecam-01",
    category: "Photo & Video",
    title: "[Placeholder] Face-to-camera video",
    subtitle: "Watch on Instagram",
    // Thumbnail: a 4:5 still from the video (1600 × 2000 px).
    src: "/images/work/video/facecam-01.jpg",
    alt: "Meryne speaking to camera",
    aspect: "tall",
    // Paste the Instagram reel URL here.
    href: "",
    linkType: "video",
    placeholder: true,
  },
  {
    id: "photo-shoot-02",
    category: "Photo & Video",
    title: "[Placeholder] Photo shoot title",
    subtitle: "Art direction & shooting",
    src: "/images/work/photo/shoot-02.jpg",
    alt: "Photo from a shoot directed by Meryne",
    aspect: "tall",
    description:
      "[Placeholder] Two lines on the shoot: brand or client, the brief, your role and where the photos were used.",
    placeholder: true,
  },
  {
    id: "facecam-02",
    category: "Photo & Video",
    title: "[Placeholder] Face-to-camera video",
    subtitle: "Watch on LinkedIn",
    src: "/images/work/video/facecam-02.jpg",
    alt: "Meryne speaking to camera",
    aspect: "tall",
    // Paste the LinkedIn post URL here.
    href: "",
    linkType: "video",
    placeholder: true,
  },

  // ------ Email & Newsletters ------
  {
    id: "newsletter",
    category: "Email & Newsletters",
    title: "Monthly newsletter",
    subtitle: "Events recap & what's coming",
    src: "/images/work/email/newsletter.png",
    alt: "Monthly newsletter preview",
    aspect: "tall",
    description:
      "The monthly newsletter sent to Accenture teams: a recap of last month's events and a preview of what's coming this month. Designed, written and sent via Mailjet.",
  },
  {
    id: "email-01",
    category: "Email & Newsletters",
    title: "Chess tournament announcement",
    subtitle: "Event mailing",
    src: "/images/work/email/email-01.png",
    alt: "Chess tournament mailing preview",
    aspect: "tall",
    description:
      "Mailing announcing the upcoming chess tournament: concept, layout and copy, built to drive registrations.",
  },
  {
    id: "email-02",
    category: "Email & Newsletters",
    title: "TECH_DAYS event announcement",
    subtitle: "Event mailing",
    src: "/images/work/email/email-02.png",
    alt: "TECH_DAYS mailing preview",
    aspect: "tall",
    description:
      "Mailing announcing the 4th edition of TECH_DAYS, an internal AFD.TECH (Accenture) event. Editorial design and copywriting, sent via Mailjet.",
  },
];

// Pieces taken out of Selected work to rebalance it. Not displayed; move an
// item back into `workItems` to show it again.
export const archivedWorkItems: WorkItem[] = [
  {
    id: "email-03",
    category: "Email & Newsletters",
    title: "Valentine's shooting event",
    subtitle: "Sky Social client",
    src: "/images/work/email/email-03.png",
    alt: "Valentine's shooting mailing preview",
    aspect: "tall",
    description:
      "For a Sky Social client, I organised a Valentine's Day event, a women's photo shoot, ran the social media strategy to drive sign-ups, and later built their website.",
  },
  {
    id: "email-04",
    category: "Email & Newsletters",
    title: "Sports activities newsletter",
    subtitle: "June lineup, Accenture",
    src: "/images/work/email/email-04.png",
    alt: "Sports activities newsletter preview",
    aspect: "tall",
    description:
      "Newsletter announcing the sports activities coming up in June for Accenture colleagues: climbing, pilates, yoga, boxing and running.",
  },
];

// ---------------------------------------------------------------------------
// International — Sky Social in Gabon, presented as a case study.
// Everything marked [Placeholder] / `placeholder: true` is waiting for your
// real text and media. Placeholders show locally and on Vercel previews but
// are hidden on the production site (see src/lib/placeholders.ts): replace
// the content, then delete the `placeholder: true` line.
// ---------------------------------------------------------------------------

export type CaseMedia =
  | {
      kind: "image";
      src: string;
      alt: string;
      // "landscape" (16:9) media take the full gallery width; default is a 4:5 portrait.
      orientation?: "portrait" | "landscape";
      placeholder?: boolean;
    }
  | {
      kind: "video";
      // Still image shown before playing (a frame from the video). Optional
      // for an MP4 file: its first frame is used when left out.
      poster?: string;
      alt: string;
      orientation?: "portrait" | "landscape";
      // Either a link to the video on Instagram / LinkedIn / YouTube…
      href?: string;
      // …or an MP4 file in /public/videos (keep it under 10 MB).
      file?: string;
      placeholder?: boolean;
    };

export type InternationalProject = {
  id: string;
  client: string;
  title: string;
  summary: string;
  deliverables: string[];
  // Large opening visual, shown full width.
  cover: CaseMedia;
  gallery: CaseMedia[];
  placeholder?: boolean;
};

export const international = {
  context:
    "[Placeholder] Two or three sentences of context: since when Sky Social has been working in Gabon, for what kind of clients (public institutions, elected officials, private clients), and what you handle on site, from event communication to photo and video coverage and social media recaps.",
  // On-the-ground portrait shown next to the key facts.
  portrait: {
    src: "/images/international/behind-the-scenes.jpg",
    alt: "Meryne setting up a handheld gimbal camera before an event in Gabon",
    caption: "Behind the scenes, on site in Gabon.",
  },
  facts: [
    { label: "Studio", value: "Sky Social" },
    { label: "Country", value: "Gabon" },
    { label: "Since", value: "[Placeholder] 2025" },
    { label: "Role", value: "[Placeholder] Founder, content & coverage" },
  ],
  projects: [
    {
      id: "cdc",
      client: "Caisse des Dépôts et Consignations",
      title: "Event communication & coverage",
      summary:
        "[Placeholder] The brief, the events covered, your role before, during and after each event (communication plan, on-site photo and video capture, editing, publication) and one result if you have it.",
      deliverables: [
        "[Placeholder] Event communication plan",
        "[Placeholder] Photo & video coverage on site",
        "[Placeholder] Social media recap content",
      ],
      cover: {
        kind: "image",
        src: "/images/international/cdc/cover.jpg",
        alt: "Panel of three speakers on stage at the Caisse des Dépôts et Consignations event",
      },
      gallery: [
        {
          kind: "image",
          src: "/images/international/cdc/photo-01.jpg",
          alt: "Speaker at the lectern during the Caisse des Dépôts et Consignations event",
          orientation: "landscape",
        },
        {
          kind: "video",
          file: "/videos/cdc-event.mp4",
          alt: "Video captured at the Caisse des Dépôts et Consignations event",
          orientation: "landscape",
        },
      ],
      placeholder: true,
    },
    {
      id: "senate",
      client: "Senators",
      title: "Parliamentary reports",
      summary:
        "[Placeholder] What these reports are, who they were for, how you captured and turned parliamentary work into content (photo, video, written recap) and where it was published.",
      deliverables: [
        "[Placeholder] Coverage of parliamentary sessions",
        "[Placeholder] Written & video reports",
        "[Placeholder] Publication on the senators' channels",
      ],
      cover: {
        kind: "image",
        src: "/images/international/senate/cover.jpg",
        alt: "Senators at the head table during a parliamentary report meeting",
      },
      gallery: [
        {
          kind: "image",
          src: "/images/international/senate/photo-01.jpg",
          alt: "Audience listening during the parliamentary report meeting",
          orientation: "landscape",
        },
        {
          // The 47-second video: paste its Instagram / LinkedIn / YouTube
          // link in `href` and a still at video-poster.jpg, then remove
          // `placeholder`.
          kind: "video",
          poster: "/images/international/senate/video-poster.jpg",
          alt: "Parliamentary report video",
          href: "",
          orientation: "landscape",
          placeholder: true,
        },
      ],
      placeholder: true,
    },
    {
      id: "feg",
      client: "FEG",
      title: "[Placeholder] Event title",
      summary:
        "[Placeholder] What the event was, who organised it, what you covered on site (panels, speakers, audience) and what you delivered afterwards.",
      deliverables: [
        "[Placeholder] Photo coverage of the panels",
        "[Placeholder] Video capture",
        "[Placeholder] Social media recap content",
      ],
      cover: {
        kind: "image",
        src: "/images/international/feg/cover.jpg",
        alt: "Panel of speakers on stage in front of a large audience",
      },
      gallery: [
        { kind: "image", src: "/images/international/feg/photo-01.jpg", alt: "FEG event photo 1", placeholder: true },
        { kind: "image", src: "/images/international/feg/photo-02.jpg", alt: "FEG event photo 2", placeholder: true },
      ],
      placeholder: true,
    },
    {
      id: "private-events",
      client: "Private clients",
      title: "Private events",
      summary:
        "[Placeholder] The kind of private events (weddings, celebrations, brand evenings…), what you delivered and how the content was used afterwards.",
      deliverables: [
        "[Placeholder] Photo & video capture",
        "[Placeholder] Same-day social media content",
        "[Placeholder] Edited aftermovie",
      ],
      cover: {
        kind: "image",
        src: "/images/international/private-events/cover.jpg",
        alt: "Private event in Gabon",
        placeholder: true,
      },
      gallery: [
        { kind: "image", src: "/images/international/private-events/photo-01.jpg", alt: "Private event photo 1", placeholder: true },
        { kind: "image", src: "/images/international/private-events/photo-02.jpg", alt: "Private event photo 2", placeholder: true },
        {
          kind: "video",
          poster: "/images/international/private-events/video-poster.jpg",
          alt: "Private event video",
          href: "",
          placeholder: true,
        },
      ],
      placeholder: true,
    },
  ] as InternationalProject[],
};

export const education = [
  {
    school: "ISCOM Paris",
    degree: "MBA",
    field: "Digital Communication, Social Media & Community Management",
    period: "2026 — 2027",
    location: "Paris, France",
    courses: [
      "Content management & editorial strategy",
      "Social media & community management",
      "Influence marketing & social listening",
      "Social ads, traffic & digital performance",
      "Audio & video production",
      "CRM, UX/UI & retention",
    ],
  },
  {
    school: "ISC Paris",
    degree: "Master's Degree (Grande École)",
    field: "Marketing & Digital Communication",
    period: "2024 — 2026",
    location: "Paris, France",
    courses: [
      "Advanced Digital Marketing",
      "Social Media Strategy",
      "Influence Marketing",
      "Online & offline media planning",
      "Internal & external communication strategy",
    ],
  },
  {
    school: "University of California, Riverside",
    degree: "Bachelor in International Management",
    field: "Marketing track",
    period: "2023 — 2024",
    location: "California, USA",
    courses: [
      "Digital Marketing (SEO, SEM)",
      "Social Media Marketing (Meta Ads)",
      "International Marketing",
      "Video production for social media",
      "Project & process management",
      "Introduction to WordPress",
    ],
  },
];

export const skills = {
  tools: [
    "Microsoft Office Suite",
    "Keynote",
    "PowerPoint",
    "Notion",
    "Mailjet",
    "Meta Business Suite",
    "Google Ads",
    "Google Analytics (GA4)",
    "Canva",
    "Adobe Suite",
    "WordPress",
  ],
  expertise: [
    "Social media strategy & editorial calendar",
    "Content creation & production",
    "Community management & client relationship",
    "Trend watch & digital innovation",
    "Performance analysis (GA4, native insights)",
    "Copywriting & brand storytelling",
    "Email marketing",
    "Event planning",
  ],
  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "C1" },
    { name: "Spanish", level: "Beginner" },
    { name: "Korean", level: "A1" },
  ],
};

export const projects = [
  {
    name: "Sky Social",
    description: "Digital strategy & web design for ambitious brands.",
    url: "https://sky-social.fr",
  },
  {
    name: "Velmio CRM",
    description: "CRM platform with go-to-market and brand support.",
    url: "https://app.velmiocrm.com",
  },
  {
    name: "Veyra Studio",
    description: "Creative studio for visual identity and content design.",
    url: "https://veyrastudio.fr",
  },
  {
    name: "Bestievent",
    description: "Event-tech project making gatherings unforgettable.",
    url: "https://bestievent.com",
  },
  {
    name: "Photopya",
    description: "Photography web project.",
    url: "https://photopya.vercel.app/",
  },
];

export type LifeImage = {
  src: string;
  alt: string;
  label: string;
  // Shown when the photo is opened full screen.
  description?: string;
};

export const lifeOutsideWork = {
  intro:
    "Outside work I stay curious and hands-on: sport, piano, painting, pottery and cultural escapes all keep me balanced and inspired.",
  // Replace each photo by dropping a new one at the same path.
  images: [
    {
      src: "/images/life/piano.jpeg",
      alt: "Meryne playing the piano",
      label: "Piano",
      description:
        "I taught myself piano at six. It's still my favourite way to accompany my singing.",
    },
    {
      src: "/images/life/sport.jpg",
      alt: "Meryne training with her colleagues",
      label: "Running",
      description:
        "Training hard with my colleagues for the Enfant Sans Cancer race on 2 June in Paris, my very first race!",
    },
    {
      src: "/images/life/paint.jpeg",
      alt: "One of Meryne's paintings",
      label: "Painting",
      description:
        "One of my paintings. I picked up painting a year ago as a hobby and haven't stopped since.",
    },
    {
      src: "/images/life/pottery.jpeg",
      alt: "A decorative tray made by hand",
      label: "Pottery",
      description:
        "A decorative tray I made by hand. Crafts like this are real therapy for me.",
    },
    {
      src: "/images/life/musee.jpeg",
      alt: "Meryne at a museum",
      label: "Culture",
      description:
        "Cultural outings and museum visits keep me curious and feed my creativity.",
    },
    {
      src: "/images/life/travel.jpg",
      alt: "An elephant photographed in Thailand",
      label: "Travel",
      description:
        "An elephant I photographed in Thailand, in a sanctuary that rescues mistreated elephants. We could only watch from afar, unless they chose to come to us.",
    },
  ] as LifeImage[],
};

export const contact = {
  sub:
    "If you're hiring a Social Media Manager intern for six months from January 2027, or just want to chat about brands, content or trends, I'd love to hear from you.",
};
