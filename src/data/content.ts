/**
 * Central content file — every piece of text, link or image path the site
 * displays lives here. Edit this file to update the portfolio; you don't
 * need to touch the components.
 */

export const personal = {
  name: "Meryne Ndjeyi",
  role: "Social media & contenu",
  location: "Saint-Germain-en-Laye, France",
  // Short status line (hero badge, contact "Status", footer).
  availability: "Disponible · Stage de 6 mois dès janvier 2027",
  // Full sentence version, reused in page metadata.
  availabilityLong:
    "Je recherche un stage de six mois en tant que Social Media Manager, à partir de janvier 2027.",
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
  title: "Meryne Ndjeyi — Social Media Manager, stage de 6 mois dès janvier 2027",
  description:
    "Portfolio de Meryne Ndjeyi — curieuse, créative et bilingue, je construis la présence des marques sur les réseaux sociaux, de la stratégie éditoriale et du contenu à la communauté, la veille et la performance. Je recherche un stage de six mois en tant que Social Media Manager, à partir de janvier 2027.",
  shareDescription:
    "Réseaux sociaux, stratégie éditoriale, contenu et communauté. Je recherche un stage de six mois en tant que Social Media Manager, à partir de janvier 2027.",
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
    "Bonjour ! Je suis Meryne, étudiante en Master Marketing & Communication Digitale à l'ISC Paris. Curieuse, créative et bilingue (français / anglais), je construis la présence des marques sur les réseaux sociaux, de la stratégie éditoriale et la production de contenu à la communauté, la veille et la performance. Je recherche un stage de six mois en tant que Social Media Manager, à partir de janvier 2027.",
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
    "Curieuse, créative et bilingue (français / anglais), j'aime le métier du social media : décrypter un brief, construire une ligne éditoriale, produire du contenu, animer une communauté, puis lire les chiffres pour affiner la suite. Je fais une veille constante sur les formats, les tendances et les moments culturels pour garder les marques pertinentes.",
    "En dehors du travail, le sport, le piano et la peinture me gardent curieuse et équilibrée : trois facettes d'un même goût pour le travail bien fait, la concentration et la progression.",
  ],
  // Optional secondary photo (candid / action shot).
  // To replace: drop a 4:5 image at /public/images/about/portrait.jpg
  // then change this path to "/images/about/portrait.jpg".
  image: "/images/about/portrait.jpeg",
  stats: [
    { value: "8", label: "Sites gérés en France et au Maroc" },
    { value: "100 K€", label: "Plus gros budget événementiel géré" },
    { value: "2 ans", label: "De partenariats influenceurs pilotés" },
    { value: "3", label: "Marques et produits lancés" },
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
    role: "Fondatrice, studio social media & digital",
    period: "Févr. 2025 — Aujourd'hui",
    location: "À distance",
    description:
      "Sky Social est le studio que j'ai fondé pour aider les marques, surtout des indépendants et des PME, à se développer sur les réseaux sociaux et en ligne. Je mène les projets du premier brief à la livraison : comprendre le besoin du client, construire la ligne éditoriale, produire contenus et campagnes, et créer ou refondre son site quand il le faut. C'est ce qui se rapproche le plus du travail en agence, où la réflexion éditoriale, la créativité et la relation client font toute la différence.",
    tags: ["Social media", "Contenu", "Relation client", "Web"],
    highlights: [
      "Approche orientée client : comprendre le brief, cadrer le projet, définir les livrables",
      "Stratégie social media, production de contenu et campagnes pour plusieurs marques",
      "Exemple : organisation de l'événement Saint-Valentin d'une cliente, stratégie social media pour générer des inscriptions, puis création de son site",
      "Coordination des partenaires créatifs (designers, photographes) et du calendrier de production",
    ],
  },
  {
    company: "Accenture",
    role: "Social media & communication, alternance",
    period: "Août 2024 — Aujourd'hui",
    location: "Paris, France",
    description:
      "Chez Accenture, je gère les réseaux sociaux (Instagram et LinkedIn) d'AFD.TECH (part of Accenture), une filiale récemment intégrée. Je pilote le calendrier éditorial, je produis et supervise les contenus (posts, vidéos, campagnes), je fais une veille constante sur les tendances et les formats, et j'analyse la performance pour affiner la suite. Je rédige et envoie aussi la newsletter mensuelle et les campagnes emailing via Mailjet, je pilote les partenariats influenceurs et je coordonne les événements internes de bout en bout, dont un rassemblement de 750 collaborateurs.",
    tags: ["Social media", "Contenu", "Éditorial", "Influence", "Événementiel"],
    highlights: [
      "Gestion d'Instagram et LinkedIn pour AFD.TECH (part of Accenture), sur 8 sites en France et au Maroc",
      "Pilotage du calendrier éditorial ; production et supervision des contenus (posts, vidéos, campagnes)",
      "Veille constante ; analyse de la performance pour affiner la suite",
      "Rédaction et envoi de la newsletter mensuelle et des campagnes emailing via Mailjet",
      "Pilotage de partenariats influenceurs (créateur Twitch, médaillé paralympique)",
      "Coordination de plus de 35 événements de bout en bout ; plus grand rassemblement : 750 collaborateurs ; budgets de 50 K€ à 100 K€",
    ],
  },
  {
    company: "Epana Official",
    role: "Fondatrice, concept premium",
    period: "Déc. 2023 — Janv. 2025",
    location: "Paris, France",
    description:
      "Epana est un concept de prêt-à-porter premium pour les femmes grandes, que j'ai développé de bout en bout pendant mon Bachelor aux États-Unis. J'ai mené le business plan et la stratégie de marque, défini l'identité de la marque et négocié avec les fournisseurs, co-créé les collections avec ma designer et construit le site de la marque. Le projet a été sélectionné par l'incubateur de startups de l'ISC Paris ; il est aujourd'hui en pause pendant que je me concentre sur mes études et mon expérience, avec l'envie de le relancer.",
    tags: ["Marque", "Concept", "Stratégie"],
    highlights: [
      "Concept de prêt-à-porter premium pour les femmes grandes, développé de bout en bout",
      "Business plan et stratégie de marque",
      "Identité de marque et négociations fournisseurs",
      "Collections co-créées avec ma designer ; création du site de la marque",
      "Sélectionné par l'incubateur de startups de l'ISC Paris",
      "En pause pour me concentrer sur mes études et mon expérience, avec l'envie de le relancer",
    ],
  },
  {
    company: "DpointGroup",
    role: "Assistante communication digitale & événementiel",
    period: "Janv. 2023 — Juin 2023",
    location: "Barcelone, Espagne",
    description:
      "Expérience internationale de six mois dans un environnement hispanophone. Conception de stratégies de communication digitale, organisation d'événements clients et analyse de la performance des campagnes.",
    tags: ["Événementiel", "Analyse", "International"],
    highlights: [
      "Expérience internationale de six mois dans un environnement hispanophone",
      "Conception de stratégies de communication digitale",
      "Organisation d'événements clients",
      "Analyse de la performance des campagnes",
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
  | "Photo & vidéo"
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
  "Photo & vidéo",
  "Emailing & newsletters",
  "Pitchs & présentations",
];

// Display order = order in "All": social & video first, then Photo & Video,
// then email (kept to three pieces).
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

  // ------ Photo & Video (placeholders — replace with your shoots & videos) ------
  {
    id: "photo-shoot-01",
    category: "Photo & vidéo",
    title: "[À compléter] Titre du shooting",
    subtitle: "Direction artistique & shooting",
    // Drop a 4:5 photo (1600 × 2000 px) at this path, then remove `placeholder`.
    src: "/images/work/photo/shoot-01.jpg",
    alt: "Photo d'un shooting dirigé par Meryne",
    aspect: "tall",
    description:
      "[À compléter] Deux lignes sur le shooting : marque ou client, le brief, ton rôle (concept, stylisme, prise de vue, retouche) et l'utilisation des photos.",
    placeholder: true,
  },
  {
    id: "facecam-01",
    category: "Photo & vidéo",
    title: "[À compléter] Vidéo face caméra",
    subtitle: "Voir sur Instagram",
    // Thumbnail: a 4:5 still from the video (1600 × 2000 px).
    src: "/images/work/video/facecam-01.jpg",
    alt: "Meryne face caméra",
    aspect: "tall",
    // Paste the Instagram reel URL here.
    href: "",
    linkType: "video",
    placeholder: true,
  },
  {
    id: "photo-shoot-02",
    category: "Photo & vidéo",
    title: "[À compléter] Titre du shooting",
    subtitle: "Direction artistique & shooting",
    src: "/images/work/photo/shoot-02.jpg",
    alt: "Photo d'un shooting dirigé par Meryne",
    aspect: "tall",
    description:
      "[À compléter] Deux lignes sur le shooting : marque ou client, le brief, ton rôle et l'utilisation des photos.",
    placeholder: true,
  },
  {
    id: "facecam-02",
    category: "Photo & vidéo",
    title: "[À compléter] Vidéo face caméra",
    subtitle: "Voir sur LinkedIn",
    src: "/images/work/video/facecam-02.jpg",
    alt: "Meryne face caméra",
    aspect: "tall",
    // Paste the LinkedIn post URL here.
    href: "",
    linkType: "video",
    placeholder: true,
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
    "Avec Sky Social, j'accompagne au Gabon des institutions, des élus et des clients privés dans la communication et la captation de leurs événements. Sur place, je couvre les prises de parole, les panels et l'ambiance en photo et en vidéo.",
  // On-the-ground portrait shown next to the key facts.
  portrait: {
    src: "/images/international/behind-the-scenes.jpg",
    alt: "Meryne prépare sa caméra stabilisée avant un événement au Gabon",
    caption: "Dans les coulisses, sur le terrain au Gabon.",
  },
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
      title: "Communication & captation d'événement",
      summary:
        "Du 2 au 4 septembre 2026, la Caisse des Dépôts et Consignations a organisé un événement consacré à un enjeu clé pour le pays : inciter les citoyens à épargner davantage et leur montrer comment s'y prendre, dans un contexte bancaire difficile. En présence du vice-président et de représentants du Maroc, j'ai assuré la communication et la captation de l'événement.",
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
        {
          // The 47-second video: paste its Instagram / LinkedIn / YouTube
          // link in `href` and a still at video-poster.jpg, then remove
          // `placeholder`.
          kind: "video",
          poster: "/images/international/senate/video-poster.jpg",
          alt: "Vidéo du compte rendu parlementaire",
          href: "",
          orientation: "landscape",
          placeholder: true,
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
      gallery: [
        { kind: "image", src: "/images/international/feg/photo-01.jpg", alt: "Photo de l'événement FEG × UDB", placeholder: true },
        { kind: "image", src: "/images/international/feg/photo-02.jpg", alt: "Photo de l'événement FEG × UDB", placeholder: true },
      ],
    },
    {
      id: "private-events",
      client: "Clients privés",
      title: "Événements privés",
      summary:
        "[À compléter] Le type d'événements privés (mariages, anniversaires, soirées de marque…), ce que tu as livré et comment les contenus ont été utilisés ensuite.",
      deliverables: [
        "[À compléter] Captation photo & vidéo",
        "[À compléter] Contenus réseaux sociaux le jour même",
        "[À compléter] Aftermovie monté",
      ],
      cover: {
        kind: "image",
        src: "/images/international/private-events/cover.jpg",
        alt: "Événement privé au Gabon",
        placeholder: true,
      },
      gallery: [
        { kind: "image", src: "/images/international/private-events/photo-01.jpg", alt: "Photo d'un événement privé", placeholder: true },
        { kind: "image", src: "/images/international/private-events/photo-02.jpg", alt: "Photo d'un événement privé", placeholder: true },
        {
          kind: "video",
          poster: "/images/international/private-events/video-poster.jpg",
          alt: "Vidéo d'un événement privé",
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
    field: "Communication digitale, social media & community management",
    period: "2026 — 2027",
    location: "Paris, France",
    courses: [
      "Social media content management & stratégie éditoriale",
      "Social media & community management",
      "Marketing d'influence & social listening",
      "Social ads, trafic & performance digitale",
      "Production audio & vidéo",
      "CRM, UX/UI & fidélisation",
    ],
  },
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
    ],
  },
  {
    school: "University of California, Riverside",
    degree: "Bachelor en management international",
    field: "Parcours marketing",
    period: "2023 — 2024",
    location: "Californie, États-Unis",
    courses: [
      "Marketing digital (SEO, SEA)",
      "Social media marketing (Meta Ads)",
      "Marketing international",
      "Production vidéo pour les réseaux sociaux",
      "Gestion de projet & de processus",
      "Initiation à WordPress",
    ],
  },
];

export const skills = {
  tools: [
    "Suite Microsoft Office",
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
    "Stratégie social media & calendrier éditorial",
    "Création & production de contenu",
    "Community management & relation client",
    "Veille tendances & innovation digitale",
    "Analyse de performance (GA4, statistiques natives)",
    "Copywriting & storytelling de marque",
    "Emailing",
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
    "Vous recherchez une stagiaire Social Media Manager pour six mois à partir de janvier 2027, ou vous voulez simplement parler marques, contenus ou tendances ? Écrivez-moi.",
};
