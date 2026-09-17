import { Container } from "@/components/layout/Container";
import { PageTransition } from "@/components/layout/PageTransition";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowLink, BackLink } from "@/components/ui/Links";
import { ContentBlocks } from "@/components/ui/ContentBlocks";
import { CaseStudyCard, InsightCard } from "@/components/ui/Cards";
import { insights } from "@/content/insights";
import { person } from "@/content/person";
import type { Insight } from "@/content/types";
import { resolveCaseStudies, resolveInsights } from "@/lib/content";
import { insightHref } from "@/lib/routes";

/** A single viewpoint, shared by every variant. Reached from Recognition. */
export function InsightDetail({ insight }: { insight: Insight; }) {
  const studies = resolveCaseStudies(insight.relatedCaseStudies);
  const related = resolveInsights(insight.relatedInsights);
  const index = insights.findIndex((i) => i.slug === insight.slug);
  const next = insights[(index + 1) % insights.length];

  return (
    <PageTransition>
      <article>
        <header className="pt-14 pb-10 md:pt-24 md:pb-14">
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <BackLink href={"/recognition"}>Recognition</BackLink>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <Eyebrow as="span" tone="copper">
                    {insight.category}
                  </Eyebrow>
                  <Eyebrow as="span">{insight.minutes} min read</Eyebrow>
                  <Eyebrow as="span">{person.name}</Eyebrow>
                </div>
                <h1 className="t-h1 mt-5 max-w-[20ch]">{insight.title}</h1>
                <p className="t-lead measure mt-6">{insight.summary}</p>
              </div>
            </div>
          </Container>
        </header>

        <section className="border-t rule py-12 md:py-16">
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <Eyebrow as="p" className="md:sticky md:top-24">
                  Viewpoint
                </Eyebrow>
              </div>
              <div className="md:col-span-9">
                <ContentBlocks blocks={insight.content} headingLevel={2} />
              </div>
            </div>
          </Container>
        </section>

        {studies.length || related.length ? (
          <section className="border-t rule py-12 md:py-16" aria-labelledby="related-h">
            <Container>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-3">
                  <h2 id="related-h" className="t-meta text-paper">
                    Related
                  </h2>
                </div>
                <div className="md:col-span-9">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {studies.map((s) => (
                      <CaseStudyCard key={s.slug} study={s} />
                    ))}
                    {related.map((r) => (
                      <InsightCard key={r.slug} insight={r} />
                    ))}
                  </div>
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
                <ArrowLink href={insightHref(next.slug)} tone="copper">
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
