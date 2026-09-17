import { Container } from "@/components/layout/Container";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { skillDomains } from "@/content/skills";
import { FoamIntro } from "./Foam";

export function Skills() {
  return (
    <PageTransition>
      <FoamIntro
        label="Skills"
        title="Architectural breadth, operational depth."
        lead="Five professional domains rather than a keyword cloud. Every item is backed by work described elsewhere on this site."
      />
      <section aria-label="Skill domains">
        <Container>
          <ol className="divide-y rule">
            {skillDomains.map((d, i) => (
              <Reveal key={d.slug} as="li">
                <article id={d.slug} className="grid scroll-mt-24 grid-cols-1 gap-6 py-12 md:grid-cols-12 md:gap-10 md:py-16">
                  <div className="md:col-span-4">
                    <span className="text-[0.72rem] font-bold text-paper-3">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="t-h2 mt-2 text-paper">{d.title}</h2>
                    <p className="t-small mt-3 max-w-[36ch] text-paper-2">{d.summary}</p>
                  </div>
                  <div className="md:col-span-8">
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {d.skills.map((s) => (
                        <li key={s} className="t-small flex items-center gap-3 rounded-lg bg-ink-2 px-4 py-3 font-medium text-paper">
                          <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-copper" />
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
