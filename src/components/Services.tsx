import type { PageCopy } from "@/lib/i18n";
import Reveal from "./Reveal";
import { asset } from "@/lib/asset";

export default function Services({ c }: { c: PageCopy }) {
  const s = c.services;

  return (
    <section id="aanbod" className="mx-auto max-w-[1360px] px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <div className="max-w-2xl">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 className="mt-5 font-display text-[2.1rem] leading-[1.12] text-choco md:text-[3.1rem]">
            {s.title}
          </h2>
          <p className="mt-6 font-body text-[0.95rem] font-light leading-[1.85] text-choco-soft">
            {s.lead}
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {s.items.map((item, i) => (
          <Reveal key={item.n} delay={i * 120}>
            <article className="group flex h-full flex-col">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-nude/55">
                <img
                  src={asset(item.img)}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
                <span className="absolute left-6 top-5 font-display text-[0.9rem] italic text-creme drop-shadow-[0_1px_6px_rgba(60,25,15,0.55)]">
                  {item.n}
                </span>
              </div>
              <h3 className="mt-7 font-display text-[1.6rem] leading-tight text-choco">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 font-body text-[0.9rem] font-light leading-[1.85] text-choco-soft">
                {item.text}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 font-body text-[0.66rem] uppercase tracking-widest2 text-terracotta transition-colors hover:text-choco"
              >
                {item.link}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
