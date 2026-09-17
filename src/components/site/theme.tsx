import type { ComponentType } from "react";
import { cn } from "@/lib/cn";

/**
 * Ocean Depth: a deep navy-teal ground with aurora glows for the hero and
 * section bands, light type on it, and a white body. Colour and type
 * tokens live in globals.css.
 */
export interface SiteTheme {
  /** Fills its parent; absolutely positioned by the caller. */
  Background: ComponentType<{ className?: string }>;
  onBackground: "light" | "dark";
  scrim?: boolean;
  heroLayout: "split" | "split-reverse" | "stacked";
  quickFacts: "bar" | "cards";
  timeline: "stepped" | "rail";
  shape: "round" | "square";
  portrait: "soft" | "square";
}

function Mist({ className, stops }: { className?: string; stops: string }) {
  return <div aria-hidden="true" className={cn("absolute inset-0", className)} style={{ backgroundImage: stops }} />;
}

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

export const THEME: SiteTheme = {
  Background: Ocean,
  onBackground: "light",
  heroLayout: "split",
  quickFacts: "bar",
  timeline: "stepped",
  shape: "round",
  portrait: "soft",
};
