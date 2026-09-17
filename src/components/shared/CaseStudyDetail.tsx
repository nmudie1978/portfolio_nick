import { Container } from "@/components/layout/Container";
import { PageTransition } from "@/components/layout/PageTransition";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TagList } from "@/components/ui/Tag";
import { ArrowLink, BackLink } from "@/components/ui/Links";
import { ContentBlocks } from "@/components/ui/ContentBlocks";
import { caseStudies } from "@/content/case-studies";
import type { CaseStudy } from "@/content/types";
import { resolveInsights } from "@/lib/content";
import { caseStudyHref } from "@/lib/routes";

const SECTIONS = [
  ["context", "Context", "What was happening?"],
  ["challenge", "Challenge", "What problem needed solving?"],
  ["architecture", "Architecture", "What was the architectural approach?"],
  ["role", "What I delivered", "My role and what I was accountable for"],
  ["transformation", "Transformation", "What changed?"],
  ["outcome", "Outcome", "What was achieved?"],
  ["lessons", "What I learned", "The broader architectural insight"],
] as const;

/**
 * Detailed engagement write-up, reached from Achievements.
 */
export function CaseStudyDetail({ study }: { study: CaseStudy; }) {
  const related = resolveInsights(study.relatedInsights);
  const engagements = caseStudies.filter((c) => c.kind === "engagement");
  const index = engagements.findIndex((c) => c.slug === study.slug);
  const next = engagements[(index + 1) % engagements.length];
  const back = { href: "/achievements", label: "Achievements" };

  return (
    <PageTransition>
      <article>
        <header className="pt-14 pb-10 md:pt-24 md:pb-16">
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <BackLink href={back.href}>{back.label}</BackLink>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <Eyebrow as="span" tone="copper">
                    {study.category}
                  </Eyebrow>
                  <Eyebrow as="span">{study.organisation ?? "Engagement"}</Eyebrow>
                </div>
                <h1 className="t-h1 mt-5 max-w-[20ch]">{study.title}</h1>
                <p className="t-lead measure mt-6">{study.summary}</p>
                <div className="mt-8">
                  <TagList items={study.technologies} />
                </div>
              </div>
            </div>
          </Container>
        </header>

        {SECTIONS.map(([key, label, question]) => (
          <section key={key} id={key} className="border-t rule py-12 md:py-16" aria-labelledby={`${key}-h`}>
            <Container>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3">
                  <div className="md:sticky md:top-24">
                    <h2 id={`${key}-h`} className="t-meta text-paper">
                      {label}
                    </h2>
                    <p className="t-small mt-1 text-paper-3">{question}</p>
                  </div>
                </div>
                <div className="md:col-span-9">
                  <ContentBlocks blocks={study[key]} />
                </div>
              </div>
            </Container>
          </section>
        ))}

        {related.length ? (
          <section className="border-t rule py-12 md:py-16" aria-labelledby="related-h">
            <Container>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3">
                  <h2 id="related-h" className="t-meta text-paper">
                    Related thinking
                  </h2>
                </div>
                <div className="md:col-span-9">
                  <ul className="flex flex-col divide-y rule border-y rule">
                    {related.map((r) => (
                      <li key={r.slug} className="py-4">
                        <p className="t-h3 text-paper">{r.title}</p>
                        <p className="t-small mt-1 max-w-[62ch] text-paper-2">{r.summary}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </section>
        ) : null}

        <section className="border-t rule py-12">
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <Eyebrow as="p">Next</Eyebrow>
              </div>
              <div className="md:col-span-9">
                <ArrowLink href={caseStudyHref(next)} tone="copper">
                  {next.title}
                </ArrowLink>
              </div>
            </div>
          </Container>
        </section>
      </article>
    </PageTransition>
  );
}
