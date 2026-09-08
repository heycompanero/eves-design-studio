import { copy } from "@/lib/i18n";
import Reveal from "./Reveal";

type ShopCopy = (typeof copy)["nl"]["wedding"]["shop"];

const cards = [
  { img: "/illustraties/lemons.webp", tint: "bg-perzik/30" },
  { img: "/illustraties/cat.webp", tint: "bg-nude" },
  { img: "/illustraties/dinner.webp", tint: "bg-oudrose/25" },
];

export default function Shop({ c }: { c: ShopCopy }) {
  return (
    <section id="templates" className="border-y border-choco/10 bg-nude/30 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div>
            <p className="eyebrow">{c.eyebrow}</p>
            <h2 className="mt-5 font-display text-[2.1rem] leading-[1.12] text-choco md:text-[3.1rem]">
              {c.title}
            </h2>
            <p className="mt-7 max-w-lg font-body text-[0.95rem] font-light leading-[1.9] text-choco-soft">
              {c.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                {c.cta}
              </a>
              <span className="font-body text-[0.66rem] uppercase tracking-widest2 text-choco/45">
                {c.soon}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {cards.map((card, i) => (
              <div
                key={card.img}
                className={`flex aspect-[3/4] items-center justify-center rounded-[1.25rem] border border-choco/10 p-5 ${card.tint} ${
                  i === 1 ? "translate-y-6" : ""
                }`}
              >
                <img
                  src={card.img}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="max-h-full w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
