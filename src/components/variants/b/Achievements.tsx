import { Container } from "@/components/layout/Container";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/Tag";
import { ArrowLink } from "@/components/ui/Links";
import { achievements } from "@/content/achievements";
import { getCaseStudy } from "@/content/case-studies";
import { caseStudyHref } from "@/lib/routes";
import { LedgerIntro } from "./Intro";
import type { VariantProps } from "@/variants/types";

export function Achievements({ variant }: VariantProps) {
  return (
    <PageTransition>
      <LedgerIntro
        label="Achievements"
        title="What was actually delivered."
        lead="Six pieces of work inside live operators — firsts, greenfield programmes and modernisations. The wording keeps the role as it was; the depth is in the case studies."
      />

      <section aria-label="Achievements">
        <Container>
          <ol className="border-t rule">
            {achievements.map((a, i) => {
              const study = getCaseStudy(a.caseStudy);
              return (
                <Reveal key={a.slug} as="li">
                  <article className="grid grid-cols-1 gap-8 border-b rule py-12 md:grid-cols-12 md:gap-10 md:py-16" aria-labelledby={`ach-${a.slug}`}>
                    <div className="flex items-start gap-5 md:col-span-3 md:flex-col md:gap-3">
                      <span className="font-display text-[3.2rem] leading-none text-paper-3 md:text-[4.2rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="ledger-label">{a.organisation}</p>
                        <p className="t-small mt-1 text-paper-3">{a.stage}</p>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <h2 id={`ach-${a.slug}`} className="t-h2 max-w-[22ch] text-paper">
                        {a.title}
                      </h2>
                      <p className="t-body mt-4 max-w-[60ch] text-paper-2">{a.headline}</p>
                      {a.significance ? (
                        <p className="mt-5 max-w-[56ch] border-l border-copper pl-4 font-display text-[1.15rem] italic leading-[1.35] text-paper">
                          {a.significance}
                        </p>
                      ) : null}
                      {study ? (
                        <div className="mt-6">
                          <ArrowLink href={caseStudyHref(variant, study)}>Read the case study</ArrowLink>
                        </div>
                      ) : null}
                    </div>
                    <div className="md:col-span-3">
                      <p className="ledger-label">Scope</p>
                      <ul className="mt-3 flex flex-col">
                        {a.scope.map((s) => (
                          <li key={s} className="t-small border-b rule py-2 text-paper">
                            {s}
                          </li>
                        ))}
                      </ul>
                      <p className="ledger-label mt-6">Technologies</p>
                      <div className="mt-3">
                        <TagList items={a.technologies} />
                      </div>
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
