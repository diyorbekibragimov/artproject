"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type TopNavProps = {
  invertMenu?: boolean;
  alwaysBlack?: boolean;
};

const TopNav: React.FC<TopNavProps> = ({
  invertMenu = false,
  alwaysBlack = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollLevel = window.scrollY;
      setIsScrolled(scrollLevel >= window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let menu = (
    <>
      <a href="/" className="hover:underline mr-4">
        Home
      </a>
      <a href="/gallery" className="hover:underline mr-4">
        Gallery
      </a>
      <a href="#" className="hover:underline mr-4">
        Submit
      </a>
      <a href="/about" className="hover:underline mr-4">
        About Us
      </a>
    </>
  );

  let bg_col = "bg-white";

  return (
    <nav
      className={`font-title font-semibold fixed w-full z-50 ${
        isScrolled || isMenuOpen || alwaysBlack
          ? "md:bg-black bg-black text-white md:drop-shadow-2xl border-white"
          : "md:bg-transparent bg-transparent text-white border-none"
      }
      text-white transition-all duration-500 ease-in-out border-b-2`}
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex md:justify-between md:items-center justify-start items-start">
          {/* Logo */}
          <h1 className="text-3xl font-title font-extrabold uppercase tracking-wide">
            <a href="/">Arts & Crafts club</a>
          </h1>

          {/* Menu Links */}
          <div
            className={`hidden md:flex transition uppercase md:capitalize flex-row text-base md:space-x-4 md:py-0 py-2  ${
              isMenuOpen ? "flex" : "hidden"
            }`}
          >
            {menu}
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden my-2 ml-2">
            <button onClick={toggleMenu}>
              {/* Hamburger Icon */}
              <div className="space-y-2 ml-1 md:mr-10">
                <span className={`block w-8 h-0.5 ${bg_col}`}></span>
                <span className={`block w-8 h-0.5 ${bg_col}`}></span>
                <span className={`block w-8 h-0.5 ${bg_col}`}></span>
              </div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition uppercase md:capitalize justify-center flex-row text-base py-2  ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          {menu}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
