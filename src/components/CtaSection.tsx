import type { PageCopy } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function CtaSection({ c }: { c: PageCopy }) {
  const x = c.cta;

  return (
    <section id="contact" className="relative overflow-hidden bg-choco py-24 text-creme md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-terracotta/25 blur-[130px]" />
      <Reveal>
        <div className="relative mx-auto max-w-2xl px-6 text-center md:px-10">
          <h2 className="font-display text-[2.3rem] leading-[1.1] md:text-[3.4rem]">
            {x.title}
          </h2>
          <p className="mx-auto mt-7 max-w-lg font-body text-[0.95rem] font-light leading-[1.9] text-creme/75">
            {x.body}
          </p>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-4 font-body text-[0.7rem] font-medium uppercase tracking-widest2 text-white transition-all duration-300 hover:bg-creme hover:text-choco"
            >
              {x.primary}
            </a>
            <a
              href="mailto:evesdesignstudio@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-creme/30 px-8 py-4 font-body text-[0.7rem] font-medium uppercase tracking-widest2 text-creme transition-all duration-300 hover:border-creme hover:bg-creme hover:text-choco"
            >
              {x.secondary}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
