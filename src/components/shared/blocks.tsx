import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowLink, ButtonLink, ExternalLink } from "@/components/ui/Links";
import { TagList } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { person } from "@/content/person";
import type { ExperienceEntry } from "@/content/types";
import { cn } from "@/lib/cn";
import { resolveCaseStudies } from "@/lib/content";
import { caseStudyHref } from "@/lib/routes";

/* ──────────────────────────────────────────────────────────────────────
   Content-heavy blocks shared by all variants. They use only semantic
   tokens, so each variant's palette and type apply automatically; the
   variants differ in how they frame and compose them.
   ────────────────────────────────────────────────────────────────────── */

export const ACADEMY_TOPICS: [string, string][] = [
  ["BSS/OSS", "Catalog, order management, fulfilment, inventory, assurance — end to end"],
  ["TM Forum · SID · eTOM · ODA", "Standards used as a shared language, not a compliance checklist"],
  ["Product & Service Catalog", "Product, service and resource specifications in practice"],
  ["Order Management & Service Fulfilment", "Decomposition, orchestration and activation"],
  ["Service Assurance", "From alarms to services; observability and closed loops"],
  ["Transformation", "Greenfield, hybrid and brownfield patterns, anti-patterns and exit criteria"],
  ["AI in Telecom & AI Infrastructure", "Agentic operations, AI-native OSS and the GPU estate behind them"],
  ["Telco Landscape", "Ongoing research mapping who is doing what, where, with whom and with which technology"],
];

export const ACADEMY_WORK: [string, string][] = [
  ["Transformation Simulator", "Explore how sequencing, coexistence and exit criteria play out in a programme."],
  ["Challenges", "Architecture problems to reason through — the kind that appear in real programmes."],
  ["Architecture frameworks", "Reference structures for catalog-driven BSS/OSS and Order-to-Activation."],
  ["Telecom architecture models", "Layered models of product, service and resource across the lifecycle."],
  ["Educational modules", "Vendor-neutral modules from first principles to transformation strategy."],
  ["Telco Landscape", "Ongoing research: who is doing what, where, with whom and with which technology."],
];

/** The BSS/OSS Academy described as a body of work. */
export function AcademyOverview({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-6">
        <p className="t-lead measure">
          A vendor-neutral educational platform I built to explain and explore modern telecom architecture —
          the concepts I work with every day, written down so that business, IT and vendor teams can share the
          same model of the problem.
        </p>
        <p className="t-body measure mt-5 text-paper-2">
          It covers BSS/OSS from first principles to transformation strategy, uses TM Forum SID, eTOM and ODA
          as a shared vocabulary, and extends into AI in telecom, AI infrastructure and modern telecom
          architecture. It is used for onboarding, programme alignment, glossary decisions and assessing
          architectural reasoning.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={person.links.academy} external>
            Visit the Academy
          </ButtonLink>
          {compact ? (
            <ButtonLink href={person.links.telcoLandscape} external variant="secondary">
              Telco Landscape
            </ButtonLink>
          ) : null}
        </div>
      </div>
      <div className="md:col-span-6">
        <Eyebrow as="p" className="mb-3">
          What it covers
        </Eyebrow>
        <ul className="flex flex-col divide-y rule border-y rule">
          {(compact ? ACADEMY_TOPICS.slice(0, 5) : ACADEMY_TOPICS).map(([t, d]) => (
            <li key={t} className="py-3">
              <p className="t-small font-medium text-paper">{t}</p>
              <p className="t-small text-paper-3">{d}</p>
            </li>
          ))}
        </ul>
        {compact ? (
          <div className="mt-5">
            <ArrowLink href={"/recognition"}>The full body of work</ArrowLink>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/** The elements of the Academy body of work, as a hairline grid. */
export function AcademyWorkGrid({ className }: { className?: string }) {
  return (
    <ul className={cn("grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {ACADEMY_WORK.map(([t, d], i) => (
        <Reveal key={t} as="li" delay={Math.min(i, 5) * 40}>
          <div className="flex h-full flex-col border-t rule pt-4">
            <span className="t-mono text-[0.66rem] text-paper-3">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="t-h3 mt-2 text-paper">{t}</h3>
            <p className="t-small mt-2 text-paper-2">{d}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/** One organisation, in full. Periods and roles render only when verified. */
export function OrganisationDetail({ entry }: { entry: ExperienceEntry }) {
  const studies = resolveCaseStudies(entry.relatedCaseStudies);
  const pending = entry.achievements.length === 0 && entry.scope.length === 0;
  return (
    <article id={entry.organisation.toLowerCase()} className="grid grid-cols-1 gap-4 py-10 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-4">
        <h3 className="t-h2 text-paper">{entry.organisation}</h3>
        <dl className="mt-3 flex flex-col gap-1">
          <div className="flex gap-3">
            <dt className="t-meta w-14 shrink-0 text-paper-3">Role</dt>
            <dd className="t-small text-paper-2">{entry.role ?? "To be confirmed"}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="t-meta w-14 shrink-0 text-paper-3">Period</dt>
            <dd className="t-small text-paper-2">{entry.period ?? "To be confirmed"}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="t-meta w-14 shrink-0 text-paper-3">Based</dt>
            <dd className="t-small text-paper-2">{entry.location}</dd>
          </div>
          {entry.stages.length ? (
            <div className="flex gap-3">
              <dt className="t-meta w-14 shrink-0 text-paper-3">Stage</dt>
              <dd className="t-small text-paper-2">{entry.stages.join(" · ")}</dd>
            </div>
          ) : null}
        </dl>
      </div>
      <div className="md:col-span-8">
        <Eyebrow as="p" className="mb-2">
          Scope
        </Eyebrow>
        <p className="t-body measure text-paper-2">{entry.context}</p>

        {entry.roles?.length ? (
          <>
            <Eyebrow as="p" className="mb-3 mt-6">
              Roles
            </Eyebrow>
            <ol className="flex flex-col divide-y rule border-y rule">
              {entry.roles.map((r) => (
                <li key={`${r.title}-${r.period}`} className="grid grid-cols-1 gap-2 py-4 md:grid-cols-12 md:gap-6">
                  <div className="md:col-span-4">
                    <p className="t-small font-medium text-paper">{r.title}</p>
                    <p className="t-meta mt-1 text-paper-3">
                      {r.period}
                      {r.unit ? ` · ${r.unit}` : null}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-1.5 md:col-span-8">
                    {r.highlights.map((h) => (
                      <li key={h} className="t-small flex gap-3 text-paper-2">
                        <span className="mt-[0.7em] h-px w-3 shrink-0 bg-copper" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </>
        ) : null}

        {!pending ? (
          <>
            {entry.achievements.length ? (
              <>
                <Eyebrow as="p" className="mb-2 mt-6">
                  Selected contribution
                </Eyebrow>
                <ul className="flex flex-col gap-3">
                  {entry.achievements.map((a) => (
                    <li key={a} className="t-body flex gap-3 text-paper">
                      <span className="mt-[0.72em] h-px w-3 shrink-0 bg-copper" aria-hidden="true" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            {entry.scope.length ? (
              <>
                <Eyebrow as="p" className="mb-2 mt-6">
                  Responsibilities
                </Eyebrow>
                <ul className="flex flex-col gap-1">
                  {entry.scope.map((s) => (
                    <li key={s} className="t-small text-paper-2">
                      {s}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            {entry.themes.length ? (
              <>
                <Eyebrow as="p" className="mb-3 mt-6">
                  Themes &amp; technologies
                </Eyebrow>
                <TagList items={entry.themes} />
              </>
            ) : null}
            {entry.technologies?.length ? (
              <div className="mt-3">
                <TagList items={entry.technologies} tone="copper" />
              </div>
            ) : null}
            {studies.length ? (
              <div className="mt-6 flex flex-col gap-2">
                {studies.map((s) => (
                  <ArrowLink key={s.slug} href={caseStudyHref(s)}>
                    Engagement: {s.title}
                  </ArrowLink>
                ))}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </article>
  );
}

/** Contact channels — LinkedIn, email, CV and the Academy. */
export function ContactChannels() {
  const { email, cv, linkedin, academy } = person.links;
  return (
    <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div className="border-t rule pt-4">
        <dt>
          <Eyebrow as="span">LinkedIn</Eyebrow>
        </dt>
        <dd className="mt-2">
          <ExternalLink href={linkedin}>linkedin.com/in/nick-mudie</ExternalLink>
        </dd>
      </div>
      <div className="border-t rule pt-4">
        <dt>
          <Eyebrow as="span">Email</Eyebrow>
        </dt>
        <dd className="mt-2 t-small text-paper-2">
          {email ? (
            <a href={`mailto:${email}`} className="link-ul text-paper">
              {email}
            </a>
          ) : (
            "Available via LinkedIn."
          )}
        </dd>
      </div>
      <div className="border-t rule pt-4">
        <dt>
          <Eyebrow as="span">CV</Eyebrow>
        </dt>
        <dd className="mt-2 t-small text-paper-2">
          {cv ? (
            <a href={cv} className="link-ul text-paper">
              Download CV
            </a>
          ) : (
            "Available on request."
          )}
        </dd>
      </div>
      <div className="border-t rule pt-4">
        <dt>
          <Eyebrow as="span">BSS/OSS Academy</Eyebrow>
        </dt>
        <dd className="mt-2">
          <ExternalLink href={academy}>bssoss-academy.dev</ExternalLink>
        </dd>
      </div>
    </dl>
  );
}

export const CONTACT_TOPICS = [
  "BSS/OSS target architecture and catalog design",
  "Transformation strategy, migration sequencing and coexistence",
  "Service assurance, ITSM and end-to-end service visibility",
  "AI-native and agentic operations — what is real and what is not yet",
  "AI infrastructure as a telecom product and operational domain",
  "TM Forum ODA adoption as an operating model",
];

export function ContactTopics() {
  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
      {CONTACT_TOPICS.map((t) => (
        <li key={t} className="t-body flex gap-3 text-paper-2">
          <span className="mt-[0.72em] h-px w-3 shrink-0 bg-copper" aria-hidden="true" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
