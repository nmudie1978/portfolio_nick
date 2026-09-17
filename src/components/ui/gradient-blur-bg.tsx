import { cn } from "@/lib/utils";

/**
 * "Purple Gradient Grid Right" background (21st.dev). The visual recipe is
 * kept verbatim: a fine grid plus a lavender radial glow anchored top-right.
 *
 * `GridGlowBackground` is the reusable form — an absolutely positioned layer
 * that fills its parent — used by the Grid Glow variant. `Component` keeps
 * the original full-page wrapper shape for reference.
 */
export function GridGlowBackground({ className, glow = "#d5c5ff" }: { className?: string; glow?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0", className)}
      style={{
        backgroundImage: `
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 100% 200px, ${glow}, transparent)
      `,
        backgroundSize: "96px 64px, 96px 64px, 100% 100%",
      }}
    />
  );
}

export const Component = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Purple Gradient Grid Right Background */}
      <GridGlowBackground className="z-0" />
      {/* Your Content/Components */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
