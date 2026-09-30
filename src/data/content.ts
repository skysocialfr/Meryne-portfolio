/**
 * Central content file — every piece of text, link or image path the site
 * displays lives here. Edit this file to update the portfolio; you don't
 * need to touch the components.
 */

export const personal = {
  name: "Meryne Ndjeyi",
  role: "Social Media & Content Creator",
  location: "Paris, France",
  // Short status line (hero badge, contact "Status", footer).
  availability: "Disponible · Stage de 6 mois dès janvier 2027",
  // Full sentence version, reused in page metadata.
  availabilityLong:
    "Je recherche un stage de six mois à partir de janvier 2027.",
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
  title: "Meryne Ndjeyi — Social Media & Content Creator, stage de 6 mois dès janvier 2027",
  description:
    "Portfolio de Meryne Ndjeyi, Social Media & Content Creator : réseaux sociaux, vidéo et événementiel, bilingue français / anglais. Diplômée du Master Marketing & Communication Digitale de l'ISC Paris, je recherche un stage de six mois à partir de janvier 2027.",
  shareDescription:
    "Réseaux sociaux, vidéo et événementiel. Je recherche un stage de six mois à partir de janvier 2027.",
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
  { id: "about", label: "À propos", title: "Faire des marques des *histoires* à suivre.", nav: true },
  { id: "work", label: "Projets", title: "Un aperçu de ce que je crée, *au quotidien.*", nav: true },
  { id: "international", label: "International", title: "Sky Social, sur le terrain au *Gabon.*", nav: true },
  { id: "experience", label: "Expérience", title: "Trois ans à apprendre, créer, *construire.*", nav: true },
  { id: "education", label: "Formation", title: "Entre Paris et la *Californie.*" },
  { id: "skills", label: "Compétences", title: "Des outils affûtés en *conditions réelles.*" },
  { id: "projects", label: "Projets en ligne", title: "Lancés dans le *grand bain.*", nav: true },
  { id: "life", label: "Hors travail", title: "En dehors du *travail.*", nav: true },
  { id: "contact", label: "Contact", title: "Créons quelque chose de *mémorable.*" },
];

export const hero = {
  // Eyebrow above the big title.
  eyebrow: "Portfolio 2026",
  // Each word becomes a separately animated line. Keep 2 lines max for impact.
  title: ["Le marketing,", "en mouvement."],
  lead:
    "Bonjour ! Je suis Meryne, diplômée du Master Marketing & Communication Digitale de l'ISC Paris. Pendant deux ans, j'ai géré les réseaux sociaux d'AFD.TECH (part of Accenture), de la ligne éditoriale à l'analyse des performances, en plus d'une cinquantaine d'événements par an. En parallèle, je crée du contenu photo et vidéo pour des marques et des institutions, en France et à l'international. Je recherche un stage de six mois à partir de janvier 2027.",
  // Image shown on the right of the hero on desktop.
  // To replace: drop your portrait at /public/images/hero/portrait.jpg (3:4)
  // then change this path to "/images/hero/portrait.jpg".
  portrait: "/images/hero/portrait.jpg",
};

// Words that scroll horizontally across the page — the "movement" signature.
export const marqueeKeywords = [
  "Stratégie social media",
  "Calendrier éditorial",
  "Création de contenu",
  "Community management",
  "Veille tendances",
  "Storytelling de marque",
  "Copywriting",
  "Analyse de performance",
  "Relation client",
  "Bilingue FR / EN",
];

export const about = {
  body: [
    "Travailler dans les réseaux sociaux me passionne : décrypter un brief, construire une ligne éditoriale, produire du contenu, animer une communauté, puis analyser les résultats pour affiner la suite. Je fais une veille constante sur les formats, les tendances et les moments culturels pour que les marques restent pertinentes.",
    "En dehors du travail, le sport, le piano et la peinture me gardent curieuse et équilibrée : trois facettes d'un même goût pour le travail bien fait, la concentration et la progression.",
  ],
  // Optional secondary photo (candid / action shot).
  // To replace: drop a 4:5 image at /public/images/about/portrait.jpg
  // then change this path to "/images/about/portrait.jpg".
  image: "/images/about/portrait.jpeg",
  stats: [
    { value: "50+", label: "Événements corporate pilotés par an" },
    { value: "8", label: "Sites couverts en France et au Maroc" },
    { value: "2 ans", label: "À gérer les réseaux d'AFD.TECH" },
    { value: "3", label: "Pays : France, Espagne, Gabon" },
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
    role: "Fondatrice, agence digitale",
    period: "Févr. 2025 — Aujourd'hui",
    location: "France & Gabon",
    description:
      "Sky Social est l'agence digitale que j'ai fondée. Je gère les comptes Instagram, TikTok et LinkedIn de clients, du planning éditorial à l'analyse : scripts, tournages, montage, programmation et analytics. Au Gabon, j'assure la communication et la captation d'événements pour la Caisse des Dépôts et Consignations, les comptes rendus parlementaires de sénateurs et des événements privés.",
    tags: ["Social media", "Vidéo", "Contenu", "International"],
    highlights: [
      "Gestion des comptes Instagram, TikTok et LinkedIn de clients : planning éditorial, scripts, tournages, montage, programmation et analytics",
      "Gabon : communication et captation d'événements pour la Caisse des Dépôts et Consignations, comptes rendus parlementaires de sénateurs et événements privés",
    ],
  },
  {
    company: "Accenture",
    role: "Chargée de communication & événementiel, alternance",
    period: "Août 2024 — Sept. 2026",
    location: "Paris, France",
    description:
      "Pendant deux ans, j'ai géré les réseaux sociaux d'AFD.TECH (part of Accenture) sur LinkedIn et Instagram, de la ligne éditoriale à l'analyse des performances : concepts, rédaction, tournages et montage. En parallèle, j'ai piloté plus de 50 événements corporate par an, internes et externes, de la prise de brief à la livraison, et assuré la communication événementielle sur 8 sites en France et au Maroc.",
    tags: ["Social media", "Contenu", "Vidéo", "Événementiel", "Emailing"],
    highlights: [
      "Gestion des réseaux sociaux d'AFD.TECH (LinkedIn, Instagram) : ligne éditoriale, concepts, rédaction, tournages et montage",
      "Pilotage de plus de 50 événements corporate par an (internes et externes), de la prise de brief à la livraison : invitations, inscriptions, logistique",
      "Production photo et vidéo en support avec notre vidéaste",
      "Analyse des performances et reporting mensuel",
      "Communication événementielle : réseaux sociaux, newsletter et emailing sur 8 sites (France, Maroc)",
    ],
  },
  {
    company: "DpointGroup",
    role: "Chargée de projet événementiel & développement commercial",
    period: "Janv. 2023 — Juin 2023",
    location: "Barcelone, Espagne",
    description:
      "Six mois à Barcelone, en environnement hispanophone. J'ai prospecté des clients pour leur proposer la gestion de leurs événements, du pitch à la proposition commerciale, puis organisé ces événements de bout en bout, du brief à la coordination sur place, en assurant aussi la communication digitale et les réseaux sociaux.",
    tags: ["Événementiel", "Développement commercial", "International"],
    highlights: [
      "Prospection de clients pour leur proposer la gestion de leurs événements, du pitch à la proposition commerciale",
      "Organisation d'événements clients de bout en bout, du brief à la coordination sur place",
      "Communication digitale et réseaux sociaux en environnement hispanophone",
    ],
  },
  {
    company: "Bulleiit Startup",
    role: "Community manager & business developer",
    period: "Juin 2022 — Avr. 2023",
    location: "Paris, France",
    description:
      "Stage centré sur le community management et les réseaux sociaux d'une jeune startup, avec un volet développement commercial. Mon premier contact concret avec l'animation d'une communauté, la production de contenu et la croissance d'une audience, jour après jour.",
    tags: ["Communauté", "Social media", "Contenu", "Croissance"],
    highlights: [
      "Community management et réseaux sociaux de la startup",
      "Production de contenu et croissance quotidienne de l'audience",
      "Relation clients et prospects (développement commercial)",
      "Environnement de startup en phase de lancement",
    ],
  },
];

export type WorkCategory =
  | "Emailing & newsletters"
  | "Événements & réseaux sociaux"
  | "Pitchs & présentations";

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
  "Événements & réseaux sociaux",
  "Emailing & newsletters",
  "Pitchs & présentations",
];

// Display order = order in "Tout": social & video first, then email (kept
// to three pieces).
export const workItems: WorkItem[] = [
  // ------ Social media & event videos ------
  {
    id: "video-techdays",
    category: "Événements & réseaux sociaux",
    title: "Vidéo de l'événement TECH_DAYS",
    subtitle: "Voir sur LinkedIn",
    src: "/images/work/social/video-techdays.jpg",
    alt: "Publication vidéo de l'événement TECH_DAYS",
    aspect: "wide",
    href: "https://www.linkedin.com/posts/afd-technologies_techdays-afdtech-accenture-activity-7452298867443855360-7ieb",
    linkType: "video",
  },
  {
    id: "video-sfa2025",
    category: "Événements & réseaux sociaux",
    title: "Soirée de fin d'année à Paris",
    subtitle: "Voir sur Instagram",
    src: "/images/work/social/video-SFA2025.jpg",
    alt: "Vidéo de la soirée de fin d'année",
    aspect: "wide",
    href: "https://www.instagram.com/reel/DSUn2JKEom2/",
    linkType: "video",
  },
  {
    id: "social-02",
    category: "Événements & réseaux sociaux",
    title: "Carrousel Instagram",
    subtitle: "Voir sur Instagram",
    src: "/images/work/social/social-02.png",
    alt: "Aperçu du carrousel Instagram",
    aspect: "tall",
    href: "https://www.instagram.com/p/DPi18P0jTdx/",
    linkType: "post",
  },

  // ------ Email & Newsletters ------
  {
    id: "newsletter",
    category: "Emailing & newsletters",
    title: "Newsletter mensuelle",
    subtitle: "Récap des événements & à venir",
    src: "/images/work/email/newsletter.png",
    alt: "Aperçu de la newsletter mensuelle",
    aspect: "tall",
    description:
      "La newsletter mensuelle envoyée aux équipes d'Accenture : le récap des événements du mois passé et un aperçu de ceux à venir. Conçue, rédigée et envoyée via Mailjet.",
  },
  {
    id: "email-01",
    category: "Emailing & newsletters",
    title: "Annonce du tournoi d'échecs",
    subtitle: "Mailing événementiel",
    src: "/images/work/email/email-01.png",
    alt: "Aperçu du mailing du tournoi d'échecs",
    aspect: "tall",
    description:
      "Mailing annonçant le prochain tournoi d'échecs : concept, mise en page et rédaction, pensés pour générer des inscriptions.",
  },
  {
    id: "email-02",
    category: "Emailing & newsletters",
    title: "Annonce de l'événement TECH_DAYS",
    subtitle: "Mailing événementiel",
    src: "/images/work/email/email-02.png",
    alt: "Aperçu du mailing TECH_DAYS",
    aspect: "tall",
    description:
      "Mailing annonçant la 4e édition des TECH_DAYS, un événement interne d'AFD.TECH (Accenture). Design éditorial et rédaction, envoyé via Mailjet.",
  },
];

// Text shown under the Selected work grid: the photo & video work that
// can't all be published.
export const workNote = {
  title: "Photo & vidéo",
  body: "Au-delà de ces exemples, j'organise et je réalise des shootings photo et des vidéos, dont des formats où j'apparais face caméra, pour les marques que j'accompagne. Pour des raisons de confidentialité, je ne peux pas tout partager ici : je présente volontiers d'autres réalisations en entretien.",
};

// Pieces taken out of Selected work to rebalance it. Not displayed; move an
// item back into `workItems` to show it again.
export const archivedWorkItems: WorkItem[] = [
  {
    id: "email-03",
    category: "Emailing & newsletters",
    title: "Shooting de la Saint-Valentin",
    subtitle: "Cliente Sky Social",
    src: "/images/work/email/email-03.png",
    alt: "Aperçu du mailing du shooting de la Saint-Valentin",
    aspect: "tall",
    description:
      "Pour une cliente de Sky Social, j'ai organisé un événement de Saint-Valentin, un shooting photo entre femmes, mené la stratégie social media pour générer des inscriptions, puis créé son site.",
  },
  {
    id: "email-04",
    category: "Emailing & newsletters",
    title: "Newsletter des activités sportives",
    subtitle: "Programme de juin, Accenture",
    src: "/images/work/email/email-04.png",
    alt: "Aperçu de la newsletter des activités sportives",
    aspect: "tall",
    description:
      "Newsletter annonçant les activités sportives de juin pour les collaborateurs d'Accenture : escalade, pilates, yoga, boxe et course à pied.",
  },
];

// ---------------------------------------------------------------------------
// International — Sky Social in Gabon, presented as a case study.
// Everything marked [À compléter] / `placeholder: true` is waiting for your
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
    "Avec Sky Social, j'accompagne au Gabon des institutions, des élus et des organisations dans la communication et la captation de leurs événements. Sur place, je couvre les prises de parole, les panels et l'ambiance en photo et en vidéo.",
  facts: [
    { label: "Studio", value: "Sky Social" },
    { label: "Pays", value: "Gabon" },
    { label: "Période", value: "Août — sept. 2026" },
    { label: "Rôle", value: "Fondatrice, communication & captation" },
  ],
  projects: [
    {
      id: "cdc",
      client: "Caisse des Dépôts et Consignations",
      title: "Le Funel : communication & captation",
      summary:
        "Du 2 au 4 septembre 2026, la Caisse des Dépôts et Consignations a organisé le Funel, un événement consacré à un enjeu clé pour le pays : inciter les citoyens à épargner davantage et leur montrer comment s'y prendre, dans un contexte bancaire difficile. En présence du vice-président et de représentants du Maroc, j'ai assuré la communication et la captation de l'événement.",
      deliverables: [
        "Communication autour de l'événement",
        "Captation photo des panels et des prises de parole",
        "Captation vidéo",
      ],
      cover: {
        kind: "image",
        src: "/images/international/cdc/cover.jpg",
        alt: "Trois intervenants en panel sur scène, à l'événement de la Caisse des Dépôts et Consignations",
      },
      gallery: [
        {
          kind: "image",
          src: "/images/international/cdc/photo-01.jpg",
          alt: "Un intervenant au pupitre pendant l'événement de la Caisse des Dépôts et Consignations",
          orientation: "landscape",
        },
        {
          kind: "video",
          file: "/videos/cdc-event.mp4",
          alt: "Vidéo tournée à l'événement de la Caisse des Dépôts et Consignations",
          orientation: "landscape",
        },
      ],
    },
    {
      id: "senate",
      client: "Sénateurs",
      title: "Compte rendu parlementaire",
      summary:
        "Le 19 août 2026, des sénateurs ont rendu compte de leurs échanges avec les ministres lors de leur rendez-vous au Sénat. Ce compte rendu parlementaire s'adressait aux représentants de chaque quartier et aux maires, chargés ensuite de transmettre l'information. J'en ai assuré la captation photo et vidéo.",
      deliverables: [
        "Captation photo de la séance et du public",
        "Captation vidéo",
      ],
      cover: {
        kind: "image",
        src: "/images/international/senate/cover.jpg",
        alt: "Des sénateurs à la tribune pendant le compte rendu parlementaire",
      },
      gallery: [
        {
          kind: "image",
          src: "/images/international/senate/photo-01.jpg",
          alt: "Le public écoute le compte rendu parlementaire",
          orientation: "landscape",
        },
      ],
    },
    {
      id: "feg-udb",
      client: "FEG × UDB",
      title: "Panel « Projet de société et conjoncture économique »",
      summary:
        "Événement organisé conjointement par la FEG et l'Union Démocratique des Bâtisseurs (UDB), autour d'un panel consacré au projet de société du Président et à la conjoncture économique. J'ai couvert les prises de parole et l'ambiance de la salle en photo.",
      deliverables: ["Captation photo du panel et du public"],
      cover: {
        kind: "image",
        src: "/images/international/feg/cover.jpg",
        alt: "Panel d'intervenants sur scène devant le public, à l'événement FEG × UDB",
      },
      gallery: [],
    },
  ] as InternationalProject[],
};

export const education = [
  {
    school: "ISC Paris",
    degree: "Master (Programme Grande École)",
    field: "Marketing & communication digitale",
    period: "2024 — 2026",
    location: "Paris, France",
    courses: [
      "Marketing digital avancé",
      "Stratégie social media",
      "Marketing d'influence",
      "Media planning online & offline",
      "Stratégie de communication interne & externe",
      "Stratégies d'influence, relations presse & partenariats",
    ],
  },
  {
    school: "University of California, Riverside",
    degree: "Bachelor en management international",
    field: "Parcours marketing",
    period: "2023 — 2024",
    location: "Californie, États-Unis",
    courses: [
      "Marketing digital (SEO, SEM)",
      "Fondamentaux du management",
      "Marketing international",
      "Gestion de projet & de processus",
      "Social media marketing (Facebook Ads, Instagram Ads)",
      "Production vidéo pour les réseaux sociaux",
      "Initiation à WordPress",
    ],
  },
];

export const skills = {
  tools: [
    "Meta",
    "Google Analytics",
    "DaVinci Resolve",
    "CapCut",
    "Canva",
    "Mailjet",
    "WordPress",
    "Notion",
    "Teams, Zoom",
  ],
  expertise: [
    "Ligne éditoriale & création de contenu",
    "Community management",
    "Veille tendances & formats",
    "Création photo & vidéo",
    "Montage vidéo",
    "Analyse de performance & reporting",
    "Newsletter & emailing",
    "Organisation d'événements",
  ],
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "C1" },
    { name: "Espagnol", level: "Notions" },
    { name: "Coréen", level: "A1" },
  ],
};

export const projects = [
  {
    name: "Sky Social",
    description: "Stratégie digitale & web design pour les marques ambitieuses.",
    url: "https://sky-social.fr",
  },
  {
    name: "Velmio CRM",
    description: "Plateforme CRM, avec accompagnement go-to-market et marque.",
    url: "https://app.velmiocrm.com",
  },
  {
    name: "Veyra Studio",
    description: "Studio créatif d'identité visuelle et de design de contenu.",
    url: "https://veyrastudio.fr",
  },
  {
    name: "Bestievent",
    description: "Projet event-tech pour rendre chaque rassemblement inoubliable.",
    url: "https://bestievent.com",
  },
  {
    name: "Photopya",
    description: "Projet web autour de la photographie.",
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
    "En dehors du travail, je reste curieuse et manuelle : le sport, le piano, la peinture, la poterie et les sorties culturelles m'équilibrent et m'inspirent.",
  // Replace each photo by dropping a new one at the same path.
  images: [
    {
      src: "/images/life/piano.jpeg",
      alt: "Meryne joue du piano",
      label: "Piano",
      description:
        "J'ai appris le piano seule à six ans. C'est toujours ma façon préférée d'accompagner ma voix.",
    },
    {
      src: "/images/life/sport.jpg",
      alt: "Meryne à l'entraînement avec ses collègues",
      label: "Course à pied",
      description:
        "Entraînement intensif avec mes collègues pour la course Enfant Sans Cancer du 2 juin à Paris, ma toute première course !",
    },
    {
      src: "/images/life/paint.jpeg",
      alt: "Une peinture de Meryne",
      label: "Peinture",
      description:
        "Une de mes peintures. J'ai commencé la peinture il y a un an, en loisir, et je ne me suis plus arrêtée.",
    },
    {
      src: "/images/life/pottery.jpeg",
      alt: "Un vide-poche décoratif fait main",
      label: "Poterie",
      description:
        "Un vide-poche décoratif fait de mes mains. Ce genre d'activité manuelle est une vraie thérapie pour moi.",
    },
    {
      src: "/images/life/musee.jpeg",
      alt: "Meryne au musée",
      label: "Culture",
      description:
        "Les sorties culturelles et les musées entretiennent ma curiosité et nourrissent ma créativité.",
    },
    {
      src: "/images/life/travel.jpg",
      alt: "Un éléphant photographié en Thaïlande",
      label: "Voyage",
      description:
        "Un éléphant que j'ai photographié en Thaïlande, dans un sanctuaire qui recueille des éléphants maltraités. On ne pouvait les observer que de loin, sauf s'ils choisissaient de venir vers nous.",
    },
  ] as LifeImage[],
};

export const contact = {
  sub:
    "Vous recherchez une stagiaire en social media et création de contenu pour six mois à partir de janvier 2027, ou vous voulez simplement parler marques, contenus ou tendances ? Écrivez-moi.",
};
