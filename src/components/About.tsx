import type { PageCopy } from "@/lib/i18n";
import Reveal from "./Reveal";
import { asset } from "@/lib/asset";
import type { Ornaments } from "@/lib/ornaments";

export default function About({ c, orn }: { c: PageCopy; orn: Ornaments }) {
  const a = c.about;

  return (
    <section id="over" className="mx-auto max-w-[1360px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto w-full max-w-[360px]">
            <div className="aspect-[4/5] overflow-hidden rounded-t-full border border-choco/10 bg-nude">
              <img
                src={asset(a.img)}
                alt={a.imgAlt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <img
              src={asset(orn.about)}
              alt=""
              aria-hidden="true"
              className="absolute -bottom-6 -right-4 max-h-[112px] w-auto max-w-[24%] animate-float"
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div>
            <p className="eyebrow">{a.eyebrow}</p>
            <h2 className="mt-5 font-display text-[2.1rem] leading-[1.12] text-choco md:text-[3.1rem]">
              {a.title}
            </h2>
            <p className="mt-7 max-w-xl font-body text-[0.95rem] font-light leading-[1.9] text-choco-soft">
              {a.body}
            </p>
            <p className="mt-5 max-w-xl font-body text-[0.95rem] font-light leading-[1.9] text-choco-soft">
              {a.body2}
            </p>
            <p className="mt-8 font-script text-[1.9rem] text-terracotta">Evelien</p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 font-body text-[0.66rem] uppercase tracking-widest2 text-terracotta transition-colors hover:text-choco"
            >
              {a.cta} <span>&rarr;</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
