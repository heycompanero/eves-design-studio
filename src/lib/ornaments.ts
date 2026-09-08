import { useMemo } from "react";
import type { Audience } from "@/lib/i18n";

const ill = (name: string) => `/illustraties/${name}.webp`;

export type OrnamentSlot =
  | "heroMain"
  | "heroFloat"
  | "spotA"
  | "spotB"
  | "quote"
  | "about";

export type Ornaments = Record<OrnamentSlot, string>;

/**
 * Candidates per decorative slot. Each slot lists only illustrations that suit
 * its size and its audience: the wedding page may show couples and cupids, the
 * business page may not. Illustrations owned by a fixed section (the template
 * cards, the footer mark) are left out so they never appear twice on one page.
 */
const POOLS: Record<Audience, Record<OrnamentSlot, string[]>> = {
  wedding: {
    heroMain: [ill("couple"), ill("cargobike")],
    heroFloat: [ill("cupid"), ill("cat")],
    spotA: [ill("cyclists"), ill("dog"), ill("cargobike")],
    spotB: [ill("cat"), ill("balancebike")],
    quote: [ill("cupid"), ill("cat")],
    about: [ill("cyclists"), ill("dog"), ill("balancebike")],
  },
  business: {
    heroMain: [ill("dinner"), ill("chateau")],
    heroFloat: [ill("cat"), ill("balancebike")],
    spotA: [ill("cyclists"), ill("dog"), ill("cargobike")],
    spotB: [ill("balancebike"), ill("cat")],
    quote: [ill("chateau"), ill("mountains"), ill("cat")],
    about: [ill("cat"), ill("dog"), ill("cyclists")],
  },
};

const SLOTS: OrnamentSlot[] = [
  "heroMain",
  "heroFloat",
  "spotA",
  "spotB",
  "quote",
  "about",
];

/**
 * Pick one illustration per slot, preferring ones not already used elsewhere on
 * the page so the same drawing doesn't show up twice in a single visit.
 */
export function pickOrnaments(audience: Audience): Ornaments {
  const pools = POOLS[audience];
  const used = new Set<string>();
  const picked = {} as Ornaments;

  for (const slot of SLOTS) {
    const pool = pools[slot];
    const fresh = pool.filter((p) => !used.has(p));
    const from = fresh.length > 0 ? fresh : pool;
    const choice = from[Math.floor(Math.random() * from.length)];
    picked[slot] = choice;
    used.add(choice);
  }

  return picked;
}

/** Stable for the lifetime of the page, so ornaments don't shuffle on re-render. */
export function useOrnaments(audience: Audience): Ornaments {
  return useMemo(() => pickOrnaments(audience), [audience]);
}
