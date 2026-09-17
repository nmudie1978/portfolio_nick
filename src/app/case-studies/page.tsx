import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { Section } from "@/components/layout/Section";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/ui/Cards";
import { caseStudies } from "@/content/case-studies";

export const metadata = pageMetadata({
  title: "Case Studies",
  description:
    "OSS provisioning modernisation, IT operations and service assurance, catalog-driven BSS/OSS, product-by-product transformation and AI-native telecom operations.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const engagements = caseStudies.filter((c) => c.kind === "engagement");
  const patterns = caseStudies.filter((c) => c.kind === "pattern");

  return (
    <PageTransition>
      <PageIntro
        label="Case studies"
        title="What was done, and what it taught."
        lead="Each study follows the same structure — context, challenge, architecture, role, transformation, outcome, lessons — so they can be compared. Engagements are described at a level appropriate for a public site; outcomes are never invented."
      />

      <Section id="engagements" label="Engagements" title="Drawn from specific work.">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {engagements.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <CaseStudyCard study={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="patterns"
        label="Patterns"
        title="Drawn from repeated experience."
        intro="Architecture patterns I have worked toward across several programmes, written as case studies so the reasoning and trade-offs are explicit."
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {patterns.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <CaseStudyCard study={s} />
            </Reveal>
          ))}
        </div>
      </Section>
    </PageTransition>
  );
}
