"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PRIMARY_NAV, SECONDARY_NAV } from "@/content/site";
import { person } from "@/content/person";
import { cn } from "@/lib/cn";
import { isActivePath } from "@/lib/routes";

export interface NavStyles {
  /** The sticky <header>. */
  header: string;
  /** Desktop link, plus the class applied when active. */
  link: string;
  linkActive: string;
  /** Whether to draw the animated underline beneath the active desktop item. */
  underline?: boolean;
  /** Optional call-to-action rendered after the nav on desktop. */
  cta?: { label: string; className: string };
  /** Mobile toggle button and full-screen panel. */
  toggle: string;
  panel: string;
  panelLink: string;
  panelLinkActive: string;
}

/**
 * Header chrome shared by all variants: skip link, brand, six-item desktop
 * navigation with an accessible active state, and a full-screen mobile
 * menu with scroll lock and Escape to close. Variants supply the brand
 * mark and class hooks; behaviour is identical everywhere.
 */
export function NavShell({ brand,
  styles,
}: {
  brand: React.ReactNode;
  styles: NavStyles;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
  const items = PRIMARY_NAV;
  const secondary = SECONDARY_NAV;
  const active = (href: string) => isActivePath(pathname, href);
  const contact = items.find((i) => i.label === "Contact");
  const desktopItems = styles.cta
    ? items.filter((i) => i.label !== "Contact")
    : items;

  return (
    // `backdrop-filter` must not sit on the <header> itself: it would become
    // the containing block for the fixed mobile panel and clip it to the bar.
    <header className="sticky top-0 z-40">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className={cn("relative z-50", styles.header)}>
        <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12 md:h-[4.5rem]">
          <Link
            href={"/"}
            className="group flex items-baseline gap-3"
            aria-label={`${person.name} — profile`}
          >
            {brand}
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-6 lg:gap-8">
                {desktopItems.map((item) => {
                  const isActive = active(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "relative py-2 transition-colors",
                          styles.link,
                          isActive && styles.linkActive,
                        )}
                      >
                        {item.label}
                        {styles.underline ? (
                          <span
                            aria-hidden="true"
                            className={cn(
                              "absolute -bottom-[2px] left-0 h-px w-full origin-left bg-copper transition-transform duration-300",
                              isActive ? "scale-x-100" : "scale-x-0",
                            )}
                          />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            {styles.cta && contact ? (
              <Link
                href={contact.href}
                className={styles.cta.className}
                aria-current={active(contact.href) ? "page" : undefined}
              >
                {styles.cta.label}
              </Link>
            ) : null}
          </div>

          <button
            type="button"
            className={cn(
              "relative z-50 -mr-2 px-2 py-2 md:hidden",
              styles.toggle,
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 top-16 z-40 transition-opacity duration-300 md:top-[4.5rem] md:hidden",
          styles.panel,
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav
          aria-label="Mobile"
          className="flex h-full flex-col overflow-y-auto px-5 pt-4 pb-10 sm:px-8"
        >
          <ul className="flex flex-col">
            {items.map((item, i) => {
              const isActive = active(item.href);
              return (
                <li key={item.href} className="border-b rule">
                  <Link
                    href={item.href}
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between py-4 transition-colors",
                      styles.panelLink,
                      isActive && styles.panelLinkActive,
                    )}
                    style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
                  >
                    {item.label}
                    <span aria-hidden="true" className="t-meta text-paper-3">
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="mt-6 flex flex-col gap-3">
            {secondary.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="t-meta text-paper-2 hover:text-paper"
                >
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
            <li>
              <Link
                href="/"
                tabIndex={open ? 0 : -1}
                className="t-meta text-paper-3 hover:text-paper"
              >
                Design variants
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
