"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { COLUMNS, LAYERS, LENSES, NODES, type ArchEdge, type Lens } from "@/content/architecture";
import { cn } from "@/lib/cn";

type Rect = { x: number; y: number; w: number; h: number };

const TONE_COLOR: Record<string, string> = {
  copper: "var(--color-copper)",
  signal: "var(--color-signal)",
  muted: "var(--color-paper-3)",
};

/**
 * Layers × lifecycle matrix with edges drawn between real DOM nodes.
 *
 * `ambient` cycles through the lenses on a timer (pausing on hover / focus)
 * and is used in the home hero. `interactive` exposes the lens selector and
 * narrative and is the Architecture Playground.
 */
export function ArchitectureMatrix({
  mode = "interactive",
  initialLens = "order",
  className,
  exploreHref,
}: {
  mode?: "ambient" | "interactive";
  initialLens?: string;
  className?: string;
  /** Ambient mode: where "Explore" leads. Omit to hide the link. */
  exploreHref?: string;
}) {
  const [lensId, setLensId] = useState(initialLens);
  const [paused, setPaused] = useState(false);
  const lens = useMemo<Lens>(() => LENSES.find((l) => l.id === lensId) ?? LENSES[0], [lensId]);

  // Ambient cycling — respects reduced motion by staying on the initial lens.
  useEffect(() => {
    if (mode !== "ambient" || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      setLensId((cur) => {
        const i = LENSES.findIndex((l) => l.id === cur);
        return LENSES[(i + 1) % LENSES.length].id;
      });
    }, 4600);
    return () => window.clearInterval(t);
  }, [mode, paused]);

  const gridRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [rects, setRects] = useState<Record<string, Rect>>({});
  const [size, setSize] = useState({ w: 0, h: 0 });

  const measure = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const g = grid.getBoundingClientRect();
    const next: Record<string, Rect> = {};
    nodeRefs.current.forEach((el, id) => {
      const r = el.getBoundingClientRect();
      next[id] = { x: r.left - g.left, y: r.top - g.top, w: r.width, h: r.height };
    });
    setRects(next);
    setSize({ w: g.width, h: g.height });
  }, []);

  useLayoutEffect(() => {
    measure();
    const grid = gridRef.current;
    if (!grid || !("ResizeObserver" in window)) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(grid);
    // Fonts can change node sizes after first paint.
    document.fonts?.ready.then(measure).catch(() => {});
    return () => ro.disconnect();
  }, [measure]);

  const active = useMemo(() => new Set(lens.nodes), [lens]);
  const compact = mode === "ambient";

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {mode === "interactive" ? (
        <div
          className="mb-6 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Architecture lens"
          onKeyDown={(e) => {
            const focusedId = (e.target as HTMLElement).id.replace("lens-tab-", "");
            const i = Math.max(0, LENSES.findIndex((l) => l.id === focusedId));
            let next: number | null = null;
            if (e.key === "ArrowRight") next = (i + 1) % LENSES.length;
            else if (e.key === "ArrowLeft") next = (i - 1 + LENSES.length) % LENSES.length;
            else if (e.key === "Home") next = 0;
            else if (e.key === "End") next = LENSES.length - 1;
            if (next === null) return;
            e.preventDefault();
            setLensId(LENSES[next].id);
            document.getElementById(`lens-tab-${LENSES[next].id}`)?.focus();
          }}
        >
          {LENSES.map((l) => {
            const selected = l.id === lens.id;
            return (
              <button
                key={l.id}
                role="tab"
                aria-selected={selected}
                aria-controls="lens-panel"
                id={`lens-tab-${l.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setLensId(l.id)}
                className={cn(
                  "t-meta border px-3 py-2 transition-colors duration-200",
                  selected
                    ? "border-copper bg-copper-soft text-copper"
                    : "border-line text-paper-2 hover:border-line-strong hover:text-paper",
                )}
              >
                {l.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <div
        role="img"
        aria-label={`Architecture matrix, ${lens.label} lens: ${lens.title}. ${lens.summary}`}
        className={cn(
          "surface relative overflow-hidden drafting-grid",
          compact ? "p-3 sm:p-4" : "p-3 sm:p-5 md:p-6",
        )}
      >
        {/* Column headers */}
        <div
          className="grid"
          style={{ gridTemplateColumns: `${compact ? "3.2rem" : "4.4rem"} repeat(4, minmax(0, 1fr))` }}
        >
          <div aria-hidden="true" />
          {COLUMNS.map((c) => (
            <div key={c.id} className="px-1 pb-2 text-center">
              <div className={cn("t-meta text-paper-2", compact && "text-[0.6rem]")}>{c.label}</div>
              {!compact ? <div className="t-mono mt-[2px] text-[0.66rem] text-paper-3">{c.hint}</div> : null}
            </div>
          ))}
        </div>

        {/* Grid with measured overlay */}
        <div ref={gridRef} className="relative">
          <div
            className="grid"
            style={{
              gridTemplateColumns: `${compact ? "3.2rem" : "4.4rem"} repeat(4, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${LAYERS.length}, ${compact ? "3.6rem" : "4.6rem"})`,
            }}
          >
            {LAYERS.map((layer) => (
              <RowCells
                key={layer.id}
                layerId={layer.id}
                label={layer.label}
                compact={compact}
                active={active}
                register={(id, el) => {
                  if (el) nodeRefs.current.set(id, el);
                  else nodeRefs.current.delete(id);
                }}
              />
            ))}
          </div>

          <svg
            className="pointer-events-none absolute inset-0"
            width={size.w || 0}
            height={size.h || 0}
            viewBox={`0 0 ${size.w || 1} ${size.h || 1}`}
            aria-hidden="true"
          >
            <defs>
              {Object.entries(TONE_COLOR).map(([tone, color]) => (
                <marker
                  key={tone}
                  id={`arrow-${mode}-${tone}`}
                  viewBox="0 0 8 8"
                  refX="7"
                  refY="4"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M0,0.5 L8,4 L0,7.5 z" fill={color} />
                </marker>
              ))}
            </defs>
            {lens.edges.map((e) => (
              <EdgePath key={`${lens.id}-${e.from}-${e.to}`} edge={e} rects={rects} mode={mode} />
            ))}
          </svg>
        </div>
      </div>

      {/* Narrative */}
      {mode === "interactive" ? (
        <div
          id="lens-panel"
          role="tabpanel"
          aria-labelledby={`lens-tab-${lens.id}`}
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12"
        >
          <div className="md:col-span-5">
            <h2 className="t-h3">{lens.title}</h2>
            <p className="t-small mt-3 text-paper-2">{lens.summary}</p>
          </div>
          <div className="md:col-span-7">
            <ol className="flex flex-col divide-y rule border-y rule">
              {lens.steps.map((s, i) => (
                <li key={s} className="flex gap-4 py-3">
                  <span className="t-mono w-6 shrink-0 text-paper-3">{String(i + 1).padStart(2, "0")}</span>
                  <span className="t-small text-paper">{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-4 flex items-center gap-5">
              <Legend />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-3 flex items-center justify-between gap-4">
          <p className="t-meta text-paper-3">
            <span className="text-copper">{lens.label}</span> · {lens.title}
            <span className="sr-only">. {lens.summary}</span>
          </p>
          {exploreHref ? (
            <Link href={exploreHref} className="t-meta text-paper-2 transition-colors hover:text-copper">
              Explore →
            </Link>
          ) : null}
        </div>
      )}
    </div>
  );
}

function RowCells({
  layerId,
  label,
  compact,
  active,
  register,
}: {
  layerId: string;
  label: string;
  compact: boolean;
  active: Set<string>;
  register: (id: string, el: HTMLDivElement | null) => void;
}) {
  return (
    <>
      <div className="flex items-center border-t rule pr-2">
        <span className={cn("t-meta text-paper-3", compact && "text-[0.58rem]")}>{label}</span>
      </div>
      {COLUMNS.map((col) => {
        const node = NODES.find((n) => n.layer === layerId && n.column === col.id);
        return (
          <div key={col.id} className="flex items-center justify-center border-t rule px-[3px] sm:px-2">
            {node ? (
              <div
                ref={(el) => register(node.id, el)}
                data-node={node.id}
                className={cn(
                  "w-full border text-center leading-tight transition-all duration-500",
                  "font-mono",
                  compact
                    ? "px-1 py-[6px] text-[0.58rem] sm:text-[0.64rem]"
                    : "px-1.5 py-2 text-[0.62rem] sm:text-[0.72rem]",
                  active.has(node.id)
                    ? "border-paper-2 bg-ink-3 text-paper"
                    : "border-line bg-ink-2/70 text-paper-3",
                )}
              >
                <span className="hidden sm:inline">{node.label}</span>
                <span className="sm:hidden">{node.short ?? node.label}</span>
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
}

function EdgePath({
  edge,
  rects,
  mode,
}: {
  edge: ArchEdge;
  rects: Record<string, Rect>;
  mode: string;
}) {
  const a = rects[edge.from];
  const b = rects[edge.to];
  if (!a || !b) return null;

  const tone = edge.tone ?? "muted";
  const color = TONE_COLOR[tone];
  const dashed = edge.style === "dashed";
  const inset = 2;

  const ac = { x: a.x + a.w / 2, y: a.y + a.h / 2 };
  const bc = { x: b.x + b.w / 2, y: b.y + b.h / 2 };
  const sameRow = Math.abs(ac.y - bc.y) < 4;
  const sameCol = Math.abs(ac.x - bc.x) < 4;

  let d: string;
  if (sameRow) {
    const dir = bc.x > ac.x ? 1 : -1;
    const x1 = dir > 0 ? a.x + a.w + inset : a.x - inset;
    const x2 = dir > 0 ? b.x - inset : b.x + b.w + inset;
    d = `M${x1},${ac.y} L${x2},${bc.y}`;
  } else if (sameCol) {
    const down = bc.y > ac.y;
    const y1 = down ? a.y + a.h + inset : a.y - inset;
    const y2 = down ? b.y - inset : b.y + b.h + inset;
    d = `M${ac.x},${y1} L${bc.x},${y2}`;
  } else {
    // Orthogonal: leave A vertically, run across the gutter, enter B vertically.
    const down = bc.y > ac.y;
    const y1 = down ? a.y + a.h + inset : a.y - inset;
    const y2 = down ? b.y - inset : b.y + b.h + inset;
    const ym = (y1 + y2) / 2;
    d = `M${ac.x},${y1} L${ac.x},${ym} L${bc.x},${ym} L${bc.x},${y2}`;
  }

  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={dashed ? 1 : 1.25}
      strokeOpacity={dashed ? 0.7 : 0.95}
      strokeDasharray={dashed ? "2 4" : undefined}
      strokeLinejoin="round"
      className={dashed ? undefined : "edge-flow"}
      markerEnd={`url(#arrow-${mode}-${tone})`}
    />
  );
}

export function Legend() {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Diagram legend">
      <li className="flex items-center gap-2 t-mono text-[0.66rem] text-paper-3">
        <span className="inline-block h-px w-5 bg-copper" aria-hidden="true" /> Fulfilment flow
      </li>
      <li className="flex items-center gap-2 t-mono text-[0.66rem] text-paper-3">
        <span className="inline-block h-px w-5 bg-signal" aria-hidden="true" /> Assurance feedback
      </li>
      <li className="flex items-center gap-2 t-mono text-[0.66rem] text-paper-3">
        <span
          className="inline-block h-px w-5 border-t border-dashed border-paper-3"
          aria-hidden="true"
        />{" "}
        Design-time control / state
      </li>
    </ul>
  );
}
