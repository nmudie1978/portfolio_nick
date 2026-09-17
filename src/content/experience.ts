import type { ExperienceEntry, JourneyStage } from "./types";

/**
 * Career progression as architectural themes. This is the primary framing
 * of the Experience page; organisations are evidence for it.
 */
export const journey: JourneyStage[] = [
  {
    label: "Operations",
    title: "Close to the network",
    description:
      "OSS delivery on live provisioning platforms — seeing, first-hand, what happens when the systems that describe the network disagree with the network itself.",
  },
  {
    label: "Service Assurance",
    title: "From alarms to services",
    description:
      "Monitoring, observability and ITSM across BSS, OSS, applications, infrastructure and network — building the model that lets an operations team talk about services rather than devices.",
  },
  {
    label: "Architecture",
    title: "Designing the whole",
    description:
      "Moving from operating and delivering systems to designing them: application, integration, infrastructure and domain architecture across the operational and commercial estate.",
  },
  {
    label: "BSS / OSS",
    title: "Catalog, order, fulfilment, inventory",
    description:
      "Greenfield BSS/OSS stacks, catalog-driven design, order orchestration and service provisioning — the core that decides whether a product can be sold, delivered and assured end to end.",
  },
  {
    label: "Transformation",
    title: "Changing it while it runs",
    description:
      "Legacy modernisation, greenfield programmes and post-merger integration with real customers on the old stack — sequencing, coexistence and governance.",
  },
  {
    label: "AI / Modern Telecom",
    title: "Operations that reason",
    description:
      "AI-native operations, agentic assurance and the infrastructure behind them — applied with the scepticism of someone who has run monitoring for a national operator.",
  },
];

/**
 * Organisations, most recent first, with the roles held at each as stated on
 * the CV. `role` and `period` summarise the organisation; `roles` carries the
 * detail. Nothing here is inferred.
 */
export const experience: ExperienceEntry[] = [
  {
    organisation: "Analysys Mason",
    location: "Oslo, Norway",
    role: "Principal Transformation Consultant",
    period: "Current",
    context:
      "Telecom, media and technology consultancy. Transformation consulting for telecom operators — the current role.",
    achievements: [],
    scope: ["Transformation consulting for telecom operators"],
    themes: ["Transformation", "BSS/OSS", "Architecture", "Consulting"],
    stages: ["Transformation", "AI / Modern Telecom"],
  },
  {
    organisation: "Marlink",
    location: "Norway",
    role: "Head of OSS",
    period: "2024 – 2026",
    roles: [
      {
        title: "Head of OSS",
        period: "2024 – 2026",
        highlights: [
          "Led the multi-business-unit Order-to-Activation transformation into orchestrated, catalog-driven BSS/OSS service delivery.",
          "Defined the Lead-to-Cash and Trouble-to-Resolve architecture, operating model and COTS adoption.",
        ],
      },
    ],
    context:
      "Satellite communications and managed connectivity across multiple business units, with distinct products, networks and provisioning paths.",
    achievements: [
      "OSS provisioning modernisation across business units — a common order orchestration and service activation architecture replacing business-unit-specific provisioning.",
    ],
    scope: [
      "Order-to-Activation transformation across business units",
      "Lead-to-Cash and Trouble-to-Resolve architecture and operating model",
      "COTS adoption and legacy provisioning replacement",
    ],
    themes: [
      "Order orchestration",
      "Catalog-driven delivery",
      "Service activation",
      "Legacy replacement",
      "Multi-BU architecture",
    ],
    relatedCaseStudies: ["marlink-oss-provisioning"],
    stages: ["Transformation", "BSS/OSS"],
  },
  {
    organisation: "Telia",
    location: "Norway and Sweden",
    role: "Technical Project Manager — BSS/OSS Transformation",
    period: "2012 – 2024",
    roles: [
      {
        title: "Technical Project Manager — BSS/OSS Transformation",
        unit: "Telia Sweden",
        period: "2022 – 2024",
        highlights: [
          "Owned the B2B datacom OSS replacement using Ericsson and Cisco NSO.",
          "Led a ~20-person delivery across Agile Release Trains, governing risks, dependencies and SteerCo.",
          "Delivered catalog and TMF-based activation across L3VPN, L2VPN, SD-WAN, DMVPN, FWA and Business Internet.",
        ],
      },
      {
        title: "Technical Project Manager — M&A / OSS Transformation",
        unit: "Telia Norway",
        period: "2018 – 2022",
        highlights: [
          "Led the B2B OSS replacement through the Telia/TDC merger — RFI/RFP, vendor selection, PoC and rollout (Ericsson and Cisco).",
          "Introduced catalog architecture for 80+ products, BPMN orchestration, ActiveMQ integration and TMF APIs.",
          "Directed a ~30-person delivery through migration, testing, training and go-live.",
        ],
      },
      {
        title: "Technical Project Manager — AWS Hybrid Cloud Rollout",
        unit: "Telia Norway",
        period: "2016 – 2018",
        highlights: [
          "Delivered Telia's first hybrid cloud solution on AWS, integrating on-premise infrastructure with AWS services.",
          "Established the AWS Landing Zone and cloud operating model, covering VPC, IAM, security guardrails and hybrid connectivity.",
        ],
      },
      {
        title: "Head of IT Operations & Service Assurance",
        unit: "Telia Norway",
        period: "2014 – 2018",
        highlights: [
          "Overall responsibility for the operational efficiency of four brands, including data-centre and hybrid-cloud infrastructure.",
          "Delivered infrastructure consolidation and data-centre migrations.",
        ],
      },
      {
        title: "Technical Project Manager — E2E Monitoring & Observability",
        unit: "Telia Norway",
        period: "2015 – 2016",
        highlights: [
          "Led the implementation of Telia's first end-to-end monitoring and observability platform (Splunk, Nagios, BMC TrueSight).",
          "Covered applications, databases, network, BSS/OSS and external vendors.",
          "Led a five-person technical team from solution evaluation to rollout and operationalisation.",
        ],
      },
      {
        title: "Global Test Environment Manager",
        unit: "Telia Norway",
        period: "2012 – 2014",
        highlights: [
          "Built and managed complex test environments supporting BSS/OSS transformation projects.",
          "Coordinated CRM, CPQ, billing, order provisioning, ITSM and network environments.",
          "Managed environment configuration, network zoning, load balancing and data refresh processes.",
        ],
      },
    ],
    context:
      "Nordic operator spanning B2B data communications, IT operations and infrastructure — including the integration that followed the TDC merger. Twelve years across Norway and Sweden, from test environments and IT operations to leading BSS/OSS transformation.",
    achievements: [
      "Delivered a greenfield BSS/OSS transformation for B2B data communications following the TDC merger, implementing Ericsson/Cisco-based target stacks across Norway and Sweden.",
      "Established Telia's first end-to-end monitoring and observability platform, spanning BSS, OSS, applications, infrastructure, databases and network, using Splunk, Nagios and BMC TrueSight.",
      "Delivered Telia's first hybrid cloud solution on AWS, with an AWS Landing Zone and Direct Connect to the on-premise estate.",
    ],
    scope: [
      "B2B OSS replacement and catalog/TMF activation across Norway and Sweden",
      "IT operations and service assurance for four brands",
      "E2E monitoring, observability and service assurance",
      "Hybrid cloud architecture and delivery",
      "Test environments for BSS/OSS transformation",
    ],
    themes: [
      "Greenfield BSS/OSS",
      "Post-merger integration",
      "Vendor selection",
      "Service assurance",
      "Observability",
      "IT operations",
      "Hybrid cloud",
    ],
    technologies: [
      "Ericsson",
      "Cisco NSO",
      "TMF APIs",
      "BPMN",
      "ActiveMQ",
      "Splunk",
      "Nagios",
      "BMC TrueSight",
      "AWS",
      "Direct Connect",
    ],
    relatedCaseStudies: [
      "telia-b2b-bss-oss-transformation",
      "telia-e2e-observability",
      "telia-hybrid-cloud",
      "telia-it-operations-service-assurance",
      "telia-test-environments",
    ],
    stages: ["Service Assurance", "Architecture", "BSS/OSS", "Transformation"],
  },
  {
    organisation: "Vodafone",
    location: "Vodafone Global",
    role: "Technical Delivery Manager, M-Pesa",
    period: "2009 – 2012",
    roles: [
      {
        title: "Technical Delivery Manager, M-Pesa Kenya",
        period: "2010 – 2012",
        highlights: ["25-million-subscriber rollout of M-Pesa in Kenya."],
      },
      {
        title: "Operations & Deployment Specialist",
        period: "2009 – 2010",
        highlights: ["Operations and deployment of the Vodafone 360 music service across Italy, Greece and Ireland."],
      },
    ],
    context:
      "M-Pesa mobile payments in Kenya and Mozambique — a platform whose availability depended directly on the underlying data network.",
    achievements: [
      "Delivery Manager for M-Pesa in Kenya and Mozambique, expanding the MPLS network to support the mobile payments platform.",
    ],
    scope: [
      "MPLS network expansion for the M-Pesa platform",
      "Delivery management across two markets",
      "Vodafone 360 music service operations and deployment in Italy, Greece and Ireland",
    ],
    themes: ["Network delivery", "MPLS", "Mobile payments", "Multi-market delivery"],
    technologies: ["MPLS"],
    relatedCaseStudies: ["vodafone-m-pesa-network"],
    stages: ["Operations"],
  },
  {
    organisation: "Irdeto",
    location: "Telenor engagement",
    role: "Senior Technical Analyst, BSS",
    period: "2006 – 2009",
    roles: [
      {
        title: "Senior Technical Analyst, BSS",
        period: "2006 – 2009",
        highlights: ["Telenor customer care and billing data migration."],
      },
    ],
    context:
      "BSS vendor engagement at Telenor: the customer care and billing data migration.",
    achievements: [],
    scope: ["Telenor CC&Billing data migration"],
    themes: ["Data migration", "Billing", "Customer care"],
    stages: ["BSS / OSS"],
  },
  {
    organisation: "UPC",
    location: "The Netherlands",
    role: "Senior Applications Engineer",
    period: "2001 – 2006",
    roles: [
      {
        title: "Senior Applications Engineer",
        unit: "UPC Technology",
        period: "2001 – 2006",
        highlights: ["Amdocs fulfilment automation (OSS)."],
      },
    ],
    context:
      "Cable operator delivering Derby, Europe's first triple-play provisioning platform, spanning mobile, B2C broadband and Video on Demand.",
    achievements: [
      "Key technical contributor to the delivery of Derby — Europe's first triple-play provisioning platform across mobile, B2C broadband and Video on Demand.",
    ],
    scope: [
      "Amdocs fulfilment automation (OSS)",
      "Provisioning across mobile, broadband and VoD",
    ],
    themes: ["Provisioning", "Triple-play", "OSS delivery", "Service activation"],
    technologies: ["Amdocs"],
    relatedCaseStudies: ["upc-derby-triple-play-provisioning"],
    stages: ["Operations"],
  },
];

/** Organisations in the order they appear on the profile. */
export const organisations = experience.map((e) => e.organisation);

export const environments = [
  "Operators",
  "Vendors",
  "Managed-service environments",
];
