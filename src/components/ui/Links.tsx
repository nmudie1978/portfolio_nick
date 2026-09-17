import Link from "next/link";
import { cn } from "@/lib/cn";

const arrow = (
  <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
    →
  </span>
);

const external = (
  <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
    ↗
  </span>
);

/** Internal navigation link with a trailing arrow. */
export function ArrowLink({
  href,
  children,
  className,
  tone = "paper",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "copper";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 t-small font-medium transition-colors",
        tone === "copper" ? "text-copper hover:text-paper" : "text-paper hover:text-copper",
        className,
      )}
    >
      {children}
      {arrow}
    </Link>
  );
}

/** External link. Opens in a new tab with safe rel attributes. */
export function ExternalLink({
  href,
  children,
  className,
  plain = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  plain?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-2 transition-colors",
        plain ? "link-ul text-paper-2" : "t-small font-medium text-paper hover:text-copper",
        className,
      )}
    >
      {children}
      {plain ? null : external}
    </a>
  );
}

/** Primary / secondary button-styled links. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  external: isExternal = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 px-5 py-3 t-small font-medium transition-colors duration-200 border";
  const styles =
    variant === "primary"
      ? "bg-paper text-ink border-paper hover:bg-copper hover:border-copper"
      : "bg-transparent text-paper border-line-strong hover:border-copper hover:text-copper";
  const cls = cn(base, styles, className);
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {external}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {arrow}
    </Link>
  );
}

/** Back link to a parent index. */
export function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 t-small font-medium text-paper-2 transition-colors hover:text-copper"
    >
      <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:-translate-x-1">
        ←
      </span>
      {children}
    </Link>
  );
}
