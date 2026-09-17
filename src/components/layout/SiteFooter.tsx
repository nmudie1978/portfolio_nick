import Link from "next/link";
import { Container } from "./Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PRIMARY_NAV, SECONDARY_NAV } from "@/content/site";
import { person } from "@/content/person";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const external = [
    { label: "LinkedIn", href: person.links.linkedin },
    { label: "BSS/OSS Academy", href: person.links.academy },
    { label: "Telco Landscape", href: person.links.telcoLandscape },
    ...(person.links.email ? [{ label: "Email", href: `mailto:${person.links.email}` }] : []),
    ...(person.links.cv ? [{ label: "CV", href: person.links.cv }] : []),
  ];

  return (
    <footer className="border-t rule mt-24">
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-xl font-medium tracking-[-0.01em]">{person.name}</p>
            <p className="t-small mt-2 max-w-[38ch] text-paper-2">
              Telecom architecture, BSS/OSS and transformation. 25+ years across operators, vendors and
              managed-service environments.
            </p>
          </div>
          <div className="md:col-span-3">
            <Eyebrow as="div" className="mb-4">
              Site
            </Eyebrow>
            <ul className="flex flex-col gap-2">
              {[{ label: "Home", href: "/" }, ...PRIMARY_NAV, ...SECONDARY_NAV].map((item) => (
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
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="link-ul t-small text-paper-2"
                  >
                    {item.label}
                    {item.href.startsWith("http") ? " ↗" : ""}
                  </a>
                </li>
              ))}
              {!person.links.cv ? (
                <li>
                  <Link href="/contact" className="link-ul t-small text-paper-2">
                    CV on request
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-meta text-paper-3">© {year} {person.name}</p>
          <p className="t-meta text-paper-3">Operations → Assurance → Architecture → BSS/OSS → Transformation → AI</p>
        </div>
      </Container>
    </footer>
  );
}
