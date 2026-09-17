import { Container } from "@/components/layout/Container";
import { PageTransition } from "@/components/layout/PageTransition";
import { Reveal } from "@/components/ui/Reveal";
import { skillDomains } from "@/content/skills";
import { LedgerIntro } from "./Intro";

export function Skills() {
  return (
    <PageTransition>
      <LedgerIntro
        label="Skills"
        title="Architectural breadth, operational depth."
        lead="Five professional domains rather than a keyword cloud. Every item is backed by work described elsewhere on this site."
      />
      <section aria-label="Skill domains">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 py-16 md:grid-cols-2 md:py-24">
            {skillDomains.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 2) * 60}>
                <article id={d.slug} className="scroll-mt-24">
                  <div className="flex items-baseline justify-between gap-4 border-b border-line-strong pb-3">
                    <h2 className="t-h3 text-paper">{d.title}</h2>
                    <span className="ledger-label">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="t-small mt-3 max-w-[48ch] text-paper-3">{d.summary}</p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2">
                    {d.skills.map((s) => (
                      <li key={s} className="t-small border-b rule py-2.5 text-paper">
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
