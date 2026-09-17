import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { caseStudies } from "@/content/case-studies";
import { insights } from "@/content/insights";
import { PRIMARY_NAV, SECONDARY_NAV } from "@/content/site";
import { VARIANT_IDS } from "@/variants/types";
import { vhref } from "@/variants/paths";
import { caseStudyHref, insightHref } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return VARIANT_IDS.flatMap((v) => [
    ...[...PRIMARY_NAV, ...SECONDARY_NAV].map((item) => ({
      url: `${SITE_URL}${vhref(v, item.href)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: item.href === "/" ? 1 : 0.7,
    })),
    ...caseStudies.map((c) => ({
      url: `${SITE_URL}${caseStudyHref(v, c)}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...insights.map((i) => ({
      url: `${SITE_URL}${insightHref(v, i.slug)}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]);
}
