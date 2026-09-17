import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { Portrait } from "@/components/ui/Portrait";
import { ArrowLink, ButtonLink } from "@/components/ui/Links";
import { ArchitectureMatrix } from "@/components/architecture/ArchitectureMatrix";
import { AcademyOverview } from "@/components/shared/blocks";
import { Ground, GroundButton, PageSection, onGround, shape } from "./primitives";
import { THEME } from "./theme";
import { AchievementCarousel } from "./AchievementCarousel";
import { person } from "@/content/person";
import { skillDomains } from "@/content/skills";
import { cn } from "@/lib/cn";

export function Home() {
  const t = THEME;
  const g = onGround();
  const s = shape();
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
      <p className={cn("t-small mt-5 flex flex-wrap items-center gap-x-2", g.muted)}>
        <span className={cn("font-semibold uppercase tracking-[0.1em] text-[0.72rem]", g.accent)}>Now</span>
        <span className={g.heading}>{person.currentRole.title}</span>
        <span aria-hidden="true">·</span>
        {person.currentRole.href ? (
          <a href={person.currentRole.href} target="_blank" rel="noopener noreferrer" className={cn("link-ul", g.heading)}>
            {person.currentRole.organisation}
          </a>
        ) : (
          <span className={g.heading}>{person.currentRole.organisation}</span>
        )}
        <span aria-hidden="true">·</span>
        <span>{person.currentRole.location}</span>
      </p>
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
        <Ground />
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
      <PageSection id="profile" label="Profile" title="Architecture that starts from how telecom actually runs.">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="flex max-w-[62ch] flex-col gap-5">
              {person.bio.map((p) => (
                <p key={p} className="t-body text-paper-2">
                  {p}
                </p>
              ))}
            </div>
            <p className="section-label mt-10 mb-4">What differentiates the work</p>
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
            <ArchitectureMatrix mode="ambient" initialLens="order" />
          </Reveal>
        </div>
      </PageSection>

      {/* ── Achievements ─────────────────────────────────────────────── */}
      <PageSection
        id="achievements"
        label="Selected achievements"
        title="Delivered, not described."
        intro="Firsts, greenfield programmes and modernisations inside live operators. Each has a detailed engagement write-up; none carries an invented metric."
        aside={<ArrowLink href={"/achievements"}>All achievements</ArrowLink>}
        tone="tint"
      >
        <AchievementCarousel />
      </PageSection>

      {/* ── Skills ────────────────────────────────────────────────────── */}
      <PageSection
        id="skills"
        label="Skills"
        title="Five domains, one architecture."
        aside={<ArrowLink href={"/skills"}>All skills</ArrowLink>}
        tone="tint"
      >
        <ol className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {skillDomains.map((d, i) => (
            <Reveal key={d.slug} as="li" delay={i * 40}>
              <Link href={`/skills#${d.slug}`} className="group block border-t-2 border-copper/60 pt-4 transition-colors hover:border-copper">
                <span className="text-[0.72rem] font-bold text-paper-3">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3 mt-1 text-paper transition-colors group-hover:text-copper">{d.title}</h3>
                <p className="t-small mt-2 text-paper-2">{d.skills.slice(0, 5).join(" · ")}</p>
              </Link>
            </Reveal>
          ))}
        </ol>
      </PageSection>

      {/* ── Recognition band + Academy ───────────────────────────────── */}
      <PageSection
        id="recognition"
        label="Recognition"
        title="A body of work, not a blog."
        intro="The BSS/OSS Academy, architecture models and viewpoints — evidence of how I think, built for other people to use."
        tone="band"
        aside={
          <GroundButton href={"/recognition"}>
            Full recognition
          </GroundButton>
        }
      />
      <section className="py-16 md:py-24" aria-label="BSS/OSS Academy">
        <Container>
          <Reveal>
            <AcademyOverview compact />
          </Reveal>
        </Container>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────── */}
      <section className="border-t rule bg-ink-2 py-16 md:py-24" aria-labelledby="contact-title">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="section-label">Contact</p>
              <h2 id="contact-title" className="t-h2 mt-3 max-w-[22ch] text-paper">
                Discuss an engagement, an architecture, or a second opinion.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              <ButtonLink href={person.links.linkedin} external className={s.button}>
                Connect on LinkedIn
              </ButtonLink>
              <ButtonLink href={"/contact"} variant="secondary" className={s.button}>
                Contact
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
