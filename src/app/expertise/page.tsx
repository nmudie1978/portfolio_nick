import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { Section } from "@/components/layout/Section";
import { PageTransition } from "@/components/layout/PageTransition";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/Tag";
import { ArrowLink } from "@/components/ui/Links";
import { expertise } from "@/content/expertise";
import { resolveCaseStudies, resolveInsights } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Expertise",
  description:
    "BSS/OSS architecture, transformation, enterprise architecture, service assurance and operations, AI and modern telecom, cloud and infrastructure, TM Forum ODA.",
  path: "/expertise",
});

export default function ExpertisePage() {
  return (
    <PageTransition>
      <PageIntro
        label="Expertise"
        title="The layers of an operator, and how they connect."
        lead="Seven areas that describe one architecture. Each is listed with the topics I work on and the case studies and viewpoints that show it in use."
      >
        <nav aria-label="Expertise areas" className="mt-10">
          <ol className="flex flex-wrap gap-x-6 gap-y-2">
            {expertise.map((e) => (
              <li key={e.slug}>
                <a href={`#${e.slug}`} className="link-ul t-small text-paper-2">
                  {e.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </PageIntro>

      {expertise.map((area) => {
        const studies = resolveCaseStudies(area.relatedCaseStudies);
        const views = resolveInsights(area.relatedInsights);
        return (
          <Section key={area.slug} id={area.slug} label={area.title} title={area.title}>
            <Reveal>
              <p className="t-lead measure">{area.summary}</p>
              <p className="t-body measure mt-5 text-paper-2">{area.description}</p>
              <div className="mt-8">
                <TagList items={area.topics} />
              </div>
              {studies.length || views.length ? (
                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {studies.length ? (
                    <div>
                      <p className="t-meta mb-3 text-paper-3">In practice</p>
                      <ul className="flex flex-col gap-2">
                        {studies.map((s) => (
                          <li key={s.slug}>
                            <ArrowLink href={`/case-studies/${s.slug}`}>{s.title}</ArrowLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {views.length ? (
                    <div>
                      <p className="t-meta mb-3 text-paper-3">Viewpoints</p>
                      <ul className="flex flex-col gap-2">
                        {views.map((v) => (
                          <li key={v.slug}>
                            <ArrowLink href={`/thinking/${v.slug}`}>{v.title}</ArrowLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </Reveal>
          </Section>
        );
      })}

      <Container className="py-16">
        <ArrowLink href="/architecture" tone="copper">
          See how the layers connect in the Architecture Playground
        </ArrowLink>
      </Container>
    </PageTransition>
  );
}
