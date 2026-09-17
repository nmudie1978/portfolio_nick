import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { Section } from "@/components/layout/Section";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { InsightCard } from "@/components/ui/Cards";
import { ArrowLink } from "@/components/ui/Links";
import { insights } from "@/content/insights";

export const metadata = pageMetadata({
  title: "Thinking",
  description:
    "Architectural viewpoints on catalog-driven design, composability, migration strategy, Agentic NOC, AI infrastructure, B2B connectivity, cloud-native assurance and ODA.",
  path: "/thinking",
});

export default function ThinkingPage() {
  return (
    <PageTransition>
      <PageIntro
        label="How I think"
        title="Short viewpoints on telecom architecture."
        lead="Each piece takes one architectural question and answers it from practice: what the pattern is, where it breaks and what has to be true for it to work. No thought leadership."
      />

      <Section
        id="viewpoints"
        label="Viewpoints"
        aside={<ArrowLink href="/architecture">Architecture Playground</ArrowLink>}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((ins, i) => (
            <Reveal key={ins.slug} delay={Math.min(i % 3, 2) * 60}>
              <InsightCard insight={ins} />
            </Reveal>
          ))}
        </div>
      </Section>
    </PageTransition>
  );
}
