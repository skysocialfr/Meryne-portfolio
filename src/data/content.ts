/**
 * Central content file — every piece of text, link or image path the site
 * displays lives here. Edit this file to update the portfolio; you don't
 * need to touch the components.
 */

export const personal = {
  name: "Meryne Ndjeyi",
  role: "Marketing & Digital Communication",
  location: "Saint-Germain-en-Laye, France",
  availability: "Open to relocation — V.I.E ready",
  email: "Meryne.ndjeyi@edu.iscparis.com",
  phone: "+33 6 69 70 80 46",
  linkedin: "https://www.linkedin.com/in/meryne-ndjeyi-bb5169198",
  // Put your CV PDF here: /public/cv/meryne-ndjeyi-cv.pdf
  cvUrl: "/cv/meryne-ndjeyi-cv.pdf",
};

export const hero = {
  // Eyebrow above the big title.
  eyebrow: "Portfolio — 2026",
  // Each word becomes a separately animated line. Keep 2 lines max for impact.
  title: ["Marketing,", "in motion."],
  lead:
    "Hello — I'm Meryne, a Master's student in Marketing & Digital Communication at ISC Paris, currently on a work-study program at Accenture. I design digital strategies and bring brands to life across social media, email marketing and events. Entrepreneurial, curious and driven by a genuine passion for sport, I'm now looking for a V.I.E to take on an ambitious international challenge.",
  // Image shown on the right of the hero on desktop.
  // To replace: drop your portrait at /public/images/hero/portrait.jpg (3:4)
  // then change this path to "/images/hero/portrait.jpg".
  portrait: "/images/hero/portrait.svg",
};

// Words that scroll horizontally across the page — the "movement" signature.
export const marqueeKeywords = [
  "Brand strategy",
  "Social media",
  "Email marketing",
  "Events",
  "Storytelling",
  "Climbing",
  "Athletics",
  "Branding",
  "Content design",
  "Community",
];

export const about = {
  heading: "Where creativity meets strategy.",
  body: [
    "Curious, organised and driven, I love working where creativity meets strategy. Over the past two years I have built solid experience in digital marketing, communication and events — and learned the value of testing ideas, measuring them and improving fast.",
    "Beyond work, sport has always shaped who I am: a French Athletics Champion in shot put, I also discovered climbing during my years at a military high school. Progression, confidence and team spirit are values I live by.",
  ],
  // Optional secondary photo (candid / action shot).
  // To replace: drop a 4:5 image at /public/images/about/portrait.jpg
  // then change this path to "/images/about/portrait.jpg".
  image: "/images/about/portrait.svg",
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
    role: "Marketing & Events Manager — Apprenticeship",
    period: "Aug 2024 — Present",
    location: "Paris, France",
    description:
      "Manage digital communication and events for 8 sites across France and Morocco. Run social media (LinkedIn, Instagram), the monthly newsletter and email marketing via Mailjet. Lead influencer partnerships — including two-year collaborations with a Twitch creator and a Paralympic medalist. Organise sport & CSR activities (climbing, pilates, yoga, boxing, running) and company events, handling vendor negotiations and budgets from €50K to €100K.",
    tags: ["Social", "Email", "Events", "Influencer", "Budget"],
  },
  {
    company: "Sky Social",
    role: "Founder — Personal Project",
    period: "Feb 2025 — Present",
    location: "Remote",
    description:
      "Personal project launched out of a love of challenge. Designed websites, communication and email campaigns for a handful of companies — applying digital strategy, content creation and branding in real conditions.",
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
      "Internship combining business development and community management for an early-stage startup — first hands-on contact with growth, content and customer relationships.",
    tags: ["Growth", "Community"],
  },
];

export type WorkCategory = "Email & Newsletters" | "Social Media" | "Web";

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
};

export const workItems: WorkItem[] = [
  // ------ Email & Newsletters ------
  {
    id: "email-01",
    category: "Email & Newsletters",
    title: "Monthly newsletter — Accenture",
    subtitle: "Editorial design & copy",
    src: "/images/work/email/email-01.svg",
    alt: "Newsletter design preview",
    aspect: "tall",
  },
  {
    id: "email-02",
    category: "Email & Newsletters",
    title: "Event invitation campaign",
    subtitle: "Mailjet — open rate +32%",
    src: "/images/work/email/email-02.svg",
    alt: "Email campaign preview",
    aspect: "square",
  },
  {
    id: "email-03",
    category: "Email & Newsletters",
    title: "CSR program announcement",
    subtitle: "Internal communication",
    src: "/images/work/email/email-03.svg",
    alt: "CSR email preview",
    aspect: "wide",
  },

  // ------ Social Media ------
  {
    id: "social-01",
    category: "Social Media",
    title: "LinkedIn carousel — sport & people",
    subtitle: "Editorial system",
    src: "/images/work/social/social-01.svg",
    alt: "LinkedIn carousel preview",
    aspect: "square",
  },
  {
    id: "social-02",
    category: "Social Media",
    title: "Instagram launch campaign",
    subtitle: "Concept, art direction, copy",
    src: "/images/work/social/social-02.svg",
    alt: "Instagram post preview",
    aspect: "tall",
  },
  {
    id: "social-03",
    category: "Social Media",
    title: "Influencer takeover",
    subtitle: "Twitch creator partnership",
    src: "/images/work/social/social-03.svg",
    alt: "Influencer content preview",
    aspect: "wide",
  },
  {
    id: "social-04",
    category: "Social Media",
    title: "Brand visual system",
    subtitle: "Templates & guidelines",
    src: "/images/work/social/social-04.svg",
    alt: "Visual system preview",
    aspect: "square",
  },

  // ------ Web ------
  {
    id: "web-01",
    category: "Web",
    title: "Sky Social — agency site",
    subtitle: "sky-social.fr",
    src: "/images/work/web/web-01.svg",
    alt: "Sky Social website preview",
    aspect: "wide",
  },
  {
    id: "web-02",
    category: "Web",
    title: "Veyra Studio",
    subtitle: "veyrastudio.fr",
    src: "/images/work/web/web-02.svg",
    alt: "Veyra Studio website preview",
    aspect: "tall",
  },
  {
    id: "web-03",
    category: "Web",
    title: "Bestievent",
    subtitle: "bestievent.com",
    src: "/images/work/web/web-03.svg",
    alt: "Bestievent website preview",
    aspect: "square",
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
    description: "CRM platform — go-to-market and brand support.",
    url: "https://app.velmiocrm.com",
  },
  {
    name: "Veyra Studio",
    description: "Creative studio — visual identity and content design.",
    url: "https://veyrastudio.fr",
  },
  {
    name: "Bestievent",
    description: "Event-tech project — making gatherings unforgettable.",
    url: "https://bestievent.com",
  },
];

export const contact = {
  heading: "Let's build something memorable.",
  sub:
    "If you're hiring for a V.I.E in Digital Marketing & Communication — or just want to chat about brands, sport or climbing — I'd love to hear from you.",
};
