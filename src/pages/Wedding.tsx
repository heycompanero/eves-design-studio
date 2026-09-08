import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Spotlight from "@/components/Spotlight";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Quote from "@/components/Quote";
import Shop from "@/components/Shop";
import About from "@/components/About";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Wedding() {
  const { t } = useLang();
  const c = t.wedding;

  return (
    <>
      <Nav audience="wedding" c={c} />
      <main>
        <Hero c={c} />
        <Services c={c} />
        <Spotlight c={c} />
        <Gallery c={c} />
        <Process c={c} />
        <Quote c={c} />
        <Shop c={c.shop} />
        <About c={c} />
        <CtaSection c={c} />
      </main>
      <Footer audience="wedding" c={c} />
    </>
  );
}
