/**
 * All site copy lives here so the components stay purely structural.
 * Text is carried over verbatim from the original single-file site.
 */

export const site = {
  name: 'Paris [Lastname]',
  email: 'you@tsenta.com',
  github: 'https://github.com/yourhandle',
  linkedin: 'https://linkedin.com/in/yourhandle',
  location: 'Hackensack, NJ · NYC metro · Open to hybrid or remote',
  copyrightYear: 2026,
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  // The headline is split into three parts so <em> can wrap the emphasised word.
  headlineBefore: 'I build e-commerce interfaces that feel ',
  headlineEmphasis: 'engineered',
  headlineAfter: ', not assembled.',
  sub: 'Frontend engineer with deep experience in React, TypeScript, and design systems — currently shipping the storefront experiences for Nespresso USA. I care about the last 10%: motion that clarifies, accessibility that holds up, and component APIs other developers actually enjoy using.',
  primaryCta: 'Get in touch',
  secondaryCta: 'See selected work',
}

export const marqueeItems = [
  'React',
  'TypeScript',
  'GSAP',
  'Design Systems',
  'styled-components',
  'NX Monorepos',
  'Accessibility',
  'Vite',
  'Testing Library',
  'E-commerce',
]

export interface CaseStudy {
  /** Two lines shown in the left column, e.g. client and discipline. */
  kicker: [string, string]
  title: string
  body: string
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    kicker: ['Nespresso USA', 'Motion & interaction'],
    title: 'Machine Discovery carousel',
    body: 'Designed and built an immersive product-discovery experience for espresso machines: a winged carousel of compact machine cards where any slide morphs seamlessly into a fullscreen detail view using GSAP Flip. Shipped with a custom Safari scroll-restoration fix and full keyboard support.',
    tags: ['React', 'TypeScript', 'GSAP Flip', 'Accessibility'],
  },
  {
    kicker: ['Nespresso USA', 'Product architecture'],
    title: 'QuickView tray system',
    body: 'Built a provider-driven quick-view tray that lets shoppers configure products — colors, images, accessories — without leaving the listing page. Context-based architecture with composable sub-components that other teams extended without touching core logic.',
    tags: ['React Context', 'Compound components', 'E-commerce UX'],
  },
  {
    kicker: ['Design system', 'Platform work'],
    title: 'Design-system core contributions',
    body: 'Ongoing contributor to an internal design system used across every Nespresso US storefront app. Refactored the Typography component to support responsive prop arrays while resolving CSS cascade bugs, and built a discriminated-union color gate that enforces valid palette usage at compile time.',
    tags: ['TypeScript', 'styled-components', 'API design', 'NX monorepo'],
  },
  {
    kicker: ['Nespresso USA', 'Feature architecture'],
    title: 'Bundle builder',
    body: 'Architected a configurable product-bundle experience: URL-parameter schema with a robust parser, context-driven state design, and a documented architecture that made the feature shareable across markets.',
    tags: ['Architecture', 'React', 'URL state'],
  },
  {
    kicker: ['Platform & SEO', 'Tooling'],
    title: 'Structured data & developer tooling',
    body: "Built a JSON-LD structured-data module with shared utilities and dual ESM/UMD builds for legacy integration, plus structured-data hooks used across multiple app types. Separately automated the team's weekly release PRs across five apps with a fault-tolerant shell pipeline.",
    tags: ['SEO', 'Build tooling', 'Automation'],
  },
]

export interface SkillGroup {
  heading: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    heading: 'Core',
    items: [
      'React & TypeScript',
      'styled-components / CSS architecture',
      'Vite, NX monorepos',
      'Design systems & component APIs',
    ],
  },
  {
    heading: 'Craft',
    items: [
      'GSAP & interaction design',
      'Accessibility (ARIA patterns)',
      'Testing (Jest, Testing Library)',
      'Performance & SEO (JSON-LD)',
    ],
  },
  {
    heading: 'Context',
    items: [
      'High-traffic e-commerce',
      'Multi-app monorepo delivery',
      'Cross-team platform work',
      'CI/CD & release automation',
    ],
  },
]

export interface Job {
  role: string
  org: string
  bullets: string[]
}

export const jobs: Job[] = [
  {
    role: 'Frontend Developer',
    org: 'Nespresso USA (Nestlé) — Digital Commerce Web Development · [Year] – Present',
    bullets: [
      'Own frontend delivery across major storefront surfaces: coffee and machine listing pages, homepage, collaboration campaigns, and brand experiences.',
      'Core contributor to the internal design system powering every US storefront app — typography, color systems, hooks, and shared components.',
      'Ship motion-rich, accessible product experiences (GSAP animation systems, ARIA-compliant components) in a large NX monorepo.',
      'Built subscribe-and-save purchase flows, cart integrations, and structured-data systems that directly support revenue and SEO.',
    ],
  },
]

export const contact = {
  heading: "Let's talk",
  blurb: "I'm looking for a team that values engineering craft in the frontend — where polish, accessibility, and developer experience are features, not afterthoughts.",
}
