import { PageTransition } from "@/components/layout/PageTransition";
import { ContactChannels, ContactTopics } from "@/components/shared/blocks";
import { person } from "@/content/person";
import { FoamButton, FoamIntro, FoamSection } from "./Foam";

export function Contact() {
  const { email, linkedin } = person.links;
  return (
    <PageTransition>
      <FoamIntro
        label="Contact"
        title="Discuss an engagement, or a second opinion."
        lead="The most useful conversations start with a specific problem: a catalog that no one consumes, a migration with no exit, an assurance stack that cannot name a service. LinkedIn is the most reliable route."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <FoamButton href={linkedin} external>
            Connect on LinkedIn
          </FoamButton>
          {email ? (
            <FoamButton href={`mailto:${email}`} variant="outline">
              Email
            </FoamButton>
          ) : null}
        </div>
      </FoamIntro>
      <FoamSection id="channels" label="Channels" title="Where to find me.">
        <ContactChannels />
      </FoamSection>
      <FoamSection id="topics" label="Good topics" title="What a first conversation is usually about." tone="tint">
        <ContactTopics />
      </FoamSection>
    </PageTransition>
  );
}
