import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import GradientButton from "./GradientButton";

gsap.registerPlugin(ScrollTrigger, SplitText);

const CallToAction = () => {
  const ctaRef = useRef(null);

  useGSAP(() => {
    gsap.from(ctaRef.current, {
      backgroundColor: "#fff",
      color: "#000",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "center bottom",
        end: "60% bottom",
        scrub: true,
      },
    });
  }, []);
  return (
    <>
      <div
        ref={ctaRef}
        className="transition-colors duration-300 mix-blend-difference"
      >
        <div className="main-container flex flex-col gap-8 justify-center items-center py-20 h-full lg:py-28 ">
          <h4 className="max-w-6xl text-2xl lg:text-5xl text-center ">
            Freelance projects, collaborations and full-time opportunities.
            Let's get acquainted
          </h4>
          <GradientButton text="Book a Call" link="/" />
        </div>
      </div>
    </>
  );
};

export default CallToAction;
