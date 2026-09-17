/**
 * The architecture matrix.
 *
 * Rows are the TM Forum layers (Customer → Product → Service → Resource →
 * Network). Columns are lifecycle concerns (Catalog → Orders → Inventory →
 * Assurance). Every node sits at one (row, column) and every "lens"
 * highlights a set of nodes and the edges between them.
 *
 * Positions are grid coordinates so the same model renders as an HTML grid
 * with an SVG edge overlay at any size.
 */

export const LAYERS = [
  { id: "customer", label: "Customer" },
  { id: "product", label: "Product" },
  { id: "service", label: "Service" },
  { id: "resource", label: "Resource" },
  { id: "network", label: "Network" },
] as const;

export const COLUMNS = [
  { id: "catalog", label: "Catalog", hint: "Design-time" },
  { id: "orders", label: "Orders", hint: "Fulfilment" },
  { id: "inventory", label: "Inventory", hint: "Runtime state" },
  { id: "assurance", label: "Assurance", hint: "Runtime feedback" },
] as const;

export type LayerId = (typeof LAYERS)[number]["id"];
export type ColumnId = (typeof COLUMNS)[number]["id"];

export interface ArchNode {
  id: string;
  label: string;
  short?: string;
  layer: LayerId;
  column: ColumnId;
}

export const NODES: ArchNode[] = [
  { id: "crm", label: "CRM · CPQ", layer: "customer", column: "orders" },
  { id: "itsm", label: "ITSM · Tickets", short: "ITSM", layer: "customer", column: "assurance" },

  { id: "pcat", label: "Product Catalog", short: "Prod. Catalog", layer: "product", column: "catalog" },
  { id: "pord", label: "Product Order", short: "Prod. Order", layer: "product", column: "orders" },
  { id: "pinv", label: "Product Inventory", short: "Prod. Inventory", layer: "product", column: "inventory" },

  { id: "scat", label: "Service Catalog", short: "Svc. Catalog", layer: "service", column: "catalog" },
  { id: "sord", label: "Service Order", short: "Svc. Order", layer: "service", column: "orders" },
  { id: "sinv", label: "Service Inventory", short: "Svc. Inventory", layer: "service", column: "inventory" },
  { id: "sass", label: "Service Assurance", short: "Svc. Assurance", layer: "service", column: "assurance" },

  { id: "rcat", label: "Resource Catalog", short: "Res. Catalog", layer: "resource", column: "catalog" },
  { id: "rord", label: "Resource Order", short: "Res. Order", layer: "resource", column: "orders" },
  { id: "rinv", label: "Resource Inventory", short: "Res. Inventory", layer: "resource", column: "inventory" },
  { id: "fault", label: "Fault & Performance", short: "Fault / Perf.", layer: "resource", column: "assurance" },

  { id: "act", label: "Activation", layer: "network", column: "orders" },
  { id: "net", label: "Network Elements", short: "Network", layer: "network", column: "inventory" },
  { id: "events", label: "Events & Telemetry", short: "Telemetry", layer: "network", column: "assurance" },
];

export interface ArchEdge {
  from: string;
  to: string;
  /** Dashed edges are design-time control; solid edges are runtime flow. */
  style?: "solid" | "dashed";
  tone?: "copper" | "signal";
}

export interface Lens {
  id: string;
  label: string;
  title: string;
  summary: string;
  /** Ordered narrative of what happens under this lens. */
  steps: string[];
  nodes: string[];
  edges: ArchEdge[];
}

export const LENSES: Lens[] = [
  {
    id: "product",
    label: "Product",
    title: "Product → Service → Resource",
    summary:
      "A sellable product is realised by one or more customer-facing services, which are in turn realised by resource-facing services and physical or logical resources. The three layers have different owners, lifecycles and sources of truth.",
    steps: [
      "Product: what the customer buys, prices and sees on a bill.",
      "Service (CFS / RFS): what the operator delivers and assures.",
      "Resource: what the network actually configures.",
      "Inventory at each layer records what exists — not what was ordered.",
    ],
    nodes: ["pcat", "scat", "rcat", "pinv", "sinv", "rinv"],
    edges: [
      { from: "pcat", to: "scat", tone: "copper" },
      { from: "scat", to: "rcat", tone: "copper" },
      { from: "pinv", to: "sinv", style: "dashed" },
      { from: "sinv", to: "rinv", style: "dashed" },
    ],
  },
  {
    id: "order",
    label: "Order",
    title: "Order-to-Activation",
    summary:
      "A product order is decomposed into service orders and then resource orders. Each decomposition step is an architectural boundary: a different system, a different owner and a different definition of done.",
    steps: [
      "CRM / CPQ captures a quote and raises a product order.",
      "Product order management decomposes it into service orders.",
      "Service order management decomposes each into resource orders.",
      "Activation configures the network; inventories are updated on completion.",
    ],
    nodes: ["crm", "pord", "sord", "rord", "act", "rinv", "sinv", "pinv"],
    edges: [
      { from: "crm", to: "pord", tone: "copper" },
      { from: "pord", to: "sord", tone: "copper" },
      { from: "sord", to: "rord", tone: "copper" },
      { from: "rord", to: "act", tone: "copper" },
      { from: "act", to: "rinv", style: "dashed" },
      { from: "rord", to: "sinv", style: "dashed" },
      { from: "pord", to: "pinv", style: "dashed" },
    ],
  },
  {
    id: "catalog",
    label: "Catalog",
    title: "What the catalog controls",
    summary:
      "The catalog is not a price list. Each catalog layer is the specification that its order manager decomposes against. If the service catalog does not describe how a product is realised, no amount of orchestration will.",
    steps: [
      "Product catalog defines offers, prices and product specifications.",
      "Service catalog defines CFS / RFS specifications and their relationships.",
      "Resource catalog defines the resource types the network can provide.",
      "Each order manager is only as good as the specification it reads.",
    ],
    nodes: ["pcat", "scat", "rcat", "pord", "sord", "rord"],
    edges: [
      { from: "pcat", to: "scat", tone: "copper" },
      { from: "scat", to: "rcat", tone: "copper" },
      { from: "pcat", to: "pord", style: "dashed" },
      { from: "scat", to: "sord", style: "dashed" },
      { from: "rcat", to: "rord", style: "dashed" },
    ],
  },
  {
    id: "fulfilment",
    label: "Fulfilment",
    title: "Downstream orchestration",
    summary:
      "Fulfilment is the runtime path from a service order to a configured network. Its quality depends on the resource catalog, the accuracy of resource inventory and the activation interfaces available for each network domain.",
    steps: [
      "Service order management sequences resource orders across domains.",
      "Resource order management selects and reserves resources from inventory.",
      "Activation pushes configuration to network elements.",
      "Inventory is written back so assurance sees what was actually built.",
    ],
    nodes: ["sord", "rord", "rinv", "act", "net", "sinv"],
    edges: [
      { from: "sord", to: "rord", tone: "copper" },
      { from: "rord", to: "rinv", style: "dashed" },
      { from: "rord", to: "act", tone: "copper" },
      { from: "act", to: "net", tone: "copper" },
      { from: "net", to: "rinv", style: "dashed", tone: "signal" },
      { from: "rinv", to: "sinv", style: "dashed", tone: "signal" },
    ],
  },
  {
    id: "assurance",
    label: "Assurance",
    title: "Runtime feedback",
    summary:
      "Assurance runs the other way. Telemetry and events from the network are correlated to resources, then to services, then to customers — which only works if inventory is accurate and services are modelled, not just devices.",
    steps: [
      "Network telemetry and events are collected and normalised.",
      "Fault and performance management correlates them to resources.",
      "Service assurance maps resource impact to customer-facing services.",
      "ITSM raises, prioritises and tracks the customer-impacting incident.",
    ],
    nodes: ["events", "fault", "sass", "itsm", "rinv", "sinv", "net"],
    edges: [
      { from: "net", to: "events", tone: "signal" },
      { from: "events", to: "fault", tone: "signal" },
      { from: "fault", to: "sass", tone: "signal" },
      { from: "sass", to: "itsm", tone: "signal" },
      { from: "rinv", to: "fault", style: "dashed" },
      { from: "sinv", to: "sass", style: "dashed" },
    ],
  },
];

export function getLens(id: string) {
  return LENSES.find((l) => l.id === id) ?? LENSES[0];
}
