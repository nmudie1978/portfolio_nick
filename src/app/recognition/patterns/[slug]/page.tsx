import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/shared/CaseStudyDetail";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.filter((c) => c.kind === "pattern").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({
    title: study.title,
    description: study.summary,
    path: `/recognition/patterns/${study.slug}`,
    type: "article",
  });
}

export default async function PatternPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study || study.kind !== "pattern") notFound();
  return <CaseStudyDetail study={study} />;
}
