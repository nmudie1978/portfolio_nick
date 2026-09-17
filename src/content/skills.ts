import type { SkillDomain } from "./types";

/**
 * Professional capability organised by domain rather than as a keyword
 * cloud. Every item is supported by the experience, achievements or
 * expertise content elsewhere on the site.
 */
export const skillDomains: SkillDomain[] = [
  {
    slug: "architecture-transformation",
    title: "Architecture & Transformation",
    summary: "Designing target architectures and the programmes that reach them without a permanent dual stack.",
    skills: [
      "BSS/OSS Architecture",
      "Solution Architecture",
      "Enterprise Architecture",
      "Transformation Strategy",
      "Greenfield Transformation",
      "Legacy Modernisation",
      "Target Architecture",
      "Architecture Governance",
    ],
  },
  {
    slug: "bss-oss",
    title: "BSS / OSS",
    summary: "The commercial and operational core: catalog, order, fulfilment, inventory and assurance, and the boundaries between them.",
    skills: [
      "Product & Service Catalog",
      "Product Catalog",
      "Service Catalog",
      "Resource Catalog",
      "Order Management",
      "Order Decomposition",
      "SOM / COM",
      "Service Fulfilment",
      "Service Assurance",
      "Inventory",
      "TM Forum",
      "ODA",
      "SID",
      "eTOM",
    ],
  },
  {
    slug: "operations-assurance",
    title: "Operations & Assurance",
    summary: "The runtime side of the architecture — where it meets a live network and a real NOC.",
    skills: [
      "IT Operations",
      "Service Assurance",
      "Network Operations",
      "ITSM",
      "Observability",
      "E2E Monitoring",
      "Service Management",
    ],
  },
  {
    slug: "ai-modern-telecom",
    title: "AI & Modern Telecom",
    summary: "Where AI genuinely changes operations and architecture, and the infrastructure it depends on.",
    skills: [
      "AI in Telecom",
      "Agentic Operations",
      "AI-native OSS",
      "Autonomous Networks",
      "AI Infrastructure",
      "GPU Infrastructure",
      "Modern Telecom Platforms",
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    summary: "Hybrid and cloud-native platforms as the runtime for BSS/OSS and network functions.",
    skills: ["Hybrid Cloud", "Azure", "AWS", "VMware", "Network Infrastructure", "Cloud Architecture"],
  },
];
