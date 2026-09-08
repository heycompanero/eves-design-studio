import type { PageCopy } from "@/lib/i18n";
import { asset } from "@/lib/asset";
import type { Ornaments } from "@/lib/ornaments";

export default function Hero({ c, orn }: { c: PageCopy; orn: Ornaments }) {
  const h = c.hero;

  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="pointer-events-none absolute right-[-12%] top-[6%] h-[520px] w-[520px] rounded-full bg-perzik/25 blur-[110px]" />
      <div className="pointer-events-none absolute left-[-8%] top-[38%] h-[420px] w-[420px] rounded-full bg-nude/60 blur-[100px]" />

      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-14 px-6 pb-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28">
        <div className="animate-fade-up">
          <p className="eyebrow">{h.eyebrow}</p>
          <h1 className="mt-6 font-display text-[2.9rem] leading-[1.02] tracking-[-0.01em] text-choco sm:text-6xl lg:text-[4.6rem]">
            {h.titleA}
            <br />
            <span className="italic text-terracotta">{h.titleB}</span>
          </h1>
          <p className="mt-7 max-w-[34rem] font-body text-[0.98rem] font-light leading-[1.85] text-choco-soft">
            {h.lead}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={h.ctaHref} className="btn-primary">
              {h.ctaPrimary}
            </a>
            <a href="#contact" className="btn-ghost">
              {h.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:220ms]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-t-full border border-choco/10 bg-nude">
            <img
              src={asset(h.img)}
              alt={h.imgAlt}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          <img
            src={asset(orn.heroMain)}
            alt=""
            aria-hidden="true"
            className="absolute -bottom-12 left-0 w-[34%] max-w-[168px] drop-shadow-[0_18px_28px_rgba(108,53,35,0.14)] sm:-left-10 lg:-left-16"
          />

          <img
            src={asset(orn.heroFloat)}
            alt=""
            aria-hidden="true"
            className="absolute -right-2 top-6 max-h-[150px] w-auto max-w-[22%] animate-float lg:-right-8"
          />

          <p className="mt-10 pl-[42%] font-body text-[0.68rem] italic leading-relaxed text-choco/50 sm:pl-[40%]">
            {h.caption}
          </p>
        </div>
      </div>

      <div className="border-y border-choco/10 bg-nude/45">
        <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 md:gap-x-20 md:px-10">
          {c.strip.map((s, i) => (
            <span key={s} className="flex items-center gap-10 md:gap-20">
              {i > 0 && (
                <span className="hidden h-1 w-1 rounded-full bg-terracotta md:block" />
              )}
              <span className="font-body text-[0.66rem] uppercase tracking-widest2 text-choco-soft">
                {s}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
