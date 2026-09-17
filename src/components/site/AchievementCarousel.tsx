"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { achievements } from "@/content/achievements";
import { getCaseStudy } from "@/content/case-studies";
import { cn } from "@/lib/cn";
import { caseStudyHref } from "@/lib/routes";
import { shape } from "./primitives";

/**
 * All achievements as a horizontal, scroll-snapping carousel. Native
 * scrolling (touch, trackpad, keyboard) does the work; the buttons and
 * dots are conveniences layered on top. Reduced motion disables the
 * smooth scroll.
 */
export function AchievementCarousel() {
  const s = shape();
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const left = el.scrollLeft;
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - left);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
    setAtStart(left <= 2);
    setAtEnd(left + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = "ResizeObserver" in window ? new ResizeObserver(measure) : null;
    ro?.observe(el);
    return () => {
      el.removeEventListener("scroll", measure);
      ro?.disconnect();
    };
  }, [measure]);

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[Math.max(0, Math.min(i, el.children.length - 1))] as HTMLElement | undefined;
    if (!card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: card.offsetLeft, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-2 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:-mx-12 lg:scroll-px-12 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Achievements"
      >
        {achievements.map((a, i) => {
          const study = getCaseStudy(a.caseStudy);
          return (
            <li
              key={a.slug}
              className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.84rem)]"
              aria-current={i === active ? "true" : undefined}
            >
              <Link
                href={study ? caseStudyHref(study) : "/achievements"}
                className={cn(
                  "group flex h-full flex-col border rule bg-ink p-6 transition-colors hover:border-copper",
                  s.card,
                )}
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span className="section-label">{a.organisation}</span>
                  <span className="text-[0.72rem] font-bold text-paper-3">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <span className="t-h3 mt-3 block text-paper transition-colors group-hover:text-copper">{a.title}</span>
                <span className="t-small mt-3 block text-paper-2">{a.headline}</span>
                <span className="t-small mt-auto pt-6 font-semibold text-copper">Read the engagement →</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToIndex(active - 1)}
            disabled={atStart}
            aria-label="Previous achievement"
            className={cn(
              "flex h-10 w-10 items-center justify-center border rule text-paper transition-colors hover:border-copper hover:text-copper disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:text-paper",
              s.button,
            )}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(active + 1)}
            disabled={atEnd}
            aria-label="Next achievement"
            className={cn(
              "flex h-10 w-10 items-center justify-center border rule text-paper transition-colors hover:border-copper hover:text-copper disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:text-paper",
              s.button,
            )}
          >
            <span aria-hidden="true">→</span>
          </button>
          <ol className="ml-2 flex items-center gap-2" aria-label="Position">
            {achievements.map((a, i) => (
              <li key={a.slug}>
                <button
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to achievement ${i + 1}: ${a.title}`}
                  aria-current={i === active ? "true" : undefined}
                  className={cn(
                    "block h-2 rounded-full transition-all",
                    i === active ? "w-6 bg-copper" : "w-2 bg-line-strong hover:bg-copper/60",
                  )}
                />
              </li>
            ))}
          </ol>
        </div>
        <Link href="/achievements" className="t-small font-semibold text-paper transition-colors hover:text-copper">
          All achievements <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
