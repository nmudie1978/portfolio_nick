import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { Section } from "@/components/layout/Section";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TagList } from "@/components/ui/Tag";
import { ArrowLink } from "@/components/ui/Links";
import { environments, experience, furtherOrganisations, journey } from "@/content/experience";
import { resolveCaseStudies } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Experience",
  description:
    "A career that moved from telecom operations and service assurance through architecture into BSS/OSS, transformation and AI-native telecom — across operators, vendors and managed-service environments.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <PageTransition>
      <PageIntro
        label="Experience"
        title="From the network up."
        lead="Not a chronological CV. A progression of architectural responsibility, and the organisations where it was exercised."
      />

      <Section
        id="journey"
        label="Progression"
        title="Six stages, one direction."
        intro="Each stage added a layer to the same perspective: architecture is only real if the systems that operate, provision and assure a service agree with each other."
      >
        <ol className="relative flex flex-col">
          {journey.map((stage, i) => {
            const last = i === journey.length - 1;
            return (
              <Reveal key={stage.label} as="li" delay={i * 40}>
                <div className="relative flex gap-5 sm:gap-8">
                  <div className="flex w-6 shrink-0 flex-col items-center">
                    <span
                      className="mt-[7px] h-2 w-2 rounded-full border border-copper bg-copper"
                      aria-hidden="true"
                    />
                    {!last ? <span className="mt-1 w-px flex-1 bg-line-strong" aria-hidden="true" /> : null}
                  </div>
                  <div className={last ? "pb-0" : "pb-10"}>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="t-mono text-[0.66rem] text-paper-3">{String(i + 1).padStart(2, "0")}</span>
                      <Eyebrow as="span" tone="copper">
                        {stage.label}
                      </Eyebrow>
                    </div>
                    <h3 className="t-h3 mt-2 text-paper">{stage.title}</h3>
                    <p className="t-body measure mt-2 text-paper-2">{stage.description}</p>
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
          {experience.map((entry) => {
            const studies = resolveCaseStudies(entry.relatedCaseStudies);
            return (
              <Reveal key={entry.organisation}>
                <article className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-3">
                    <h3 className="t-h2 text-paper">{entry.organisation}</h3>
                    {entry.role ? <p className="t-small mt-2 text-paper-2">{entry.role}</p> : null}
                    {entry.period ? (
                      <Eyebrow as="p" className="mt-1">
                        {entry.period}
                      </Eyebrow>
                    ) : null}
                  </div>
                  <div className="md:col-span-9">
                    <Eyebrow as="p" className="mb-2">
                      Context
                    </Eyebrow>
                    <p className="t-body measure text-paper-2">{entry.context}</p>

                    <Eyebrow as="p" className="mb-2 mt-6">
                      Selected achievements
                    </Eyebrow>
                    <ul className="flex flex-col gap-3">
                      {entry.achievements.map((a) => (
                        <li key={a} className="t-body flex gap-3 text-paper">
                          <span className="mt-[0.72em] h-px w-3 shrink-0 bg-copper" aria-hidden="true" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>

                    <Eyebrow as="p" className="mb-3 mt-6">
                      Architecture &amp; transformation themes
                    </Eyebrow>
                    <TagList items={entry.themes} />
                    {entry.technologies?.length ? (
                      <div className="mt-3">
                        <TagList items={entry.technologies} tone="copper" />
                      </div>
                    ) : null}

                    {studies.length ? (
                      <div className="mt-6 flex flex-col gap-2">
                        {studies.map((s) => (
                          <ArrowLink key={s.slug} href={`/case-studies/${s.slug}`}>
                            Case study: {s.title}
                          </ArrowLink>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}

          <Reveal>
            <article className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <h3 className="t-h3 text-paper">Further experience</h3>
              </div>
              <div className="md:col-span-9">
                <p className="t-body measure text-paper-2">
                  Earlier and additional roles include{" "}
                  {furtherOrganisations.map((o, i) => (
                    <span key={o}>
                      <span className="text-paper">{o}</span>
                      {i < furtherOrganisations.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  . Detail is being added.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </Section>
    </PageTransition>
  );
}
