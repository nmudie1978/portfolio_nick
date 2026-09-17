import { cn } from "@/lib/cn";

/** Compact technical label for technologies, themes and categories. */
export function Tag({
  children,
  tone = "muted",
  className,
}: {
  children: React.ReactNode;
  tone?: "muted" | "copper" | "signal";
  className?: string;
}) {
  const tones = {
    muted: "border-line text-paper-2",
    copper: "border-copper/40 text-copper",
    signal: "border-signal/40 text-signal",
  };
  return (
    <span
      className={cn(
        "t-mono inline-flex items-center border px-2 py-[3px] text-[0.72rem] leading-none",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagList({ items, tone }: { items: string[]; tone?: "muted" | "copper" | "signal" }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Topics">
      {items.map((t) => (
        <li key={t}>
          <Tag tone={tone}>{t}</Tag>
        </li>
      ))}
    </ul>
  );
}
