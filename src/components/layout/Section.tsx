import { Container } from "./Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

/**
 * Drafting-sheet section: a sticky monospace label in the left margin on
 * desktop, content in the remaining columns. On small screens the label
 * simply sits above the content.
 */
export function Section({
  id,
  label,
  title,
  intro,
  children,
  className,
  aside,
  tight = false,
}: {
  id?: string;
  label: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
  /** Optional element rendered beneath the label on desktop (e.g. a link). */
  aside?: React.ReactNode;
  tight?: boolean;
}) {
  const headingId = `${id ?? label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`;
  return (
    <section
      id={id}
      className={cn("border-t rule", tight ? "py-12 md:py-16" : "py-16 md:py-24", className)}
      aria-labelledby={title ? headingId : undefined}
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <div className="md:sticky md:top-24 flex flex-col gap-4">
              <Eyebrow as="div">{label}</Eyebrow>
              {aside ? <div className="hidden md:block">{aside}</div> : null}
            </div>
          </div>
          <div className="md:col-span-9">
            {title ? (
              <h2 id={headingId} className="t-h2 mb-4 max-w-[22ch]">
                {title}
              </h2>
            ) : null}
            {intro ? <p className="t-lead measure mb-10">{intro}</p> : null}
            {children}
            {aside ? <div className="mt-8 md:hidden">{aside}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
