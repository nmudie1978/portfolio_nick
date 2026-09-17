import type { Insight } from "./types";

export const insights: Insight[] = [
  {
    slug: "catalog-driven-architecture",
    title: "Why catalog-driven architecture matters",
    category: "Catalog",
    minutes: 4,
    featured: true,
    summary:
      "The catalog is where an operator's knowledge of how products become services should live. When it lives in orchestration code instead, every launch is a project.",
    content: [
      {
        type: "p",
        text: "Ask an operator how a specific product is provisioned and you will usually get one of two answers: a person's name, or the name of an integration flow. Neither is a specification. Both are how most operators actually work.",
      },
      {
        type: "p",
        text: "Catalog-driven architecture moves that knowledge into data that systems read. A product specification declares which customer-facing services realise it. A service specification declares which resource-facing services and resource types it needs. Order management decomposes an order by walking those relationships rather than by running product-specific code.",
      },
      { type: "h", text: "What changes in practice" },
      {
        type: "list",
        items: [
          "Launching a product becomes a catalog change, reviewed by the people who own the specification — not a change request to the orchestration team.",
          "Changing a network domain becomes a service specification change, and every product that uses that service inherits it.",
          "Inventory can record instances against specifications, which is what makes assurance able to say which products are affected by a resource fault.",
        ],
      },
      { type: "h", text: "Where it goes wrong" },
      {
        type: "p",
        text: "The most common failure is introducing a commercial product catalog with no service or resource layer beneath it. The catalog looks complete, sales can configure offers, and then orchestration is asked to fill the gap between product and network with code. That is the old architecture with a new front end.",
      },
      {
        type: "callout",
        text: "A catalog only matters if something decomposes against it. Design the order managers and the catalogs together, or you will get one without the other.",
      },
    ],
    relatedCaseStudies: ["catalog-driven-bss-oss", "marlink-oss-provisioning"],
    relatedInsights: ["catalog-vs-runtime", "product-service-resource"],
  },
  {
    slug: "bss-oss-composability",
    title: "Why BSS/OSS is moving toward composability",
    category: "Composability",
    minutes: 4,
    featured: true,
    summary:
      "Monolithic stacks made every change a programme. Composable architectures make components replaceable — but only if the boundaries are drawn where the data actually changes hands.",
    content: [
      {
        type: "p",
        text: "For two decades the default BSS/OSS shape was a suite: one vendor, one data model, one upgrade cycle. It worked because it hid integration. It failed because it also hid the ability to change anything independently.",
      },
      {
        type: "p",
        text: "Composability is the reaction. Catalog, order management, inventory and assurance become separately replaceable components that speak through standard interfaces. TM Forum's ODA and Open APIs are the industry's attempt to agree where those boundaries sit.",
      },
      { type: "h", text: "Boundaries are the whole point" },
      {
        type: "p",
        text: "A composable architecture is only as good as its boundaries. The useful ones are where responsibility genuinely changes: product order to service order, service order to resource order, resource inventory to fault management. Draw them anywhere else and you get microservices with a monolith's coupling.",
      },
      {
        type: "list",
        items: [
          "Each component owns one source of truth and exposes it through an API.",
          "Decomposition happens at boundaries, driven by catalog relationships.",
          "Inventory and assurance consume the same identifiers that fulfilment produced.",
        ],
      },
      { type: "h", text: "The honest trade-off" },
      {
        type: "p",
        text: "Composability moves complexity from the vendor's suite into the operator's integration and data governance. That is the right place for it — it is the operator's business — but organisations that are not prepared to own a service model and an integration architecture will find a suite simpler, and they will be right.",
      },
    ],
    relatedCaseStudies: ["catalog-driven-bss-oss", "product-by-product-transformation"],
    relatedInsights: ["oda-what-changes", "order-decomposition-boundary"],
  },
  {
    slug: "product-by-product-vs-big-bang",
    title: "Product-by-product migration vs big bang",
    category: "Transformation",
    minutes: 5,
    featured: true,
    summary:
      "Neither approach is right in general. The choice depends on estate size, product coupling, legacy risk and whether the organisation can govern a long coexistence.",
    content: [
      {
        type: "p",
        text: "A big-bang migration moves every product, customer and order to the new stack in one cut-over. Product-by-product moves one product at a time and runs both stacks in between. The debate is usually held as if one were obviously right. It is not.",
      },
      { type: "h", text: "When big bang is right" },
      {
        type: "list",
        items: [
          "Small or simple estates where coexistence would cost more than the risk it removes.",
          "Legacy that is unsupportable, where the risk of staying exceeds the risk of moving.",
          "Products so coupled through shared services that they cannot be moved independently.",
        ],
      },
      { type: "h", text: "When product-by-product is right" },
      {
        type: "list",
        items: [
          "Large estates where a single cut-over cannot be tested at realistic scale.",
          "Products with clean boundaries and their own fulfilment paths.",
          "Organisations that need to learn migration on an easy product before a hard one.",
        ],
      },
      { type: "h", text: "What product-by-product actually requires" },
      {
        type: "p",
        text: "An order routing decision per product and customer. Reconciliation between legacy and target inventories. Billing and assurance that handle a customer with products on both stacks. And — the part that gets dropped — an exit criterion per product, with governance that holds to it.",
      },
      {
        type: "callout",
        text: "The failure mode of product-by-product is not technical. It is a programme that celebrates each go-live and never retires anything, until the dual stack is the architecture.",
      },
    ],
    relatedCaseStudies: ["product-by-product-transformation"],
    relatedInsights: ["legacy-modernisation-without-big-bang", "bss-oss-composability"],
  },
  {
    slug: "agentic-noc-oss",
    title: "What Agentic NOC means for OSS",
    category: "AI & Operations",
    minutes: 5,
    featured: true,
    summary:
      "An agent that correlates events and proposes remediation depends entirely on the service model, inventory and telemetry the OSS gives it. Agentic NOC is an OSS programme before it is an AI programme.",
    content: [
      {
        type: "p",
        text: "The Agentic NOC is being sold as a layer you put on top of operations. From inside a NOC it looks different: every judgement the agent makes — which service is affected, which customer, which runbook — is a query against data the OSS already holds, well or badly.",
      },
      { type: "h", text: "What the agent needs from the OSS" },
      {
        type: "list",
        items: [
          "Normalised events with stable resource identity, so correlation is possible at all.",
          "Resource and service inventory accurate enough that impact analysis is believed.",
          "A service topology, not just a device list, so impact can be expressed in customer terms.",
          "An orchestration path for remediation, so actions leave inventory consistent.",
        ],
      },
      { type: "h", text: "Where agents actually help first" },
      {
        type: "p",
        text: "Not autonomous remediation. Impact analysis and explanation: reading a cluster of events, the affected topology and recent changes, and producing a hypothesis with its evidence. Being wrong there is cheap and visible, which is how trust is built.",
      },
      { type: "h", text: "The architectural change" },
      {
        type: "p",
        text: "Deterministic correlation stays; agents take the residual. Autonomy becomes a policy per action class — auto-execute, approve, escalate — rather than a product setting. And the NOC's job shifts from working queues to owning the models the agents reason over.",
      },
      {
        type: "callout",
        text: "If your inventory is 80% accurate, your agent is 80% trustworthy at best. Fix the OSS data first; it is the cheapest part of the AI programme.",
      },
    ],
    relatedCaseStudies: ["ai-native-telecom-operations", "telia-e2e-observability"],
    relatedInsights: ["assurance-cloud-native", "ai-infrastructure-telecom"],
  },
  {
    slug: "ai-infrastructure-telecom",
    title: "Where AI infrastructure fits in telecom architecture",
    category: "Infrastructure",
    minutes: 4,
    featured: true,
    summary:
      "GPU-dense infrastructure is entering the telecom estate as an internal capability, a product and a new operational domain. Each role needs different architecture.",
    content: [
      {
        type: "p",
        text: "Operators are engaging with AI infrastructure in three distinct ways, and the conversations blur them. As an internal capability for their own AI workloads. As a product — AI factories, GPU-as-a-service, sovereign compute — sold to enterprises and governments. And as a new operational domain that the OSS has to fulfil and assure like any other.",
      },
      { type: "h", text: "Three roles, three architectures" },
      {
        type: "list",
        items: [
          "Internal capability: placement, data gravity and networking between existing data centres and cloud.",
          "Product: a catalog entry with service and resource specifications — GPU pools, tenancy, network slices — that order management can decompose.",
          "Operational domain: resource inventory, activation adapters and assurance for compute, storage and high-performance networking.",
        ],
      },
      { type: "h", text: "The OSS view" },
      {
        type: "p",
        text: "The second and third roles are where BSS/OSS architecture earns its place. If GPU infrastructure is a product, it needs the same product-service-resource treatment as connectivity; otherwise every customer is a project. If it is an operational domain, it needs to appear in inventory and assurance with the same discipline as the transport network beneath it.",
      },
      {
        type: "callout",
        text: "AI infrastructure is not exempt from the architecture. It is a new resource layer with unusual power, cooling and networking constraints — and the operators who model it that way will be the ones who can sell it repeatably.",
      },
    ],
    relatedCaseStudies: ["ai-native-telecom-operations"],
    relatedInsights: ["agentic-noc-oss", "assurance-cloud-native"],
  },
  {
    slug: "b2b-vs-b2c-connectivity",
    title: "Why B2B connectivity is different from B2C",
    category: "B2B",
    minutes: 4,
    summary:
      "B2C architecture optimises for volume and uniformity. B2B connectivity is multi-site, multi-party, contract-specific and long-lived — and architectures built for one rarely serve the other.",
    content: [
      {
        type: "p",
        text: "Most BSS/OSS reference architectures were shaped by consumer mobile and broadband: millions of near-identical products, self-service, instant activation. Enterprise connectivity breaks almost every assumption behind that shape.",
      },
      { type: "h", text: "What is structurally different" },
      {
        type: "list",
        items: [
          "Orders are multi-site and multi-service, with dependencies between sites and phased delivery over months.",
          "Products are configured per contract; the catalog defines a space of options rather than a fixed offer.",
          "Delivery involves third parties — access providers, partners, customer premises — with their own lead times and failures.",
          "Services live for years and change in place; modification, not activation, is the dominant order type.",
          "Assurance is contractual: SLAs per service, per site, with credits and reporting.",
        ],
      },
      { type: "h", text: "Architectural consequences" },
      {
        type: "p",
        text: "Order management needs to handle a hierarchy of orders with partial completion and long-running state. The service model must support customer-specific instances of generic specifications. Inventory must represent partner-provided resources it does not control. And assurance needs to report against what was contracted, not just what is up.",
      },
      {
        type: "callout",
        text: "A B2C stack extended to B2B tends to end up with the enterprise business in spreadsheets and email. That is not a tooling gap; it is a model gap.",
      },
    ],
    relatedCaseStudies: ["telia-b2b-bss-oss-transformation", "marlink-oss-provisioning"],
    relatedInsights: ["order-decomposition-boundary", "product-service-resource"],
  },
  {
    slug: "assurance-cloud-native",
    title: "Service assurance in cloud-native networks",
    category: "Assurance",
    minutes: 4,
    summary:
      "When network functions are software on shared infrastructure, the mapping from resource to service becomes dynamic. Assurance has to follow the model, not the box.",
    content: [
      {
        type: "p",
        text: "Traditional assurance was built on a stable assumption: a resource is a box, the box has a location, and the services on it can be found in inventory. Cloud-native network functions break the first two and strain the third.",
      },
      { type: "h", text: "What changes" },
      {
        type: "list",
        items: [
          "Resources are ephemeral: a function may be rescheduled, scaled or replaced without an order.",
          "Layers multiply: service, network function, container platform, virtual infrastructure, physical host — each with its own telemetry and owner.",
          "Inventory has to be discovered continuously rather than written once by fulfilment.",
          "Failure domains move: a host fault affects whichever functions happened to be scheduled there.",
        ],
      },
      { type: "h", text: "What still holds" },
      {
        type: "p",
        text: "The service model. Customers still buy services, and impact is still expressed in terms of them. What changes is how the resource layer is populated — by discovery and platform telemetry rather than provisioning records — and how quickly the resource-to-service mapping must be refreshed.",
      },
      {
        type: "p",
        text: "Practically, this means assurance and the container or virtualisation platform share a reconciliation loop: the platform is the source of truth for what is running, and the OSS is the source of truth for what it is supposed to deliver.",
      },
      {
        type: "callout",
        text: "Cloud-native does not make assurance harder. Unmodelled cloud-native does. The service model is the constant; the resource layer is what has to become dynamic.",
      },
    ],
    relatedCaseStudies: ["telia-e2e-observability", "telia-hybrid-cloud"],
    relatedInsights: ["agentic-noc-oss", "ai-infrastructure-telecom"],
  },
  {
    slug: "oda-what-changes",
    title: "What ODA changes — and what it doesn't",
    category: "ODA",
    minutes: 4,
    summary:
      "TM Forum's Open Digital Architecture gives operators a shared decomposition and API language. It does not decide your service model, your migration or your operating model.",
    content: [
      {
        type: "p",
        text: "ODA is frequently presented as a destination — 'we are moving to ODA'. It is more useful understood as an agreement about vocabulary and boundaries: components, their responsibilities, and the Open APIs through which they talk.",
      },
      { type: "h", text: "What ODA genuinely changes" },
      {
        type: "list",
        items: [
          "A shared decomposition: catalog, order, inventory and assurance components with agreed responsibilities.",
          "Interface contracts (TMF Open APIs) that make components replaceable and vendors comparable.",
          "A common language across business, IT and vendors, which is worth more than it sounds.",
        ],
      },
      { type: "h", text: "What ODA leaves entirely to you" },
      {
        type: "list",
        items: [
          "The content of your catalogs — which services realise which products, and how.",
          "Where the source of truth sits for each entity when systems disagree.",
          "Migration strategy, coexistence and how existing customers reach the target.",
          "Who owns the service model and keeps it accurate.",
        ],
      },
      {
        type: "p",
        text: "The anti-pattern is treating ODA conformance as the objective: embedding TMF components into a legacy order-to-activation flow without aligning the semantics beneath them. The APIs conform; the architecture does not change.",
      },
      {
        type: "callout",
        text: "ODA is an operating model for how components relate. Adopt it as that, and it is powerful. Adopt it as a checklist, and it is expensive.",
      },
    ],
    relatedCaseStudies: ["catalog-driven-bss-oss"],
    relatedInsights: ["bss-oss-composability", "product-service-resource"],
  },
  {
    slug: "product-service-resource",
    title: "The difference between product, service and resource",
    category: "Modelling",
    minutes: 3,
    summary:
      "Three words that are used interchangeably in most operators and mean three different things with three different owners. Getting them straight is the foundation of everything else.",
    content: [
      {
        type: "p",
        text: "A product is what a customer buys. It has a price, terms and a name in a bill. A service is what the operator delivers to realise that product — the customer-facing service the customer experiences, and the resource-facing services that make it work. A resource is what the network configures: a port, a circuit, a VLAN, a virtual function, a satellite terminal.",
      },
      {
        type: "stack",
        title: "Layers and their owners",
        layers: [
          { label: "Product", note: "Owned commercially. Changes with the market." },
          { label: "Service (CFS)", note: "Owned by service design. Changes with capability." },
          { label: "Service (RFS)", note: "Owned by network engineering. Changes with technology." },
          { label: "Resource", note: "Owned by the network. Changes with deployment." },
        ],
      },
      { type: "h", text: "Why it matters" },
      {
        type: "list",
        items: [
          "Products change often and services rarely; separating them keeps commercial change out of the network.",
          "Assurance impact runs resource → service → product → customer. Without the layers there is no path.",
          "Migration reconciles instances at each layer; the layers are what make it tractable.",
        ],
      },
      {
        type: "callout",
        text: "If a single team can describe a product, its services and its resources in one sentence without disagreement, the model is probably too simple to be true.",
      },
    ],
    relatedCaseStudies: ["catalog-driven-bss-oss"],
    relatedInsights: ["catalog-driven-architecture", "catalog-vs-runtime"],
  },
  {
    slug: "catalog-vs-runtime",
    title: "Catalog vs runtime",
    category: "Catalog",
    minutes: 3,
    summary:
      "Design-time specifications and runtime instances are different worlds with different lifecycles. Confusing them is behind most catalog projects that never reach production.",
    content: [
      {
        type: "p",
        text: "A catalog describes what can exist: product specifications, service specifications, resource types, and the relationships between them. Runtime describes what does exist: this customer's product instance, the service instances realising it, the resources allocated. Orders are the transition from one to the other.",
      },
      { type: "h", text: "Different lifecycles" },
      {
        type: "list",
        items: [
          "Catalog changes are versioned and released; runtime changes happen thousands of times a day.",
          "Catalog is owned by product, service design and engineering; runtime is owned by operations.",
          "A catalog change must not silently alter existing instances — versioning is not optional.",
        ],
      },
      { type: "h", text: "The common confusion" },
      {
        type: "p",
        text: "Catalog projects that deliver a beautiful specification model and then discover no runtime system consumes it. Or inventory projects that try to store specifications as instances. Or orchestration that reads the catalog once at design time and hard-codes the result.",
      },
      {
        type: "callout",
        text: "Catalog is the grammar; runtime is the sentences. Order management is the only thing that should be translating between them.",
      },
    ],
    relatedCaseStudies: ["catalog-driven-bss-oss"],
    relatedInsights: ["catalog-driven-architecture", "order-decomposition-boundary"],
  },
  {
    slug: "order-decomposition-boundary",
    title: "Order decomposition as an architectural boundary",
    category: "Order Management",
    minutes: 4,
    summary:
      "Where a product order becomes service orders, and where service orders become resource orders, are the most important seams in a BSS/OSS architecture. Place them deliberately.",
    content: [
      {
        type: "p",
        text: "Decomposition is where an order changes language. Above the product-to-service boundary it speaks of offers, prices and customers. Below it, of services, specifications and locations. Below the service-to-resource boundary, of ports, circuits and configurations. Each boundary is a change of owner, a change of system and a change in what 'done' means.",
      },
      { type: "h", text: "Why the boundaries matter" },
      {
        type: "list",
        items: [
          "They define what each order manager needs to know — and, more usefully, what it must not know.",
          "They are where Open APIs and component replacement actually happen.",
          "They are where partial completion, rollback and compensation have to be designed.",
          "They are where B2B complexity — multi-site, partner delivery — has to be absorbed.",
        ],
      },
      { type: "h", text: "Common mistakes" },
      {
        type: "p",
        text: "Letting the product order manager know about resources, so it can 'just check availability'. Letting the service order manager encode product rules, because the catalog didn't. Collapsing service and resource orchestration into one engine and then being unable to replace either. Each is expedient; each removes the seam that made the architecture composable.",
      },
      {
        type: "callout",
        text: "An order manager that understands every layer is a monolith with a workflow engine. Draw the seams, then defend them.",
      },
    ],
    relatedCaseStudies: ["catalog-driven-bss-oss", "marlink-oss-provisioning"],
    relatedInsights: ["bss-oss-composability", "catalog-vs-runtime"],
  },
  {
    slug: "legacy-modernisation-without-big-bang",
    title: "Legacy modernisation without a big-bang migration",
    category: "Transformation",
    minutes: 4,
    summary:
      "The strangler pattern, applied to BSS/OSS: introduce the target architecture at a boundary, route selectively, migrate in tranches and retire on evidence.",
    content: [
      {
        type: "p",
        text: "Most legacy BSS/OSS cannot be replaced in one move — too many customers, too much undocumented behaviour, too little appetite for the risk. The practical alternative is to grow the target architecture around the legacy until the legacy has nothing left to do.",
      },
      { type: "h", text: "Choosing the boundary" },
      {
        type: "p",
        text: "The strangler works at a seam. In BSS/OSS the usable seams are the order decomposition boundaries: intercept product orders and route some to the new stack; or intercept service orders and fulfil some through new orchestration. The choice depends on where legacy is weakest and where the target has the most to prove.",
      },
      { type: "h", text: "What has to be true" },
      {
        type: "list",
        items: [
          "A routing decision that is explicit, auditable and reversible per product, segment or customer.",
          "Reconciliation between legacy and target data before instances move — historical services rarely have clean lineage.",
          "Billing, assurance and reporting that work across both stacks for the duration.",
          "Retirement milestones that governance treats as seriously as go-lives.",
        ],
      },
      { type: "h", text: "The realities nobody schedules" },
      {
        type: "p",
        text: "Existing customers were provisioned outside the new model and will not fit it cleanly. Billing truth, service truth and network truth already diverge and migration will expose it. 'Clean up later' is a decision to never clean up. Plan for all three from the start.",
      },
      {
        type: "callout",
        text: "The strangler pattern is not a way to avoid migration. It is a way to do migration in pieces small enough to be reversed.",
      },
    ],
    relatedCaseStudies: ["product-by-product-transformation", "marlink-oss-provisioning"],
    relatedInsights: ["product-by-product-vs-big-bang", "order-decomposition-boundary"],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

export const featuredInsights = insights.filter((i) => i.featured);
