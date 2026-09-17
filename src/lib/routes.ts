import type { CaseStudy } from "@/content/types";

/**
 * Content routes. Engagement case studies live under Achievements;
 * architecture patterns and viewpoints live under Recognition.
 */
export function caseStudyHref(study: Pick<CaseStudy, "slug" | "kind">) {
  return study.kind === "pattern" ? `/recognition/patterns/${study.slug}` : `/achievements/${study.slug}`;
}

export function insightHref(slug: string) {
  return `/recognition/${slug}`;
}

/** True when `pathname` is `href` or a descendant of it. The root only matches exactly. */
export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
