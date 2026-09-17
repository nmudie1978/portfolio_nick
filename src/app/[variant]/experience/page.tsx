import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { resolveVariant, variantDef, type VariantParams } from "@/variants/resolve";

export async function generateMetadata({ params }: VariantParams): Promise<Metadata> {
  const variant = await resolveVariant(params);
  return pageMetadata({
    title: "Experience",
    description:
      "The career progression of Nick Mudie: from telecom operations and service assurance through architecture into BSS/OSS, transformation and AI-native telecom — at Telia, Telenor, Vodafone, UPC and Marlink.",
    path: `/${variant}/experience`,
  });
}

export default async function Page({ params }: VariantParams) {
  const variant = await resolveVariant(params);
  const { Experience } = variantDef(variant).pages;
  return <Experience variant={variant} />;
}
