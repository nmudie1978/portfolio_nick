import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/layout/Section";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowLink, ButtonLink, ExternalLink } from "@/components/ui/Links";
import { CaseStudyCard, InsightCard } from "@/components/ui/Cards";
import { TagList } from "@/components/ui/Tag";
import { person } from "@/content/person";
import { expertise } from "@/content/expertise";
import { experience, furtherOrganisations } from "@/content/experience";
import { featuredCaseStudies } from "@/content/case-studies";
import { featuredInsights } from "@/content/insights";
import { focus } from "@/content/focus";

export default function HomePage() {
  const [lead, ...rest] = featuredCaseStudies;

  return (
    <PageTransition>
      <Hero />

      <Section id="introduction" label="Introduction" title="Architecture that starts from how telecom actually runs.">
        <Reveal>
          <div className="measure flex flex-col gap-5">
            {person.intro.map((p) => (
              <p key={p} className="t-body text-paper-2">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <ArrowLink href="/experience">The career journey</ArrowLink>
          </div>
        </Reveal>
      </Section>

      <Section
        id="expertise"
        label="Expertise"
        title="Seven areas, one architecture."
        intro="The disciplines below are not separate specialisms. They are the layers of a single operator, and the work is in how they connect."
        aside={<ArrowLink href="/expertise">All expertise</ArrowLink>}
      >
        <ol className="flex flex-col divide-y rule border-y rule">
          {expertise.map((area, i) => (
            <Reveal key={area.slug} as="li" delay={Math.min(i, 5) * 40}>
              <Link
                href={`/expertise#${area.slug}`}
                className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 gap-y-1 py-5 transition-colors sm:grid-cols-[2.5rem_14rem_1fr] md:grid-cols-[2.5rem_16rem_1fr]"
              >
                <span className="t-mono text-[0.7rem] text-paper-3">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3 text-paper transition-colors group-hover:text-copper">{area.title}</h3>
                <p className="t-small col-start-2 text-paper-2 sm:col-start-3">{area.summary}</p>
              </Link>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section
        id="experience"
        label="Selected experience"
        title="Operators, vendors and managed-service environments."
        aside={<ArrowLink href="/experience">Full experience</ArrowLink>}
      >
        <div className="flex flex-col divide-y rule border-y rule">
          {experience.map((entry) => (
            <Reveal key={entry.organisation}>
              <div className="grid grid-cols-1 gap-3 py-6 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3">
                  <h3 className="t-h3 text-paper">{entry.organisation}</h3>
                  {entry.role ? <p className="t-small mt-1 text-paper-2">{entry.role}</p> : null}
                  {entry.period ? <Eyebrow as="p" className="mt-1">{entry.period}</Eyebrow> : null}
                </div>
                <div className="md:col-span-9">
                  <ul className="flex flex-col gap-2">
                    {entry.achievements.map((a) => (
                      <li key={a} className="t-body flex gap-3 text-paper-2">
                        <span className="mt-[0.72em] h-px w-3 shrink-0 bg-copper" aria-hidden="true" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <TagList items={entry.themes} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <div className="grid grid-cols-1 gap-3 py-6 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <Eyebrow as="h3">Further experience</Eyebrow>
              </div>
              <div className="md:col-span-9">
                <p className="t-body text-paper-2">
                  Additional experience includes {furtherOrganisations.join(", ")} — across operator, vendor and
                  managed-service perspectives.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        id="case-studies"
        label="Selected case studies"
        title="Evidence, not claims."
        intro="Engagements described at an appropriate level, and architecture patterns drawn from repeated experience. No invented metrics."
        aside={<ArrowLink href="/case-studies">All case studies</ArrowLink>}
      >
        <div className="flex flex-col gap-10">
          <Reveal>
            <CaseStudyCard study={lead} large />
          </Reveal>
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {rest.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <CaseStudyCard study={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="thinking"
        label="How I think"
        title="Architectural viewpoints from practice."
        aside={<ArrowLink href="/thinking">All viewpoints</ArrowLink>}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredInsights.slice(0, 6).map((ins, i) => (
            <Reveal key={ins.slug} delay={Math.min(i, 5) * 60}>
              <InsightCard insight={ins} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="academy" label="BSS/OSS Academy" title="An independent body of work.">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="t-lead measure">
                A vendor-neutral platform for understanding modern telecom BSS/OSS architecture,
                transformation and technology — built to make the concepts I work with every day
                easier to reason about.
              </p>
              <p className="t-body measure mt-5 text-paper-2">
                The Academy covers catalog-driven design, Order-to-Activation, TM Forum ODA, transformation
                patterns and anti-patterns, AI infrastructure and the Telco Landscape — an ongoing map of who
                is doing what, where and with which technology.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={person.links.academy} external>
                  Visit the Academy
                </ButtonLink>
                <ButtonLink href="/academy" variant="secondary">
                  About the Academy
                </ButtonLink>
              </div>
            </div>
            <div className="md:col-span-5">
              <ul className="flex flex-col divide-y rule border-y rule">
                {[
                  ["TM Forum · ODA", "Components, Open APIs and the operating model behind them"],
                  ["Catalog-driven architecture", "Product, service and resource specifications in practice"],
                  ["Order-to-Activation", "Decomposition, orchestration and fulfilment end to end"],
                  ["Transformation", "Migration patterns, anti-patterns and exit criteria"],
                  ["Telco Landscape", "Ecosystem intelligence across operators, vendors and technology"],
                ].map(([t, d]) => (
                  <li key={t} className="py-3">
                    <p className="t-small font-medium text-paper">{t}</p>
                    <p className="t-small text-paper-3">{d}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <ExternalLink href={person.links.telcoLandscape}>Telco Landscape</ExternalLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section
        id="focus"
        label="Current focus"
        title="What I am exploring now."
        intro="Areas where the architecture is still being worked out — stated as exploration, not as established fact."
      >
        <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {focus.map((f, i) => (
            <Reveal key={f.title} as="li" delay={Math.min(i, 7) * 50}>
              <div className="flex h-full flex-col border-t rule pt-4">
                <Eyebrow
                  as="span"
                  tone={f.status === "exploring" ? "signal" : f.status === "building" ? "copper" : "muted"}
                  className="mb-3"
                >
                  {f.status}
                </Eyebrow>
                <h3 className="t-h3 text-paper">{f.title}</h3>
                <p className="t-small mt-2 text-paper-2">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link href="/architecture" className="link-ul t-small text-paper-2">
            Open the Architecture Playground
          </Link>
          <Link href="/contact" className="link-ul t-small text-paper-2">
            Get in touch
          </Link>
        </div>
      </Section>
    </PageTransition>
  );
}
