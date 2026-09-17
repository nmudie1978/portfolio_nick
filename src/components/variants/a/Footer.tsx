import { FooterShell } from "@/components/shared/FooterShell";
import { person } from "@/content/person";
import type { VariantProps } from "@/variants/types";

export function Footer({ variant }: VariantProps) {
  return (
    <FooterShell
      variant={variant}
      brand={
        <>
          <p className="font-display text-xl font-medium tracking-[-0.01em]">{person.name}</p>
          <p className="t-small mt-2 max-w-[38ch] text-paper-2">
            Telecom architecture, BSS/OSS and transformation. 25+ years across operators, vendors and
            managed-service environments.
          </p>
        </>
      }
    />
  );
}
