export const SITE_NAME = "Nick Mudie";
export const SITE_TITLE =
  "Nick Mudie — Telecom Architecture, BSS/OSS & Transformation";
export const SITE_DESCRIPTION =
  "Nick Mudie is a telecom architecture and transformation professional with 25+ years of experience across BSS/OSS, operations, service assurance, cloud, transformation and modern telecom technology.";

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

/**
 * Primary navigation. Paths are relative to a variant root and resolved
 * with `vhref()` so each variant stays inside its own tree.
 */
export const PRIMARY_NAV: NavItem[] = [
  { label: "Profile", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Achievements", href: "/achievements" },
  { label: "Recognition", href: "/recognition" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export const SECONDARY_NAV: NavItem[] = [
  { label: "BSS/OSS Academy", href: "/recognition#academy" },
];
