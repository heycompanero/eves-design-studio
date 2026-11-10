import type { PageCopy } from "@/lib/i18n";
import type { Clip } from "@/lib/clips";
import AutoVideo from "./AutoVideo";
import Reveal from "./Reveal";

/**
 * A strip of clips sliding past continuously. The list is rendered twice so the
 * translate can reset at -50% without a visible jump; AutoVideo only plays the
 * cards that are actually on screen, so the off-screen copies stay idle.
 */
export default function VideoStrip({
  c,
  clips,
}: {
  c: PageCopy;
  clips: Clip[];
}) {
  const s = c.videos;

  return (
    <section className="overflow-hidden border-y border-choco/10 bg-nude/25 py-20 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-[1360px] px-6 md:px-10">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl font-display text-[2.1rem] leading-[1.12] text-choco md:text-[3.1rem]">
            {s.title}
          </h2>
        </div>
      </Reveal>

      <div className="group relative mt-12 flex w-full overflow-hidden">
        {/* soft edges so cards fade in and out instead of being cut off */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-creme to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-creme to-transparent md:w-28" />

        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused] md:gap-6">
          {[0, 1].map((copy) =>
            clips.map((clip) => (
              <div
                key={`${copy}-${clip.src}`}
                className="aspect-[4/5] w-[200px] shrink-0 overflow-hidden rounded-[1.25rem] bg-nude md:w-[260px]"
              >
                <AutoVideo clip={clip} className="h-full w-full object-cover" />
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
