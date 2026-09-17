import { FooterShell } from "@/components/shared/FooterShell";
import { person } from "@/content/person";
import type { VariantProps } from "@/variants/types";

export function Footer({ variant }: VariantProps) {
  return (
    <FooterShell
      variant={variant}
      className="bg-ink-2"
      brand={
        <>
          <p className="font-display text-[1.8rem] leading-none tracking-[-0.01em]">{person.name}</p>
          <p className="ledger-label mt-3">Telecom architecture · BSS/OSS · Transformation · AI &amp; modern telecom</p>
          <p className="t-small mt-4 max-w-[40ch] text-paper-2">
            25+ years designing, transforming and operating telecom technology across operators, vendors and
            managed-service environments.
          </p>
        </>
      }
    />
  );
}
