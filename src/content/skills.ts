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
      "AI in Telecom Architecture",
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
      "AI-native OSS",
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
      "AI Ops & Agentic Operations",
      "Autonomous Networks",
    ],
  },
  {
    slug: "observability-tooling",
    title: "IT & Network Observability Tooling",
    summary:
      "The tooling behind Telia's first end-to-end monitoring and observability platform — spanning BSS, OSS, applications, infrastructure, databases and network.",
    skills: [
      "Splunk",
      "Nagios",
      "BMC TrueSight",
      "Event Management",
      "Log, Metric & Event Analytics",
      "Availability Monitoring",
      "ITSM Integration",
      "Service Impact Modelling",
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    summary: "Hybrid and cloud-native platforms as the runtime for BSS/OSS, network functions and AI workloads.",
    skills: [
      "Hybrid Cloud",
      "Azure",
      "AWS",
      "VMware",
      "Network Infrastructure",
      "Cloud Architecture",
      "AI Infrastructure",
      "GPU Infrastructure",
    ],
  },
];
