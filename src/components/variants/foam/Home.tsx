import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { Portrait } from "@/components/ui/Portrait";
import { ArrowLink, ButtonLink } from "@/components/ui/Links";
import { ArchitectureMatrix } from "@/components/architecture/ArchitectureMatrix";
import { AcademyOverview, FocusGrid, ThinkingIndex } from "@/components/shared/blocks";
import { FoamButton, FoamGround, FoamSection, onGround, shape } from "./Foam";
import { FoamTimeline } from "./FoamTimeline";
import { foamTheme } from "./themes";
import { person } from "@/content/person";
import { achievements } from "@/content/achievements";
import { skillDomains } from "@/content/skills";
import { getCaseStudy } from "@/content/case-studies";
import { cn } from "@/lib/cn";
import { caseStudyHref } from "@/lib/routes";
import { vhref } from "@/variants/paths";
import type { VariantProps } from "@/variants/types";

export function Home({ variant }: VariantProps) {
  const t = foamTheme(variant);
  const g = onGround(variant);
  const s = shape(variant);
  const featured = achievements.filter((a) => ["upc-derby", "telia-b2b-bss-oss", "telia-e2e-observability"].includes(a.slug));
  const split = t.heroLayout !== "stacked";
  const reverse = t.heroLayout === "split-reverse";

  const heroText = (
    <div className={cn("flex flex-col justify-center", split ? "lg:col-span-7" : "items-center text-center")}>
      <p className={g.label}>Telecom Architecture · BSS/OSS · Transformation · AI &amp; Modern Telecom</p>
      <h1 id="hero-title" className={cn("t-display mt-6", g.heading)}>
        {person.name}
      </h1>
      <p className={cn("t-h2 mt-6 max-w-[22ch]", g.heading)}>{person.hero.statement}</p>
      <p className={cn("t-lead mt-6 max-w-[56ch]", g.body)}>{person.hero.support}</p>
      <ol className={cn("mt-8 flex flex-wrap items-center gap-x-2 gap-y-2", !split && "justify-center")} aria-label="Career progression">
        {person.journey.map((stage, i) => (
          <li key={stage} className="flex items-center gap-2">
            <span className={cn("text-[0.78rem] font-semibold uppercase tracking-[0.1em]", g.muted)}>{stage}</span>
            {i < person.journey.length - 1 ? (
              <span aria-hidden="true" className={g.accent}>
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <div className={cn("mt-10 flex flex-wrap gap-3", !split && "justify-center")}>
        <FoamButton variant={variant} href={vhref(variant, "/achievements")}>
          What I have delivered
        </FoamButton>
        <FoamButton variant={variant} href={vhref(variant, "/contact")} kind="outline">
          Contact
        </FoamButton>
      </div>
    </div>
  );

  const portrait = (
    <Portrait
      priority
      frame={t.portrait}
      className={cn(
        "mx-auto max-w-[400px]",
        g.light ? "shadow-[0_24px_60px_-24px_rgba(6,44,48,0.5)]" : "shadow-[0_24px_60px_-28px_rgba(20,20,40,0.35)]",
        split && (reverse ? "lg:mr-auto lg:ml-0" : "lg:ml-auto"),
        split && "lg:translate-y-44",
      )}
    />
  );

  const quickFacts =
    t.quickFacts === "bar" ? (
      <dl className={cn("grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4", split && "lg:grid-cols-2 xl:grid-cols-4")}>
        {person.quickFacts.map((f) => (
          <div key={f.label} className="border-l-2 border-copper pl-4">
            <dt className="t-h3 text-paper">{f.value}</dt>
            <dd className="t-small mt-1 text-paper-3">{f.label}</dd>
          </div>
        ))}
      </dl>
    ) : (
      <dl className={cn("grid grid-cols-2 gap-3 md:grid-cols-4", split && "lg:grid-cols-2 xl:grid-cols-4")}>
        {person.quickFacts.map((f) => (
          <div key={f.label} className={cn("border rule bg-ink p-4 md:p-5", s.card)}>
            <dt className="t-h3 text-paper">{f.value}</dt>
            <dd className="t-small mt-1 text-paper-3">{f.label}</dd>
          </div>
        ))}
      </dl>
    );

  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative isolate" aria-labelledby="hero-title">
        <FoamGround variant={variant} />
        <Container className={cn("pt-14 pb-16 md:pt-24 md:pb-24", !split && "md:pb-16")}>
          {split ? (
            <div className={cn("grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12", reverse && "lg:[direction:rtl]")}>
              <div className={cn("lg:col-span-7", reverse && "lg:[direction:ltr]")}>{heroText}</div>
              <div className={cn("lg:col-span-5 lg:self-end", reverse && "lg:[direction:ltr]")}>{portrait}</div>
            </div>
          ) : (
            heroText
          )}
        </Container>
      </section>

      {/* ── Quick facts (+ portrait for the stacked layout) ──────────── */}
      <section className={cn("border-b rule", !split && "bg-ink-2")} aria-label="Quick facts">
        <Container
          className={cn(
            "py-10",
            split && (reverse ? "lg:min-h-[10rem] lg:pt-12 lg:pl-[calc(400px+5rem)]" : "lg:min-h-[10rem] lg:pt-12 lg:pr-[calc(400px+5rem)]"),
          )}
        >
          {split ? (
            quickFacts
          ) : (
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-4">
                <Portrait priority frame={t.portrait} className="mx-auto max-w-[360px] lg:-mt-24 lg:max-w-none" />
              </div>
              <div className="lg:col-span-8">{quickFacts}</div>
            </div>
          )}
        </Container>
      </section>

      {/* ── Profile ───────────────────────────────────────────────────── */}
      <FoamSection variant={variant} id="profile" label="Profile" title="Architecture that starts from how telecom actually runs.">
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
                <li key={d} className={cn("t-small flex gap-3 bg-ink-2 px-4 py-3 text-paper", s.tile)}>
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
        variant={variant}
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
                  className={cn("group flex h-full flex-col border rule bg-ink p-6 transition-colors hover:border-copper", s.card)}
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
        variant={variant}
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
        variant={variant}
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
      <FoamSection variant={variant} id="focus" label="Current focus" title="What I am working on now." intro={person.currentFocus}>
        <FocusGrid limit={4} />
      </FoamSection>

      {/* ── Recognition band + Academy ───────────────────────────────── */}
      <FoamSection
        variant={variant}
        id="recognition"
        label="Recognition"
        title="A body of work, not a blog."
        intro="The BSS/OSS Academy, architecture models and viewpoints — evidence of how I think, built for other people to use."
        tone="band"
        aside={
          <FoamButton variant={variant} href={vhref(variant, "/recognition")}>
            Full recognition
          </FoamButton>
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
              <ButtonLink href={person.links.linkedin} external className={s.button}>
                Connect on LinkedIn
              </ButtonLink>
              <ButtonLink href={vhref(variant, "/contact")} variant="secondary" className={s.button}>
                Contact
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
