import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

/**
 * Executive Ledger section: a full-width heading row — small-caps label,
 * serif title on the left, lead on the right — above the content. Distinct
 * from the drafting-sheet Section used by variant A.
 */
export function LedgerSection({
  id,
  label,
  title,
  intro,
  aside,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  label: string;
  title: string;
  intro?: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "raised";
}) {
  const hid = `${id ?? label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`;
  return (
    <section
      id={id}
      aria-labelledby={hid}
      className={cn("border-t rule py-16 md:py-24", tone === "raised" && "bg-ink-2", className)}
    >
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <p className="ledger-label">{label}</p>
            <h2 id={hid} className="t-h2 mt-3 max-w-[20ch] text-paper">
              {title}
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4 md:col-span-6">
            {intro ? <p className="t-lead max-w-[50ch]">{intro}</p> : null}
            {aside ? <div>{aside}</div> : null}
          </div>
        </div>
        <div className="mt-12 md:mt-16">{children}</div>
      </Container>
    </section>
  );
}

/** A ledger table: hairline rows of label | value. */
export function LedgerTable({
  rows,
  caption,
  className,
}: {
  rows: { label: string; value: React.ReactNode }[];
  caption?: string;
  className?: string;
}) {
  return (
    <dl className={cn("border-t rule", className)}>
      {caption ? <p className="ledger-label pt-4 pb-2">{caption}</p> : null}
      {rows.map((r) => (
        <div key={r.label} className="grid grid-cols-[7rem_1fr] gap-4 border-b rule py-3 sm:grid-cols-[9rem_1fr]">
          <dt className="t-small text-paper-3">{r.label}</dt>
          <dd className="t-small text-paper">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
