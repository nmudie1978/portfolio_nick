import type { MetadataRoute } from "next";
import { PRIMARY_NAV, SECONDARY_NAV, SITE_URL } from "@/content/site";
import { caseStudies } from "@/content/case-studies";
import { insights } from "@/content/insights";
import { caseStudyHref, insightHref } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...[...PRIMARY_NAV, ...SECONDARY_NAV].map((item) => ({
      url: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: item.href === "/" ? 1 : 0.7,
    })),
    ...caseStudies.map((c) => ({
      url: `${SITE_URL}${caseStudyHref(c)}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...insights.map((i) => ({
      url: `${SITE_URL}${insightHref(i.slug)}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
