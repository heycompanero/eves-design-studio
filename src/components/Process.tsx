import type { PageCopy } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Process({ c }: { c: PageCopy }) {
  const p = c.process;

  return (
    <section className="mx-auto max-w-[1360px] px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <div className="max-w-2xl">
          <p className="eyebrow">{p.eyebrow}</p>
          <h2 className="mt-5 font-display text-[2.1rem] leading-[1.12] text-choco md:text-[3.1rem]">
            {p.title}
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-choco/10 bg-choco/10 md:grid-cols-3">
        {p.steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 110}>
            <div className="h-full bg-creme px-8 py-12 transition-colors duration-500 hover:bg-nude/45 md:px-10 md:py-14">
              <span className="font-display text-[2.6rem] italic leading-none text-perzik">
                {s.n}
              </span>
              <h3 className="mt-6 font-display text-[1.45rem] text-choco">{s.title}</h3>
              <p className="mt-3 font-body text-[0.88rem] font-light leading-[1.85] text-choco-soft">
                {s.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
