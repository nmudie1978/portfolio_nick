import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { resolveVariant, variantDef, type VariantParams } from "@/variants/resolve";

export async function generateMetadata({ params }: VariantParams): Promise<Metadata> {
  const variant = await resolveVariant(params);
  return pageMetadata({
    title: "Achievements",
    description:
      "What Nick Mudie has delivered: Europe's first triple-play provisioning platform, Telia's first hybrid cloud and E2E observability platform, greenfield B2B BSS/OSS across Norway and Sweden, M-Pesa network delivery and OSS provisioning modernisation.",
    path: `/${variant}/achievements`,
  });
}

export default async function Page({ params }: VariantParams) {
  const variant = await resolveVariant(params);
  const { Achievements } = variantDef(variant).pages;
  return <Achievements variant={variant} />;
}
