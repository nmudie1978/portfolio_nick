import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { journeyWithEvidence } from "@/lib/journey";
import { cn } from "@/lib/cn";
import { vhref } from "@/variants/paths";
import type { VariantId } from "@/variants/types";
import { foamTheme } from "./themes";
import { shape } from "./Foam";

/**
 * Timeline: on large screens six steps along a line — a rising staircase
 * or a flat rail, per theme; on small screens a vertical list. Organisations are attached
 * to the stages they evidence; no dates are implied.
 */
export function FoamTimeline({ variant, detailed = false }: { variant: VariantId; detailed?: boolean }) {
  const stages = journeyWithEvidence();
  const stepped = foamTheme(variant).timeline === "stepped";
  const s = shape(variant);
  return (
    <ol className="grid grid-cols-1 gap-y-2 lg:grid-cols-6 lg:gap-x-4">
      {stages.map(({ stage, index, organisations }) => {
        const last = index === stages.length - 1;
        return (
          <Reveal key={stage.label} as="li" delay={index * 50}>
            <div className="relative flex gap-5 lg:block">
              <div className="flex w-4 shrink-0 flex-col items-center lg:hidden">
                <span className="mt-[6px] h-3 w-3 rounded-full border-2 border-copper bg-ink" aria-hidden="true" />
                {!last ? <span className="mt-1 w-px flex-1 bg-line-strong" aria-hidden="true" /> : null}
              </div>
              <div className="hidden lg:block" aria-hidden="true" style={{ paddingTop: stepped ? `${(5 - index) * 14}px` : 0 }}>
                <div className="relative h-4">
                  <span className={cn("absolute left-0 top-1/2 h-[2px] w-[calc(100%+1rem)] bg-line-strong", last && "w-full")} />
                  <span className="absolute left-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-copper bg-ink" />
                </div>
              </div>
              <div className={cn("pb-8 lg:pb-0 lg:pt-4", last && "pb-0")}>
                <p className="foam-label">
                  {String(index + 1).padStart(2, "0")} · {stage.label}
                </p>
                <h3 className="t-h3 mt-2 text-paper">{stage.title}</h3>
                <p className={cn("t-small mt-2 text-paper-2", !detailed && "lg:hidden xl:block")}>{stage.description}</p>
                {organisations.length ? (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {organisations.map((o) => (
                      <li key={o.organisation}>
                        <Link
                          href={vhref(variant, `/experience#${o.organisation.toLowerCase()}`)}
                          className={cn("inline-block bg-copper-soft px-3 py-1 text-[0.78rem] font-semibold text-copper transition-colors hover:bg-copper hover:text-white", s.chip)}
                        >
                          {o.organisation}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}
