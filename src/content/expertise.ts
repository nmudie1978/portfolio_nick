import type { ExpertiseArea } from "./types";

export const expertise: ExpertiseArea[] = [
  {
    slug: "bss-oss",
    title: "BSS / OSS Architecture",
    summary:
      "Catalog, order management, fulfilment, inventory, assurance and billing — and the boundaries between them.",
    description:
      "The commercial and operational core of an operator. I work across the full chain from CRM and CPQ through product, service and resource orders to fulfilment, inventory and assurance. The recurring theme is where the source of truth sits at each layer, and how catalog design either enables or quietly defeats runtime orchestration.",
    topics: [
      "Product Catalog",
      "Service Catalog",
      "Resource Catalog",
      "Product / Service / Resource modelling",
      "Order Management",
      "Order decomposition",
      "Service Order (SOM)",
      "Resource Order (ROM)",
      "Fulfilment & activation",
      "Inventory",
      "Service Management",
      "Assurance",
      "Billing",
      "Mediation",
      "Rating",
      "CRM / CPQ / COM / SOM",
      "TM Forum standards",
    ],
    relatedInsights: [
      "catalog-driven-architecture",
      "product-service-resource",
      "order-decomposition-boundary",
      "catalog-vs-runtime",
    ],
    relatedCaseStudies: ["telia-b2b-bss-oss-transformation", "marlink-oss-provisioning", "upc-derby-triple-play-provisioning", "catalog-driven-bss-oss"],
  },
  {
    slug: "transformation",
    title: "Transformation",
    summary:
      "Legacy modernisation and greenfield programmes, migration strategy, coexistence and the governance that keeps them honest.",
    description:
      "Most BSS/OSS transformations fail on sequencing and coexistence, not on technology choice. I focus on migration strategy — product-by-product, segment-by-segment, strangler — and on the operating model and governance that keep a multi-year programme anchored to an exit plan rather than a permanent dual stack.",
    topics: [
      "Legacy modernisation",
      "Greenfield transformation",
      "Product-by-product migration",
      "Coexistence & dual-run",
      "Migration strategy",
      "Operating model",
      "Platform rationalisation",
      "Transformation governance",
    ],
    relatedInsights: [
      "product-by-product-vs-big-bang",
      "legacy-modernisation-without-big-bang",
      "bss-oss-composability",
    ],
    relatedCaseStudies: [
      "telia-b2b-bss-oss-transformation",
      "marlink-oss-provisioning",
      "product-by-product-transformation",
    ],
  },
  {
    slug: "enterprise-architecture",
    title: "Enterprise Architecture",
    summary:
      "Capability, domain, application, integration and information architecture that hold together under a target operating model.",
    description:
      "Enterprise architecture in telecom only earns its keep when it changes decisions. I use capability and domain models to make ownership explicit, application and integration architecture to expose where data and control actually flow, and governance that is light enough to be followed.",
    topics: [
      "Capability architecture",
      "Domain architecture",
      "Application architecture",
      "Integration architecture",
      "Information architecture",
      "Target operating models",
      "Architecture governance",
    ],
    relatedInsights: ["oda-what-changes", "bss-oss-composability"],
    relatedCaseStudies: ["catalog-driven-bss-oss"],
  },
  {
    slug: "service-assurance-operations",
    title: "Service Assurance & Operations",
    summary:
      "ITSM, observability, event management and end-to-end service visibility — the runtime side of the architecture.",
    description:
      "I started here, and it remains the lens I bring to every design. Assurance is where architecture meets reality: whether an incident can be traced to a service, whether inventory reflects the network, and whether the NOC has a model of the service rather than a wall of alarms.",
    topics: [
      "ITSM",
      "Observability",
      "Event management",
      "Service assurance",
      "NOC / SOC",
      "Incident & problem management",
      "Operational transformation",
      "E2E service visibility",
    ],
    relatedInsights: ["assurance-cloud-native", "agentic-noc-oss"],
    relatedCaseStudies: [
      "telia-e2e-observability",
      "ai-native-telecom-operations",
    ],
  },
  {
    slug: "ai-modern-telecom",
    title: "AI & Modern Telecom",
    summary:
      "AI-native operations, agentic NOC patterns, autonomous networks and the infrastructure that makes them possible.",
    description:
      "AI changes the economics of operations only if it is grounded in the same models the architecture already depends on — the service topology, the catalog, the inventory. I focus on where agents fit in assurance and fulfilment, what data they need to be trustworthy, and where the current claims outrun the evidence.",
    topics: [
      "AI-native operations",
      "Agentic NOC",
      "AI agents",
      "Autonomous networks",
      "AI infrastructure",
      "AI factories",
      "Network intelligence",
      "AI-assisted architecture",
      "Emerging telecom operating models",
    ],
    relatedInsights: ["agentic-noc-oss", "ai-infrastructure-telecom"],
    relatedCaseStudies: ["ai-native-telecom-operations"],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    summary:
      "Hybrid cloud, data centres, networking and the GPU infrastructure now entering the telecom estate.",
    description:
      "Infrastructure architecture in telecom spans traditional data centres, hybrid cloud, cloud-native platforms and, increasingly, GPU-dense AI infrastructure. I work on how these fit together — placement, networking, operational ownership — rather than treating cloud as a destination in itself.",
    topics: [
      "Cloud",
      "Hybrid cloud",
      "Infrastructure architecture",
      "Data centres",
      "GPU infrastructure",
      "Networking",
      "AI infrastructure",
      "Cloud-native platforms",
    ],
    relatedInsights: ["ai-infrastructure-telecom", "assurance-cloud-native"],
    relatedCaseStudies: ["telia-hybrid-cloud", "vodafone-m-pesa-network"],
  },
  {
    slug: "tm-forum-oda",
    title: "TM Forum / ODA",
    summary:
      "ODA, eTOM, SID and Open APIs used as an operating model — not a compliance checklist.",
    description:
      "TM Forum standards are most useful as a shared language for decomposition and ownership. I use ODA and SID to define component boundaries and the product-service-resource model, and Open APIs to make those boundaries real at the interface — while being clear about what the frameworks do not decide for you.",
    topics: [
      "ODA",
      "eTOM",
      "SID",
      "Open APIs",
      "Domain-driven architecture",
      "Catalog-driven design",
    ],
    relatedInsights: ["oda-what-changes", "product-service-resource"],
    relatedCaseStudies: ["catalog-driven-bss-oss"],
  },
];

export function getExpertise(slug: string) {
  return expertise.find((e) => e.slug === slug);
}
