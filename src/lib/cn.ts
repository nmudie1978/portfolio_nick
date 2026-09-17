/** Minimal class joiner — no runtime dependency needed for this site. */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
