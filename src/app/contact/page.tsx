import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { Section } from "@/components/layout/Section";
import { PageTransition } from "@/components/layout/PageTransition";
import { ButtonLink, ExternalLink } from "@/components/ui/Links";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { person } from "@/content/person";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Nick Mudie about telecom architecture, BSS/OSS, transformation, service assurance or AI-native telecom operations.",
  path: "/contact",
});

export default function ContactPage() {
  const { email, cv, linkedin, academy } = person.links;
  return (
    <PageTransition>
      <PageIntro
        label="Contact"
        title="Architecture, transformation, operations — or a second opinion."
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
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="border-t rule pt-4">
            <dt>
              <Eyebrow as="span">LinkedIn</Eyebrow>
            </dt>
            <dd className="mt-2">
              <ExternalLink href={linkedin}>linkedin.com/in/nick-mudie</ExternalLink>
            </dd>
          </div>
          <div className="border-t rule pt-4">
            <dt>
              <Eyebrow as="span">Email</Eyebrow>
            </dt>
            <dd className="mt-2 t-small text-paper-2">
              {email ? (
                <a href={`mailto:${email}`} className="link-ul text-paper">
                  {email}
                </a>
              ) : (
                "Available via LinkedIn."
              )}
            </dd>
          </div>
          <div className="border-t rule pt-4">
            <dt>
              <Eyebrow as="span">CV</Eyebrow>
            </dt>
            <dd className="mt-2 t-small text-paper-2">
              {cv ? (
                <a href={cv} className="link-ul text-paper">
                  Download CV
                </a>
              ) : (
                "Available on request."
              )}
            </dd>
          </div>
          <div className="border-t rule pt-4">
            <dt>
              <Eyebrow as="span">BSS/OSS Academy</Eyebrow>
            </dt>
            <dd className="mt-2">
              <ExternalLink href={academy}>bssoss-academy.dev</ExternalLink>
            </dd>
          </div>
        </dl>
      </Section>

      <Section id="topics" label="Good topics" tight>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {[
            "BSS/OSS target architecture and catalog design",
            "Transformation strategy, migration sequencing and coexistence",
            "Service assurance, ITSM and end-to-end service visibility",
            "AI-native and agentic operations — what is real and what is not yet",
            "AI infrastructure as a telecom product and operational domain",
            "TM Forum ODA adoption as an operating model",
          ].map((t) => (
            <li key={t} className="t-body flex gap-3 text-paper-2">
              <span className="mt-[0.72em] h-px w-3 shrink-0 bg-copper" aria-hidden="true" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Section>
    </PageTransition>
  );
}
