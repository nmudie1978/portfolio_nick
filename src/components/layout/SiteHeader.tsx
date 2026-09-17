"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PRIMARY_NAV, SECONDARY_NAV } from "@/content/site";
import { person } from "@/content/person";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock scroll while the menu is open; links close it on click.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b rule bg-ink/85 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-baseline gap-3" aria-label="Nick Mudie — home">
          <span className="font-display text-[1.05rem] font-medium tracking-[-0.01em] text-paper">
            {person.name}
          </span>
          <span className="t-meta hidden text-paper-3 transition-colors group-hover:text-paper-2 lg:inline">
            Telecom Architecture · BSS/OSS · Transformation
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "t-meta relative py-2 transition-colors hover:text-paper",
                    isActive(item.href) ? "text-paper" : "text-paper-2",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -bottom-[2px] left-0 h-px w-full bg-copper transition-transform duration-300 origin-left",
                      isActive(item.href) ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="t-meta relative z-50 -mr-2 px-2 py-2 text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 top-16 z-40 bg-ink transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col px-5 pt-6 sm:px-8">
          <ul className="flex flex-col">
            {[{ label: "Home", href: "/" }, ...PRIMARY_NAV].map((item, i) => (
              <li key={item.href} className="border-b rule">
                <Link
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between py-4 t-h3 transition-colors",
                    isActive(item.href) ? "text-copper" : "text-paper",
                  )}
                  style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
                >
                  {item.label}
                  <span aria-hidden="true" className="t-meta text-paper-3">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-col gap-3">
            {SECONDARY_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="t-meta text-paper-2 hover:text-paper">
                  {item.label} →
                </Link>
              </li>
            ))}
            <li>
              <a
                href={person.links.academy}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="t-meta text-paper-2 hover:text-paper"
              >
                BSS/OSS Academy ↗
              </a>
            </li>
            <li>
              <a
                href={person.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="t-meta text-paper-2 hover:text-paper"
              >
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
