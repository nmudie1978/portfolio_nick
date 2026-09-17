/**
 * Content model.
 *
 * All site content is typed, static and local. Each type below maps to one
 * file in `src/content/` so new case studies, insights and experience
 * entries are added by appending to an array, not by touching components.
 */

export type Slug = string;

export interface ExternalResource {
  label: string;
  href: string;
}

export interface Person {
  name: string;
  /** Short positioning line under the name. */
  role: string;
  /** Core positioning pillars, in display order. */
  pillars: string[];
  /** Career progression, in order. Rendered as the journey strip. */
  journey: string[];
  hero: {
    statement: string;
    support: string;
  };
  intro: string[];
  /** Short executive biography, one to three paragraphs. */
  bio: string[];
  /** What differentiates the profile. Short, evidence-backed statements. */
  differentiators: string[];
  /** One line describing the current focus. */
  currentFocus: string;
  /** Verified current position. */
  currentRole: { title: string; organisation: string; location: string; href?: string };
  /** Verified quick facts rendered next to the portrait. */
  quickFacts: QuickFact[];
  /**
   * Public path to a real portrait (e.g. "/portrait/nick-mudie.jpg").
   * Null renders a designed placeholder in the same frame.
   */
  portrait: string | null;
  links: {
    linkedin: string;
    academy: string;
    telcoLandscape: string;
    /** Set when a public email is desired. Null hides email everywhere. */
    email: string | null;
    /** Public CV URL or path. Null renders "available on request". */
    cv: string | null;
  };
}

export interface QuickFact {
  /** Large value, e.g. "25+ years". */
  value: string;
  /** Small label beneath, e.g. "Telecom experience". */
  label: string;
}

export interface ExpertiseArea {
  slug: Slug;
  title: string;
  /** One-line summary used on the home grid. */
  summary: string;
  /** Longer framing used on the Expertise page. */
  description: string;
  topics: string[];
  /** Slugs of related insights. */
  relatedInsights?: Slug[];
  /** Slugs of related case studies. */
  relatedCaseStudies?: Slug[];
}

export interface ExperienceEntry {
  organisation: string;
  /** Verified role title. Null until confirmed — never invented. */
  role: string | null;
  /** Verified period. Null until confirmed — never invented. */
  period: string | null;
  /** What kind of environment this was. */
  context: string;
  /** Verified, concisely stated achievements. Role framing is preserved as supplied. */
  achievements: string[];
  scope: string[];
  /** Architecture / transformation themes. */
  themes: string[];
  technologies?: string[];
  relatedCaseStudies?: Slug[];
  /** Journey stage labels this organisation evidences (see `journey`). */
  stages: string[];
}

/** A verified delivery, with click-through to its case study. */
export interface Achievement {
  slug: Slug;
  organisation: string;
  title: string;
  /** Role-accurate one-line statement. Never overstates ownership. */
  headline: string;
  scope: string[];
  technologies: string[];
  /** Existing case-study slug for the detailed presentation. */
  caseStudy: Slug;
  /** Journey stage label this achievement belongs to. */
  stage: string;
  /** Short statement of why it matters architecturally. */
  significance?: string;
}

export interface SkillDomain {
  slug: Slug;
  title: string;
  summary: string;
  skills: string[];
}

/** A stage in the architectural career progression. */
export interface JourneyStage {
  label: string;
  title: string;
  description: string;
}

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; label?: string; text: string }
  | { type: "flow"; title?: string; steps: FlowStep[] }
  | { type: "stack"; title?: string; layers: StackLayer[] };

export interface FlowStep {
  label: string;
  note?: string;
  /** Visual tone. Default is neutral. */
  tone?: "copper" | "signal";
}

export interface StackLayer {
  label: string;
  note?: string;
}

export type CaseStudyCategory =
  | "OSS"
  | "BSS/OSS"
  | "Operations"
  | "Cloud & Infrastructure"
  | "Network Delivery"
  | "Architecture"
  | "Transformation"
  | "AI & Operations";

export interface CaseStudy {
  slug: Slug;
  title: string;
  category: CaseStudyCategory;
  /** Organisation if the study is drawn from a specific engagement. */
  organisation?: string;
  /** Whether the study is an architecture pattern rather than one engagement. */
  kind: "engagement" | "pattern";
  summary: string;
  context: ContentBlock[];
  challenge: ContentBlock[];
  architecture: ContentBlock[];
  role: ContentBlock[];
  transformation: ContentBlock[];
  outcome: ContentBlock[];
  lessons: ContentBlock[];
  technologies: string[];
  relatedInsights: Slug[];
  featured?: boolean;
}

export type InsightCategory =
  | "Catalog"
  | "Composability"
  | "Transformation"
  | "AI & Operations"
  | "Assurance"
  | "Infrastructure"
  | "B2B"
  | "ODA"
  | "Modelling"
  | "Order Management";

export interface Insight {
  slug: Slug;
  title: string;
  category: InsightCategory;
  summary: string;
  /** Approximate reading time in minutes. */
  minutes: number;
  content: ContentBlock[];
  relatedCaseStudies: Slug[];
  relatedInsights: Slug[];
  featured?: boolean;
}

export interface FocusArea {
  title: string;
  description: string;
  /** Current status wording; keep honest and non-speculative. */
  status: "exploring" | "building" | "applying";
}
