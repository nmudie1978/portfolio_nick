import { PageTransition } from "@/components/layout/PageTransition";
import { ButtonLink } from "@/components/ui/Links";
import { ContactChannels, ContactTopics } from "@/components/shared/blocks";
import { person } from "@/content/person";
import { LedgerIntro } from "./Intro";
import { LedgerSection } from "./Ledger";

export function Contact() {
  const { email, linkedin } = person.links;
  return (
    <PageTransition>
      <LedgerIntro
        label="Contact"
        title="Discuss an engagement, or a second opinion."
        lead="The most useful conversations start with a specific problem: a catalog that no one consumes, a migration with no exit, an assurance stack that cannot name a service. LinkedIn is the most reliable route."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={linkedin} external>
            Connect on LinkedIn
          </ButtonLink>
          {email ? (
            <ButtonLink href={`mailto:${email}`} variant="secondary">
              Email
            </ButtonLink>
          ) : null}
        </div>
      </LedgerIntro>
      <LedgerSection id="channels" label="Channels" title="Where to find me.">
        <ContactChannels />
      </LedgerSection>
      <LedgerSection id="topics" label="Good topics" title="What a first conversation is usually about." tone="raised">
        <ContactTopics />
      </LedgerSection>
    </PageTransition>
  );
}
