import { Container } from "@/components/layout/Container";
import { PageTransition } from "@/components/layout/PageTransition";
import { Section } from "@/components/layout/Section";
import { ArchitectureMatrix } from "@/components/architecture/ArchitectureMatrix";
import { StackDiagram } from "@/components/architecture/StackDiagram";
import { FlowDiagram } from "@/components/architecture/FlowDiagram";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowLink, BackLink } from "@/components/ui/Links";
import { Reveal } from "@/components/ui/Reveal";
import { getCaseStudy } from "@/content/case-studies";
import { caseStudyHref, insightHref } from "@/lib/routes";
import { vhref } from "@/variants/paths";
import type { VariantId } from "@/variants/types";

/**
 * The interactive architecture model — part of the body of work under
 * Recognition. Layers down the side, lifecycle across the top, lenses to
 * read it five ways.
 */
export function ArchitectureModel({ variant }: { variant: VariantId }) {
  const catalogPattern = getCaseStudy("catalog-driven-bss-oss");
  return (
    <PageTransition>
      <header className="pt-14 pb-10 md:pt-24 md:pb-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <BackLink href={vhref(variant, "/recognition")}>Recognition</BackLink>
            </div>
            <div className="md:col-span-9">
              <Eyebrow as="p" tone="copper">
                Architecture model
              </Eyebrow>
              <h1 className="t-h1 mt-4 max-w-[18ch]">One matrix, five ways to read it.</h1>
              <p className="t-lead measure mt-6">
                Layers down the side — customer, product, service, resource, network. Lifecycle across the top —
                catalog, orders, inventory, assurance. Choose a lens to see which components are involved and how
                control and data flow between them.
              </p>
            </div>
          </div>
        </Container>
      </header>

      <section className="border-t rule py-12 md:py-16" aria-label="Interactive architecture matrix">
        <Container>
          <ArchitectureMatrix mode="interactive" initialLens="order" />
        </Container>
      </section>

      <Section
        id="layers"
        label="Layers"
        title="Business, product, service, resource."
        intro="The vertical axis of the matrix. Each layer has its own owner, lifecycle and source of truth; the architecture is what happens at the boundaries between them."
      >
        <Reveal>
          <StackDiagram
            layers={[
              { label: "Business", note: "Segments, channels, commercial rules and agreements" },
              { label: "Product", note: "What is sold — offers, prices and product specifications" },
              { label: "Service", note: "What is delivered — customer-facing and resource-facing services" },
              { label: "Resource", note: "What is configured — logical and physical network resources" },
            ]}
          />
          <ArrowLink href={insightHref(variant, "product-service-resource")}>
            The difference between product, service and resource
          </ArrowLink>
        </Reveal>
      </Section>

      <Section
        id="o2a"
        label="Order-to-Activation"
        title="The path from a quote to a working service."
        intro="The horizontal story of the matrix, read as a sequence. Every arrow in this flow is a boundary where the order changes language and ownership."
      >
        <Reveal>
          <FlowDiagram
            steps={[
              { label: "Customer", note: "Party, agreement, account" },
              { label: "CRM / CPQ", note: "Quote configured against the product catalog" },
              { label: "Product Order", note: "Priced, validated commercial order", tone: "copper" },
              { label: "Order Management", note: "Decomposition using catalog relationships", tone: "copper" },
              { label: "Service Order", note: "CFS / RFS orders per service specification", tone: "copper" },
              { label: "Resource Order", note: "Allocation and configuration requests", tone: "copper" },
              { label: "Fulfilment", note: "Activation across network domains", tone: "copper" },
              { label: "Inventory", note: "Product, service and resource state written back" },
              { label: "Assurance", note: "Runtime feedback correlated through the same model", tone: "signal" },
            ]}
          />
          <div className="flex flex-col gap-2">
            <ArrowLink href={insightHref(variant, "order-decomposition-boundary")}>
              Order decomposition as an architectural boundary
            </ArrowLink>
            {catalogPattern ? (
              <ArrowLink href={caseStudyHref(variant, catalogPattern)}>Pattern: catalog-driven BSS/OSS</ArrowLink>
            ) : null}
          </div>
        </Reveal>
      </Section>
    </PageTransition>
  );
}
