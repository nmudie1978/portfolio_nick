import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/PageIntro";
import { Section } from "@/components/layout/Section";
import { PageTransition } from "@/components/layout/PageTransition";
import { Container } from "@/components/layout/Container";
import { ArchitectureMatrix } from "@/components/architecture/ArchitectureMatrix";
import { StackDiagram } from "@/components/architecture/StackDiagram";
import { FlowDiagram } from "@/components/architecture/FlowDiagram";
import { ArrowLink } from "@/components/ui/Links";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = pageMetadata({
  title: "Architecture Playground",
  description:
    "An interactive map of BSS/OSS architecture: product, service and resource layers across catalog, orders, inventory and assurance. Select a lens to see what each part controls.",
  path: "/architecture",
});

export default function ArchitecturePage() {
  return (
    <PageTransition>
      <PageIntro
        label="Architecture Playground"
        title="One matrix, five ways to read it."
        lead="Layers down the side — customer, product, service, resource, network. Lifecycle across the top — catalog, orders, inventory, assurance. Choose a lens to see which components are involved and how control and data flow between them."
      />

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
          <ArrowLink href="/thinking/product-service-resource">
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
            <ArrowLink href="/thinking/order-decomposition-boundary">
              Order decomposition as an architectural boundary
            </ArrowLink>
            <ArrowLink href="/case-studies/catalog-driven-bss-oss">Case study: catalog-driven BSS/OSS</ArrowLink>
          </div>
        </Reveal>
      </Section>
    </PageTransition>
  );
}
