import { cn } from "@/lib/cn";

/** Small monospace label used for section identity and metadata. */
export function Eyebrow({
  children,
  className,
  tone = "muted",
  as: Tag = "p",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "muted" | "copper" | "signal" | "paper";
  as?: "p" | "span" | "div" | "h2" | "h3";
}) {
  const tones = {
    muted: "text-paper-3",
    copper: "text-copper",
    signal: "text-signal",
    paper: "text-paper-2",
  };
  return <Tag className={cn("t-meta", tones[tone], className)}>{children}</Tag>;
}
