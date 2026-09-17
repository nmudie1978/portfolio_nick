import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/content/site";

interface PageMeta {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Nick Mudie — Telecom Architecture, BSS/OSS & Transformation",
};

/** Trim a description to a search-snippet-friendly length at a word boundary. */
export function snippet(text: string, max = 160) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/**
 * Per-page metadata with a page-specific canonical URL. Every page sets its
 * own canonical so that shared links and search results resolve to the
 * page, not the site root. `openGraph` is replaced wholesale by Next's
 * metadata merge, so the shared image is restated here.
 */
export function pageMetadata({ title, description, path, type = "website" }: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const desc = snippet(description);
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — ${SITE_NAME}`,
      description: desc,
      url,
      siteName: SITE_NAME,
      type,
      locale: "en_GB",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE_NAME}`,
      description: desc,
      images: [OG_IMAGE.url],
    },
  };
}
