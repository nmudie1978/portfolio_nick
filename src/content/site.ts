export const SITE_NAME = "Nick Mudie";
export const SITE_TITLE =
  "Nick Mudie — Telecom Architecture, BSS/OSS & Transformation";
export const SITE_DESCRIPTION =
  "Senior telecom architect with 25+ years across operators, vendors and managed-service environments. BSS/OSS architecture, transformation, service assurance and AI-native telecom operations.";

/**
 * Canonical production origin for metadata, canonical URLs, the sitemap
 * and robots.txt. Set NEXT_PUBLIC_SITE_URL once a custom domain exists;
 * until then Vercel's production URL is used, and localhost in development.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const KEYWORDS = [
  "Telecom Architecture",
  "BSS/OSS",
  "OSS Architecture",
  "BSS Architecture",
  "Telecom Transformation",
  "TM Forum",
  "ODA",
  "Order Management",
  "Service Assurance",
  "Telecom AI",
  "AI-native Telecom",
  "Telecom Operations",
  "Enterprise Architecture",
];

export interface NavItem {
  label: string;
  href: string;
}

export const PRIMARY_NAV: NavItem[] = [
  { label: "Expertise", href: "/expertise" },
  { label: "Experience", href: "/experience" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Thinking", href: "/thinking" },
  { label: "Academy", href: "/academy" },
  { label: "Contact", href: "/contact" },
];

export const SECONDARY_NAV: NavItem[] = [
  { label: "Architecture Playground", href: "/architecture" },
];
