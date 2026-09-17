import { FooterShell } from "@/components/shared/FooterShell";
import { person } from "@/content/person";

export function Footer() {
  return (
    <FooterShell
      className="bg-ink-2"
      brand={
        <>
          <p className="flex items-center gap-3 font-display text-xl font-bold tracking-[-0.02em]">
            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-copper" />
            {person.name}
          </p>
          <p className="t-small mt-3 max-w-[40ch] text-paper-2">
            Telecom architecture, BSS/OSS and transformation. 25+ years across operators, vendors and
            managed-service environments.
          </p>
        </>
      }
    />
  );
}
