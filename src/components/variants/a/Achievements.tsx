import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/layout/Container";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TagList } from "@/components/ui/Tag";
import { ArrowLink } from "@/components/ui/Links";
import { achievements } from "@/content/achievements";
import { getCaseStudy } from "@/content/case-studies";
import { caseStudyHref } from "@/lib/routes";
import type { VariantProps } from "@/variants/types";

export function Achievements({ variant }: VariantProps) {
  return (
    <PageTransition>
      <PageIntro
        label="Achievements"
        title="What was actually delivered."
        lead="Six pieces of work inside live operators — firsts, greenfield programmes and modernisations. The wording keeps the role as it was; the detail is in the case studies."
      />

      <section className="border-t rule" aria-label="Achievements">
        <Container>
          <ol className="flex flex-col divide-y rule">
            {achievements.map((a, i) => {
              const study = getCaseStudy(a.caseStudy);
              return (
                <Reveal key={a.slug} as="li">
                  <article className="grid grid-cols-1 gap-6 py-14 md:grid-cols-12 md:gap-10 md:py-20" aria-labelledby={`ach-${a.slug}`}>
                    <div className="md:col-span-4">
                      <div className="md:sticky md:top-24">
                        <span className="font-display text-[3.4rem] font-medium leading-none tracking-[-0.04em] text-paper-3/70 md:text-[4.6rem]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="t-h2 mt-3 text-paper">{a.organisation}</p>
                        <Eyebrow as="p" tone="copper" className="mt-2">
                          {a.stage}
                        </Eyebrow>
                      </div>
                    </div>
                    <div className="md:col-span-8">
                      <h2 id={`ach-${a.slug}`} className="t-h2 max-w-[22ch] text-paper">
                        {a.title}
                      </h2>
                      <p className="t-lead measure mt-5">{a.headline}</p>

                      <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div>
                          <dt>
                            <Eyebrow as="span">Scope</Eyebrow>
                          </dt>
                          <dd className="mt-3">
                            <ul className="flex flex-col gap-2">
                              {a.scope.map((s) => (
                                <li key={s} className="t-small flex gap-3 text-paper">
                                  <span className="mt-[0.7em] h-px w-3 shrink-0 bg-copper" aria-hidden="true" />
                                  {s}
                                </li>
                              ))}
                            </ul>
                          </dd>
                        </div>
                        {a.significance ? (
                          <div>
                            <dt>
                              <Eyebrow as="span">Architectural significance</Eyebrow>
                            </dt>
                            <dd className="t-small mt-3 text-paper-2">{a.significance}</dd>
                          </div>
                        ) : null}
                      </dl>

                      <div className="mt-8">
                        <TagList items={a.technologies} tone="copper" />
                      </div>
                      {study ? (
                        <div className="mt-8">
                          <ArrowLink href={caseStudyHref(variant, study)}>
                            Read the case study — context, challenge, role, outcome, lessons
                          </ArrowLink>
                        </div>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </section>
    </PageTransition>
  );
}
