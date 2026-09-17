import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowLink } from "@/components/ui/Links";
import { TagList } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import type { ExperienceEntry, ExperienceRole } from "@/content/types";
import { resolveCaseStudies } from "@/lib/content";
import { caseStudyHref } from "@/lib/routes";
import { cn } from "@/lib/cn";

/**
 * The career most recent first: one organisation per block, its roles on a
 * hairline spine, latest role at the top. The organisation column carries what
 * is true of the whole tenure — span, base, context, technologies and the
 * engagement write-ups; the spine carries what each role delivered.
 */

function startYear(period: string | null | undefined): number | null {
  const m = period?.match(/\d{4}/);
  return m ? Number(m[0]) : null;
}

function mostRecentFirst(entries: ExperienceEntry[]) {
  const withYear = entries.map((entry) => {
    const roles = [...(entry.roles ?? [])].sort(
      (a, b) => (startYear(b.period) ?? -Infinity) - (startYear(a.period) ?? -Infinity),
    );
    const latest = startYear(roles[0]?.period) ?? startYear(entry.period);
    return { entry, roles, latest };
  });
  // Undated organisations are the current one; they lead.
  return withYear.sort((a, b) => (b.latest ?? Infinity) - (a.latest ?? Infinity));
}

function Role({ role }: { role: ExperienceRole }) {
  return (
    <li className="relative grid grid-cols-1 gap-1 pb-7 last:pb-0 md:grid-cols-[6.5rem_1fr] md:gap-x-8">
      <span
        aria-hidden="true"
        className="absolute -left-[26px] top-[0.45rem] h-[9px] w-[9px] rounded-full border-2 border-copper bg-ink"
      />
      <span className="t-mono pt-[0.2rem] text-paper-3">{role.period}</span>
      <div>
        <h4 className="t-body font-semibold text-paper">
          {role.title}
          {role.unit ? <span className="ml-2 text-[0.78rem] font-medium text-paper-3">{role.unit}</span> : null}
        </h4>
        <ul className="mt-2 flex flex-col gap-1.5">
          {role.highlights.map((h) => (
            <li key={h} className="t-small text-paper-2">
              {h}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function SpineTimeline({ entries }: { entries: ExperienceEntry[] }) {
  const ordered = mostRecentFirst(entries);
  return (
    <div className="flex flex-col divide-y rule border-y rule">
      {ordered.map(({ entry, roles }, i) => {
        const studies = resolveCaseStudies(entry.relatedCaseStudies);
        return (
          <Reveal key={entry.organisation} delay={Math.min(i, 4) * 40}>
            <article
              id={entry.organisation.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-4">
                <h3 className="t-h2 text-paper">{entry.organisation}</h3>
                <p className="t-mono mt-2 text-paper-3">
                  {entry.period ?? "To be confirmed"} · {entry.location}
                </p>
                <p className="t-small mt-4 max-w-[36ch] text-paper-2">{entry.context}</p>
                {entry.technologies?.length ? (
                  <div className="mt-4">
                    <TagList items={entry.technologies} tone="copper" />
                  </div>
                ) : null}
                {studies.length ? (
                  <div className="mt-5 flex flex-col gap-2">
                    {studies.map((s) => (
                      <ArrowLink key={s.slug} href={caseStudyHref(s)}>
                        Engagement: {s.title}
                      </ArrowLink>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="md:col-span-8">
                {roles.length ? (
                  <ol
                    className={cn(
                      "relative pl-7",
                      "before:absolute before:bottom-2 before:left-[6px] before:top-2 before:w-px before:bg-line-strong",
                    )}
                  >
                    {roles.map((r) => (
                      <Role key={`${r.title}-${r.period}`} role={r} />
                    ))}
                  </ol>
                ) : (
                  <>
                    <Eyebrow as="p" className="mb-2">
                      Scope
                    </Eyebrow>
                    <ul className="flex flex-col gap-1">
                      {entry.scope.map((s) => (
                        <li key={s} className="t-small text-paper-2">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
