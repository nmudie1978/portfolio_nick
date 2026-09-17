import type { ContentBlock } from "@/content/types";
import { FlowDiagram } from "@/components/architecture/FlowDiagram";
import { StackDiagram } from "@/components/architecture/StackDiagram";

/** Renders structured content blocks with consistent editorial styling. */
export function ContentBlocks({
  blocks,
  headingLevel = 3,
}: {
  blocks: ContentBlock[];
  /** Heading level for `h` blocks so the page outline stays logical. */
  headingLevel?: 2 | 3;
}) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="measure">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className="t-body mb-5 text-paper-2">
                {b.text}
              </p>
            );
          case "h":
            return (
              <H key={i} className="t-h3 mb-3 mt-9 text-paper">
                {b.text}
              </H>
            );
          case "list":
            return (
              <ul key={i} className="mb-6 flex flex-col gap-2">
                {b.items.map((it) => (
                  <li key={it} className="t-body flex gap-3 text-paper-2">
                    <span className="mt-[0.72em] h-px w-3 shrink-0 bg-copper" aria-hidden="true" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <aside key={i} className="my-8 border-l-2 border-copper pl-5">
                {b.label ? <p className="t-meta mb-2 text-copper">{b.label}</p> : null}
                <p className="t-lead text-paper">{b.text}</p>
              </aside>
            );
          case "flow":
            return <FlowDiagram key={i} title={b.title} steps={b.steps} />;
          case "stack":
            return <StackDiagram key={i} title={b.title} layers={b.layers} />;
        }
      })}
    </div>
  );
}
