import { resolveVariant, variantDef, variantStaticParams, type VariantParams } from "@/variants/resolve";

export const dynamicParams = false;

export function generateStaticParams() {
  return variantStaticParams();
}

export default async function VariantLayout({
  children,
  params,
}: VariantParams & { children: React.ReactNode }) {
  const variant = await resolveVariant(params);
  const def = variantDef(variant);
  const { Header, Footer } = def;
  return (
    <div data-variant={variant} className="variant-root">
      <Header variant={variant} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer variant={variant} />
    </div>
  );
}
