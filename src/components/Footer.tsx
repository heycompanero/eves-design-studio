import { Link } from "react-router-dom";
import { useLang, type Audience, type PageCopy } from "@/lib/i18n";
import { asset } from "@/lib/asset";

export default function Footer({
  audience,
  c,
}: {
  audience: Audience;
  c: PageCopy;
}) {
  const { t } = useLang();

  const other =
    audience === "wedding"
      ? { to: "/bedrijven", label: t.common.switchToBusiness }
      : { to: "/huwelijk", label: t.common.switchToWedding };

  return (
    <footer className="bg-creme">
      <div className="mx-auto max-w-[1360px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-script text-[1.7rem] text-terracotta">
              Eve&rsquo;s Design Studio
            </Link>
            <p className="mt-2 font-body text-[0.6rem] uppercase tracking-widest2 text-choco-soft">
              {t.common.tagline}
            </p>
            <img
              src={asset("/illustraties/lemons.webp")}
              alt=""
              aria-hidden="true"
              className="mt-8 w-16"
            />
          </div>

          <div>
            <p className="eyebrow">{t.common.footer.nav}</p>
            <ul className="mt-5 space-y-3">
              {c.nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-body text-[0.85rem] font-light text-choco-soft transition-colors hover:text-terracotta"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to={other.to}
                  className="font-body text-[0.85rem] font-light text-terracotta transition-colors hover:text-choco"
                >
                  {other.label}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">{t.common.footer.contact}</p>
            <ul className="mt-5 space-y-3 font-body text-[0.85rem] font-light text-choco-soft">
              <li>
                <a
                  className="transition-colors hover:text-terracotta"
                  href="mailto:evesdesignstudio@gmail.com"
                >
                  evesdesignstudio@gmail.com
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-terracotta" href="tel:+32485826925">
                  +32 485 82 69 25
                </a>
              </li>
              <li className="pt-2 leading-relaxed">
                Bagonielaan 10
                <br />
                9170 Sint-Pauwels
              </li>
            </ul>
          </div>
        </div>

        <div className="rule mt-14" />

        <div className="mt-6 flex flex-col gap-3 font-body text-[0.7rem] font-light text-choco/50 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Eve&rsquo;s Design Studio &middot;{" "}
            {t.common.footer.rights}
          </p>
          <p className="flex gap-6">
            <a href="#" className="transition-colors hover:text-terracotta">
              {t.common.footer.legal}
            </a>
            <a href="#" className="transition-colors hover:text-terracotta">
              {t.common.footer.privacy}
            </a>
            <span>BE 1009.275.496</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
