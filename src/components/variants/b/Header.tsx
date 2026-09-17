import { NavShell } from "@/components/shared/NavShell";
import { person } from "@/content/person";
import type { VariantProps } from "@/variants/types";

export function Header({ variant }: VariantProps) {
  return (
    <NavShell
      variant={variant}
      brand={
        <>
          <span className="font-display text-[1.45rem] leading-none tracking-[-0.01em] text-paper">{person.name}</span>
          <span aria-hidden="true" className="hidden h-px w-6 bg-copper lg:inline-block" />
          <span className="hidden text-[0.78rem] uppercase tracking-[0.14em] text-paper-3 lg:inline">
            Telecom architecture &amp; transformation
          </span>
        </>
      }
      styles={{
        header: "border-b rule bg-ink/90 backdrop-blur-md",
        link: "text-[0.9rem] tracking-[0.01em] text-paper-2 hover:text-paper",
        linkActive: "text-paper font-medium",
        cta: {
          label: "Contact",
          className:
            "inline-flex items-center border border-copper bg-copper px-4 py-2 text-[0.85rem] font-medium text-ink transition-colors hover:bg-paper hover:border-paper",
        },
        toggle: "text-[0.85rem] uppercase tracking-[0.12em] text-paper",
        panel: "bg-ink",
        panelLink: "font-display text-[1.7rem] text-paper",
        panelLinkActive: "text-copper",
      }}
    />
  );
}
