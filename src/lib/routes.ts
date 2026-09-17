import type { CaseStudy } from "@/content/types";
import { vhref } from "@/variants/paths";
import type { VariantId } from "@/variants/types";

/**
 * Content routes inside a variant. Engagement case studies live under
 * Achievements; architecture patterns and viewpoints live under Recognition.
 */
export function caseStudyHref(variant: VariantId, study: Pick<CaseStudy, "slug" | "kind">) {
  return study.kind === "pattern"
    ? vhref(variant, `/recognition/patterns/${study.slug}`)
    : vhref(variant, `/achievements/${study.slug}`);
}

export function insightHref(variant: VariantId, slug: string) {
  return vhref(variant, `/recognition/${slug}`);
}
