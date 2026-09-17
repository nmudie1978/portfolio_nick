import Link from "next/link";
import type { CaseStudy, Insight } from "@/content/types";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/cn";
import { caseStudyHref, insightHref } from "@/lib/routes";
import type { VariantId } from "@/variants/types";

/**
 * Editorial cards. They are deliberately flat — a hairline top rule, a
 * label and typography — so that lists read as an index rather than a
 * wall of boxes.
 */

export function CaseStudyCard({
  study,
  variant,
  large = false,
}: {
  study: CaseStudy;
  variant: VariantId;
  large?: boolean;
}) {
  return (
    <Link
      href={caseStudyHref(variant, study)}
      className={cn(
        "group flex h-full flex-col border-t rule pt-4 transition-colors hover:border-copper",
        large && "md:pt-6",
      )}
    >
      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
        <Eyebrow as="span" tone="copper">
          {study.category}
        </Eyebrow>
        <Eyebrow as="span">{study.organisation ?? (study.kind === "pattern" ? "Architecture pattern" : "")}</Eyebrow>
      </div>
      <h3 className={cn("text-paper transition-colors group-hover:text-copper", large ? "t-h2" : "t-h3")}>
        {study.title}
      </h3>
      <p className={cn("mt-3 text-paper-2", large ? "t-body max-w-[52ch]" : "t-small")}>{study.summary}</p>
      <span className="t-meta mt-auto pt-5 text-paper-3 transition-colors group-hover:text-paper">
        {study.kind === "pattern" ? "Read the pattern →" : "Read the case study →"}
      </span>
    </Link>
  );
}

export function InsightCard({
  insight,
  variant,
  index,
}: {
  insight: Insight;
  variant: VariantId;
  index?: number;
}) {
  return (
    <Link
      href={insightHref(variant, insight.slug)}
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
