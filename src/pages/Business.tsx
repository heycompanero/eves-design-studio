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
import About from "@/components/About";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Business() {
  const { t } = useLang();
  const c = t.business;
  const orn = useOrnaments("business");
  const v = clips.business;

  return (
    <>
      <Nav audience="business" c={c} />
      <main>
        <Hero c={c} orn={orn} clip={v.hero} />
        <Spotlight c={c} orn={orn} />
        <Services c={c} />
        <VideoStrip c={c} clips={v.strip} />
        <Gallery c={c} />
        <Process c={c} />
        <Reactions c={c} clips={v.reactions} />
        <Quote c={c} orn={orn} />
        <About c={c} orn={orn} />
        <CtaSection c={c} />
      </main>
      <Footer audience="business" c={c} />
    </>
  );
}
