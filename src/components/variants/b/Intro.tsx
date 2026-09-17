import { Container } from "@/components/layout/Container";

/** Variant B page header: label, serif title, lead — on the raised ground. */
export function LedgerIntro({
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
    <header className="bg-ink-2 pt-14 pb-12 md:pt-24 md:pb-20">
      <Container>
        <p className="ledger-label">{label}</p>
        <h1 className="t-h1 mt-4 max-w-[18ch] text-paper">{title}</h1>
        {lead ? <p className="t-lead mt-6 max-w-[60ch]">{lead}</p> : null}
        {children}
      </Container>
    </header>
  );
}
