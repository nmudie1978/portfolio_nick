import { Container } from "./Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Page-level identity: eyebrow, H1 and a measured lead paragraph. */
export function PageIntro({
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
    <header className="pt-14 pb-12 md:pt-24 md:pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <Eyebrow as="div">{label}</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h1 className="t-h1 max-w-[18ch]">{title}</h1>
            {lead ? <p className="t-lead measure mt-6">{lead}</p> : null}
            {children}
          </div>
        </div>
      </Container>
    </header>
  );
}
