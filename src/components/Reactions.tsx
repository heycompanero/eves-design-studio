import type { PageCopy } from "@/lib/i18n";
import type { Clip } from "@/lib/clips";
import AutoVideo from "./AutoVideo";
import Reveal from "./Reveal";

export default function Reactions({
  c,
  clips,
}: {
  c: PageCopy;
  clips: Clip[];
}) {
  const r = c.reactions;

  return (
    <section className="mx-auto max-w-[1360px] px-6 pt-24 md:px-10 md:pt-32">
      <Reveal>
        <div className="max-w-2xl">
          <p className="eyebrow">{r.eyebrow}</p>
          <h2 className="mt-5 font-display text-[2.1rem] leading-[1.12] text-choco md:text-[3.1rem]">
            {r.title}{" "}
            <span className="italic text-terracotta">{r.titleItalic}</span>
          </h2>
          <p className="mt-6 font-body text-[0.95rem] font-light leading-[1.85] text-choco-soft">
            {r.lead}
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
        {clips.map((clip, i) => (
          <Reveal key={clip.src} delay={i * 110}>
            <div
              className={`aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-nude ${
                i === 1 ? "sm:translate-y-8" : ""
              }`}
            >
              <AutoVideo clip={clip} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
