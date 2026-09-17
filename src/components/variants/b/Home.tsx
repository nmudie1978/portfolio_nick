import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { Portrait } from "@/components/ui/Portrait";
import { ArrowLink, ButtonLink } from "@/components/ui/Links";
import { TagList } from "@/components/ui/Tag";
import { ArchitectureMatrix } from "@/components/architecture/ArchitectureMatrix";
import { AcademyOverview, FocusGrid, ThinkingIndex } from "@/components/shared/blocks";
import { LedgerSection, LedgerTable } from "./Ledger";
import { CareerRail } from "./CareerRail";
import { person } from "@/content/person";
import { achievements } from "@/content/achievements";
import { organisations } from "@/content/experience";
import { skillDomains } from "@/content/skills";
import { getCaseStudy } from "@/content/case-studies";
import { caseStudyHref } from "@/lib/routes";
import { vhref } from "@/variants/paths";
import type { VariantProps } from "@/variants/types";

export function Home({ variant }: VariantProps) {
  const featured = achievements.filter((a) => ["upc-derby", "telia-b2b-bss-oss", "telia-e2e-observability", "telia-hybrid-cloud"].includes(a.slug));

  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-ink-2" aria-labelledby="hero-title">
        <Container className="pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Portrait priority frame="soft" className="mx-auto max-w-[360px] lg:max-w-none" />
            </div>
            <div className="flex flex-col justify-center lg:col-span-8">
              <p className="ledger-label">Telecom architecture · BSS/OSS · Transformation · AI &amp; modern telecom</p>
              <h1 id="hero-title" className="t-display mt-5 text-paper">
                {person.name}
              </h1>
              <p className="mt-6 font-display text-[clamp(1.5rem,2.6vw,2.2rem)] italic leading-[1.15] text-paper-2">
                {person.hero.statement}
              </p>
              <p className="t-body mt-6 max-w-[58ch] text-paper-2">{person.hero.support}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href={vhref(variant, "/achievements")}>Achievements</ButtonLink>
                <ButtonLink href={vhref(variant, "/experience")} variant="secondary">
                  Career
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Profile + Quick facts ─────────────────────────────────────── */}
      <LedgerSection
        id="profile"
        label="Profile"
        title="Twenty-five years inside operator technology — operated, then designed, then transformed."
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="flex max-w-[64ch] flex-col gap-5">
              {person.bio.map((p) => (
                <p key={p} className="t-body text-paper-2 first:text-paper first:text-[1.08rem]">
                  {p}
                </p>
              ))}
            </div>
            <p className="ledger-label mt-10 mb-4">What differentiates the work</p>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {person.differentiators.map((d) => (
                <li key={d} className="t-small flex gap-3 text-paper">
                  <span aria-hidden="true" className="mt-[0.65em] h-px w-4 shrink-0 bg-copper" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={80}>
            <div className="border rule bg-ink-2 p-6 md:p-8">
              <p className="ledger-label">Quick facts</p>
              <LedgerTable
                className="mt-4"
                rows={[
                  { label: "Experience", value: "25+ years in telecom technology" },
                  { label: "Organisations", value: organisations.join(" · ") },
                  { label: "Environments", value: "Operators, vendors and managed-service environments" },
                  { label: "Domain", value: "BSS/OSS architecture and transformation" },
                  { label: "Current focus", value: "AI and modern telecom" },
                  { label: "Body of work", value: <a href={person.links.academy} target="_blank" rel="noopener noreferrer" className="link-ul">BSS/OSS Academy</a> },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </LedgerSection>

      {/* ── Career rail ───────────────────────────────────────────────── */}
      <LedgerSection
        id="career"
        label="Career progression"
        title="Operations to architecture to transformation to modern telecom."
        intro="Not many telecom jobs — one direction. Deep operational experience first, then the architecture of the systems that run an operator, then the programmes that change them while they run."
        aside={<ArrowLink href={vhref(variant, "/experience")}>Full experience</ArrowLink>}
        tone="raised"
      >
        <CareerRail variant={variant} />
      </LedgerSection>

      {/* ── Achievements ledger ───────────────────────────────────────── */}
      <LedgerSection
        id="achievements"
        label="Major achievements"
        title="Delivered inside live operators."
        intro="Firsts and greenfield programmes. Each links to a case study written at the level the engagement allows, without invented metrics."
        aside={<ArrowLink href={vhref(variant, "/achievements")}>All achievements</ArrowLink>}
      >
        <ol className="border-t rule">
          {featured.map((a, i) => {
            const study = getCaseStudy(a.caseStudy);
            return (
              <Reveal key={a.slug} as="li" delay={i * 50}>
                <Link
                  href={study ? caseStudyHref(variant, study) : vhref(variant, "/achievements")}
                  className="group grid grid-cols-[3.5rem_1fr] items-start gap-x-4 gap-y-3 border-b rule py-7 md:grid-cols-[4rem_10rem_1fr_auto] md:gap-x-8"
                >
                  <span className="font-display text-[2rem] leading-none text-paper-3 transition-colors group-hover:text-copper">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="ledger-label pt-2">{a.organisation}</span>
                  <span className="col-start-2 md:col-start-3">
                    <span className="t-h3 block text-paper transition-colors group-hover:text-copper">{a.title}</span>
                    <span className="t-small mt-2 block max-w-[64ch] text-paper-2">{a.headline}</span>
                  </span>
                  <span className="t-small col-start-2 self-center text-paper-3 md:col-start-4">
                    Case study <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ol>
      </LedgerSection>

      {/* ── Skills ────────────────────────────────────────────────────── */}
      <LedgerSection
        id="skills"
        label="Skills"
        title="Five professional domains."
        aside={<ArrowLink href={vhref(variant, "/skills")}>All skills</ArrowLink>}
        tone="raised"
      >
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {skillDomains.map((d, i) => (
            <Reveal key={d.slug} delay={i * 40}>
              <div className="border-t rule pt-4">
                <h3 className="t-h3 text-paper">{d.title}</h3>
                <p className="t-small mt-2 text-paper-3">{d.summary}</p>
                <div className="mt-4">
                  <TagList items={d.skills.slice(0, 6)} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </LedgerSection>

      {/* ── Architecture + focus ──────────────────────────────────────── */}
      <LedgerSection
        id="focus"
        label="Current focus"
        title="What I am working on now."
        intro={person.currentFocus}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <FocusGrid limit={4} columns={2} />
          </div>
          <Reveal className="lg:col-span-6" delay={80}>
            <ArchitectureMatrix mode="ambient" initialLens="assurance" exploreHref={vhref(variant, "/recognition/architecture-model")} />
            <p className="t-small mt-4 text-paper-3">
              The model behind the work.{" "}
              <Link href={vhref(variant, "/recognition/architecture-model")} className="link-ul text-paper-2">
                Open the interactive architecture model
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </LedgerSection>

      {/* ── Recognition ───────────────────────────────────────────────── */}
      <LedgerSection
        id="recognition"
        label="Recognition"
        title="A substantial body of work: the BSS/OSS Academy."
        aside={<ArrowLink href={vhref(variant, "/recognition")}>Full recognition</ArrowLink>}
        tone="raised"
      >
        <Reveal>
          <AcademyOverview variant={variant} compact />
        </Reveal>
        <p className="ledger-label mt-14 mb-6">Selected thinking</p>
        <ThinkingIndex variant={variant} limit={3} />
      </LedgerSection>

      {/* ── Contact ───────────────────────────────────────────────────── */}
      <section className="border-t rule py-16 md:py-24" aria-labelledby="contact-title">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="ledger-label">Contact</p>
              <h2 id="contact-title" className="t-h2 mt-3 max-w-[22ch] text-paper">
                Discuss an engagement, an architecture, or a second opinion.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              <ButtonLink href={person.links.linkedin} external>
                Connect on LinkedIn
              </ButtonLink>
              <ButtonLink href={vhref(variant, "/contact")} variant="secondary">
                Contact
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
