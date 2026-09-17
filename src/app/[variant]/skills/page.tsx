import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { resolveVariant, variantDef, type VariantParams } from "@/variants/resolve";

export async function generateMetadata({ params }: VariantParams): Promise<Metadata> {
  const variant = await resolveVariant(params);
  return pageMetadata({
    title: "Skills",
    description:
      "Professional capability organised by domain: architecture and transformation, BSS/OSS, operations and assurance, AI and modern telecom, cloud and infrastructure.",
    path: `/${variant}/skills`,
  });
}

export default async function Page({ params }: VariantParams) {
  const variant = await resolveVariant(params);
  const { Skills } = variantDef(variant).pages;
  return <Skills variant={variant} />;
}
