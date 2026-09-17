"use client";

import { useId, useMemo, useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { ExperienceEntry, ExperienceRole } from "@/content/types";
import { cn } from "@/lib/cn";

/**
 * Every role drawn as a bar on one shared year axis, grouped by organisation.
 * Selecting a bar (click, focus or hover) swaps the detail panel beneath the
 * chart. Roles are listed in full further down the page for readers who
 * never touch the chart.
 */

type Span = { start: number; end: number };

const THIS_YEAR = new Date().getFullYear();

/** "2012 – 2014", "2024 – 2026" or "2024 – Current" → years. Null if unparseable. */
function parsePeriod(period: string): Span | null {
  const m = period.match(/(\d{4})\s*[–-]\s*(\d{4}|current|present|now)/i);
  if (!m) return null;
  const start = Number(m[1]);
  const end = /^\d{4}$/.test(m[2]) ? Number(m[2]) : THIS_YEAR;
  return { start, end: Math.max(end, start + 1) };
}

type Row = { key: string; entry: ExperienceEntry; role: ExperienceRole; span: Span };

function rowsFor(entries: ExperienceEntry[]): { entry: ExperienceEntry; rows: Row[] }[] {
  return entries
    .map((entry) => ({
      entry,
      rows: (entry.roles ?? [])
        .map((role) => {
          const span = parsePeriod(role.period);
          return span ? { key: `${entry.organisation}|${role.title}|${role.period}`, entry, role, span } : null;
        })
        .filter((r): r is Row => r !== null),
    }))
    .filter((g) => g.rows.length > 0);
}

export function TenureChart({ entries }: { entries: ExperienceEntry[] }) {
  const groups = useMemo(() => rowsFor(entries), [entries]);
  const all = useMemo(() => groups.flatMap((g) => g.rows), [groups]);
  const min = Math.min(...all.map((r) => r.span.start));
  const max = Math.max(...all.map((r) => r.span.end));
  const total = max - min;
  const pct = (year: number) => ((year - min) / total) * 100;

  // Ticks every five years from the first year, plus the last.
  const ticks: number[] = [];
  for (let y = min; y < max; y += 5) ticks.push(y);
  ticks.push(max);

  const [selectedKey, setSelectedKey] = useState(all[0].key);
  const selected = all.find((r) => r.key === selectedKey) ?? all[0];
  const panelId = useId();

  return (
    <div>
      {/* Axis */}
      <div className="grid grid-cols-1 items-end gap-1 sm:grid-cols-[13rem_1fr] sm:gap-4">
        <Eyebrow as="span" className="hidden sm:block">
          Role
        </Eyebrow>
        <div className="relative h-6 border-b rule">
          {ticks.map((y, i) => (
            <span
              key={y}
              className={cn(
                "t-mono absolute bottom-1 text-paper-3",
                i === 0 ? "translate-x-0" : i === ticks.length - 1 ? "-translate-x-full" : "-translate-x-1/2",
                // On phones the axis is short: keep the first, middle and last tick only.
                i !== 0 && i !== ticks.length - 1 && i !== Math.floor(ticks.length / 2) && "hidden sm:inline",
              )}
              style={{ left: `${pct(y)}%` }}
            >
              {y}
            </span>
          ))}
        </div>
      </div>

      {/* Rows */}
      {groups.map(({ entry, rows }) => (
        <div key={entry.organisation}>
          <p className="t-h3 pt-6 pb-1 text-paper">{entry.organisation}</p>
          {rows.map((row) => {
            const active = row.key === selected.key;
            const label = `${row.role.title}, ${row.role.period}${row.role.unit ? `, ${row.role.unit}` : ""}`;
            return (
              <div
                key={row.key}
                className="grid grid-cols-1 items-center gap-1 border-b rule py-2 sm:grid-cols-[13rem_1fr] sm:gap-4"
              >
                <p className={cn("t-small leading-tight", active ? "text-paper" : "text-paper-2")}>
                  {row.role.title}
                  {row.role.unit ? (
                    <span className="ml-2 text-[0.72rem] text-paper-3 sm:ml-0 sm:block">{row.role.unit}</span>
                  ) : null}
                </p>
                <div
                  className="relative h-6"
                  style={{
                    backgroundImage: "repeating-linear-gradient(90deg, transparent 0 calc(4% - 1px), var(--color-ink-3) calc(4% - 1px) 4%)",
                  }}
                >
                  <button
                    type="button"
                    aria-label={label}
                    aria-pressed={active}
                    aria-controls={panelId}
                    onClick={() => setSelectedKey(row.key)}
                    onFocus={() => setSelectedKey(row.key)}
                    onMouseEnter={() => setSelectedKey(row.key)}
                    className={cn(
                      "absolute top-1 h-4 rounded-[2px] transition-colors motion-reduce:transition-none",
                      active ? "bg-copper" : "bg-copper/45 hover:bg-copper/70",
                    )}
                    style={{ left: `${pct(row.span.start)}%`, width: `${pct(row.span.end) - pct(row.span.start)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {/* Detail */}
      <div
        id={panelId}
        aria-live="polite"
        className="mt-10 grid grid-cols-1 gap-4 border-t rule pt-8 md:grid-cols-12 md:gap-10"
      >
        <div className="md:col-span-4">
          <Eyebrow as="p" tone="copper">
            {selected.entry.organisation} · {selected.role.period}
          </Eyebrow>
          <h3 className="t-h3 mt-2 text-paper">{selected.role.title}</h3>
          {selected.role.unit ? <p className="t-small mt-1 text-paper-3">{selected.role.unit}</p> : null}
        </div>
        <ul className="flex flex-col gap-2 md:col-span-8">
          {selected.role.highlights.map((h) => (
            <li key={h} className="t-body flex gap-3 text-paper-2">
              <span className="mt-[0.72em] h-px w-3 shrink-0 bg-copper" aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
