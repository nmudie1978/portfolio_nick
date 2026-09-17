import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { caseStudies } from "@/content/case-studies";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/expertise",
    "/experience",
    "/case-studies",
    "/thinking",
    "/architecture",
    "/academy",
    "/contact",
  ];
  const now = new Date();
  return [
    ...staticRoutes.map((p) => ({
      url: `${SITE_URL}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7,
    })),
    ...caseStudies.map((c) => ({
      url: `${SITE_URL}/case-studies/${c.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...insights.map((i) => ({
      url: `${SITE_URL}/thinking/${i.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
