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
 * Organisations. Only verified facts are recorded. `role` and `period` are
 * left null until confirmed and are never rendered as guesses. Order is not
 * a claim of chronology.
 */
export const experience: ExperienceEntry[] = [
  {
    organisation: "Marlink",
    role: null,
    period: null,
    context:
      "Satellite communications and managed connectivity across multiple business units, with distinct products, networks and provisioning paths.",
    achievements: [
      "OSS provisioning modernisation across business units — a common order orchestration and service activation architecture replacing business-unit-specific provisioning.",
    ],
    scope: [
      "Order orchestration and service activation",
      "Legacy provisioning replacement",
      "Multi-business-unit architecture and coexistence",
    ],
    themes: [
      "Order orchestration",
      "Provisioning",
      "Service activation",
      "Legacy replacement",
      "Multi-BU architecture",
    ],
    relatedCaseStudies: ["marlink-oss-provisioning"],
    stages: ["Transformation", "BSS/OSS"],
  },
  {
    organisation: "Telia",
    role: null,
    period: null,
    context:
      "Nordic operator spanning B2B data communications, IT operations and infrastructure — including the integration that followed the TDC Denmark merger.",
    achievements: [
      "Delivered a greenfield BSS/OSS transformation for B2B data communications following the TDC Denmark merger, implementing Ericsson/Cisco-based target stacks across Norway and Sweden.",
      "Established Telia's first end-to-end monitoring and observability platform, spanning BSS, OSS, applications, infrastructure, databases and network, using Splunk, Nagios and BMC TrueSight.",
      "Delivered Telia's first hybrid cloud solution, based on Azure VMware Solution (AVS) and Direct Connect.",
    ],
    scope: [
      "Greenfield BSS/OSS target stacks for B2B data communications",
      "E2E monitoring, observability and service assurance",
      "Hybrid cloud architecture and delivery",
    ],
    themes: [
      "Greenfield BSS/OSS",
      "Post-merger integration",
      "Service assurance",
      "Observability",
      "E2E service visibility",
      "Hybrid cloud",
    ],
    technologies: ["Ericsson", "Cisco", "Splunk", "Nagios", "BMC TrueSight", "Azure VMware Solution", "Direct Connect"],
    relatedCaseStudies: [
      "telia-b2b-bss-oss-transformation",
      "telia-e2e-observability",
      "telia-hybrid-cloud",
    ],
    stages: ["Service Assurance", "Architecture", "BSS/OSS"],
  },
  {
    organisation: "Telenor",
    role: null,
    period: null,
    context: "Nordic operator. Scope and contribution are being confirmed before they are published here.",
    achievements: [],
    scope: [],
    themes: [],
    stages: [],
  },
  {
    organisation: "Vodafone",
    role: "Delivery Manager, M-Pesa",
    period: null,
    context:
      "M-Pesa mobile payments in Kenya and Mozambique — a platform whose availability depended directly on the underlying data network.",
    achievements: [
      "Delivery Manager for M-Pesa in Kenya and Mozambique, expanding the MPLS network to support the mobile payments platform.",
    ],
    scope: [
      "MPLS network expansion for the M-Pesa platform",
      "Delivery management across two markets",
    ],
    themes: ["Network delivery", "MPLS", "Mobile payments", "Multi-market delivery"],
    technologies: ["MPLS"],
    relatedCaseStudies: ["vodafone-m-pesa-network"],
    stages: ["Operations"],
  },
  {
    organisation: "UPC",
    role: "OSS Delivery Engineer",
    period: null,
    context:
      "Cable operator delivering Derby, Europe's first triple-play provisioning platform, spanning mobile, B2C broadband and Video on Demand.",
    achievements: [
      "Key technical contributor to the delivery of Derby — Europe's first triple-play provisioning platform across mobile, B2C broadband and Video on Demand.",
    ],
    scope: [
      "OSS delivery on a multi-service provisioning platform",
      "Provisioning across mobile, broadband and VoD",
    ],
    themes: ["Provisioning", "Triple-play", "OSS delivery", "Service activation"],
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
