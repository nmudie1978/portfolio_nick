import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { AcademyOverview, AcademyWorkGrid, PatternsList } from "@/components/shared/blocks";
import { PageHeader, PageSection } from "./primitives";

/**
 * Recognition is one page: the BSS/OSS Academy — what it covers, how it is
 * organised and what it contains — with the patterns and viewpoints behind
 * it named rather than expanded. The depth lives on the Academy itself.
 */
export function Recognition() {
  return (
    <PageTransition>
      <PageHeader
        label="Recognition"
        title="Evidence of how I think and contribute."
        lead="Not awards. A substantial body of work built to explain and explore modern telecom architecture — the BSS/OSS Academy, the models and patterns inside it, and the viewpoints behind them."
      />

      <PageSection id="academy" label="BSS/OSS Academy" title="An independent, vendor-neutral body of work.">
        <Reveal>
          <AcademyOverview />
        </Reveal>
      </PageSection>

      <PageSection
        id="structure"
        label="Structure & core features"
        title="How the Academy is organised."
        intro="Educational modules from first principles to transformation strategy, and the tools around them — a simulator, challenges, frameworks, models and ongoing ecosystem research."
        tone="tint"
      >
        <AcademyWorkGrid />
      </PageSection>

      <PageSection
        id="patterns"
        label="Architecture patterns"
        title="Patterns drawn from repeated experience."
        intro="Where the same shape has appeared across engagements it is written up as a pattern rather than attributed to one client."
        tone="tint"
      >
        <PatternsList />
      </PageSection>

    </PageTransition>
  );
}
