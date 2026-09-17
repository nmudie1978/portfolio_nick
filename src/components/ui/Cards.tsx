import Link from "next/link";
import type { CaseStudy, ExpertiseArea, Insight } from "@/content/types";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/cn";

/**
 * Editorial cards. They are deliberately flat — a hairline top rule, a
 * label and typography — so that lists read as an index rather than a
 * wall of boxes.
 */

export function ExpertiseCard({ area, index }: { area: ExpertiseArea; index?: number }) {
  return (
    <Link
      href={`/expertise#${area.slug}`}
      className="group flex h-full flex-col border-t rule pt-4 transition-colors hover:border-copper"
    >
      <Eyebrow as="span" className="mb-3">
        {typeof index === "number" ? `${String(index + 1).padStart(2, "0")} · ` : ""}
        {area.topics.length} topics
      </Eyebrow>
      <h3 className="t-h3 text-paper transition-colors group-hover:text-copper">{area.title}</h3>
      <p className="t-small mt-2 text-paper-2">{area.summary}</p>
    </Link>
  );
}

export function CaseStudyCard({ study, large = false }: { study: CaseStudy; large?: boolean }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className={cn(
        "group flex h-full flex-col border-t rule pt-4 transition-colors hover:border-copper",
        large && "md:pt-6",
      )}
    >
      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
        <Eyebrow as="span" tone="copper">
          {study.category}
        </Eyebrow>
        <Eyebrow as="span">{study.organisation ?? (study.kind === "pattern" ? "Pattern" : "")}</Eyebrow>
      </div>
      <h3 className={cn("text-paper transition-colors group-hover:text-copper", large ? "t-h2" : "t-h3")}>
        {study.title}
      </h3>
      <p className={cn("mt-3 text-paper-2", large ? "t-body max-w-[52ch]" : "t-small")}>{study.summary}</p>
      <span className="t-meta mt-auto pt-5 text-paper-3 transition-colors group-hover:text-paper">
        Read case study →
      </span>
    </Link>
  );
}

export function InsightCard({ insight, index }: { insight: Insight; index?: number }) {
  return (
    <Link
      href={`/thinking/${insight.slug}`}
      className="group flex h-full flex-col border-t rule pt-4 transition-colors hover:border-copper"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <Eyebrow as="span">{insight.category}</Eyebrow>
        <Eyebrow as="span" className="text-paper-3">
          {typeof index === "number" ? `${String(index + 1).padStart(2, "0")}` : `${insight.minutes} min`}
        </Eyebrow>
      </div>
      <h3 className="t-h3 text-paper transition-colors group-hover:text-copper">{insight.title}</h3>
      <p className="t-small mt-2 text-paper-2">{insight.summary}</p>
    </Link>
  );
}
