import type { Person } from "./types";

export const person: Person = {
  name: "Nick Mudie",
  role: "Telecom Architecture · BSS/OSS · Transformation · AI & Modern Telecom",
  pillars: ["Telecom Architecture", "BSS/OSS", "Transformation", "AI & Modern Telecom"],
  journey: [
    "Operations",
    "Service Assurance",
    "Architecture",
    "BSS/OSS",
    "Transformation",
    "AI / Modern Telecom",
  ],
  hero: {
    statement: "25+ years designing, transforming and operating telecom technology.",
    support:
      "Across operators, vendors and managed-service environments — from network operations and service assurance to BSS/OSS architecture, transformation and AI-native telecom operations.",
  },
  intro: [
    "I work at the point where telecom operations, architecture and transformation meet. My career started close to the network — in operations and service assurance — and moved through architecture into BSS/OSS, large-scale transformation and, more recently, AI-native operations and the infrastructure behind it.",
    "That path shapes how I design. Architecture that ignores how services are actually provisioned, monitored and repaired does not survive contact with a live operator. The systems I care most about — catalogs, order management, fulfilment, inventory and assurance — are the ones that decide whether a transformation is real or just a new front end on an old problem.",
  ],
  bio: [
    "Nick Mudie is a telecom architecture and transformation professional with more than twenty-five years inside operator technology. He started in OSS delivery and operations, built service assurance and observability capability for a national operator, and moved through architecture into BSS/OSS, greenfield transformation and hybrid cloud.",
    "His work spans Telia, Telenor, Vodafone, UPC and Marlink — operator, vendor and managed-service perspectives — and now centres on AI-native operations, modern telecom platforms and the BSS/OSS Academy, an independent body of work explaining how modern telecom architecture actually works.",
  ],
  differentiators: [
    "Has operated, provisioned and assured the systems he now designs — architecture grounded in live-operator reality.",
    "Delivered firsts: Europe's first triple-play provisioning platform, Telia's first E2E observability platform, Telia's first hybrid cloud.",
    "Greenfield and post-merger BSS/OSS transformation across countries, not only single-system replacement.",
    "Publishes the thinking: a vendor-neutral BSS/OSS Academy, architecture models and viewpoints that others use.",
  ],
  currentFocus:
    "AI-native and agentic operations, AI infrastructure as part of the telecom estate, and catalog-driven, ODA-aligned BSS/OSS transformation that survives real orders and real incidents.",
  quickFacts: [
    { value: "25+ years", label: "Telecom experience" },
    { value: "Five operators", label: "Telia · Telenor · Vodafone · UPC · Marlink" },
    { value: "BSS / OSS", label: "Architecture & transformation" },
    { value: "AI / Modern telecom", label: "Current focus" },
  ],
  // Set to a public path (e.g. "/portrait/nick-mudie.jpg") once a real
  // photograph is added under public/. Null renders the placeholder frame.
  portrait: null,
  links: {
    linkedin: "https://www.linkedin.com/in/nick-mudie-5a171b99",
    academy: "https://bssoss-academy.dev/",
    telcoLandscape: "https://bssoss-academy.dev/telco-landscape",
    // Set to a public address to enable email links across the site.
    email: null,
    // Set to a public CV path (e.g. "/Nick-Mudie-CV.pdf") once available.
    cv: null,
  },
};
