/**
 * Central content file — every piece of text, link or image path the site
 * displays lives here. Edit this file to update the portfolio; you don't
 * need to touch the components.
 */

export const personal = {
  name: "Meryne Ndjeyi",
  role: "Marketing & Digital Communication",
  location: "Saint-Germain-en-Laye, France",
  availability: "Open to work, V.I.E ready",
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
    "Hello ! I'm Meryne, a Master's student in Marketing & Digital Communication at ISC Paris, currently on an apprenticeship at Accenture France, and running Sky Social on the side as a social media & web project. I design digital strategies and bring brands to life across social media, email marketing and events. Entrepreneurial, curious and driven by a genuine passion for sport, I'm now looking for a V.I.E to take on an ambitious international challenge.",
  // Image shown on the right of the hero on desktop.
  // To replace: drop your portrait at /public/images/hero/portrait.jpg (3:4)
  // then change this path to "/images/hero/portrait.jpg".
  portrait: "/images/hero/portrait.jpg",
};

// Words that scroll horizontally across the page — the "movement" signature.
export const marqueeKeywords = [
  "Brand strategy",
  "Social media",
  "Email marketing",
  "Events",
  "Storytelling",
  "Web design",
  "Web development",
  "Branding",
  "Content design",
  "Community",
];

export const about = {
  heading: "Where creativity meets strategy.",
  body: [
    "Curious, organised and driven, I love working where creativity meets strategy. Over the past two years I have built solid experience in digital marketing, communication and events, and learned the value of testing ideas, measuring them and improving fast.",
    "Beyond work, sport has always shaped who I am: a French Athletics Champion in shot put, I also discovered climbing during my years at a military high school. Progression, confidence and team spirit are values I live by.",
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
};

export const experiences: Experience[] = [
  {
    company: "Accenture",
    role: "Marketing & Events Manager, Apprenticeship",
    period: "Aug 2024 — Present",
    location: "Paris, France",
    description:
      "Manage digital communication and events for 8 sites across France and Morocco. Run social media (LinkedIn, Instagram), the monthly newsletter and email marketing via Mailjet. Lead influencer partnerships, including two-year collaborations with a Twitch creator and a Paralympic medalist. Organise sport & CSR activities (climbing, pilates, yoga, boxing, running) and company events, handling vendor negotiations and budgets from €50K to €100K.",
    tags: ["Social", "Email", "Events", "Influencer", "Budget"],
  },
  {
    company: "Sky Social",
    role: "Founder, Personal Project",
    period: "Feb 2025 — Present",
    location: "Remote",
    description:
      "Personal project launched out of a love of challenge. Designed websites, communication and email campaigns for a handful of companies, applying digital strategy, content creation and branding in real conditions.",
    tags: ["Web", "Branding", "Strategy"],
  },
  {
    company: "Epana Official",
    role: "Founder & Brand Manager",
    period: "Dec 2023 — Jan 2025",
    location: "Paris, France",
    description:
      "Built a ready-to-wear brand for tall women across three collections. Defined the brand identity, designed the collections, and led digital marketing & branding end-to-end.",
    tags: ["Brand", "Product", "E-commerce"],
  },
  {
    company: "DpointGroup",
    role: "Digital Communication & Events Assistant",
    period: "Jan 2023 — Jun 2023",
    location: "Barcelona, Spain",
    description:
      "Six-month international experience in a Spanish-speaking environment. Designed digital communication strategies, organised client events, and analysed campaign performance.",
    tags: ["Events", "Analytics", "International"],
  },
  {
    company: "Bulleiit Startup",
    role: "Business Developer & Community Manager",
    period: "Jun 2022 — Apr 2023",
    location: "Paris, France",
    description:
      "Internship combining business development and community management for an early-stage startup, my first hands-on contact with growth, content and customer relationships.",
    tags: ["Growth", "Community"],
  },
];

export type WorkCategory = "Email & Newsletters" | "Event organized & Social media";

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
  },
  {
    id: "email-01",
    category: "Email & Newsletters",
    title: "Chess tournament announcement",
    subtitle: "Event mailing",
    src: "/images/work/email/email-01.png",
    alt: "Chess tournament mailing preview",
    aspect: "tall",
  },
  {
    id: "email-02",
    category: "Email & Newsletters",
    title: "TECH_DAYS event announcement",
    subtitle: "Event mailing",
    src: "/images/work/email/email-02.png",
    alt: "TECH_DAYS mailing preview",
    aspect: "tall",
  },
  {
    id: "email-03",
    category: "Email & Newsletters",
    title: "Valentine's shooting event",
    subtitle: "Sky Social client",
    src: "/images/work/email/email-03.png",
    alt: "Valentine's shooting mailing preview",
    aspect: "tall",
  },
  {
    id: "email-04",
    category: "Email & Newsletters",
    title: "Sports activities newsletter",
    subtitle: "June lineup, Accenture",
    src: "/images/work/email/email-04.png",
    alt: "Sports activities newsletter preview",
    aspect: "tall",
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
  },
  {
    school: "University of California, Riverside",
    degree: "Bachelor in International Management",
    field: "Marketing track",
    period: "2023 — 2024",
    location: "California, USA",
  },
];

export const skills = {
  tools: [
    "Meta Business Suite",
    "Google Ads",
    "Google Analytics (GA4)",
    "Mailjet",
    "Canva",
    "Adobe Suite",
    "WordPress",
    "Notion",
  ],
  expertise: [
    "Marketing strategy & branding",
    "Digital communication & social media",
    "Email marketing",
    "Event planning",
    "Data analysis",
    "Project management (Agile, Scrum)",
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
];

export type LifeImage = {
  src: string;
  alt: string;
  label: string;
  aspect: "tall" | "wide" | "square";
  // Grid span classes (mobile / desktop). See LifeOutsideWork.tsx.
  span: string;
};

export const lifeOutsideWork = {
  heading: "Life outside work.",
  intro:
    "Sport built my mindset: discipline, progress and team spirit. Off the field, I recharge at the piano and on the road.",
  // Replace each placeholder by dropping your photo at the same path.
  images: [
    {
      src: "/images/life/sport-01.svg",
      alt: "Meryne practising athletics",
      label: "Athletics",
      aspect: "wide",
      span: "col-span-2 md:col-span-3",
    },
    {
      src: "/images/life/piano.svg",
      alt: "Meryne at the piano",
      label: "Piano",
      aspect: "wide",
      span: "col-span-2 md:col-span-3",
    },
    {
      src: "/images/life/sport-02.svg",
      alt: "Sport moment",
      label: "Climbing",
      aspect: "tall",
      span: "col-span-1 md:col-span-2",
    },
    {
      src: "/images/life/sport-03.svg",
      alt: "Sport moment",
      label: "Sport",
      aspect: "tall",
      span: "col-span-1 md:col-span-2",
    },
    {
      src: "/images/life/travel.svg",
      alt: "Travel memory",
      label: "Travel",
      aspect: "tall",
      span: "col-span-2 md:col-span-2",
    },
  ] as LifeImage[],
};

export const contact = {
  heading: "Let's build something memorable.",
  sub:
    "If you're hiring for a V.I.E in Digital Marketing & Communication, or just want to chat about brands, sport or climbing, I'd love to hear from you.",
};
