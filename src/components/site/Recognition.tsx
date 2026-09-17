import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { AcademyOverview, AcademyWorkGrid } from "@/components/shared/blocks";
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
        title="The BSS/OSS Academy brings together the models, patterns and perspectives I have developed through years of working in telecom transformation — turning experience into something that can be explored, challenged and shared."
        statement
      />

      <PageSection id="academy" label="BSS/OSS Academy" title="An independent, vendor-neutral body of work." wide>
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
        wide
      >
        <AcademyWorkGrid />
      </PageSection>
    </PageTransition>
  );
}
