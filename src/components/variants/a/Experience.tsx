import Link from "next/link";
import { PageIntro } from "@/components/layout/PageIntro";
import { Section } from "@/components/layout/Section";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { OrganisationDetail } from "@/components/shared/blocks";
import { environments, experience } from "@/content/experience";
import { getCaseStudy } from "@/content/case-studies";
import { journeyWithEvidence } from "@/lib/journey";
import { caseStudyHref } from "@/lib/routes";
import type { VariantProps } from "@/variants/types";

export function Experience({ variant }: VariantProps) {
  const stages = journeyWithEvidence();
  return (
    <PageTransition>
      <PageIntro
        label="Experience"
        title="From the network up."
        lead="A progression of architectural responsibility — operations, service assurance, architecture, BSS/OSS, transformation, AI and modern telecom — and the organisations where it was exercised."
      />

      <Section
        id="progression"
        label="Progression"
        title="Six stages, one direction."
        intro="Each stage added a layer to the same perspective: architecture is only real if the systems that operate, provision and assure a service agree with each other. Organisations are attached to the stages they evidence; this is a map of responsibility, not a chronology."
      >
        <ol className="relative flex flex-col">
          {stages.map(({ stage, index, organisations, achievements }) => {
            const last = index === stages.length - 1;
            return (
              <Reveal key={stage.label} as="li" delay={index * 40}>
                <div className="relative flex gap-5 sm:gap-8">
                  <div className="flex w-6 shrink-0 flex-col items-center">
                    <span className="mt-[7px] h-2 w-2 rounded-full border border-copper bg-copper" aria-hidden="true" />
                    {!last ? <span className="mt-1 w-px flex-1 bg-line-strong" aria-hidden="true" /> : null}
                  </div>
                  <div className={last ? "pb-0" : "pb-12"}>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="t-mono text-[0.66rem] text-paper-3">{String(index + 1).padStart(2, "0")}</span>
                      <Eyebrow as="span" tone="copper">
                        {stage.label}
                      </Eyebrow>
                    </div>
                    <h3 className="t-h3 mt-2 text-paper">{stage.title}</h3>
                    <p className="t-body measure mt-2 text-paper-2">{stage.description}</p>
                    {organisations.length || achievements.length ? (
                      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                        {organisations.map((o) => (
                          <Link
                            key={o.organisation}
                            href={`#${o.organisation.toLowerCase()}`}
                            className="t-meta text-paper transition-colors hover:text-copper"
                          >
                            {o.organisation}
                          </Link>
                        ))}
                        {achievements.map((a) => {
                          const study = getCaseStudy(a.caseStudy);
                          return study ? (
                            <Link key={a.slug} href={caseStudyHref(variant, study)} className="link-ul t-small text-paper-2">
                              {a.title}
                            </Link>
                          ) : null;
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Section>

      <Section
        id="organisations"
        label="Organisations"
        title="Where the work was done."
        intro={`Across ${environments.join(", ").toLowerCase()}. Roles and periods are shown only where confirmed.`}
      >
        <div className="flex flex-col divide-y rule border-y rule">
          {experience.map((entry) => (
            <Reveal key={entry.organisation}>
              <OrganisationDetail entry={entry} variant={variant} />
            </Reveal>
          ))}
        </div>
      </Section>
    </PageTransition>
  );
}
