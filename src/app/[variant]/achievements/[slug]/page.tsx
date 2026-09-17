import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/shared/CaseStudyDetail";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { pageMetadata } from "@/lib/metadata";
import { resolveVariant, variantStaticParams } from "@/variants/resolve";

type Params = { params: Promise<{ variant: string; slug: string }> };

export function generateStaticParams() {
  return variantStaticParams().flatMap(({ variant }) =>
    caseStudies.filter((c) => c.kind === "engagement").map((c) => ({ variant, slug: c.slug })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const variant = await resolveVariant(params);
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({
    title: study.title,
    description: study.summary,
    path: `/${variant}/achievements/${study.slug}`,
    type: "article",
  });
}

export default async function AchievementCaseStudyPage({ params }: Params) {
  const variant = await resolveVariant(params);
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study || study.kind !== "engagement") notFound();
  return <CaseStudyDetail study={study} variant={variant} />;
}
