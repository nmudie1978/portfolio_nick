import type { VariantDef, VariantId } from "./types";
import * as A from "@/components/variants/a";
import * as B from "@/components/variants/b";
import * as C from "@/components/variants/c";

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
  c: {
    id: "c",
    name: "Marine Foam",
    tagline: "Light · teal → foam gradient · Manrope",
    description:
      "The light direction: the Marine Foam gradient as the hero ground and section bands, paper-white body, dark-teal type — calm, international, human.",
    Header: C.Header,
    Footer: C.Footer,
    pages: {
      Home: C.Home,
      Experience: C.Experience,
      Achievements: C.Achievements,
      Recognition: C.Recognition,
      Skills: C.Skills,
      Contact: C.Contact,
    },
  },
};
