import type { StackLayer } from "@/content/types";

/** Layered stack: top layer is the most abstract, bottom is the most physical. */
export function StackDiagram({ title, layers }: { title?: string; layers: StackLayer[] }) {
  return (
    <figure className="surface my-8 p-5 sm:p-6">
      {title ? <figcaption className="t-meta mb-5 text-paper-3">{title}</figcaption> : null}
      <ol className="flex flex-col">
        {layers.map((l, i) => (
          <li key={l.label} className="flex flex-col">
            <div
              className="flex flex-col gap-1 border border-line bg-ink-3/60 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-6"
              style={{ marginInline: `${i * 4}%` }}
            >
              <span className="font-mono text-[0.78rem] uppercase tracking-[0.08em] text-paper sm:w-32 sm:shrink-0">
                {l.label}
              </span>
              {l.note ? <span className="t-small text-paper-2">{l.note}</span> : null}
            </div>
            {i < layers.length - 1 ? (
              <div className="flex h-5 items-center justify-center" aria-hidden="true">
                <span className="h-full w-px bg-line-strong" />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}
