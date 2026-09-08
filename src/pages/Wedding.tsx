import { useLang } from "@/lib/i18n";
import { useOrnaments } from "@/lib/ornaments";
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
  const orn = useOrnaments("wedding");

  return (
    <>
      <Nav audience="wedding" c={c} />
      <main>
        <Hero c={c} orn={orn} />
        <Services c={c} />
        <Spotlight c={c} orn={orn} />
        <Gallery c={c} />
        <Process c={c} />
        <Quote c={c} orn={orn} />
        <Shop c={c.shop} />
        <About c={c} orn={orn} />
        <CtaSection c={c} />
      </main>
      <Footer audience="wedding" c={c} />
    </>
  );
}
