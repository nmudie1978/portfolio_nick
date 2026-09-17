import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { Portrait } from "@/components/ui/Portrait";
import { GradientBackground } from "@/components/ui/marine-foam";
import { ArrowLink, ButtonLink } from "@/components/ui/Links";
import { ArchitectureMatrix } from "@/components/architecture/ArchitectureMatrix";
import { AcademyOverview, FocusGrid, ThinkingIndex } from "@/components/shared/blocks";
import { FoamButton, FoamSection } from "./Foam";
import { FoamTimeline } from "./FoamTimeline";
import { person } from "@/content/person";
import { achievements } from "@/content/achievements";
import { skillDomains } from "@/content/skills";
import { getCaseStudy } from "@/content/case-studies";
import { caseStudyHref } from "@/lib/routes";
import { vhref } from "@/variants/paths";
import type { VariantProps } from "@/variants/types";

export function Home({ variant }: VariantProps) {
  const featured = achievements.filter((a) => ["upc-derby", "telia-b2b-bss-oss", "telia-e2e-observability"].includes(a.slug));

  return (
    <PageTransition>
      {/* ── Hero on the Marine Foam gradient ──────────────────────────── */}
      <section className="relative isolate" aria-labelledby="hero-title">
        <GradientBackground className="absolute inset-0 -z-10" />
        {/* Scrim: keeps light type legible over the mid-teal band without flattening the foam. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(6,44,48,0.7)_0%,rgba(6,44,48,0.32)_50%,rgba(6,44,48,0)_100%)]"
        />
        <Container className="pt-14 pb-16 md:pt-24 md:pb-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="foam-label on-foam">Telecom Architecture · BSS/OSS · Transformation · AI &amp; Modern Telecom</p>
              <h1 id="hero-title" className="t-display mt-6 text-white">
                {person.name}
              </h1>
              <p className="t-h2 mt-6 max-w-[22ch] text-white">{person.hero.statement}</p>
              <p className="t-lead mt-6 max-w-[56ch] text-white/85">{person.hero.support}</p>
              <ol className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2" aria-label="Career progression">
                {person.journey.map((stage, i) => (
                  <li key={stage} className="flex items-center gap-2">
                    <span className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-white/80">{stage}</span>
                    {i < person.journey.length - 1 ? (
                      <span aria-hidden="true" className="text-[#bfeee4]">
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
              <div className="mt-10 flex flex-wrap gap-3">
                <FoamButton href={vhref(variant, "/achievements")}>What I have delivered</FoamButton>
                <FoamButton href={vhref(variant, "/contact")} variant="outline">
                  Contact
                </FoamButton>
              </div>
            </div>
            <div className="lg:col-span-5 lg:self-end">
              <Portrait
                priority
                frame="soft"
                className="mx-auto max-w-[400px] shadow-[0_24px_60px_-24px_rgba(6,44,48,0.5)] lg:ml-auto lg:translate-y-44"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Quick facts ──────────────────────────────────────────────── */}
      <section className="border-b rule" aria-label="Quick facts">
        <Container className="py-10 lg:min-h-[10rem] lg:pt-12 lg:pr-[calc(400px+3rem)]">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {person.quickFacts.map((f) => (
              <div key={f.label} className="border-l-2 border-copper pl-4">
                <dt className="t-h3 text-paper">{f.value}</dt>
                <dd className="t-small mt-1 text-paper-3">{f.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Profile ───────────────────────────────────────────────────── */}
      <FoamSection id="profile" label="Profile" title="Architecture that starts from how telecom actually runs.">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="flex max-w-[62ch] flex-col gap-5">
              {person.bio.map((p) => (
                <p key={p} className="t-body text-paper-2">
                  {p}
                </p>
              ))}
            </div>
            <p className="foam-label mt-10 mb-4">What differentiates the work</p>
            <ul className="flex flex-col gap-3">
              {person.differentiators.map((d) => (
                <li key={d} className="t-small flex gap-3 rounded-lg bg-ink-2 px-4 py-3 text-paper">
                  <span aria-hidden="true" className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-copper" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={80}>
            <ArchitectureMatrix mode="ambient" initialLens="order" exploreHref={vhref(variant, "/recognition/architecture-model")} />
            <p className="t-small mt-4 text-paper-3">
              The estate as I hold it in my head: layers down, lifecycle across.{" "}
              <Link href={vhref(variant, "/recognition/architecture-model")} className="link-ul text-paper-2">
                Open the interactive model
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </FoamSection>

      {/* ── Achievements ─────────────────────────────────────────────── */}
      <FoamSection
        id="achievements"
        label="Selected achievements"
        title="Delivered, not described."
        intro="Firsts and greenfield programmes inside live operators. Each has a detailed case study; none carries an invented metric."
        aside={<ArrowLink href={vhref(variant, "/achievements")}>All achievements</ArrowLink>}
        tone="tint"
      >
        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((a, i) => {
            const study = getCaseStudy(a.caseStudy);
            return (
              <Reveal key={a.slug} as="li" delay={i * 60}>
                <Link
                  href={study ? caseStudyHref(variant, study) : vhref(variant, "/achievements")}
                  className="group flex h-full flex-col rounded-xl border rule bg-ink p-6 transition-colors hover:border-copper"
                >
                  <span className="foam-label">{a.organisation}</span>
                  <span className="t-h3 mt-3 block text-paper transition-colors group-hover:text-copper">{a.title}</span>
                  <span className="t-small mt-3 block text-paper-2">{a.headline}</span>
                  <span className="t-small mt-auto pt-6 font-semibold text-copper">Read the case study →</span>
                </Link>
              </Reveal>
            );
          })}
        </ol>
      </FoamSection>

      {/* ── Career ────────────────────────────────────────────────────── */}
      <FoamSection
        id="career"
        label="Career progression"
        title="From the network up."
        intro="Not many telecom jobs — one direction: deep operational experience, then architecture, then transformation, then the technology now changing both."
        aside={<ArrowLink href={vhref(variant, "/experience")}>Full experience</ArrowLink>}
      >
        <FoamTimeline variant={variant} />
      </FoamSection>

      {/* ── Skills ────────────────────────────────────────────────────── */}
      <FoamSection
        id="skills"
        label="Skills"
        title="Five domains, one architecture."
        aside={<ArrowLink href={vhref(variant, "/skills")}>All skills</ArrowLink>}
        tone="tint"
      >
        <ol className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {skillDomains.map((d, i) => (
            <Reveal key={d.slug} as="li" delay={i * 40}>
              <Link href={vhref(variant, `/skills#${d.slug}`)} className="group block border-t-2 border-copper/60 pt-4 transition-colors hover:border-copper">
                <span className="text-[0.72rem] font-bold text-paper-3">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3 mt-1 text-paper transition-colors group-hover:text-copper">{d.title}</h3>
                <p className="t-small mt-2 text-paper-2">{d.skills.slice(0, 5).join(" · ")}</p>
              </Link>
            </Reveal>
          ))}
        </ol>
      </FoamSection>

      {/* ── Focus ─────────────────────────────────────────────────────── */}
      <FoamSection id="focus" label="Current focus" title="What I am working on now." intro={person.currentFocus}>
        <FocusGrid limit={4} />
      </FoamSection>

      {/* ── Recognition band + Academy ───────────────────────────────── */}
      <FoamSection
        id="recognition"
        label="Recognition"
        title="A body of work, not a blog."
        intro="The BSS/OSS Academy, architecture models and viewpoints — evidence of how I think, built for other people to use."
        tone="band"
        aside={
          <FoamButton href={vhref(variant, "/recognition")}>Full recognition</FoamButton>
        }
      />
      <section className="py-16 md:py-24" aria-label="BSS/OSS Academy">
        <Container>
          <Reveal>
            <AcademyOverview variant={variant} compact />
          </Reveal>
          <p className="foam-label mt-14 mb-6">Selected thinking</p>
          <ThinkingIndex variant={variant} limit={3} />
        </Container>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────── */}
      <section className="border-t rule bg-ink-2 py-16 md:py-24" aria-labelledby="contact-title">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="foam-label">Contact</p>
              <h2 id="contact-title" className="t-h2 mt-3 max-w-[22ch] text-paper">
                Discuss an engagement, an architecture, or a second opinion.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              <ButtonLink href={person.links.linkedin} external className="rounded-full">
                Connect on LinkedIn
              </ButtonLink>
              <ButtonLink href={vhref(variant, "/contact")} variant="secondary" className="rounded-full">
                Contact
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
