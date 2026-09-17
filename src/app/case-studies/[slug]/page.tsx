import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { PageTransition } from "@/components/layout/PageTransition";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TagList } from "@/components/ui/Tag";
import { ArrowLink, BackLink } from "@/components/ui/Links";
import { ContentBlocks } from "@/components/ui/ContentBlocks";
import { InsightCard } from "@/components/ui/Cards";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { resolveInsights } from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
    type: "article",
  });
}

const SECTIONS = [
  ["context", "Context", "What was happening?"],
  ["challenge", "Challenge", "What problem needed solving?"],
  ["architecture", "Architecture", "What was the architectural approach?"],
  ["role", "My role", "What I actually did"],
  ["transformation", "Transformation", "What changed?"],
  ["outcome", "Outcome", "What was achieved?"],
  ["lessons", "What I learned", "The broader architectural insight"],
] as const;

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const related = resolveInsights(study.relatedInsights);
  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <PageTransition>
      <article>
        <header className="pt-14 pb-10 md:pt-24 md:pb-16">
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <BackLink href="/case-studies">Case studies</BackLink>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <Eyebrow as="span" tone="copper">
                    {study.category}
                  </Eyebrow>
                  <Eyebrow as="span">
                    {study.organisation ?? (study.kind === "pattern" ? "Architecture pattern" : "Engagement")}
                  </Eyebrow>
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
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
                <ArrowLink href={`/case-studies/${next.slug}`} tone="copper">
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
