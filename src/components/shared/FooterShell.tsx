import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PRIMARY_NAV, SECONDARY_NAV } from "@/content/site";
import { person } from "@/content/person";
import { cn } from "@/lib/cn";

/**
 * Site footer: brand block, site index and external links.
 */
export function FooterShell({ brand,
  className,
}: {
  brand: React.ReactNode;
  className?: string;
}) {
  const year = new Date().getFullYear();
  const external = [
    { label: "LinkedIn", href: person.links.linkedin },
    { label: "BSS/OSS Academy", href: person.links.academy },
    { label: "Telco Landscape", href: person.links.telcoLandscape },
    ...(person.links.email ? [{ label: "Email", href: `mailto:${person.links.email}` }] : []),
    ...(person.links.cv ? [{ label: "CV", href: person.links.cv }] : []),
  ];

  return (
    <footer className={cn("mt-24 border-t rule", className)}>
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">{brand}</div>
          <div className="md:col-span-3">
            <Eyebrow as="div" className="mb-4">
              Site
            </Eyebrow>
            <ul className="flex flex-col gap-2">
              {[...PRIMARY_NAV, ...SECONDARY_NAV].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-ul t-small text-paper-2">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <Eyebrow as="div" className="mb-4">
              Elsewhere
            </Eyebrow>
            <ul className="flex flex-col gap-2">
              {external.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="link-ul t-small text-paper-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-meta text-paper-3">
            © {year} {person.name}
          </p>
          <p className="t-meta text-paper-3">Telecom architecture · BSS/OSS · Transformation</p>
        </div>
      </Container>
    </footer>
  );
}
