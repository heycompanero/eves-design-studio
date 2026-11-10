import { useLang } from "@/lib/i18n";
import { useOrnaments } from "@/lib/ornaments";
import { clips } from "@/lib/clips";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Spotlight from "@/components/Spotlight";
import VideoStrip from "@/components/VideoStrip";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Reactions from "@/components/Reactions";
import Quote from "@/components/Quote";
import Shop from "@/components/Shop";
import About from "@/components/About";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Wedding() {
  const { t } = useLang();
  const c = t.wedding;
  const orn = useOrnaments("wedding");
  const v = clips.wedding;

  return (
    <>
      <Nav audience="wedding" c={c} />
      <main>
        <Hero c={c} orn={orn} clip={v.hero} />
        <Services c={c} />
        <Spotlight c={c} orn={orn} />
        <VideoStrip c={c} clips={v.strip} />
        <Gallery c={c} />
        <Process c={c} />
        <Reactions c={c} clips={v.reactions} />
        <Quote c={c} orn={orn} />
        <Shop c={c.shop} />
        <About c={c} orn={orn} />
        <CtaSection c={c} />
      </main>
      <Footer audience="wedding" c={c} />
    </>
  );
}
