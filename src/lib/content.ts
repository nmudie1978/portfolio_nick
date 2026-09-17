import { caseStudies } from "@/content/case-studies";
import { insights } from "@/content/insights";
import type { CaseStudy, Insight } from "@/content/types";

/** Resolve slugs to full records, dropping any that do not exist. */
export function resolveCaseStudies(slugs: string[] = []): CaseStudy[] {
  return slugs
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter((c): c is CaseStudy => Boolean(c));
}

export function resolveInsights(slugs: string[] = []): Insight[] {
  return slugs
    .map((s) => insights.find((i) => i.slug === s))
    .filter((i): i is Insight => Boolean(i));
}
