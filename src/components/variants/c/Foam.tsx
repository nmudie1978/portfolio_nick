import { Container } from "@/components/layout/Container";
import { GradientBackground } from "@/components/ui/marine-foam";
import { cn } from "@/lib/cn";

/**
 * Marine Foam section. `paper` is the white body; `tint` a pale foam
 * ground; `band` places the Marine Foam gradient behind a heading with
 * light type — used sparingly as a section transition.
 */
export function FoamSection({
  id,
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
    return (
      <section id={id} aria-labelledby={hid} className={cn("relative isolate overflow-hidden py-16 md:py-24", className)}>
        <GradientBackground className="absolute inset-0 -z-10" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(6,44,48,0.66)_0%,rgba(6,44,48,0.3)_55%,rgba(6,44,48,0)_100%)]" />
        <Container>
          <p className="foam-label on-foam">{label}</p>
          <h2 id={hid} className="t-h2 mt-3 max-w-[20ch] text-white">
            {title}
          </h2>
          {intro ? <p className="t-lead mt-5 max-w-[56ch] text-white/85">{intro}</p> : null}
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
            <p className="foam-label">{label}</p>
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

/** Page header on the gradient: label, title, lead in light type. */
export function FoamIntro({
  label,
  title,
  lead,
  children,
}: {
  label: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative isolate overflow-hidden pt-14 pb-14 md:pt-24 md:pb-20">
      <GradientBackground className="absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(6,44,48,0.66)_0%,rgba(6,44,48,0.3)_55%,rgba(6,44,48,0)_100%)]" />
      <Container>
        <p className="foam-label on-foam">{label}</p>
        <h1 className="t-h1 mt-4 max-w-[18ch] text-white">{title}</h1>
        {lead ? <p className="t-lead mt-6 max-w-[58ch] text-white/85">{lead}</p> : null}
        {children}
      </Container>
    </header>
  );
}

/** Buttons for use on the gradient, where the semantic tokens are dark-on-light. */
export function FoamButton({
  href,
  children,
  external = false,
  variant = "light",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "light" | "outline";
}) {
  const cls = cn(
    "inline-flex items-center gap-2 rounded-full px-5 py-3 t-small font-semibold transition-colors",
    variant === "light"
      ? "bg-white text-[#0b2f33] hover:bg-[#dff3ee]"
      : "border border-white/60 text-white hover:border-white hover:bg-white/10",
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
