import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { OrganisationDetail } from "@/components/shared/blocks";
import { environments, experience } from "@/content/experience";
import { PageHeader, PageSection } from "./primitives";

export function Experience() {
  return (
    <PageTransition>
      <PageHeader
        label="Experience"
        title="A career that moved from the network up."
        lead="Operations, service assurance, architecture, BSS/OSS, transformation, AI and modern telecom — a progression of responsibility, and the organisations where it was exercised. Roles and periods are shown only where confirmed."
      />
      <PageSection
        id="organisations"
        label="Organisations"
        title="Where the work was done."
        intro={`Across ${environments.join(", ").toLowerCase()}.`}
        >
        <div className="flex flex-col divide-y rule border-y rule">
          {experience.map((entry) => (
            <Reveal key={entry.organisation}>
              <OrganisationDetail entry={entry} />
            </Reveal>
          ))}
        </div>
      </PageSection>
    </PageTransition>
  );
}
