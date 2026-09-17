import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/layout/Container";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { skillDomains } from "@/content/skills";
import type { VariantProps } from "@/variants/types";

export function Skills(_: VariantProps) {
  return (
    <PageTransition>
      <PageIntro
        label="Skills"
        title="Architectural breadth, operational depth."
        lead="Five domains rather than a keyword cloud. Every item here is backed by work described elsewhere on this site."
      />

      <section className="border-t rule" aria-label="Skill domains">
        <Container>
          <ol className="flex flex-col divide-y rule">
            {skillDomains.map((d, i) => (
              <Reveal key={d.slug} as="li">
                <article id={d.slug} className="grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:gap-10 md:py-16 scroll-mt-24">
                  <div className="md:col-span-4">
                    <div className="md:sticky md:top-24">
                      <span className="t-mono text-[0.7rem] text-paper-3">{String(i + 1).padStart(2, "0")}</span>
                      <h2 className="t-h2 mt-2 text-paper">{d.title}</h2>
                      <p className="t-small mt-3 max-w-[36ch] text-paper-2">{d.summary}</p>
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                      {d.skills.map((s) => (
                        <li key={s} className="t-body flex items-baseline gap-3 border-b rule py-3 text-paper">
                          <span aria-hidden="true" className="h-px w-3 shrink-0 bg-copper" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>
    </PageTransition>
  );
}
