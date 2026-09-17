import type { VariantId } from "./types";

/** Resolve a variant-relative path ("/experience") to its full href ("/a/experience"). */
export function vhref(variant: VariantId, path: string) {
  const clean = path === "/" ? "" : path.replace(/^\/+/, "/");
  return `/${variant}${clean}`;
}

/** True when `pathname` is `href` or a descendant of it. The variant root only matches exactly. */
export function isActivePath(pathname: string, href: string, variant: VariantId) {
  if (href === `/${variant}`) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}
