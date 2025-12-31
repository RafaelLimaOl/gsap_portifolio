import CallToAction from "../components/CallToAction";
import AboutSection from "../sections/About";
import HeroSection from "../sections/Hero";
import MarqueeSection from "../sections/Marquee";
import ServiceSection from "../sections/Services";
import WorkSection from "../sections/Work";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WorkSection />
      <MarqueeSection />
      <CallToAction />
    </>
  );
};

export default Home;
