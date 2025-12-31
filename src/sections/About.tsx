import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutSection = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    SplitText.create(".about-text", {
      type: "lines, chars",
      onSplit(self) {
        gsap.set(self.chars, {
          opacity: 0.2,
        });
        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1,
          },
        });
      },
    });
  }, []);
  return (
    <>
      <div
        ref={aboutRef}
        className="relative h-screen z-20 bg-white rounded-tl-[60px] rounded-tr-[60px]"
      >
        <div className="about-text main-container flex justify-center items-center h-full font-heading text-black text-2xl py-4 md:text-3xl lg:py-12 xl:text-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi
          officiis architecto asperiores natus temporibus recusandae tenetur
          enim excepturi fuga, exercitationem veniam odit autem itaque placeat
          minima nesciunt alias at. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Repudiandae, harum eligendi dolores quaerat alias
          illo et totam fugit, accusantium in maxime laboriosam obcaecati
          voluptatum laborum illum atque voluptate consectetur. Nemo.
        </div>
      </div>
    </>
  );
};

export default AboutSection;
