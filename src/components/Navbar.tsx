import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const navRef = useRef(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      opacity: 1,
      y: -100,
      duration: 0.6,
    });
  }, []);

  const spanStyle =
    "inline-block h-0.5 w-10 bg-white transition-all duration-300 origin-center lg:w-12";

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 w-full mix-blend-difference z-30"
      >
        <div className="main-container flex justify-between items-center py-6">
          <img src={Logo} className="h-10 w-auto" alt="Logo" />
          <div
            className="menubar flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <span
              className={
                spanStyle + `${menuIsOpen ? " rotate-45 translate-y-1" : ""}`
              }
            />
            <span
              className={
                spanStyle + `${menuIsOpen ? " -rotate-45 -translate-y-1" : ""}`
              }
            />
          </div>
        </div>
      </nav>

      <div
        className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center text-3xl gap-8 transition-transform duration-500 ${
          menuIsOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        onClick={() => setMenuIsOpen(false)}
      >
        {/* Menu links */}
        <a href="/" className="menu-link">
          Home
        </a>
        <a href="/projects" className="menu-link">
          Projects
        </a>
        <a href="mailto: johndoe@gmail.com" className="menu-link">
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
