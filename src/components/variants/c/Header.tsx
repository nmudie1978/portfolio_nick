import { NavShell } from "@/components/shared/NavShell";
import { person } from "@/content/person";
import type { VariantProps } from "@/variants/types";

export function Header({ variant }: VariantProps) {
  return (
    <NavShell
      variant={variant}
      brand={
        <>
          <span aria-hidden="true" className="inline-block h-2.5 w-2.5 translate-y-[-1px] rounded-full bg-copper" />
          <span className="font-display text-[1.1rem] font-bold tracking-[-0.02em] text-paper">{person.name}</span>
          <span className="hidden text-[0.8rem] font-medium text-paper-3 lg:inline">Telecom architecture &amp; transformation</span>
        </>
      }
      styles={{
        header: "border-b rule bg-ink/85 backdrop-blur-md",
        link: "text-[0.9rem] font-medium text-paper-2 hover:text-paper",
        linkActive: "text-copper",
        cta: {
          label: "Contact",
          className:
            "inline-flex items-center rounded-full bg-copper px-4 py-2 text-[0.85rem] font-semibold text-white transition-colors hover:bg-paper",
        },
        toggle: "text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-paper",
        panel: "bg-ink",
        panelLink: "font-display text-[1.6rem] font-semibold text-paper",
        panelLinkActive: "text-copper",
      }}
    />
  );
}
