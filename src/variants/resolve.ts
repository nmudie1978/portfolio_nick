import { notFound } from "next/navigation";
import { VARIANTS } from "./registry";
import { isVariantId, VARIANT_IDS, type VariantId } from "./types";

export type VariantParams = { params: Promise<{ variant: string }> };

/** Resolve the `[variant]` segment or 404. */
export async function resolveVariant(params: VariantParams["params"]): Promise<VariantId> {
  const { variant } = await params;
  if (!isVariantId(variant)) notFound();
  return variant;
}

export function variantStaticParams() {
  return VARIANT_IDS.map((variant) => ({ variant }));
}

export function variantDef(variant: VariantId) {
  return VARIANTS[variant];
}
