import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLang, type Audience, type PageCopy } from "@/lib/i18n";

export default function Nav({
  audience,
  c,
}: {
  audience: Audience;
  c: PageCopy;
}) {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const other =
    audience === "wedding"
      ? { to: "/bedrijven", label: t.common.switchToBusiness }
      : { to: "/huwelijk", label: t.common.switchToWedding };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-choco/10 bg-creme/92 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-6 px-6 py-4 md:px-10 md:py-5">
        <Link to="/" className="group shrink-0 leading-none">
          <span className="block whitespace-nowrap font-script text-[1.3rem] text-terracotta transition-colors group-hover:text-choco md:text-[1.5rem]">
            Eve&rsquo;s Design Studio
          </span>
          <span className="mt-1 hidden whitespace-nowrap font-body text-[0.5rem] uppercase tracking-[0.22em] text-choco-soft sm:block">
            {t.common.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {c.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative whitespace-nowrap font-body text-[0.68rem] uppercase tracking-[0.18em] text-choco transition-colors hover:text-terracotta after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-terracotta after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <Link
            to={other.to}
            className="whitespace-nowrap border-l border-choco/15 pl-6 font-body text-[0.62rem] uppercase tracking-[0.18em] text-choco/55 transition-colors hover:text-terracotta"
          >
            {other.label}
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <div className="flex items-center gap-1 font-body text-[0.68rem] uppercase tracking-widest2">
            {(["nl", "en"] as const).map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                {i > 0 && <span className="text-choco/30">/</span>}
                <button
                  onClick={() => setLang(l)}
                  className={`transition-colors ${
                    lang === l
                      ? "text-terracotta"
                      : "text-choco/45 hover:text-choco"
                  }`}
                  aria-pressed={lang === l}
                >
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden whitespace-nowrap rounded-full border border-choco/25 px-6 py-3 font-body text-[0.62rem] uppercase tracking-[0.18em] text-choco transition-all duration-300 hover:border-choco hover:bg-choco hover:text-creme md:inline-block"
          >
            {c.navCta}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 xl:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            <span
              className={`block h-px w-5 bg-choco transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-choco transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-choco/10 bg-creme transition-[max-height] duration-500 xl:hidden ${
          open ? "max-h-[26rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-5 px-6 py-7">
          {c.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-xl text-choco"
            >
              {l.label}
            </a>
          ))}
          <Link
            to={other.to}
            className="mt-2 border-t border-choco/10 pt-5 font-body text-[0.7rem] uppercase tracking-widest2 text-terracotta"
          >
            {other.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
