import Star from "../assets/images/star.svg";

const MarqueeSection = () => {
  return (
    <>
      <div className="bg-white text-black pb-28 overflow-hidden lg:pb-44">
        <div className="whitespace-nowrap animate-marquee text-6xl font-heading font-semibold tracking-tight lg:text-[7vw]">
          <span className="flex gap-4 lg:gap-8 mx-8">
            CREATE <img src={Star} alt="" className="marquee-star1 w-[7vw]" />
            DESIGN <img src={Star} alt="" className="marquee-star1 w-[7vw]" />
            INSPIRE <img src={Star} alt="" className="marquee-star1 w-[7vw]" />
            CREATE <img src={Star} alt="" className="marquee-star1 w-[7vw]" />
            DESIGN <img src={Star} alt="" className="marquee-star1 w-[7vw]" />
            INSPIRE <img src={Star} alt="" className="marquee-star1 w-[7vw]" />
          </span>
        </div>

        <div className="whitespace-nowrap animate-marquee-reverse text-6xl font-heading font-semibold tracking-tight lg:text-[7vw]">
          <span className="flex gap-4 lg:gap-8 mx-8">
            CREATE <img src={Star} alt="" className="marquee-star2 w-[7vw]" />
            DESIGN <img src={Star} alt="" className="marquee-star2 w-[7vw]" />
            INSPIRE <img src={Star} alt="" className="marquee-star2 w-[7vw]" />
            CREATE <img src={Star} alt="" className="marquee-star2 w-[7vw]" />
            DESIGN <img src={Star} alt="" className="marquee-star2 w-[7vw]" />
            INSPIRE <img src={Star} alt="" className="marquee-star2 w-[7vw]" />
          </span>
        </div>
      </div>
    </>
  );
};

export default MarqueeSection;
