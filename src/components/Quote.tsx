import type { PageCopy } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function Quote({ c }: { c: PageCopy }) {
  const q = c.quote;

  return (
    <section className="mx-auto max-w-[1360px] px-6 py-24 md:px-10 md:py-28">
      <Reveal>
        <figure className="relative mx-auto max-w-3xl rounded-[2rem] bg-nude/55 px-8 py-16 text-center md:px-16 md:py-20">
          <img
            src={c.ornaments.quote}
            alt=""
            aria-hidden="true"
            className="absolute -top-10 left-1/2 w-20 -translate-x-1/2"
          />
          <blockquote className="font-display text-[1.5rem] italic leading-[1.5] text-choco md:text-[2rem]">
            &ldquo;{q.text}&rdquo;
          </blockquote>
          <figcaption className="mt-8">
            <span className="block font-body text-[0.72rem] uppercase tracking-widest2 text-choco">
              {q.author}
            </span>
            <span className="mt-2 block font-body text-[0.72rem] font-light text-choco-soft">
              {q.detail}
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
