import { PageIntro } from "@/components/layout/PageIntro";
import { Section } from "@/components/layout/Section";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/Links";
import { ArchitectureMatrix } from "@/components/architecture/ArchitectureMatrix";
import { AcademyOverview, AcademyWorkGrid, FocusGrid, PatternsGrid, ThinkingIndex } from "@/components/shared/blocks";
import { vhref } from "@/variants/paths";
import type { VariantProps } from "@/variants/types";

export function Recognition({ variant }: VariantProps) {
  return (
    <PageTransition>
      <PageIntro
        label="Recognition"
        title="Evidence of how I think and contribute."
        lead="Not awards. A substantial body of work built to explain and explore modern telecom architecture — the BSS/OSS Academy, architecture models and patterns, and the viewpoints behind them."
      />

      <Section id="academy" label="BSS/OSS Academy" title="An independent, vendor-neutral body of work.">
        <Reveal>
          <AcademyOverview />
        </Reveal>
      </Section>

      <Section
        id="work"
        label="Inside the Academy"
        title="Simulator, challenges, frameworks, models, modules."
        intro="The pieces that make it more than a set of articles."
      >
        <AcademyWorkGrid />
      </Section>

      <Section
        id="model"
        label="Architecture model"
        title="One matrix, five ways to read it."
        intro="Layers down the side, lifecycle across the top. The model I use to explain where catalog, order, inventory and assurance responsibilities sit — and where transformations go wrong."
        aside={<ArrowLink href={vhref(variant, "/recognition/architecture-model")}>Open the model</ArrowLink>}
      >
        <Reveal>
          <ArchitectureMatrix mode="ambient" initialLens="order" exploreHref={vhref(variant, "/recognition/architecture-model")} />
        </Reveal>
      </Section>

      <Section
        id="patterns"
        label="Architecture patterns"
        title="Patterns drawn from repeated experience."
        intro="Where the same shape has appeared across engagements, it is written up as a pattern rather than attributed to one client."
      >
        <PatternsGrid variant={variant} />
      </Section>

      <Section
        id="thinking"
        label="Selected thinking"
        title="Short viewpoints on telecom architecture."
        intro="Each piece takes one architectural question and answers it from practice: what the pattern is, where it breaks and what has to be true for it to work."
      >
        <ThinkingIndex variant={variant} />
      </Section>

      <Section
        id="research"
        label="Current research"
        title="Where the architecture is still being worked out."
        intro="Stated as exploration, not as established fact."
      >
        <FocusGrid />
      </Section>
    </PageTransition>
  );
}
