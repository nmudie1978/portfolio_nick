import { PageTransition } from "@/components/layout/PageTransition";
import { ContactChannels, ContactTopics } from "@/components/shared/blocks";
import { person } from "@/content/person";
import { GroundButton, PageHeader, PageSection } from "./primitives";

export function Contact() {
  const { email, linkedin } = person.links;
  return (
    <PageTransition>
      <PageHeader
        label="Contact"
        title="Discuss an engagement, or a second opinion."
        lead="The most useful conversations start with a specific problem: a catalog that no one consumes, a migration with no exit, an assurance stack that cannot name a service. LinkedIn is the most reliable route."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <GroundButton href={linkedin} external>
            Connect on LinkedIn
          </GroundButton>
          {email ? (
            <GroundButton href={`mailto:${email}`} kind="outline">
              Email
            </GroundButton>
          ) : null}
        </div>
      </PageHeader>
      <PageSection id="channels" label="Channels" title="Where to find me.">
        <ContactChannels />
      </PageSection>
      <PageSection id="topics" label="Good topics" title="What a first conversation is usually about." tone="tint">
        <ContactTopics />
      </PageSection>
    </PageTransition>
  );
}
