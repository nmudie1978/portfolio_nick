import { Container } from "@/components/layout/Container";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/Tag";
import { ArrowLink } from "@/components/ui/Links";
import { achievements } from "@/content/achievements";
import { getCaseStudy } from "@/content/case-studies";
import { caseStudyHref } from "@/lib/routes";
import { PageHeader, shape } from "./primitives";
import { cn } from "@/lib/cn";

export function Achievements() {
  const s = shape();
  return (
    <PageTransition>
      <PageHeader
        label="Achievements"
        title="What was actually delivered."
        lead="Six pieces of work inside live operators — firsts, greenfield programmes and modernisations. The wording keeps the role as it was; the depth is in each engagement write-up."
      />
      <section aria-label="Achievements">
        <Container>
          <ol>
            {achievements.map((a, i) => {
              const study = getCaseStudy(a.caseStudy);
              return (
                <Reveal key={a.slug} as="li">
                  <article
                    className="grid grid-cols-1 gap-6 border-b rule py-12 md:grid-cols-12 md:gap-10 md:py-16"
                    aria-labelledby={`ach-${a.slug}`}
                  >
                    <div className="md:col-span-3">
                      <span className="font-display text-[3rem] font-bold leading-none tracking-[-0.04em] text-copper/30 md:text-[4rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="section-label mt-3">{a.organisation}</p>
                      <p className="t-small mt-1 text-paper-3">{a.stage}</p>
                    </div>
                    <div className="md:col-span-9">
                      <h2 id={`ach-${a.slug}`} className="t-h2 text-paper">
                        {a.title}
                      </h2>
                      <p className="t-lead mt-4 max-w-[60ch]">{a.headline}</p>
                      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div>
                          <p className="section-label">Scope</p>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {a.scope.map((item) => (
                              <li key={item} className={cn("bg-ink-2 px-3 py-1 text-[0.85rem] font-medium text-paper", s.chip)}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {a.significance ? (
                          <div>
                            <p className="section-label">Architectural significance</p>
                            <p className="t-small mt-3 text-paper-2">{a.significance}</p>
                          </div>
                        ) : null}
                      </div>
                      <div className="mt-6">
                        <TagList items={a.technologies} tone="copper" />
                      </div>
                      {study ? (
                        <div className="mt-8">
                          <ArrowLink href={caseStudyHref(study)} tone="copper">
                            Read the engagement — context, challenge, what I delivered, outcome, lessons
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
