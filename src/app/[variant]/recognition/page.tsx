import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { resolveVariant, variantDef, type VariantParams } from "@/variants/resolve";

export async function generateMetadata({ params }: VariantParams): Promise<Metadata> {
  const variant = await resolveVariant(params);
  return pageMetadata({
    title: "Recognition",
    description:
      "The body of work behind the profile: the vendor-neutral BSS/OSS Academy, the Telco Landscape, an interactive telecom architecture model, architecture patterns and selected thinking on catalog-driven design, composability, migration, Agentic NOC, AI infrastructure and ODA.",
    path: `/${variant}/recognition`,
  });
}

export default async function Page({ params }: VariantParams) {
  const variant = await resolveVariant(params);
  const { Recognition } = variantDef(variant).pages;
  return <Recognition variant={variant} />;
}
