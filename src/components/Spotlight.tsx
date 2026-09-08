import type { PageCopy } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Spotlight({ c }: { c: PageCopy }) {
  const s = c.spotlight;

  return (
    <section id="live" className="relative overflow-hidden bg-nude/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-choco/10 shadow-[0_30px_70px_-40px_rgba(108,53,35,0.45)]">
              <img
                src={s.img}
                alt={s.imgAlt}
                loading="lazy"
                className="w-full"
              />
            </div>
            <img
              src={c.ornaments.spotA}
              alt=""
              aria-hidden="true"
              className="absolute -bottom-10 -right-2 w-[26%] max-w-[140px] drop-shadow-[0_14px_24px_rgba(108,53,35,0.16)] md:-right-8"
            />
            <img
              src={c.ornaments.spotB}
              alt=""
              aria-hidden="true"
              className="absolute -left-4 -top-10 w-[12%] max-w-[62px] md:-left-8"
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div>
            <p className="eyebrow">{s.eyebrow}</p>
            <h2 className="mt-5 font-display text-[2.1rem] leading-[1.12] text-choco md:text-[3.1rem]">
              {s.title} <span className="italic text-terracotta">{s.titleItalic}</span>
            </h2>
            <p className="mt-7 font-body text-[0.95rem] font-light leading-[1.9] text-choco-soft">
              {s.body}
            </p>
            <p className="mt-5 font-body text-[0.95rem] font-light leading-[1.9] text-choco-soft">
              {s.body2}
            </p>

            <ul className="mt-9 space-y-3">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  <span className="font-body text-[0.88rem] font-light text-choco">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary mt-10">
              {s.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
