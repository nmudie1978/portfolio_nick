import Image from "next/image";
import { person } from "@/content/person";
import { cn } from "@/lib/cn";

/**
 * Professional portrait in a fixed 4:5 frame.
 *
 * When `person.portrait` is set, the photograph is rendered with next/image.
 * Until then a designed placeholder occupies the same frame — a drafting
 * grid, the monogram and a label — so that adding the real photograph is a
 * content change, not a layout change. No portrait is ever generated.
 */
export function Portrait({
  className,
  priority = false,
  frame = "square",
}: {
  className?: string;
  priority?: boolean;
  /** Corner treatment. Variants choose; the aspect ratio never changes. */
  frame?: "square" | "soft";
}) {
  const initials = person.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <figure
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden border border-line bg-ink-2",
        frame === "soft" && "rounded-[4px]",
        className,
      )}
    >
      {person.portrait ? (
        <Image
          src={person.portrait}
          alt={`${person.name}, portrait`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-[50%_30%]"
        />
      ) : (
        <div
          className="drafting-grid absolute inset-0 flex flex-col justify-between p-5 sm:p-6"
          role="img"
          aria-label={`Portrait placeholder for ${person.name}`}
        >
          <div className="flex items-start justify-between">
            <span className="t-meta text-paper-3">Portrait</span>
            <span className="t-meta text-paper-3">4 : 5</span>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <span
              aria-hidden="true"
              className="font-display text-[clamp(4rem,14vw,7.5rem)] font-medium leading-none tracking-[-0.06em] text-paper/25"
            >
              {initials}
            </span>
          </div>
          <div className="flex items-end justify-between gap-4">
            <span className="t-meta text-paper-2">{person.name}</span>
            <span aria-hidden="true" className="h-px w-10 bg-copper" />
          </div>
          {/* Corner marks */}
          <span aria-hidden="true" className="absolute left-3 top-3 h-3 w-3 border-l border-t border-line-strong" />
          <span aria-hidden="true" className="absolute right-3 top-3 h-3 w-3 border-r border-t border-line-strong" />
          <span aria-hidden="true" className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-line-strong" />
          <span aria-hidden="true" className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-line-strong" />
        </div>
      )}
    </figure>
  );
}
