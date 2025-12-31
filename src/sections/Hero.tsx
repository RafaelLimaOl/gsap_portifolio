import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import GradientButton from "../components/GradientButton";
gsap.registerPlugin(ScrollTrigger, SplitText);

const HeroSection = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: 1,
        },
      });
      SplitText.create("h1", {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          gsap.from(self.words, {
            y: 100,
            opacity: 0,
            delay: 0.2,
            stagger: 0.1,
          });
        },
      });
      SplitText.create("h2", {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          gsap.from(self.words, {
            y: 100,
            opacity: 0,
            stagger: 0.15,
            delay: 0.3,
          });
        },
      });
      gsap.from(".gradient-btn", {
        opacity: 0,
        y: 40,
        duration: 0.5,
        ease: "power2.out",
        delay: 1.3,
      });
      gsap.from(".star svg", {
        scale: 0,
        rotate: 180,
        opacity: 0,
        transformOrigin: "center center",
        duration: 1.3,
        ease: "back.out(1.7)",
        onComplete: () => {
          gsap.to(".star svg", {
            rotate: "+=360",
            transformOrigin: "center",
            duration: 20,
            ease: "linear",
            repeat: -1,
          });
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <>
      <div ref={heroRef} className="relative overflow-hidden z-0">
        <div className="main-container flex flex-col items-start h-screen max-lg:pt-40 lg:justify-center lg:py-12">
          <h1 className="text-3xl uppercase font-heading font-semibold lg:text-[3.2vw]">
            John Doe
          </h1>
          <h2 className="text-6xl font-heading font-bold tracking-tight mt-3 mb-6 lg:text-[8vw]">
            Web Developer <br />-<span className="text-stroke">FullStack</span>
          </h2>
          <GradientButton
            text="Let's talk"
            link="mailto:email.com"
            extraStyle="gradient-btn"
          />
        </div>

        <div className="star absolute -z-1 top-80 right-[-35%] opacity-80 lg:top-32 lg:right-[-12%]">
          <svg
            className="h-[48vh] lg:h-[80vh]"
            width="100%"
            height="100%"
            viewBox="0 0 653 631"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M290.361 1.55611L333.686 284.91L333.88 286.179L334.595 285.114L496.712 43.7172L530.894 66.1542L354.53 298.39L353.719 299.458L355.031 299.182L644.761 238.164L651.694 276.116L359.086 321.398L357.759 321.603L358.897 322.315L605.849 476.828L581.885 510.336L344.939 341.783L343.894 341.039L344.16 342.294L403.733 622.683L363.139 630.092L319.819 346.737L319.626 345.469L318.911 346.534L156.783 587.928L122.522 565.048L298.964 333.261L299.777 332.192L298.463 332.469L8.73045 393.474L1.564 354.212L294.405 310.247L295.74 310.046L294.596 309.329L47.5646 154.375L71.6092 121.305L308.567 289.864L309.612 290.609L309.345 289.353L249.767 8.96559L290.361 1.55611Z"
              stroke="url(#paint0_linear_1074_2)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1074_2"
                x1="4.77595"
                y1="374.593"
                x2="648.724"
                y2="257.056"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF4D6D" />
                <stop offset="0.25" stopColor="#BD3EB2" />
                <stop offset="0.5" stopColor="#7B2FF7" />
                <stop offset="0.75" stopColor="#2F86F7" />
                <stop offset="1" stopColor="#2FF7ED" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
