import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/Links";
import { ArchitectureMatrix } from "@/components/architecture/ArchitectureMatrix";
import { AcademyOverview, AcademyWorkGrid, FocusGrid, PatternsGrid, ThinkingIndex } from "@/components/shared/blocks";
import { LedgerIntro } from "./Intro";
import { LedgerSection } from "./Ledger";
import { vhref } from "@/variants/paths";
import type { VariantProps } from "@/variants/types";

export function Recognition({ variant }: VariantProps) {
  return (
    <PageTransition>
      <LedgerIntro
        label="Recognition"
        title="A body of work, built to be used."
        lead="Not awards. Professional credibility, intellectual contribution and industry knowledge — the BSS/OSS Academy, architecture models and patterns, and the viewpoints behind them."
      />

      <LedgerSection id="academy" label="BSS/OSS Academy" title="An independent, vendor-neutral educational platform.">
        <Reveal>
          <AcademyOverview />
        </Reveal>
      </LedgerSection>

      <LedgerSection
        id="work"
        label="Inside the Academy"
        title="Simulator, challenges, frameworks, models, modules."
        tone="raised"
      >
        <AcademyWorkGrid />
      </LedgerSection>

      <LedgerSection
        id="model"
        label="Architecture model"
        title="One matrix, five ways to read it."
        intro="The model I use to explain where catalog, order, inventory and assurance responsibilities sit — and where transformations go wrong."
        aside={<ArrowLink href={vhref(variant, "/recognition/architecture-model")}>Open the interactive model</ArrowLink>}
      >
        <Reveal>
          <ArchitectureMatrix mode="ambient" initialLens="order" />
        </Reveal>
      </LedgerSection>

      <LedgerSection
        id="patterns"
        label="Architecture patterns"
        title="Patterns drawn from repeated experience."
        tone="raised"
      >
        <PatternsGrid variant={variant} />
      </LedgerSection>

      <LedgerSection
        id="thinking"
        label="Selected thinking"
        title="Short viewpoints on telecom architecture."
        intro="Each takes one architectural question and answers it from practice: what the pattern is, where it breaks and what has to be true for it to work."
      >
        <ThinkingIndex variant={variant} />
      </LedgerSection>

      <LedgerSection id="research" label="Current research" title="Where the architecture is still being worked out." tone="raised">
        <FocusGrid />
      </LedgerSection>
    </PageTransition>
  );
}
