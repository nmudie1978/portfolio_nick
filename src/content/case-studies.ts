import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "marlink-oss-provisioning",
    title: "OSS provisioning modernisation across business units",
    category: "OSS",
    organisation: "Marlink",
    kind: "engagement",
    featured: true,
    summary:
      "Replacing fragmented, business-unit-specific provisioning with a common order orchestration and service activation architecture for a multi-network satellite communications operator.",
    context: [
      {
        type: "p",
        text: "A satellite communications and managed connectivity operator serving several business units, each with its own products, networks and — over time — its own way of provisioning services. Provisioning had grown up around individual networks and vendor platforms rather than around a shared model of the service being delivered.",
      },
      {
        type: "p",
        text: "The result was familiar to anyone who has worked in a multi-business-unit operator: overlapping tools, manual hand-offs between order capture and activation, and a service picture that lived partly in systems and partly in people.",
      },
    ],
    challenge: [
      {
        type: "p",
        text: "Modernise OSS provisioning so that orders from any business unit could be orchestrated and activated through a common architecture — without stopping the businesses that depended on the existing paths, and without pretending that the different networks were the same.",
      },
      {
        type: "list",
        items: [
          "Multiple legacy provisioning paths with different data models and levels of automation.",
          "Business units with genuinely different products, networks and operational constraints.",
          "The need to keep existing customers and orders flowing throughout the change.",
          "A service model that had to be made explicit before it could be orchestrated.",
        ],
      },
    ],
    architecture: [
      {
        type: "p",
        text: "The approach separated what was common from what was specific. A shared order orchestration layer, driven by service specifications, sat above network- and domain-specific activation. Business-unit differences were pushed down into catalog content and domain adapters rather than expressed as separate provisioning stacks.",
      },
      {
        type: "flow",
        title: "Target provisioning path",
        steps: [
          { label: "Order capture", note: "Per business unit, normalised to a product order" },
          { label: "Order orchestration", note: "Decomposition against service specifications", tone: "copper" },
          { label: "Service activation", note: "Domain-specific adapters per network", tone: "copper" },
          { label: "Inventory update", note: "What was actually built, written back" },
        ],
      },
      {
        type: "list",
        items: [
          "Catalog-driven decomposition so new products did not require new orchestration code.",
          "Explicit service and resource models shared across business units.",
          "Domain adapters isolating each network's activation interface.",
          "Coexistence with legacy provisioning during migration, with a defined exit path per business unit.",
        ],
      },
    ],
    role: [
      {
        type: "p",
        text: "Architecture for the provisioning modernisation: the target architecture, the service and order models, the sequencing across business units and the coexistence strategy with legacy provisioning — working with operations and business-unit teams to make the implicit service model explicit, and with vendor and delivery teams on how the architecture was realised.",
      },
    ],
    transformation: [
      {
        type: "p",
        text: "The change was as much organisational as technical. Business units moved from owning a provisioning tool to owning catalog content and activation adapters within a shared architecture. Migration was sequenced by business unit and by service so that each step could be validated against live orders before the legacy path was retired.",
      },
    ],
    outcome: [
      {
        type: "p",
        text: "A common provisioning architecture with business-unit-specific content rather than business-unit-specific stacks, and a defined path for retiring legacy provisioning. Specific delivery metrics are not published here.",
      },
    ],
    lessons: [
      {
        type: "callout",
        text: "Multi-business-unit architecture is decided by what you refuse to make common. Forcing genuinely different networks into one activation model fails; forcing them to share a service model and an orchestration layer is what makes the architecture worth having.",
      },
      {
        type: "list",
        items: [
          "The service model has to be agreed before orchestration is designed, not discovered during it.",
          "Coexistence needs an exit criterion per business unit, or it becomes the permanent state.",
          "Adapters are cheap; a second orchestration layer is not.",
        ],
      },
    ],
    technologies: [
      "Order orchestration",
      "Service activation",
      "Service catalog",
      "Inventory",
      "Domain adapters",
    ],
    relatedInsights: [
      "order-decomposition-boundary",
      "legacy-modernisation-without-big-bang",
      "catalog-driven-architecture",
    ],
  },
  {
    slug: "telia-e2e-observability",
    title: "Telia's first end-to-end monitoring and observability platform",
    category: "Operations",
    organisation: "Telia",
    kind: "engagement",
    featured: true,
    summary:
      "Establishing one monitoring and observability platform across BSS, OSS, applications, infrastructure, databases and network — using Splunk, Nagios and BMC TrueSight — so operations could see services rather than components.",
    context: [
      {
        type: "p",
        text: "Monitoring at Telia had accumulated by domain: infrastructure tooling for servers and network, application-specific checks, ITSM for process. Each gave a partial view, and the picture of a customer-facing service was assembled by people during an incident rather than held by a system.",
      },
    ],
    challenge: [
      {
        type: "p",
        text: "Establish a single end-to-end monitoring and observability capability spanning BSS, OSS, applications, infrastructure, databases and network — the first of its kind at Telia — without replacing every domain tool or stalling live operations.",
      },
      {
        type: "list",
        items: [
          "Events and metrics from six technology domains with different owners and formats.",
          "No shared model connecting an infrastructure alarm to the BSS/OSS service it affected.",
          "Existing tooling that had to be integrated, not discarded.",
        ],
      },
    ],
    architecture: [
      {
        type: "p",
        text: "The platform combined Splunk, Nagios and BMC TrueSight — analytics across logs, metrics and events; availability monitoring; and event and infrastructure management — into one capability spanning all six domains, so that a cross-domain picture existed above the individual tools rather than inside any one of them.",
      },
      {
        type: "flow",
        title: "Monitoring and observability layers",
        steps: [
          { label: "Domain sources", note: "BSS, OSS, applications, infrastructure, databases, network", tone: "signal" },
          { label: "Monitoring & event management", note: "Nagios and BMC TrueSight", tone: "signal" },
          { label: "Observability & analytics", note: "Splunk — logs, metrics and events across domains", tone: "signal" },
          { label: "Service view", note: "Impact expressed against services, feeding ITSM" },
        ],
      },
    ],
    role: [
      {
        type: "p",
        text: "Established the platform: defining the monitoring architecture across the six domains, the role of each tool, the integration between them and the operating model for keeping coverage and the service model current as the estate changed.",
      },
    ],
    transformation: [
      {
        type: "p",
        text: "Operations moved from domain-by-domain alarm handling to a single cross-domain view. Ownership of monitoring coverage and the service model became an explicit responsibility rather than tribal knowledge — the part of an assurance change most often left out.",
      },
    ],
    outcome: [
      {
        type: "p",
        text: "Telia's first end-to-end monitoring and observability platform, spanning BSS, OSS, applications, infrastructure, databases and network. Quantified operational results are not published here.",
      },
    ],
    lessons: [
      {
        type: "callout",
        text: "Observability across domains is only as useful as the model that connects them. Tools can be integrated in months; keeping the service model accurate is a permanent operational discipline and needs an owner.",
      },
      {
        type: "list",
        items: [
          "Give each tool one role; overlapping tools produce overlapping truths.",
          "Correlation without a service model is better-organised noise.",
          "ITSM and monitoring should share a model, not just a ticket integration.",
        ],
      },
    ],
    technologies: ["Splunk", "Nagios", "BMC TrueSight", "Event management", "Observability", "ITSM"],
    relatedInsights: ["assurance-cloud-native", "agentic-noc-oss"],
  },
  {
    slug: "telia-b2b-bss-oss-transformation",
    title: "Greenfield BSS/OSS for B2B data communications after the TDC Denmark merger",
    category: "BSS/OSS",
    organisation: "Telia",
    kind: "engagement",
    featured: true,
    summary:
      "Delivering a greenfield BSS/OSS transformation for B2B data communications, implementing Ericsson/Cisco-based target stacks across Norway and Sweden.",
    context: [
      {
        type: "p",
        text: "The merger with TDC Denmark brought together B2B data communications businesses with separate systems, product sets and operating practices. Rather than extend either legacy estate, the decision was to build a greenfield BSS/OSS target stack for B2B data communications.",
      },
    ],
    challenge: [
      {
        type: "p",
        text: "Stand up a new BSS/OSS stack for enterprise data communications across two countries, on Ericsson and Cisco platforms, while existing customers continued to be served and the merged organisation was still forming.",
      },
      {
        type: "list",
        items: [
          "Two national businesses, Norway and Sweden, with their own networks and legacy systems.",
          "B2B connectivity products — multi-site, contract-specific and long-lived — that consumer-shaped stacks handle badly.",
          "A greenfield build with no option to inherit undocumented behaviour from the legacy systems.",
        ],
      },
    ],
    architecture: [
      {
        type: "p",
        text: "A greenfield, Ericsson/Cisco-based BSS/OSS target stack, deployed as a common architecture across Norway and Sweden with country-specific content and network integration rather than two separate builds.",
      },
      {
        type: "flow",
        title: "Target stack shape",
        steps: [
          { label: "Target stack", note: "Ericsson/Cisco-based BSS/OSS components — greenfield, not extended legacy", tone: "copper" },
          { label: "Common architecture", note: "One design for B2B data communications", tone: "copper" },
          { label: "Country deployment", note: "Norway and Sweden — local content and network integration" },
        ],
      },
    ],
    role: [
      {
        type: "p",
        text: "Delivery of the greenfield BSS/OSS transformation for B2B data communications — the target stacks across Norway and Sweden, on Ericsson and Cisco platforms.",
      },
    ],
    transformation: [
      {
        type: "p",
        text: "The merged B2B data communications business gained a single target architecture instead of two inherited estates. Greenfield forced the product, service and resource models to be made explicit from the start rather than reverse-engineered from legacy behaviour.",
      },
    ],
    outcome: [
      {
        type: "p",
        text: "Ericsson/Cisco-based BSS/OSS target stacks for B2B data communications in Norway and Sweden. Commercial and migration metrics are not published here.",
      },
    ],
    lessons: [
      {
        type: "callout",
        text: "Greenfield is the one time you get to define the service model before the systems exist. Spend that time; everything downstream — decomposition, orchestration, assurance — inherits it.",
      },
      {
        type: "list",
        items: [
          "B2B connectivity needs a model built for multi-site, long-lived services, not an adapted consumer stack.",
          "One architecture across countries works when the differences are pushed into content and adapters.",
          "Post-merger transformation is an organisational design problem wearing a systems programme.",
        ],
      },
    ],
    technologies: ["Ericsson", "Cisco", "Greenfield BSS/OSS", "B2B data communications"],
    relatedInsights: ["b2b-vs-b2c-connectivity", "catalog-driven-architecture", "product-by-product-vs-big-bang"],
  },
  {
    slug: "telia-hybrid-cloud",
    title: "Telia's first hybrid cloud solution",
    category: "Cloud & Infrastructure",
    organisation: "Telia",
    kind: "engagement",
    summary:
      "Delivering Telia's first hybrid cloud solution, based on Azure VMware Solution (AVS) and Direct Connect — extending the existing VMware estate into Azure without re-platforming workloads.",
    context: [
      {
        type: "p",
        text: "Telia's workloads ran on an existing on-premise VMware estate. Cloud capacity was wanted without a wholesale re-platforming of those workloads or a second operating model.",
      },
    ],
    challenge: [
      {
        type: "p",
        text: "Deliver a first hybrid cloud capability that let existing VMware workloads run in Azure with the same operational model, connected privately to the on-premise estate.",
      },
    ],
    architecture: [
      {
        type: "flow",
        title: "Hybrid cloud shape",
        steps: [
          { label: "On-premise VMware estate", note: "Existing workloads and operational tooling" },
          { label: "Direct Connect", note: "Private connectivity between the data centre and Azure", tone: "copper" },
          { label: "Azure VMware Solution", note: "VMware-native capacity in Azure — same tooling, no re-platforming", tone: "copper" },
          { label: "Operations", note: "One operating model across both locations" },
        ],
      },
      {
        type: "p",
        text: "The architectural choice was to keep the VMware operating model constant and change the location, rather than change both at once. Private connectivity made the cloud capacity an extension of the data centre rather than a separate environment.",
      },
    ],
    role: [
      {
        type: "p",
        text: "Delivered the hybrid cloud solution — the AVS and Direct Connect architecture and its integration with the existing estate.",
      },
    ],
    transformation: [
      {
        type: "p",
        text: "Cloud became an available placement option for existing workloads without a migration programme per application, and operations gained a hybrid estate under one model.",
      },
    ],
    outcome: [
      {
        type: "p",
        text: "Telia's first hybrid cloud solution, based on Azure VMware Solution and Direct Connect. Capacity and cost figures are not published here.",
      },
    ],
    lessons: [
      {
        type: "callout",
        text: "The fastest route to hybrid cloud is often the least fashionable: keep the operating model, move the location. Re-platforming can follow workload by workload once the connectivity and operations are proven.",
      },
    ],
    technologies: ["Azure VMware Solution", "Direct Connect", "VMware", "Hybrid cloud"],
    relatedInsights: ["assurance-cloud-native", "ai-infrastructure-telecom"],
  },
  {
    slug: "upc-derby-triple-play-provisioning",
    title: "Derby: Europe's first triple-play provisioning platform",
    category: "OSS",
    organisation: "UPC",
    kind: "engagement",
    featured: true,
    summary:
      "Key technical contributor, as OSS Delivery Engineer, to the delivery of Derby — Europe's first triple-play provisioning platform, spanning mobile, B2C broadband and Video on Demand.",
    context: [
      {
        type: "p",
        text: "UPC was bringing mobile, B2C broadband and Video on Demand onto a single provisioning platform, Derby — the first triple-play provisioning platform in Europe. Each service line had its own network, activation path and operational history.",
      },
    ],
    challenge: [
      {
        type: "p",
        text: "Provision three fundamentally different service types through one platform, with activation paths into each network, and keep provisioning working for live customers throughout delivery.",
      },
    ],
    architecture: [
      {
        type: "flow",
        title: "Triple-play provisioning",
        steps: [
          { label: "Order intake", note: "Bundled orders across service lines" },
          { label: "Derby provisioning", note: "One provisioning platform for mobile, broadband and VoD", tone: "copper" },
          { label: "Activation", note: "Service-specific paths into mobile, cable broadband and VoD networks", tone: "copper" },
        ],
      },
    ],
    role: [
      {
        type: "p",
        text: "OSS Delivery Engineer — a key technical contributor to the delivery of the platform, working on the OSS provisioning and activation that made triple-play orders flow through Derby.",
      },
    ],
    transformation: [
      {
        type: "p",
        text: "Provisioning moved from per-service silos to a single platform able to fulfil a bundle as one order. It was also where the operational lessons that shaped the later architecture work were first learned.",
      },
    ],
    outcome: [
      {
        type: "p",
        text: "Europe's first triple-play provisioning platform delivered across mobile, B2C broadband and Video on Demand. Volumes and timelines are not published here.",
      },
    ],
    lessons: [
      {
        type: "callout",
        text: "Multi-service provisioning taught the lesson that everything since has confirmed: the hard part is not the platform, it is agreeing what a service is before three networks are asked to activate it.",
      },
    ],
    technologies: ["OSS provisioning", "Service activation", "Triple-play", "Mobile", "Broadband", "Video on Demand"],
    relatedInsights: ["order-decomposition-boundary", "product-service-resource"],
  },
  {
    slug: "vodafone-m-pesa-network",
    title: "M-Pesa: expanding the MPLS network for mobile payments",
    category: "Network Delivery",
    organisation: "Vodafone",
    kind: "engagement",
    summary:
      "Delivery Manager for M-Pesa in Kenya and Mozambique, expanding the MPLS network to support the mobile payments platform.",
    context: [
      {
        type: "p",
        text: "M-Pesa is Vodafone's mobile payments platform. In Kenya and Mozambique its growth depended on the underlying data network: every transaction is a network transaction, and the MPLS network had to expand to carry it.",
      },
    ],
    challenge: [
      {
        type: "p",
        text: "Expand the MPLS network in two markets to support the mobile payments platform, coordinating network delivery around a platform that was already live.",
      },
    ],
    architecture: [
      {
        type: "p",
        text: "The work was network delivery in service of a platform: MPLS expansion sized and sequenced around the payments platform's needs, in two countries with different infrastructure realities.",
      },
      {
        type: "flow",
        title: "Delivery shape",
        steps: [
          { label: "M-Pesa platform", note: "Mobile payments — the service the network had to carry" },
          { label: "MPLS expansion", note: "Network capacity and reach across Kenya and Mozambique", tone: "copper" },
          { label: "Delivery management", note: "Sequencing and market-specific constraints" },
        ],
      },
    ],
    role: [
      {
        type: "p",
        text: "Delivery Manager for M-Pesa in Kenya and Mozambique — managing the MPLS network expansion that supported the platform.",
      },
    ],
    transformation: [
      {
        type: "p",
        text: "Network capacity and reach were expanded ahead of the platform's growth in both markets, with delivery managed across two very different infrastructure environments.",
      },
    ],
    outcome: [
      {
        type: "p",
        text: "MPLS network expansion delivered in Kenya and Mozambique in support of M-Pesa. Transaction and capacity figures are not published here.",
      },
    ],
    lessons: [
      {
        type: "callout",
        text: "A payments platform is a network product. Delivering it taught me to read every 'application' problem for the connectivity underneath it — a habit that carried into assurance and architecture.",
      },
    ],
    technologies: ["MPLS", "Network delivery", "Mobile payments"],
    relatedInsights: ["b2b-vs-b2c-connectivity"],
  },
  {
    slug: "catalog-driven-bss-oss",
    title: "Catalog-driven BSS/OSS",
    category: "Architecture",
    kind: "pattern",
    featured: true,
    summary:
      "An architecture pattern: product, service and resource catalogs as the specifications that order management decomposes against, with inventory and assurance closing the loop.",
    context: [
      {
        type: "p",
        text: "This is a pattern rather than a single engagement. It describes the shape of a BSS/OSS architecture that I have worked towards, in different forms, across operators and transformation programmes — and the reasons it keeps being the target.",
      },
      {
        type: "stack",
        title: "Layers",
        layers: [
          { label: "Business", note: "Segments, channels, commercial rules" },
          { label: "Product", note: "What is sold — offers, prices, product specifications" },
          { label: "Service", note: "What is delivered — CFS and RFS specifications" },
          { label: "Resource", note: "What is configured — logical and physical resources" },
        ],
      },
    ],
    challenge: [
      {
        type: "p",
        text: "In most operators, the knowledge of how a product becomes a working service lives in code, in integration flows and in people. Launching a product means changing orchestration; changing a network means changing every product that touches it. The challenge is to move that knowledge into specifications that systems can read.",
      },
    ],
    architecture: [
      {
        type: "flow",
        title: "Order-to-Activation",
        steps: [
          { label: "Customer", note: "Party, agreements, accounts" },
          { label: "CRM / CPQ", note: "Quote configured against the product catalog" },
          { label: "Product Order", note: "Commercial order, priced and validated", tone: "copper" },
          { label: "Order Management", note: "Decomposition using product → service relationships", tone: "copper" },
          { label: "Service Order", note: "CFS and RFS orders per service specification", tone: "copper" },
          { label: "Resource Order", note: "Resource allocation and configuration requests", tone: "copper" },
          { label: "Fulfilment", note: "Activation across network domains", tone: "copper" },
          { label: "Inventory", note: "Product, service and resource state written back" },
          { label: "Assurance", note: "Runtime feedback correlated through the same model", tone: "signal" },
        ],
      },
      {
        type: "list",
        items: [
          "Three catalogs, three owners: commercial, service design and network engineering.",
          "Order managers decompose against specifications; they do not encode product logic.",
          "Inventory records what exists at each layer and is the reference for assurance.",
          "Open APIs at the layer boundaries make components replaceable independently.",
        ],
      },
    ],
    role: [
      {
        type: "p",
        text: "Defining and defending this pattern in target architectures, transformation roadmaps and vendor evaluations — and, more importantly, working out which parts an organisation is actually ready to adopt and in what order.",
      },
    ],
    transformation: [
      {
        type: "p",
        text: "Catalog-driven architecture is a change in where knowledge lives. Product managers, service designers and network engineers each become responsible for a specification that the runtime depends on. That is a bigger change than any platform.",
      },
    ],
    outcome: [
      {
        type: "p",
        text: "When it works, launching a product is a catalog change and a network change is a service specification change. When it fails, it is usually because a commercial catalog was introduced without the service and resource layers — and orchestration was left to fill the gap.",
      },
    ],
    lessons: [
      {
        type: "callout",
        text: "A product catalog without runtime consumers is a data entry exercise. The value of catalog-driven architecture is realised in order management, fulfilment and assurance — not in the catalog.",
      },
      {
        type: "list",
        items: [
          "Catalog and runtime are different worlds; design them with different owners and lifecycles.",
          "Existing customers were provisioned before the model existed. Migration has to reconcile that.",
          "Billing truth, service truth and network truth will diverge; decide which wins, per layer.",
        ],
      },
    ],
    technologies: [
      "Product / Service / Resource catalogs",
      "Order management",
      "TMF Open APIs",
      "Inventory",
      "SID",
    ],
    relatedInsights: [
      "catalog-driven-architecture",
      "product-service-resource",
      "catalog-vs-runtime",
      "order-decomposition-boundary",
    ],
  },
  {
    slug: "product-by-product-transformation",
    title: "Product-by-product transformation",
    category: "Transformation",
    kind: "pattern",
    summary:
      "Migrating a BSS/OSS stack one product at a time — the architectural rationale, the coexistence it requires and the trade-offs against a big-bang cut-over.",
    context: [
      {
        type: "p",
        text: "Operators replacing legacy BSS/OSS face a choice that is rarely framed honestly: migrate everything at once, or run two stacks for years. Product-by-product migration is the most common middle path and the least understood.",
      },
    ],
    challenge: [
      {
        type: "p",
        text: "Move products, customers and orders from a legacy stack to a target architecture while both continue to run — without a permanent dual stack, without a data clean-up that is always scheduled for later, and with each step reversible.",
      },
    ],
    architecture: [
      {
        type: "flow",
        title: "Migration sequence for one product",
        steps: [
          { label: "Model", note: "Define the product, service and resource specifications in the target catalogs" },
          { label: "New sales", note: "Route new orders for the product to the target stack", tone: "copper" },
          { label: "Coexist", note: "Legacy continues to serve existing instances; a routing layer decides per order" },
          { label: "Migrate instances", note: "Reconcile and move existing customer instances, in tranches", tone: "copper" },
          { label: "Retire", note: "Decommission the legacy path for this product — the exit criterion" },
        ],
      },
      {
        type: "list",
        items: [
          "An order routing layer that decides, per product and per customer, which stack fulfils.",
          "Reconciliation between legacy and target inventories before any instance is moved.",
          "Billing and assurance handled explicitly for the coexistence period.",
          "A product sequencing plan driven by dependency, not by commercial priority alone.",
        ],
      },
    ],
    role: [
      {
        type: "p",
        text: "Shaping migration strategy and sequencing in transformation programmes: choosing between product-by-product, business-unit and customer-segment patterns, defining coexistence architecture and setting the exit criteria that governance holds the programme to.",
      },
    ],
    transformation: [
      {
        type: "p",
        text: "Each product migration is a small transformation with its own data reconciliation, operational readiness and retirement. The programme succeeds by making that repeatable — and by treating the legacy retirement, not the target go-live, as the milestone that matters.",
      },
    ],
    outcome: [
      {
        type: "p",
        text: "Risk is spread and reversible, early products prove the target architecture on real orders, and the organisation learns migration before it attempts the hardest products. The cost is a long coexistence period that has to be designed and governed, not tolerated.",
      },
    ],
    lessons: [
      {
        type: "callout",
        text: "Product-by-product migration works when the exit is defined per product. Without an exit criterion, it is a dual-stack strategy wearing a roadmap.",
      },
      {
        type: "list",
        items: [
          "Sequence by dependency and shared services, then by commercial value.",
          "Historical instances rarely have clean product lineage; budget for reconciliation.",
          "Big bang is sometimes right — for small estates, simple products or when legacy is unsupportable.",
        ],
      },
    ],
    technologies: [
      "Order routing",
      "Data reconciliation",
      "Coexistence architecture",
      "Transformation governance",
    ],
    relatedInsights: [
      "product-by-product-vs-big-bang",
      "legacy-modernisation-without-big-bang",
      "bss-oss-composability",
    ],
  },
  {
    slug: "ai-native-telecom-operations",
    title: "AI-native telecom operations",
    category: "AI & Operations",
    kind: "pattern",
    summary:
      "Where AI agents genuinely fit in service assurance and operations — event correlation, impact analysis and remediation — and what the OSS must provide for them to be trusted.",
    context: [
      {
        type: "p",
        text: "Operations teams are being offered agents that promise to correlate events, diagnose faults and remediate autonomously. Much of the industry conversation treats this as a tooling change. From the assurance side, it is an architecture change: the agent's judgement is only as good as the service model, inventory and telemetry it reasons over.",
      },
    ],
    challenge: [
      {
        type: "p",
        text: "Design an operations architecture in which AI agents reduce time-to-impact and time-to-restore without becoming an unaccountable layer that the NOC cannot verify — and identify what existing OSS capabilities are prerequisites rather than nice-to-haves.",
      },
    ],
    architecture: [
      {
        type: "flow",
        title: "Agentic assurance loop",
        steps: [
          { label: "Telemetry & events", note: "Normalised, with resource identity", tone: "signal" },
          { label: "Correlation", note: "Deterministic first; agent for the residual", tone: "signal" },
          { label: "Impact analysis", note: "Agent reasons over service inventory and topology", tone: "signal" },
          { label: "Proposed action", note: "Runbook selection, explanation and confidence" },
          { label: "Guardrail", note: "Policy: auto-execute, approve or escalate" },
          { label: "Remediation", note: "Via the same activation and orchestration path as fulfilment", tone: "copper" },
          { label: "Feedback", note: "Outcome written back to improve correlation and inventory", tone: "signal" },
        ],
      },
      {
        type: "list",
        items: [
          "Agents consume the service model and inventory through the same APIs as everything else.",
          "Deterministic correlation stays; agents handle the ambiguous residual and explain it.",
          "Remediation goes through orchestration, not around it, so inventory stays true.",
          "A policy layer decides autonomy per action class, and every action is auditable.",
        ],
      },
    ],
    role: [
      {
        type: "p",
        text: "Exploring and designing this pattern from the perspective of someone who has run service assurance: defining the prerequisites, the guardrails and the boundaries between agent judgement and deterministic OSS — and keeping the claims proportionate to the evidence.",
      },
    ],
    transformation: [
      {
        type: "p",
        text: "The operating model shifts from people working queues to people supervising policy: deciding which actions agents may take, reviewing what they did and correcting the models they depend on. The NOC becomes the owner of the service model, not the consumer of alarms.",
      },
    ],
    outcome: [
      {
        type: "p",
        text: "A reference architecture for agentic assurance that is explicit about dependencies: accurate inventory, a service model, normalised telemetry and an orchestration path for remediation. Without those, an agent is a chatbot in front of an alarm list.",
      },
    ],
    lessons: [
      {
        type: "callout",
        text: "AI-native operations is mostly an OSS data-quality programme with an agent on top. The organisations that benefit first are the ones whose inventory and service models are already trustworthy.",
      },
      {
        type: "list",
        items: [
          "Start with impact analysis and explanation, where being wrong is cheap and visible.",
          "Autonomy is a policy per action class, not a product setting.",
          "Agents must act through orchestration so that runtime state stays consistent.",
        ],
      },
    ],
    technologies: [
      "AI agents",
      "Event correlation",
      "Service inventory",
      "Orchestration",
      "Policy & guardrails",
    ],
    relatedInsights: [
      "agentic-noc-oss",
      "assurance-cloud-native",
      "ai-infrastructure-telecom",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
