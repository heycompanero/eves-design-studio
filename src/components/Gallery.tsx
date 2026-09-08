import type { PageCopy } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Gallery({ c }: { c: PageCopy }) {
  const g = c.gallery;

  return (
    <section id="werk" className="mx-auto max-w-[1360px] px-6 py-24 md:px-10 md:py-28">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">{g.eyebrow}</p>
            <h2 className="mt-5 font-display text-[2.1rem] leading-[1.12] text-choco md:text-[3.1rem]">
              {g.title}
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-body text-[0.66rem] uppercase tracking-widest2 text-terracotta transition-colors hover:text-choco"
          >
            {g.cta} <span>&rarr;</span>
          </a>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
        {g.shots.map((s, i) => (
          <Reveal key={s.src} delay={(i % 3) * 100} className={s.span}>
            <div className={`group ${s.ratio} overflow-hidden rounded-[1.5rem] bg-nude`}>
              <img
                src={s.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
