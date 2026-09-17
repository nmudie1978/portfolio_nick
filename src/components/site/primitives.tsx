import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { THEME } from "./theme";

/** The site ground (navy-teal aurora) filling the parent. */
export function Ground({ className }: { className?: string }) {
  const t = THEME;
  return (
    <>
      <t.Background className={cn("absolute inset-0 -z-10", className)} />
      {t.onBackground === "light" && t.scrim ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(6,44,48,0.66)_0%,rgba(6,44,48,0.3)_55%,rgba(6,44,48,0)_100%)]"
        />
      ) : null}
    </>
  );
}

/** Type classes for content sitting on the themed background. */
export function onGround() {
  const light = THEME.onBackground === "light";
  return {
    light,
    label: light ? "section-label on-ground" : "section-label",
    heading: light ? "text-white" : "text-paper",
    body: light ? "text-white/85" : "text-paper-2",
    muted: light ? "text-white/75" : "text-paper-3",
    accent: light ? "text-[#bfeee4]" : "text-copper",
  };
}

/** Shape tokens: pills or squared corners, per theme. */
export function shape() {
  const round = THEME.shape === "round";
  return {
    button: round ? "rounded-full" : "rounded-[3px]",
    card: round ? "rounded-xl" : "rounded-[4px]",
    chip: round ? "rounded-full" : "rounded-[3px]",
    tile: round ? "rounded-lg" : "rounded-[4px]",
  };
}

/**
 * Page section. `paper` is the body ground; `tint` a pale tinted ground;
 * `band` places the navy-teal ground behind a heading as a section
 * transition.
 */
export function PageSection({ id,
  label,
  title,
  intro,
  aside,
  children,
  tone = "paper",
  className,
}: {
  id?: string;
  label: string;
  title: string;
  intro?: string;
  aside?: React.ReactNode;
  children?: React.ReactNode;
  tone?: "paper" | "tint" | "band";
  className?: string;
}) {
  const hid = `${id ?? label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`;
  if (tone === "band") {
    const g = onGround();
    return (
      <section id={id} aria-labelledby={hid} className={cn("relative isolate overflow-hidden py-16 md:py-24", className)}>
        <Ground />
        <Container>
          <p className={g.label}>{label}</p>
          <h2 id={hid} className={cn("t-h2 mt-3 max-w-[20ch]", g.heading)}>
            {title}
          </h2>
          {intro ? <p className={cn("t-lead mt-5 max-w-[56ch]", g.body)}>{intro}</p> : null}
          {aside ? <div className="mt-6">{aside}</div> : null}
          {children ? <div className="mt-12">{children}</div> : null}
        </Container>
      </section>
    );
  }
  return (
    <section
      id={id}
      aria-labelledby={hid}
      className={cn("py-16 md:py-24", tone === "tint" ? "bg-ink-2" : "border-t rule", className)}
    >
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <p className="section-label">{label}</p>
            <h2 id={hid} className="t-h2 mt-3 max-w-[20ch] text-paper">
              {title}
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4 md:col-span-5">
            {intro ? <p className="t-body max-w-[46ch] text-paper-2">{intro}</p> : null}
            {aside ? <div>{aside}</div> : null}
          </div>
        </div>
        {children ? <div className="mt-12 md:mt-14">{children}</div> : null}
      </Container>
    </section>
  );
}

/** Page header on the navy-teal ground. */
export function PageHeader({ label,
  title,
  lead,
  children,
}: {
  label: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  const g = onGround();
  return (
    <header className="relative isolate overflow-hidden pt-14 pb-14 md:pt-24 md:pb-20">
      <Ground />
      <Container>
        <p className={g.label}>{label}</p>
        <h1 className={cn("t-h1 mt-4 max-w-[18ch]", g.heading)}>{title}</h1>
        {lead ? <p className={cn("t-lead mt-6 max-w-[58ch]", g.body)}>{lead}</p> : null}
        {children}
      </Container>
    </header>
  );
}

/** Buttons that read on the navy-teal ground. */
export function GroundButton({ href,
  children,
  external = false,
  kind = "primary",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  kind?: "primary" | "outline";
}) {
  const g = onGround();
  const s = shape();
  const cls = cn(
    "inline-flex items-center gap-2 px-5 py-3 t-small font-semibold transition-colors",
    s.button,
    g.light
      ? kind === "primary"
        ? "bg-white text-[#0b2f33] hover:bg-[#dff3ee]"
        : "border border-white/60 text-white hover:border-white hover:bg-white/10"
      : kind === "primary"
        ? "bg-copper text-white hover:bg-paper"
        : "border border-line-strong text-paper hover:border-copper hover:text-copper",
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children} <span aria-hidden="true">↗</span>
      </a>
    );
  }
  return (
    <a href={href} className={cls}>
      {children} <span aria-hidden="true">→</span>
    </a>
  );
}
