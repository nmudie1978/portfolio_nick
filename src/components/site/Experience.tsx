import { PageTransition } from "@/components/layout/PageTransition";
import { experience } from "@/content/experience";
import { PageHeader, PageSection } from "./primitives";
import { SpineTimeline } from "./SpineTimeline";

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
        label="Today back to 2001"
        title="Where the work was done."
        wide
      >
        <SpineTimeline entries={experience} />
      </PageSection>
    </PageTransition>
  );
}
