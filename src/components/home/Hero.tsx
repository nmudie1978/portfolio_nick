import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Links";
import { ArchitectureMatrix } from "@/components/architecture/ArchitectureMatrix";
import { person } from "@/content/person";

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <Container className="pt-14 pb-14 md:pt-24 md:pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              <Eyebrow as="span" tone="paper">
                {person.name}
              </Eyebrow>
              <Eyebrow as="span">{person.pillars.join(" · ")}</Eyebrow>
            </div>
            <h1 id="hero-title" className="t-display mt-7 max-w-[14ch]">
              {person.hero.statement}
            </h1>
            <p className="t-lead measure mt-7">{person.hero.support}</p>

            <ol className="mt-9 flex flex-wrap items-center gap-x-2 gap-y-2" aria-label="Career progression">
              {person.journey.map((stage, i) => (
                <li key={stage} className="flex items-center gap-2">
                  <span className="t-meta text-paper-2">{stage}</span>
                  {i < person.journey.length - 1 ? (
                    <span aria-hidden="true" className="t-meta text-copper">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/case-studies">Case studies</ButtonLink>
              <ButtonLink href="/thinking" variant="secondary">
                How I think
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-6 lg:self-center">
            <ArchitectureMatrix mode="ambient" initialLens="order" />
          </div>
        </div>
      </Container>
    </section>
  );
}
