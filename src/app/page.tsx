import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { person } from "@/content/person";
import { VARIANTS } from "@/variants/registry";
import { VARIANT_IDS } from "@/variants/types";

export const metadata: Metadata = {
  title: { absolute: "Design variants — Nick Mudie" },
  robots: { index: false, follow: true },
};

/**
 * Review-phase chooser. Lists the three design variants; removed once a
 * direction is chosen and promoted to the root.
 */
export default function VariantChooser() {
  return (
    <div className="variant-root">
      <main id="main" className="flex-1">
        <Container className="pt-16 pb-24 md:pt-28">
          <Eyebrow as="p" tone="copper">
            Review build
          </Eyebrow>
          <h1 className="t-h1 mt-4 max-w-[16ch]">{person.name} — three design directions.</h1>
          <p className="t-lead measure mt-6">
            Same content, same six sections, three visual systems. Open each on desktop and phone; the chosen
            direction becomes the site.
          </p>

          <ol className="mt-14 flex flex-col divide-y rule border-y rule">
            {VARIANT_IDS.map((id) => {
              const v = VARIANTS[id];
              return (
                <li key={id}>
                  <Link
                    href={`/${id}`}
                    className="group grid grid-cols-[3rem_1fr] items-baseline gap-x-5 gap-y-2 py-8 transition-colors md:grid-cols-[4rem_18rem_1fr_auto] md:gap-x-8"
                  >
                    <span className="font-display text-[2.2rem] font-medium leading-none tracking-[-0.03em] text-paper-3 transition-colors group-hover:text-copper">
                      {id.toUpperCase()}
                    </span>
                    <span className="flex flex-col gap-1">
                      <span className="t-h3 text-paper transition-colors group-hover:text-copper">{v.name}</span>
                      <span className="t-meta text-paper-3">{v.tagline}</span>
                    </span>
                    <span className="t-body col-start-2 text-paper-2 md:col-start-3">{v.description}</span>
                    <span className="t-small col-start-2 font-medium text-paper md:col-start-4 md:self-center">
                      Open <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </Container>
      </main>
    </div>
  );
}
