import { NavShell } from "@/components/shared/NavShell";
import { person } from "@/content/person";
import type { VariantProps } from "@/variants/types";

export function Header({ variant }: VariantProps) {
  return (
    <NavShell
      variant={variant}
      brand={
        <>
          <span className="font-display text-[1.05rem] font-medium tracking-[-0.01em] text-paper">{person.name}</span>
          <span className="t-meta hidden text-paper-3 transition-colors group-hover:text-paper-2 xl:inline">
            Telecom Architecture · BSS/OSS · Transformation
          </span>
        </>
      }
      styles={{
        header: "border-b rule bg-ink/85 backdrop-blur-md",
        link: "t-meta text-paper-2 hover:text-paper",
        linkActive: "text-paper",
        underline: true,
        toggle: "t-meta text-paper",
        panel: "bg-ink",
        panelLink: "t-h3 text-paper",
        panelLinkActive: "text-copper",
      }}
    />
  );
}
