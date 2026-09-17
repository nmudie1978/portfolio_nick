import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { resolveVariant, variantDef, type VariantParams } from "@/variants/resolve";

export async function generateMetadata({ params }: VariantParams): Promise<Metadata> {
  const variant = await resolveVariant(params);
  return pageMetadata({
    title: "Contact",
    description:
      "Get in touch with Nick Mudie about telecom architecture, BSS/OSS, transformation, service assurance or AI-native telecom operations.",
    path: `/${variant}/contact`,
  });
}

export default async function Page({ params }: VariantParams) {
  const variant = await resolveVariant(params);
  const { Contact } = variantDef(variant).pages;
  return <Contact variant={variant} />;
}
