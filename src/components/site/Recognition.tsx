import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/Links";
import { ArchitectureMatrix } from "@/components/architecture/ArchitectureMatrix";
import { AcademyOverview, AcademyWorkGrid, FocusGrid, PatternsGrid, ThinkingIndex } from "@/components/shared/blocks";
import { PageHeader, PageSection } from "./primitives";

export function Recognition() {
  return (
    <PageTransition>
      <PageHeader
        label="Recognition"
        title="Evidence of how I think and contribute."
        lead="Not awards. A substantial body of work built to explain and explore modern telecom architecture — the BSS/OSS Academy, architecture models and patterns, and the viewpoints behind them."
      />
      <PageSection id="academy" label="BSS/OSS Academy" title="An independent, vendor-neutral body of work.">
        <Reveal>
          <AcademyOverview />
        </Reveal>
      </PageSection>
      <PageSection id="work" label="Inside the Academy" title="Simulator, challenges, frameworks, models, modules." tone="tint">
        <AcademyWorkGrid />
      </PageSection>
      <PageSection
        id="model"
        label="Architecture model"
        title="One matrix, five ways to read it."
        intro="The model I use to explain where catalog, order, inventory and assurance responsibilities sit — and where transformations go wrong."
        aside={<ArrowLink href={"/recognition/architecture-model"} tone="copper">Open the interactive model</ArrowLink>}
      >
        <Reveal>
          <ArchitectureMatrix mode="ambient" initialLens="order" exploreHref={"/recognition/architecture-model"} />
        </Reveal>
      </PageSection>
      <PageSection id="patterns" label="Architecture patterns" title="Patterns drawn from repeated experience." tone="tint">
        <PatternsGrid />
      </PageSection>
      <PageSection
        id="thinking"
        label="Selected thinking"
        title="Short viewpoints on telecom architecture."
        intro="Each takes one architectural question and answers it from practice: what the pattern is, where it breaks and what has to be true for it to work."
      >
        <ThinkingIndex />
      </PageSection>
      <PageSection id="research" label="Current research" title="Where the architecture is still being worked out." tone="tint">
        <FocusGrid />
      </PageSection>
    </PageTransition>
  );
}
