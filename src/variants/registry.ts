import type { VariantDef, VariantId } from "./types";
import * as A from "@/components/variants/a";
import * as B from "@/components/variants/b";
import * as Foam from "@/components/variants/foam";

/** Members of the light "foam" family share one structure; tone and composition differ. */
function foam(id: VariantId, name: string, tagline: string, description: string): VariantDef {
  return {
    id,
    name,
    tagline,
    description,
    Header: Foam.Header,
    Footer: Foam.Footer,
    pages: {
      Home: Foam.Home,
      Experience: Foam.Experience,
      Achievements: Foam.Achievements,
      Recognition: Foam.Recognition,
      Skills: Foam.Skills,
      Contact: Foam.Contact,
    },
  };
}

export const VARIANTS: Record<VariantId, VariantDef> = {
  a: {
    id: "a",
    name: "Drafting Room",
    tagline: "Graphite · copper · Archivo",
    description:
      "The existing architectural, editorial identity — refined and completed with a portrait, quick facts, a drafting-line timeline and editorial achievement spreads.",
    Header: A.Header,
    Footer: A.Footer,
    pages: {
      Home: A.Home,
      Experience: A.Experience,
      Achievements: A.Achievements,
      Recognition: A.Recognition,
      Skills: A.Skills,
      Contact: A.Contact,
    },
  },
  b: {
    id: "b",
    name: "Executive Ledger",
    tagline: "Navy · ivory · brass · Newsreader",
    description:
      "An executive, consulting-profile register: portrait-forward hero, a quick-facts ledger, a horizontal career rail and achievements set as ledger rows.",
    Header: B.Header,
    Footer: B.Footer,
    pages: {
      Home: B.Home,
      Experience: B.Experience,
      Achievements: B.Achievements,
      Recognition: B.Recognition,
      Skills: B.Skills,
      Contact: B.Contact,
    },
  },
  c: foam(
    "c",
    "Marine Foam",
    "Light · teal → foam gradient · Manrope",
    "The light direction: the Marine Foam gradient as the hero ground and section bands, paper-white body, dark-teal type — calm, international, human.",
  ),
  d: foam(
    "d",
    "Grid Glow",
    "White · fine grid · lavender glow · violet accent",
    "Marine Foam's structure on a white drafting grid with a lavender glow top-right; dark type throughout, squared corners, quick facts as cards, a flat career rail.",
  ),
  e: foam(
    "e",
    "Slate Mist",
    "Cool grey-blue mist · steel accent · Newsreader",
    "The quietest of the family: a slate mist ground, portrait on the left, serif headlines, squared corners — closest to a consulting-firm profile.",
  ),
  f: foam(
    "f",
    "Sand & Ink",
    "Warm paper · terracotta accent · Archivo",
    "Warm paper with a faint drafting grid and a copper glow; centred hero with the portrait beside the quick facts — a bridge between the dark editorial identity and the light family.",
  ),
  g: foam(
    "g",
    "Ocean Depth",
    "Deep navy-teal bands · light type · teal accent",
    "Dark hero and section bands with aurora glows over a white body — the most dramatic of the family while keeping the light reading experience.",
  ),
  h: foam(
    "h",
    "Meadow",
    "Soft sage · green accent · Manrope",
    "A calm sage ground with the portrait on the left and quick-fact cards — the most human and least 'technology' in tone.",
  ),
};
