import type { ComponentType } from "react";
import { GradientBackground } from "@/components/ui/marine-foam";
import { GridGlowBackground } from "@/components/ui/gradient-blur-bg";
import { cn } from "@/lib/cn";
import type { VariantId } from "@/variants/types";

/**
 * The light "foam" family: one structure, several tones. Each theme sets
 * the hero/band background, whether type on it is light or dark, and a few
 * composition switches. Colour and type tokens live in globals.css under
 * the matching `[data-variant]` block.
 */
export interface FoamTheme {
  id: VariantId;
  /** Fills its parent; absolutely positioned by the caller. */
  Background: ComponentType<{ className?: string }>;
  /** Type colour that reads on the background. */
  onBackground: "light" | "dark";
  /** Darkening scrim behind light type (only meaningful when onBackground = light). */
  scrim?: boolean;
  heroLayout: "split" | "split-reverse" | "stacked";
  quickFacts: "bar" | "cards";
  timeline: "stepped" | "rail";
  shape: "round" | "square";
  /** Portrait frame treatment. */
  portrait: "soft" | "square";
}

/* ── Backgrounds ─────────────────────────────────────────────────────── */

function Mist({ className, stops }: { className?: string; stops: string }) {
  return <div aria-hidden="true" className={cn("absolute inset-0", className)} style={{ backgroundImage: stops }} />;
}

/** E · Slate Mist — cool, quiet, consulting. */
const SlateMist = ({ className }: { className?: string }) => (
  <Mist
    className={className}
    stops="radial-gradient(900px 520px at 85% 0%, rgba(31,78,121,0.22), transparent 70%), radial-gradient(700px 480px at 0% 100%, rgba(120,150,180,0.22), transparent 70%), linear-gradient(180deg, #eef3f7 0%, #f6f8fa 100%)"
  />
);

/** F · Sand & Ink — warm paper with a copper glow. */
const Sand = ({ className }: { className?: string }) => (
  <div aria-hidden="true" className={cn("absolute inset-0", className)}>
    <Mist stops="radial-gradient(760px 520px at 8% 100%, rgba(168,85,43,0.18), transparent 70%), radial-gradient(600px 400px at 100% 0%, rgba(214,190,150,0.35), transparent 70%), linear-gradient(160deg, #f9f5ee 0%, #f2ebdf 100%)" />
    <div
      className="absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(42,33,24,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(42,33,24,0.06) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  </div>
);

/** G · Ocean Depth — a deep navy-teal band with aurora glows; light type. */
const Ocean = ({ className }: { className?: string }) => (
  <div aria-hidden="true" className={cn("absolute inset-0 overflow-hidden", className)}>
    <Mist stops="radial-gradient(900px 600px at 80% 10%, rgba(14,124,134,0.55), transparent 65%), radial-gradient(700px 500px at 10% 90%, rgba(43,90,140,0.45), transparent 65%), radial-gradient(500px 400px at 60% 100%, rgba(60,170,150,0.25), transparent 70%), linear-gradient(180deg, #06202f 0%, #082c3f 100%)" />
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    />
  </div>
);

/** H · Meadow — soft sage, human, botanical without being decorative. */
const Meadow = ({ className }: { className?: string }) => (
  <Mist
    className={className}
    stops="radial-gradient(800px 520px at 100% 0%, rgba(47,107,79,0.32), transparent 70%), radial-gradient(700px 500px at 0% 100%, rgba(150,190,130,0.45), transparent 70%), linear-gradient(180deg, #e6efe5 0%, #f4f8f3 100%)"
  />
);

/* ── Themes ──────────────────────────────────────────────────────────── */

export const FOAM_THEMES: Partial<Record<VariantId, FoamTheme>> = {
  c: {
    id: "c",
    Background: GradientBackground,
    onBackground: "light",
    scrim: true,
    heroLayout: "split",
    quickFacts: "bar",
    timeline: "stepped",
    shape: "round",
    portrait: "soft",
  },
  d: {
    id: "d",
    Background: ({ className }) => <GridGlowBackground className={className} />,
    onBackground: "dark",
    heroLayout: "split",
    quickFacts: "cards",
    timeline: "rail",
    shape: "square",
    portrait: "square",
  },
  e: {
    id: "e",
    Background: SlateMist,
    onBackground: "dark",
    heroLayout: "split-reverse",
    quickFacts: "bar",
    timeline: "rail",
    shape: "square",
    portrait: "square",
  },
  f: {
    id: "f",
    Background: Sand,
    onBackground: "dark",
    heroLayout: "stacked",
    quickFacts: "cards",
    timeline: "stepped",
    shape: "round",
    portrait: "soft",
  },
  g: {
    id: "g",
    Background: Ocean,
    onBackground: "light",
    heroLayout: "split",
    quickFacts: "bar",
    timeline: "stepped",
    shape: "round",
    portrait: "soft",
  },
  h: {
    id: "h",
    Background: Meadow,
    onBackground: "dark",
    heroLayout: "split-reverse",
    quickFacts: "cards",
    timeline: "rail",
    shape: "round",
    portrait: "soft",
  },
};

export function foamTheme(variant: VariantId): FoamTheme {
  return FOAM_THEMES[variant] ?? FOAM_THEMES.c!;
}
