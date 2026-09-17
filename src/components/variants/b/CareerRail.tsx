import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { journeyWithEvidence } from "@/lib/journey";
import { cn } from "@/lib/cn";
import { vhref } from "@/variants/paths";
import type { VariantId } from "@/variants/types";

/**
 * The six-stage progression as a horizontal rail on desktop (a continuous
 * hairline with brass nodes) and a vertical rail on small screens.
 * Organisations hang off the stages they evidence; no dates are implied.
 */
export function CareerRail({ variant, detailed = false }: { variant: VariantId; detailed?: boolean }) {
  const stages = journeyWithEvidence();
  return (
    <ol className="relative grid grid-cols-1 gap-y-0 lg:grid-cols-6 lg:gap-x-6">
      {stages.map(({ stage, index, organisations }) => {
        const last = index === stages.length - 1;
        return (
          <Reveal key={stage.label} as="li" delay={index * 50}>
            <div className="relative flex gap-5 lg:block">
              {/* Vertical rail (mobile) */}
              <div className="flex w-4 shrink-0 flex-col items-center lg:hidden">
                <span className="mt-[6px] h-2.5 w-2.5 rounded-full bg-copper" aria-hidden="true" />
                {!last ? <span className="mt-1 w-px flex-1 bg-line-strong" aria-hidden="true" /> : null}
              </div>
              {/* Horizontal rail (desktop) */}
              <div className="hidden lg:block" aria-hidden="true">
                <div className="relative h-4">
                  <span className={cn("absolute left-0 top-1/2 h-px w-[calc(100%+1.5rem)] bg-line-strong", last && "w-full")} />
                  <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-copper" />
                </div>
              </div>
              <div className={cn("pb-10 lg:pb-0 lg:pt-5", last && "pb-0")}>
                <p className="ledger-label">
                  {String(index + 1).padStart(2, "0")} · {stage.label}
                </p>
                <h3 className="t-h3 mt-2 text-paper">{stage.title}</h3>
                <p className={cn("t-small mt-2 text-paper-2", !detailed && "lg:hidden xl:block")}>{stage.description}</p>
                {organisations.length ? (
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                    {organisations.map((o) => (
                      <li key={o.organisation}>
                        <Link
                          href={vhref(variant, `/experience#${o.organisation.toLowerCase()}`)}
                          className="t-small text-paper transition-colors hover:text-copper"
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
