import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { Section } from "@/components/layout/Section";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink, ExternalLink } from "@/components/ui/Links";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TagList } from "@/components/ui/Tag";
import { person } from "@/content/person";

export const metadata = pageMetadata({
  title: "BSS/OSS Academy",
  description:
    "The BSS/OSS Academy is a vendor-neutral platform for understanding modern telecom BSS/OSS architecture, transformation and technology — an independent body of work by Nick Mudie.",
  path: "/academy",
});

const themes = [
  "TM Forum",
  "BSS/OSS",
  "ODA",
  "Transformation",
  "Catalog-driven architecture",
  "Order-to-Activation",
  "Architecture patterns",
  "Telecom technology",
  "AI infrastructure",
  "Telco Landscape",
];

const chain = [
  { label: "Nick Mudie", note: "25+ years operating, designing and transforming telecom systems" },
  { label: "BSS/OSS Academy", note: "The concepts from that work, written down so they can be shared" },
  { label: "Telecom architecture", note: "Catalog, order, fulfilment, inventory and assurance — explained end to end" },
  { label: "Transformation", note: "Patterns, anti-patterns and decision literacy for real programmes" },
  { label: "Modern telecom technology", note: "AI infrastructure, cloud-native platforms and the Telco Landscape" },
];

export default function AcademyPage() {
  return (
    <PageTransition>
      <PageIntro
        label="BSS/OSS Academy"
        title="Building the BSS/OSS Academy."
        lead="A vendor-neutral platform for understanding how modern telecom architecture actually works — an independent body of work created to make complex telecom architecture easier to understand. It exists because transformation succeeds when business, IT and vendor teams share the same model of the problem."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={person.links.academy} external>
            Visit bssoss-academy.dev
          </ButtonLink>
          <ButtonLink href={person.links.telcoLandscape} external variant="secondary">
            Telco Landscape
          </ButtonLink>
        </div>
      </PageIntro>

      <Section
        id="relationship"
        label="Relationship"
        title="From professional work to a shared reference."
        intro="The Academy is not separate from the consulting and architecture work. It is where the same thinking is written down, tested against other people's questions and kept current."
      >
        <Reveal>
          <ol className="flex flex-col">
            {chain.map((c, i) => {
              const last = i === chain.length - 1;
              return (
                <li key={c.label} className="flex gap-5 sm:gap-8">
                  <div className="flex w-6 shrink-0 flex-col items-center">
                    <span
                      className={`mt-[7px] h-2 w-2 rounded-full border ${i === 1 ? "border-copper bg-copper" : "border-paper-3 bg-ink"}`}
                      aria-hidden="true"
                    />
                    {!last ? <span className="mt-1 w-px flex-1 bg-line-strong" aria-hidden="true" /> : null}
                  </div>
                  <div className={last ? "pb-0" : "pb-8"}>
                    <p className={`font-mono text-[0.8rem] uppercase tracking-[0.08em] ${i === 1 ? "text-copper" : "text-paper"}`}>
                      {c.label}
                    </p>
                    <p className="t-body measure mt-1 text-paper-2">{c.note}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </Section>

      <Section id="themes" label="Themes" title="What the Academy covers.">
        <Reveal>
          <TagList items={themes} />
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              ["Architecture-first", "Explains how catalog-driven BSS/OSS works — CFS/RFS decomposition, source-of-record ownership, Lead-to-Cash and Trouble-to-Resolve — without a vendor's framing."],
              ["Transformation literacy", "Compares greenfield, hybrid and brownfield approaches honestly, names the anti-patterns, and is explicit about what breaks first under legacy and scale."],
              ["Standards as a language", "Uses TM Forum SID, eTOM, ODA and Open APIs as shared vocabulary rather than a compliance checklist."],
              ["A living reference", "Used for onboarding, programme alignment, glossary decisions and assessing architectural reasoning — and extended as the industry changes."],
            ].map(([t, d]) => (
              <div key={t} className="border-t rule pt-4">
                <h3 className="t-h3 text-paper">{t}</h3>
                <p className="t-small mt-2 text-paper-2">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        id="landscape"
        label="Telco Landscape"
        title="Who is doing what, where, with whom — and with which technology."
        intro="An ongoing piece of industry research inside the Academy: mapping operators, vendors, technologies, customers and purposes as a connected landscape rather than a list of press releases."
      >
        <Reveal>
          <p className="t-body measure text-paper-2">
            The Telco Landscape is an example of the broader body of work — ecosystem intelligence that
            informs architecture decisions with evidence about what is actually being built and by whom.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <ExternalLink href={person.links.telcoLandscape}>Explore the Telco Landscape</ExternalLink>
            <Eyebrow as="span">Within bssoss-academy.dev</Eyebrow>
          </div>
        </Reveal>
      </Section>
    </PageTransition>
  );
}
