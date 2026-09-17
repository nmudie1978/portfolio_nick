import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightDetail } from "@/components/shared/InsightDetail";
import { getInsight, insights } from "@/content/insights";
import { pageMetadata } from "@/lib/metadata";
import { resolveVariant, variantStaticParams } from "@/variants/resolve";

type Params = { params: Promise<{ variant: string; slug: string }> };

export function generateStaticParams() {
  return variantStaticParams().flatMap(({ variant }) => insights.map((i) => ({ variant, slug: i.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const variant = await resolveVariant(params);
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return pageMetadata({
    title: insight.title,
    description: insight.summary,
    path: `/${variant}/recognition/${insight.slug}`,
    type: "article",
  });
}

export default async function InsightPage({ params }: Params) {
  const variant = await resolveVariant(params);
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();
  return <InsightDetail insight={insight} variant={variant} />;
}
