import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/Links";
import { ArchitectureMatrix } from "@/components/architecture/ArchitectureMatrix";
import { AcademyOverview, AcademyWorkGrid, FocusGrid, PatternsGrid, ThinkingIndex } from "@/components/shared/blocks";
import { FoamIntro, FoamSection } from "./Foam";
import { vhref } from "@/variants/paths";
import type { VariantProps } from "@/variants/types";

export function Recognition({ variant }: VariantProps) {
  return (
    <PageTransition>
      <FoamIntro
        variant={variant}
        label="Recognition"
        title="Evidence of how I think and contribute."
        lead="Not awards. A substantial body of work built to explain and explore modern telecom architecture — the BSS/OSS Academy, architecture models and patterns, and the viewpoints behind them."
      />
      <FoamSection variant={variant} id="academy" label="BSS/OSS Academy" title="An independent, vendor-neutral body of work.">
        <Reveal>
          <AcademyOverview />
        </Reveal>
      </FoamSection>
      <FoamSection variant={variant} id="work" label="Inside the Academy" title="Simulator, challenges, frameworks, models, modules." tone="tint">
        <AcademyWorkGrid />
      </FoamSection>
      <FoamSection variant={variant}
        id="model"
        label="Architecture model"
        title="One matrix, five ways to read it."
        intro="The model I use to explain where catalog, order, inventory and assurance responsibilities sit — and where transformations go wrong."
        aside={<ArrowLink href={vhref(variant, "/recognition/architecture-model")} tone="copper">Open the interactive model</ArrowLink>}
      >
        <Reveal>
          <ArchitectureMatrix mode="ambient" initialLens="order" exploreHref={vhref(variant, "/recognition/architecture-model")} />
        </Reveal>
      </FoamSection>
      <FoamSection variant={variant} id="patterns" label="Architecture patterns" title="Patterns drawn from repeated experience." tone="tint">
        <PatternsGrid variant={variant} />
      </FoamSection>
      <FoamSection variant={variant}
        id="thinking"
        label="Selected thinking"
        title="Short viewpoints on telecom architecture."
        intro="Each takes one architectural question and answers it from practice: what the pattern is, where it breaks and what has to be true for it to work."
      >
        <ThinkingIndex variant={variant} />
      </FoamSection>
      <FoamSection variant={variant} id="research" label="Current research" title="Where the architecture is still being worked out." tone="tint">
        <FocusGrid />
      </FoamSection>
    </PageTransition>
  );
}
