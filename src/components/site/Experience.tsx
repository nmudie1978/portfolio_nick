import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { OrganisationDetail } from "@/components/shared/blocks";
import { environments, experience } from "@/content/experience";
import { PageHeader, PageSection } from "./primitives";
import { TenureChart } from "./TenureChart";

export function Experience() {
  return (
    <PageTransition>
      <PageHeader
        label="Experience"
        title="A career that moved from the network up."
        lead="Twenty-five years across Europe's leading telcos — from OSS engineering at UPC through operations, service assurance and hybrid cloud at Telia to leading catalog-driven BSS/OSS transformation. The organisations, and the roles held at each."
      />
      <PageSection
        id="tenure"
        label="Twenty-five years"
        title="Where the years went."
        intro="Every role on one axis, 2001 to today. Select a bar to see what it delivered; the full detail for each organisation follows below."
      >
        <TenureChart entries={experience} />
      </PageSection>

      <PageSection
        id="organisations"
        label="Organisations"
        title="Where the work was done."
        intro={`Across ${environments.join(", ").toLowerCase()}.`}
        tone="tint"
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
