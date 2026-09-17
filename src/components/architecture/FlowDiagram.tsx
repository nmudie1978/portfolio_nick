import type { FlowStep } from "@/content/types";
import { cn } from "@/lib/cn";

/**
 * Vertical flow: an ordered sequence of nodes joined by hairline connectors.
 * Numbering is used because the steps genuinely are a sequence.
 */
export function FlowDiagram({ title, steps }: { title?: string; steps: FlowStep[] }) {
  return (
    <figure className="surface my-8 p-5 sm:p-6">
      {title ? (
        <figcaption className="t-meta mb-5 text-paper-3">{title}</figcaption>
      ) : null}
      <ol className="relative flex flex-col">
        {steps.map((s, i) => {
          const last = i === steps.length - 1;
          const tone = s.tone ?? "muted";
          return (
            <li key={`${s.label}-${i}`} className="relative flex gap-4 sm:gap-5">
              <div className="flex w-6 shrink-0 flex-col items-center">
                <span
                  className={cn(
                    "mt-[9px] h-2 w-2 shrink-0 rounded-full border",
                    tone === "copper" && "border-copper bg-copper",
                    tone === "signal" && "border-signal bg-signal",
                    tone === "muted" && "border-paper-3 bg-ink",
                  )}
                  aria-hidden="true"
                />
                {!last ? <span className="mt-1 w-px flex-1 bg-line-strong" aria-hidden="true" /> : null}
              </div>
              <div className={cn("flex-1 pb-5", last && "pb-0")}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="t-mono text-[0.66rem] text-paper-3">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={cn(
                      "font-mono text-[0.8rem] uppercase tracking-[0.08em]",
                      tone === "copper" ? "text-copper" : tone === "signal" ? "text-signal" : "text-paper",
                    )}
                  >
                    {s.label}
                  </span>
                </div>
                {s.note ? <p className="t-small mt-1 text-paper-2">{s.note}</p> : null}
              </div>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
