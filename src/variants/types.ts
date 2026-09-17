import type { ComponentType } from "react";

export type VariantId = "a" | "b" | "c";

export const VARIANT_IDS: VariantId[] = ["a", "b", "c"];

export function isVariantId(v: string): v is VariantId {
  return (VARIANT_IDS as string[]).includes(v);
}

/** Props every variant page and chrome component receives. */
export interface VariantProps {
  variant: VariantId;
}

export interface VariantDef {
  id: VariantId;
  name: string;
  tagline: string;
  /** Short description for the chooser page. */
  description: string;
  Header: ComponentType<VariantProps>;
  Footer: ComponentType<VariantProps>;
  pages: {
    Home: ComponentType<VariantProps>;
    Experience: ComponentType<VariantProps>;
    Achievements: ComponentType<VariantProps>;
    Recognition: ComponentType<VariantProps>;
    Skills: ComponentType<VariantProps>;
    Contact: ComponentType<VariantProps>;
  };
}
