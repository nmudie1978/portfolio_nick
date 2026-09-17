import type { CaseStudy } from "@/content/types";

/** Engagement case studies live under Achievements. Patterns and viewpoints have no pages of their own. */
export function caseStudyHref(study: Pick<CaseStudy, "slug">) {
  return `/achievements/${study.slug}`;
}

/** True when `pathname` is `href` or a descendant of it. The root only matches exactly. */
export function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
