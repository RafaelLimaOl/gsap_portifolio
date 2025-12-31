import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import GradientButton from "../components/GradientButton";

gsap.registerPlugin(ScrollTrigger);

const WorkSection = () => {
  const projectData = [
    {
      id: 1,
      name: "Leading Page",
      image:
        "https://img.freepik.com/premiun-psd/leading-page-template_440410-494.jpg",
      link: "/project-one",
    },
    {
      id: 2,
      name: "Ecommerce Website",
      image:
        "https://img.freepik.com/premiun-psd/flat-design-e-commerce-leading-page-template_23-2151219755.jpg",
      link: "/project-two",
    },
    {
      id: 3,
      name: "Mobile App UI",
      image:
        "https://img.freepik.com/premiun-psd/travel-booking-app-with-airplane-reservation_23-2148626981.jpg",
      link: "/project-three",
    },
    {
      id: 4,
      name: "Brand Identity",
      image:
        "https://img.freepik.com/premiun-psd/clean-professional-corporate-brand-identity-mockup-stationery-set_616632-4755.jpg",
      link: "/project-four",
    },
  ];

  const workRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const projectWidht = projectRef.current!.scrollWidth;
    const scrollDistance = projectWidht - window.innerWidth;

    gsap.to(projectRef.current, {
      x: -scrollDistance,
      ease: "linear",
      scrollTrigger: {
        trigger: workRef.current,
        start: "center center",
        end: () => `+=${projectWidht}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <>
      <div
        ref={workRef}
        className="h-screen bg-white text-black py-24 lg:py-40"
      >
        <div className="main-container flex justify-between items-start gap-6 pb-8 md:items-end lg:pb-12 max-md:flex-col">
          <div className="max-w-xl">
            <h3 className="mb-3">Selected Work</h3>
            <p className="text-lg lg:text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <GradientButton text="Explore All" link="" extraStyle="btn-light" />
        </div>

        <div ref={projectRef}>
          <div className="flex gap-4 ms-4 mt-6 lg:gap-8 lg:ms-[40%]">
            {projectData.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="relative block rounded-2xl h-64 w-full min-w-[340px] overflow-hidden group lg:min-w-xl lg:h-96"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 right-4 bg-black text-white text-sm uppercase font-heading px-5 py-1 rounded-full lg:text-lg">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSection;
