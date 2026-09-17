import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Portrait } from "@/components/ui/Portrait";
import { ArrowLink, ButtonLink } from "@/components/ui/Links";
import { ArchitectureMatrix } from "@/components/architecture/ArchitectureMatrix";
import { AcademyOverview, FocusGrid, ThinkingIndex } from "@/components/shared/blocks";
import { person } from "@/content/person";
import { achievements } from "@/content/achievements";
import { journey } from "@/content/experience";
import { skillDomains } from "@/content/skills";
import { getCaseStudy } from "@/content/case-studies";
import { caseStudyHref } from "@/lib/routes";
import { vhref } from "@/variants/paths";
import type { VariantProps } from "@/variants/types";

const FEATURED = ["upc-derby", "telia-b2b-bss-oss", "telia-e2e-observability"];

export function Home({ variant }: VariantProps) {
  const featured = FEATURED.map((s) => achievements.find((a) => a.slug === s)!).filter(Boolean);

  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" aria-labelledby="hero-title">
        <Container className="pt-12 pb-14 md:pt-20 md:pb-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col lg:col-span-7">
              <Eyebrow as="p" tone="copper">
                Telecom Architecture · BSS/OSS · Transformation · AI &amp; Modern Telecom
              </Eyebrow>
              <h1 id="hero-title" className="t-display mt-6">
                {person.name}
              </h1>
              <p className="t-h2 mt-6 max-w-[22ch] text-paper">{person.hero.statement}</p>
              <p className="t-lead measure mt-6">{person.hero.support}</p>

              <ol className="mt-9 flex flex-wrap items-center gap-x-2 gap-y-2" aria-label="Career progression">
                {person.journey.map((stage, i) => (
                  <li key={stage} className="flex items-center gap-2">
                    <span className="t-meta text-paper-2">{stage}</span>
                    {i < person.journey.length - 1 ? (
                      <span aria-hidden="true" className="t-meta text-copper">
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>

              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink href={vhref(variant, "/achievements")}>What I have delivered</ButtonLink>
                <ButtonLink href={vhref(variant, "/contact")} variant="secondary">
                  Contact
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-6">
              <Portrait priority className="mx-auto max-w-[420px] lg:ml-auto" />
            </div>
          </div>
        </Container>

        {/* Quick facts */}
        <Container className="pb-4">
          <dl className="grid grid-cols-2 border-y rule lg:grid-cols-4">
            {person.quickFacts.map((f, i) => (
              <div
                key={f.label}
                className={`flex flex-col gap-1 py-5 pr-4 ${i % 2 === 1 ? "border-l rule pl-5" : ""} ${i >= 2 ? "border-t rule lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-5" : ""}`}
              >
                <dt className="t-h3 text-paper">{f.value}</dt>
                <dd className="t-small text-paper-3">{f.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Profile ───────────────────────────────────────────────────── */}
      <Section id="profile" label="Profile" title="Architecture that starts from how telecom actually runs.">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="measure flex flex-col gap-5">
              {person.bio.map((p) => (
                <p key={p} className="t-body text-paper-2">
                  {p}
                </p>
              ))}
            </div>
            <Eyebrow as="p" className="mt-10 mb-4">
              What differentiates the work
            </Eyebrow>
            <ul className="flex flex-col divide-y rule border-y rule">
              {person.differentiators.map((d, i) => (
                <li key={d} className="flex gap-4 py-3">
                  <span className="t-mono mt-[3px] text-[0.66rem] text-copper">{String(i + 1).padStart(2, "0")}</span>
                  <span className="t-small text-paper">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={80}>
            <ArchitectureMatrix mode="ambient" initialLens="order" />
            <p className="t-small mt-4 text-paper-3">
              The estate as I hold it in my head: layers down, lifecycle across.{" "}
              <Link href={vhref(variant, "/recognition/architecture-model")} className="link-ul text-paper-2">
                Open the interactive model
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ── Selected achievements ─────────────────────────────────────── */}
      <Section
        id="achievements"
        label="Selected achievements"
        title="Delivered, not described."
        intro="Firsts and greenfield programmes inside live operators. Each has a detailed case study; none carries an invented metric."
        aside={<ArrowLink href={vhref(variant, "/achievements")}>All achievements</ArrowLink>}
      >
        <ol className="flex flex-col divide-y rule border-y rule">
          {featured.map((a, i) => {
            const study = getCaseStudy(a.caseStudy);
            return (
              <Reveal key={a.slug} as="li" delay={i * 60}>
                <Link
                  href={study ? caseStudyHref(variant, study) : vhref(variant, "/achievements")}
                  className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 gap-y-2 py-6 md:grid-cols-[2.5rem_10rem_1fr]"
                >
                  <span className="t-mono text-[0.7rem] text-paper-3">{String(i + 1).padStart(2, "0")}</span>
                  <span className="t-meta text-copper">{a.organisation}</span>
                  <span className="col-start-2 md:col-start-3">
                    <span className="t-h3 block text-paper transition-colors group-hover:text-copper">{a.title}</span>
                    <span className="t-small mt-2 block max-w-[62ch] text-paper-2">{a.headline}</span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ol>
      </Section>

      {/* ── Career progression ────────────────────────────────────────── */}
      <Section
        id="progression"
        label="Career progression"
        title="From the network up."
        intro="Not many telecom jobs — one direction: deep operational experience, then architecture, then transformation, then the technology now changing both."
        aside={<ArrowLink href={vhref(variant, "/experience")}>Full experience</ArrowLink>}
      >
        <ol className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-6">
          {journey.map((s, i) => (
            <Reveal key={s.label} as="li" delay={i * 40}>
              <div className="relative border-t rule pt-4">
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-px w-8 bg-copper"
                />
                <span className="t-mono text-[0.66rem] text-paper-3">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-meta mt-2 text-paper">{s.label}</h3>
                <p className="t-small mt-2 text-paper-2">{s.title}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ── Skills ────────────────────────────────────────────────────── */}
      <Section
        id="skills"
        label="Skills"
        title="Five domains, one architecture."
        aside={<ArrowLink href={vhref(variant, "/skills")}>All skills</ArrowLink>}
      >
        <ol className="flex flex-col divide-y rule border-y rule">
          {skillDomains.map((d, i) => (
            <Reveal key={d.slug} as="li" delay={i * 40}>
              <Link
                href={vhref(variant, `/skills#${d.slug}`)}
                className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 gap-y-1 py-5 md:grid-cols-[2.5rem_16rem_1fr]"
              >
                <span className="t-mono text-[0.7rem] text-paper-3">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3 text-paper transition-colors group-hover:text-copper">{d.title}</h3>
                <p className="t-small col-start-2 text-paper-2 md:col-start-3">{d.skills.slice(0, 6).join(" · ")}</p>
              </Link>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ── Current focus ─────────────────────────────────────────────── */}
      <Section id="focus" label="Current focus" title="What I am working on now." intro={person.currentFocus}>
        <FocusGrid limit={4} />
      </Section>

      {/* ── Recognition ───────────────────────────────────────────────── */}
      <Section
        id="recognition"
        label="Recognition"
        title="A body of work, not a blog."
        intro="The BSS/OSS Academy, architecture models and viewpoints — evidence of how I think, built for other people to use."
        aside={<ArrowLink href={vhref(variant, "/recognition")}>Full recognition</ArrowLink>}
      >
        <Reveal>
          <AcademyOverview variant={variant} compact />
        </Reveal>
        <Eyebrow as="p" className="mt-14 mb-6">
          Selected thinking
        </Eyebrow>
        <ThinkingIndex variant={variant} limit={3} />
      </Section>

      {/* ── Contact ───────────────────────────────────────────────────── */}
      <Section id="contact" label="Contact" title="Architecture, transformation, operations — or a second opinion." tight>
        <p className="t-body measure text-paper-2">
          The most useful conversations start with a specific problem: a catalog that no one consumes, a
          migration with no exit, an assurance stack that cannot name a service.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={person.links.linkedin} external>
            Connect on LinkedIn
          </ButtonLink>
          <ButtonLink href={vhref(variant, "/contact")} variant="secondary">
            Contact details
          </ButtonLink>
        </div>
      </Section>
    </PageTransition>
  );
}
