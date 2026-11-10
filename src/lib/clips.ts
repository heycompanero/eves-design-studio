import type { Audience } from "@/lib/i18n";

/** A clip plus its poster frame, both generated from the same source video. */
export type Clip = { src: string; poster: string };

const clip = (name: string): Clip => ({
  src: `/video/${name}.mp4`,
  poster: `/video/${name}.jpg`,
});

/**
 * Which clips each audience shows. The wedding page may show recognisable
 * wedding guests; the business page sticks to the work and the set-up.
 */
export const clips: Record<
  Audience,
  { hero: Clip; strip: Clip[]; reactions: Clip[] }
> = {
  wedding: {
    hero: clip("eve-tekent"),
    strip: [
      clip("waslijn-1"),
      clip("gast-zoekt"),
      clip("waslijn-2"),
      clip("opstelling-kasteel"),
      clip("gasten-bord"),
      clip("waslijn-boog"),
      clip("eve-buiten"),
    ],
    reactions: [clip("reactie-1"), clip("reactie-3"), clip("reactie-2")],
  },
  business: {
    hero: clip("hand-tekent"),
    strip: [
      clip("waslijn-2"),
      clip("eve-buiten"),
      clip("waslijn-1"),
      clip("opstelling-kasteel"),
      clip("gast-zoekt"),
      clip("waslijn-boog"),
    ],
    reactions: [
      clip("tekening-omhoog"),
      clip("tekening-tafel"),
      clip("reactie-3"),
    ],
  },
};
