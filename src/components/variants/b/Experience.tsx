import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { OrganisationDetail } from "@/components/shared/blocks";
import { environments, experience } from "@/content/experience";
import { LedgerIntro } from "./Intro";
import { LedgerSection } from "./Ledger";
import { CareerRail } from "./CareerRail";
import type { VariantProps } from "@/variants/types";

export function Experience({ variant }: VariantProps) {
  return (
    <PageTransition>
      <LedgerIntro
        label="Experience"
        title="A career that moved from the network up."
        lead="Operations, service assurance, architecture, BSS/OSS, transformation, AI and modern telecom — a progression of responsibility, and the organisations where it was exercised. Roles and periods are shown only where confirmed."
      />

      <LedgerSection
        id="progression"
        label="Progression"
        title="Six stages, one direction."
        intro="Organisations are attached to the stages they evidence. This is a map of responsibility, not a chronology."
      >
        <CareerRail variant={variant} detailed />
      </LedgerSection>

      <LedgerSection
        id="organisations"
        label="Organisations"
        title="Where the work was done."
        intro={`Across ${environments.join(", ").toLowerCase()}.`}
        tone="raised"
      >
        <div className="flex flex-col divide-y rule border-y rule">
          {experience.map((entry) => (
            <Reveal key={entry.organisation}>
              <OrganisationDetail entry={entry} variant={variant} />
            </Reveal>
          ))}
        </div>
      </LedgerSection>
    </PageTransition>
  );
}
