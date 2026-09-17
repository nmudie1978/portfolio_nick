import type { Achievement } from "./types";

/**
 * Verified deliveries. Wording preserves the role framing as supplied —
 * "key technical contributor", "delivered", "delivery manager" — and never
 * overstates ownership. Outcomes and metrics are not invented; where a
 * case study exists, `caseStudy` links to the detailed presentation.
 */
export const achievements: Achievement[] = [
  {
    slug: "upc-derby",
    organisation: "UPC",
    title: "Derby — Europe's first triple-play provisioning platform",
    headline:
      "Key technical contributor to the delivery of Europe's first triple-play provisioning platform.",
    scope: ["Mobile", "B2C broadband", "Video on Demand"],
    technologies: ["OSS provisioning", "Service activation", "Triple-play"],
    caseStudy: "upc-derby-triple-play-provisioning",
    stage: "Operations",
    significance:
      "Three fundamentally different service types fulfilled through one platform — where the lesson that a service must be defined before three networks are asked to activate it was first learned.",
  },
  {
    slug: "telia-hybrid-cloud",
    organisation: "Telia",
    title: "Telia's first hybrid cloud solution",
    headline: "Delivered Telia's first hybrid cloud solution, based on Azure VMware Solution and Direct Connect.",
    scope: ["Azure VMware Solution (AVS)", "Direct Connect", "Integration with the existing VMware estate"],
    technologies: ["Azure VMware Solution", "Direct Connect", "VMware", "Hybrid cloud"],
    caseStudy: "telia-hybrid-cloud",
    stage: "Architecture",
    significance:
      "Kept the operating model constant and changed the location — cloud capacity as an extension of the data centre rather than a second environment.",
  },
  {
    slug: "telia-e2e-observability",
    organisation: "Telia",
    title: "Telia's first end-to-end monitoring and observability platform",
    headline:
      "Established Telia's first E2E monitoring and observability platform spanning BSS, OSS, applications, infrastructure, databases and network.",
    scope: ["BSS", "OSS", "Applications", "Infrastructure", "Databases", "Network"],
    technologies: ["Splunk", "Nagios", "BMC TrueSight", "ITSM"],
    caseStudy: "telia-e2e-observability",
    stage: "Service Assurance",
    significance:
      "A cross-domain service view above the individual tools, so operations could see services rather than components.",
  },
  {
    slug: "telia-it-operations",
    organisation: "Telia",
    title: "IT operations and service assurance for four brands",
    headline:
      "Head of IT Operations & Service Assurance — overall responsibility for the operational efficiency of four brands, including data-centre and hybrid-cloud infrastructure.",
    scope: ["Four brands", "Data-centre and hybrid-cloud infrastructure", "Infrastructure consolidation", "Data-centre migrations"],
    technologies: ["IT operations", "Data-centre migration", "Service assurance", "ITSM"],
    caseStudy: "telia-it-operations-service-assurance",
    stage: "Service Assurance",
    significance:
      "One operated estate with brand-specific content, rather than four estates with a shared org chart — the decision everything else followed from.",
  },
  {
    slug: "telia-test-environments",
    organisation: "Telia",
    title: "Test environments for BSS/OSS transformation",
    headline:
      "Built and managed the complex test environments — CRM, CPQ, billing, order provisioning, ITSM and network — behind Telia's BSS/OSS transformation projects.",
    scope: ["CRM", "CPQ", "Billing", "Order provisioning", "ITSM", "Network"],
    technologies: ["Test environments", "Network zoning", "Load balancing", "Data refresh"],
    caseStudy: "telia-test-environments",
    stage: "Operations",
    significance:
      "An environment that does not match production's topology and data is testing itself — zoning, load balancing and refresh are architecture, not housekeeping.",
  },
  {
    slug: "telia-b2b-bss-oss",
    organisation: "Telia",
    title: "Greenfield BSS/OSS transformation for B2B data communications",
    headline:
      "Delivered a greenfield BSS/OSS transformation following the TDC Denmark merger, with Ericsson- and Cisco-based target stacks across Norway and Sweden.",
    scope: ["Greenfield target stacks", "B2B data communications", "Norway and Sweden", "Post-merger integration"],
    technologies: ["Ericsson", "Cisco", "Greenfield BSS/OSS"],
    caseStudy: "telia-b2b-bss-oss-transformation",
    stage: "BSS/OSS",
    significance:
      "One architecture across two countries, with the product, service and resource models defined before the systems existed.",
  },
  {
    slug: "vodafone-m-pesa",
    organisation: "Vodafone",
    title: "M-Pesa network delivery in Kenya and Mozambique",
    headline:
      "Delivery Manager for M-Pesa in Kenya and Mozambique, expanding the MPLS network to support the mobile payments platform.",
    scope: ["MPLS network expansion", "Two markets", "Mobile payments platform"],
    technologies: ["MPLS"],
    caseStudy: "vodafone-m-pesa-network",
    stage: "Operations",
    significance:
      "A payments platform whose availability depended directly on the data network — delivery where every transaction is a network transaction.",
  },
  {
    slug: "marlink-oss-provisioning",
    organisation: "Marlink",
    title: "OSS provisioning modernisation across business units",
    headline:
      "OSS provisioning modernisation across business units — a common order orchestration and service activation architecture replacing business-unit-specific provisioning.",
    scope: ["Order orchestration", "Service activation", "Legacy provisioning replacement", "Multi-business-unit coexistence"],
    technologies: ["Order orchestration", "Service activation", "Service catalog", "Inventory"],
    caseStudy: "marlink-oss-provisioning",
    stage: "Transformation",
    significance:
      "Common where it should be common, specific where the networks genuinely differ — decided by what was refused to be made common.",
  },
];

export function getAchievement(slug: string) {
  return achievements.find((a) => a.slug === slug);
}
