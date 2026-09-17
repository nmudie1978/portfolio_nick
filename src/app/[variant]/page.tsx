import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/content/site";
import { OG_IMAGE, snippet } from "@/lib/metadata";
import { resolveVariant, variantDef, type VariantParams } from "@/variants/resolve";

export async function generateMetadata({ params }: VariantParams): Promise<Metadata> {
  const variant = await resolveVariant(params);
  const url = `${SITE_URL}/${variant}`;
  return {
    title: { absolute: SITE_TITLE },
    description: snippet(SITE_DESCRIPTION),
    alternates: { canonical: url },
    openGraph: {
      title: SITE_TITLE,
      description: snippet(SITE_DESCRIPTION),
      url,
      type: "profile",
      locale: "en_GB",
      images: [OG_IMAGE],
    },
  };
}

export default async function ProfilePage({ params }: VariantParams) {
  const variant = await resolveVariant(params);
  const { Home } = variantDef(variant).pages;
  return <Home variant={variant} />;
}
