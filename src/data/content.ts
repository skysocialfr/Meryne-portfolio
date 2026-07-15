/**
 * Central content file — every piece of text, link or image path the site
 * displays lives here. Edit this file to update the portfolio; you don't
 * need to touch the components.
 */

export const personal = {
  name: "Meryne Ndjeyi",
  role: "Social Media & Content",
  location: "Saint-Germain-en-Laye, France",
  availability: "Open to work, alternance from Sept 2026",
  email: "meryne.ndjeyi@outlook.com",
  linkedin: "https://www.linkedin.com/in/meryne-ndjeyi-bb5169198",
  // Put your CV PDF here: /public/cv/meryne-ndjeyi-cv.pdf
  cvUrl: "/cv/meryne-ndjeyi-cv.pdf",
};

export const hero = {
  // Eyebrow above the big title.
  eyebrow: "Portfolio 2026",
  // Each word becomes a separately animated line. Keep 2 lines max for impact.
  title: ["Marketing,", "in motion."],
  lead:
    "Hello! I'm Meryne, a Master's student in Marketing & Digital Communication at ISC Paris. Curious, creative and bilingual (French / English), I build brand presence on social media, from editorial strategy and content production to community, trend watch and performance. I'm currently looking for an alternance as a Social Media Manager, starting September 2026.",
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
  heading: "Turning brands into stories on social.",
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
};

export const workItems: WorkItem[] = [
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

  // ------ Social Media ------
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
  {
    id: "video-techdays",
    category: "Event organized & Social media",
    title: "TECH_DAYS event video",
    subtitle: "Watch on LinkedIn",
    src: "/images/work/social/video-techdays.jpg",
    alt: "TECH_DAYS event video post",
    aspect: "tall",
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
    aspect: "tall",
    href: "https://www.instagram.com/reel/DSUn2JKEom2/",
    linkType: "video",
  },
];

export const education = [
  {
    school: "ISC Paris",
    degree: "Master's Degree (Grande École)",
    field: "Marketing & Digital Communication",
    period: "2024 — 2026",
    location: "Paris, France",
    courses: [
      "Brand strategy",
      "Digital communication & social media",
      "Email marketing",
      "Data analysis (GA4)",
      "Event planning",
      "Project management (Agile & Scrum)",
    ],
  },
  {
    school: "University of California, Riverside",
    degree: "Bachelor in International Management",
    field: "Marketing track",
    period: "2023 — 2024",
    location: "California, USA",
    courses: [
      "Social media management",
      "Marketing strategy",
      "Market research",
      "Business plan",
      "Advertising campaign",
      "Brand & collection design",
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
  heading: "Life outside work.",
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
  heading: "Let's build something memorable.",
  sub:
    "If you're hiring an alternance Social Media Manager, or just want to chat about brands, content or trends, I'd love to hear from you.",
};
