/**
 * All site copy lives here so the components stay purely structural.
 * Text is carried over verbatim from the original single-file site.
 */

export const site = {
  name: "Paris Diaz",
  email: "parisdiaz719@gmail.com",
  github: "https://github.com/parisdiaz19",
  linkedin: "https://www.linkedin.com/in/parisdiaz/",
  location: "Hackensack, NJ · NYC",
  copyrightYear: 2026,
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
];

export const hero = {
  // The headline is split into three parts so <em> can wrap the emphasised word.
  headlineBefore: "I make the front end the part nobody has to ",
  headlineEmphasis: "worry about",
  headlineAfter: ".",
  sub: "I used to do that with a violin, professionally. These days it's React and TypeScript: five years across agency work and high-traffic consumer products, currently at Nespresso USA, mostly on design systems, motion, and making the accessible path the default one.",
  primaryCta: "Get in touch",
  secondaryCta: "See selected work",
};

export const marqueeItems = [
  "React",
  "TypeScript",
  "GSAP",
  "Design Systems",
  "styled-components",
  "NX Monorepos",
  "Accessibility",
  "Vite",
  "Testing Library",
  "E-commerce",
];

export interface CaseStudy {
  /** Two lines shown in the left column, e.g. client and discipline. */
  kicker: [string, string];
  title: string;
  body: string;
  tags: string[];
  /** Public page where the work can be seen in production. */
  link?: { href: string; label: string };
  /** Short muted looping clip shown under the write-up. Files live in public/media. */
  media?: CaseStudyMedia;
}

export interface CaseStudyMedia {
  /** Path relative to public/, e.g. "media/vertuo-world.mp4" */
  src: string;
  /** Optional still frame shown before playback and for reduced-motion users. */
  poster?: string;
  /** Plain-language description for screen readers. */
  alt: string;
}

export const caseStudies: CaseStudy[] = [
  {
    kicker: ["Nespresso USA", "Motion & interaction"],
    title: "Vertuo World",
    body: "Nespresso's immersive showcase for the Vertuo system. I built its centerpiece, the Machine Discovery carousel: a winged carousel of compact machine cards where any slide morphs into a fullscreen detail view using GSAP Flip, shipped with a custom Safari scroll-restoration fix and full keyboard support. I also assisted with the Hero and collaboration section of the page.",
    tags: [
      "React",
      "TypeScript",
      "GSAP",
      "Design Architecture",
      "Accessibility",
    ],
    link: {
      href: "https://www.nespresso.com/us/en/explore-vertuo-technology",
      label: "See it live on nespresso.com",
    },
    media: {
      src: "media/vertuo-world.mp4",
      poster: "media/vertuo-world.jpg",
      alt: "Screen recording of the Machine Discovery carousel in Vertuo World.",
    },
  },
  {
    kicker: ["Nespresso USA", "Product architecture"],
    title: "QuickView Tray System",
    body: "Built a provider-driven quick-view tray that lets shoppers configure products — colors, images, accessories — without leaving the listing page. Context-based architecture with composable sub-components that other teams extended without touching core logic.",
    tags: [
      "React",
      "TypeScript",
      "React Context",
      "Compound components",
      "E-commerce UX",
    ],
    link: {
      href: "https://www.nespresso.com/us/en/vertuo-coffee-machines",
      label: "See it live on the machine listing page",
    },
    media: {
      src: "media/machine-listing-page.mp4",
      poster: "media/machine-listing-page.jpg",
      alt: "Screen recording of the QuickView tray on the Nespresso machine listing page.",
    },
  },
  {
    kicker: ["Design system", "Platform work"],
    title: "Design-system core contributions",
    body: "Ongoing contributor to an internal design system used across every Nespresso US storefront app. Refactored the Typography component to support responsive prop arrays while resolving CSS cascade bugs, and built a discriminated-union color gate that enforces valid palette usage at compile time.",
    tags: ["TypeScript", "styled-components", "API design", "NX monorepo"],
  },
  {
    kicker: ["Nespresso USA", "Feature architecture"],
    title: "Bundle builder",
    body: "Architected a configurable product-bundle experience: URL-parameter schema with a robust parser, context-driven state design, and a documented architecture that made the feature shareable across markets.",
    tags: ["Architecture", "React", "URL state"],
  },
  {
    kicker: ["Platform & SEO", "Tooling"],
    title: "Structured data & developer tooling",
    body: "Built a JSON-LD structured-data module with shared utilities and dual ESM/UMD builds for legacy integration, plus structured-data hooks used across multiple app types. Separately automated the team's weekly release PRs across five apps with a fault-tolerant shell pipeline.",
    tags: ["SEO", "Build tooling", "Automation"],
  },
];

export interface SkillGroup {
  heading: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    heading: "Core",
    items: [
      "React/TypeScript",
      "React Context",
      "styled-components / CSS architecture",
      "Vite, NX monorepos",
      "Design systems & component APIs",
      "Violin!",
    ],
  },
  {
    heading: "Craft",
    items: [
      "GSAP & interaction design",
      "Accessibility (ARIA patterns)",
      "Testing (Jest, Testing Library)",
      "Performance & SEO/AEO/GEO",
      "Design Architecture",
    ],
  },
  {
    heading: "Context",
    items: [
      "High-traffic e-commerce",
      "Multi-app monorepo delivery",
      "Cross-team platform work",
      "CI/CD & release automation",
    ],
  },
];

export interface Job {
  role: string;
  org: string;
  bullets: string[];
}

export const jobs: Job[] = [
  {
    role: "Frontend Software Engineer",
    org: "Nespresso USA (Nestlé) — Digital Commerce Web Development · July 2024 – Present",
    bullets: [
      "Own frontend delivery across major storefront surfaces: coffee and machine listing pages, homepage, collaboration campaigns, and brand experiences.",
      "Core contributor to the internal design system powering every US storefront app — typography, color systems, hooks, and shared components.",
      "Ship motion-rich, accessible product experiences (GSAP animation systems, ARIA-compliant components) in a large NX monorepo.",
      "Built subscribe-and-save purchase flows, cart integrations, and structured-data systems that directly support revenue and SEO.",
    ],
  },
  {
    role: "Enterprise Web Developer",
    org: "Scorpion · Remote (Santa Clarita, CA) · Jan 2021 – Jun 2024",
    bullets: [
      "Spearheaded the development of responsive, functional, and visually appealing websites using modern technologies such as React.js and Next.js.",
      "Led initiatives to optimize website performance, implementing lazy loading, jQuery removal, JavaScript minification, and stylesheet optimization.",
      "Achieved a 45% reduction in page load times, reflected in improved Google PageSpeed scores.",
      "Implemented enhancements for the proprietary CMS and client websites, introducing modern frontend technologies, refining user interfaces, and optimizing workflows.",
      "Led close collaboration with the Integrations team to guarantee seamless integration of frontend components with various backend services.",
      "Communicated with designers and marketing managers on website concept, design, and structure to ensure the best results and performance for clients.",
    ],
  },
];

export const contact = {
  heading: "Let's talk",
  blurb:
    "I'm looking for a team that values engineering craft in the frontend — where polish, accessibility, and developer experience are features, not afterthoughts.",
};
