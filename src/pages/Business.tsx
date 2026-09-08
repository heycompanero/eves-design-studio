import { useLang } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Spotlight from "@/components/Spotlight";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Quote from "@/components/Quote";
import About from "@/components/About";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Business() {
  const { t } = useLang();
  const c = t.business;

  return (
    <>
      <Nav audience="business" c={c} />
      <main>
        <Hero c={c} />
        <Spotlight c={c} />
        <Services c={c} />
        <Gallery c={c} />
        <Process c={c} />
        <Quote c={c} />
        <About c={c} />
        <CtaSection c={c} />
      </main>
      <Footer audience="business" c={c} />
    </>
  );
}
