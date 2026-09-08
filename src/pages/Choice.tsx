import { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { asset } from "@/lib/asset";

export default function Choice() {
  const { t, lang, setLang } = useLang();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-choco">
      {/* top bar */}
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-10">
        <div className="leading-none">
          <span className="block whitespace-nowrap font-script text-[1.35rem] text-creme md:text-[1.6rem]">
            Eve&rsquo;s Design Studio
          </span>
          <span className="mt-1 block whitespace-nowrap font-body text-[0.5rem] uppercase tracking-[0.22em] text-creme/60">
            {t.common.tagline}
          </span>
        </div>

        <div className="flex items-center gap-1 font-body text-[0.68rem] uppercase tracking-widest2">
          {(["nl", "en"] as const).map((l, i) => (
            <span key={l} className="flex items-center gap-1">
              {i > 0 && <span className="text-creme/30">/</span>}
              <button
                onClick={() => setLang(l)}
                className={`transition-colors ${
                  lang === l ? "text-creme" : "text-creme/45 hover:text-creme"
                }`}
                aria-pressed={lang === l}
              >
                {l.toUpperCase()}
              </button>
            </span>
          ))}
        </div>
      </header>

      {/* panels */}
      <div className="flex min-h-[100dvh] flex-col md:flex-row">
        {t.choice.panels.map((p) => {
          const isHovered = hovered === p.key;
          const isDimmed = hovered !== null && !isHovered;

          return (
            <Link
              key={p.key}
              to={p.to}
              onMouseEnter={() => setHovered(p.key)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(p.key)}
              onBlur={() => setHovered(null)}
              className={`group relative flex min-h-[50dvh] flex-1 items-center justify-center overflow-hidden border-creme/15 transition-[flex-grow] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:min-h-[100dvh] md:border-l md:first:border-l-0 ${
                isHovered ? "md:grow-[1.35]" : ""
              }`}
            >
              <img
                src={asset(p.img)}
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out ${
                  isHovered ? "scale-[1.06]" : "scale-100"
                } ${isDimmed ? "opacity-45 saturate-[0.6]" : "opacity-100"}`}
              />
              <div
                className={`absolute inset-0 bg-[#170C07] transition-opacity duration-700 ${
                  isHovered ? "opacity-20" : "opacity-40"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#170C07]/70 via-transparent to-[#170C07]/35" />

              <div className="relative z-10 flex flex-col items-center px-6 text-center">
                <span
                  className={`font-body text-[0.62rem] uppercase tracking-widest2 text-creme/90 drop-shadow-[0_1px_10px_rgba(23,12,7,0.9)] transition-all duration-500 ${
                    isHovered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  {p.eyebrow}
                </span>

                <span className="mt-4 font-display text-[2.4rem] leading-none text-creme drop-shadow-[0_2px_18px_rgba(40,15,8,0.45)] md:text-[3.4rem]">
                  {p.label}
                </span>

                <span
                  className={`mt-4 max-w-[18rem] font-body text-[0.8rem] font-light leading-relaxed text-creme/90 drop-shadow-[0_1px_10px_rgba(23,12,7,0.9)] transition-all duration-500 ${
                    isHovered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  {p.note}
                </span>

                <span
                  className={`mt-7 flex h-11 w-11 items-center justify-center rounded-full border border-creme/50 text-creme transition-all duration-500 ${
                    isHovered
                      ? "translate-y-0 border-creme bg-creme/10 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* hint */}
      <span className="pointer-events-none absolute inset-x-0 bottom-6 z-20 text-center font-body text-[0.6rem] uppercase tracking-widest2 text-creme/50">
        {t.choice.hint}
      </span>
    </div>
  );
}
