/** Wraps page content so each route entrance fades in. Pure CSS; no JS. */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
