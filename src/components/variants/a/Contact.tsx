import { PageIntro } from "@/components/layout/PageIntro";
import { Section } from "@/components/layout/Section";
import { PageTransition } from "@/components/layout/PageTransition";
import { ButtonLink } from "@/components/ui/Links";
import { ContactChannels, ContactTopics } from "@/components/shared/blocks";
import { person } from "@/content/person";

export function Contact() {
  const { email, linkedin } = person.links;
  return (
    <PageTransition>
      <PageIntro
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
      </PageIntro>

      <Section id="channels" label="Channels" tight>
        <ContactChannels />
      </Section>

      <Section id="topics" label="Good topics" tight>
        <ContactTopics />
      </Section>
    </PageTransition>
  );
}
