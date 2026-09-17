import type { Metadata } from "next";
import { ArchitectureModel } from "@/components/shared/ArchitectureModel";
import { pageMetadata } from "@/lib/metadata";
import { resolveVariant, type VariantParams } from "@/variants/resolve";

export async function generateMetadata({ params }: VariantParams): Promise<Metadata> {
  const variant = await resolveVariant(params);
  return pageMetadata({
    title: "Architecture model",
    description:
      "An interactive map of BSS/OSS architecture: product, service and resource layers across catalog, orders, inventory and assurance. Select a lens to see what each part controls.",
    path: `/${variant}/recognition/architecture-model`,
  });
}

export default async function ArchitectureModelPage({ params }: VariantParams) {
  const variant = await resolveVariant(params);
  return <ArchitectureModel variant={variant} />;
}
