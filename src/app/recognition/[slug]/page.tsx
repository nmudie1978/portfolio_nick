import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightDetail } from "@/components/shared/InsightDetail";
import { getInsight, insights } from "@/content/insights";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return pageMetadata({
    title: insight.title,
    description: insight.summary,
    path: `/recognition/${insight.slug}`,
    type: "article",
  });
}

export default async function InsightPage({ params }: Params) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();
  return <InsightDetail insight={insight} />;
}
