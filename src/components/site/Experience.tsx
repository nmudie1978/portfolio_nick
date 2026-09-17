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
        lead="Twenty-five years across Europe's leading telcos — from OSS engineering at UPC through operations, service assurance and hybrid cloud at Telia to leading catalog-driven BSS/OSS transformation. The organisations, and the roles held at each."
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
