"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type TopNavProps = {
  invertMenu?: boolean;
};

const TopNav: React.FC<TopNavProps> = ({ invertMenu = false }) => {
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

  let getLogo = (scrollBolean: boolean) => {
    if (scrollBolean) {
      return (
        <a href="/">
          <Image
            className="w-auto mr-2 my-auto"
            src="/assets/color_horizontal.png"
            alt="hero"
            width={150}
            height={15}
          />
        </a>
      );
    }
    return (
      <Image
        className="invert w-auto max-h-6 my-auto"
        src="/assets/cmuq_horiz_black.png"
        alt="hero"
        width={200}
        height={20}
      />
    );
  };

  let bg_col = "bg-white";

  return (
    <nav
      className={`font-title font-semibold fixed w-full z-50 ${
         isScrolled || isMenuOpen
           ? "md:bg-black bg-black text-white md:drop-shadow-2xl"
           : "md:bg-transparent bg-transparent text-white"
       }
      text-white transition-all duration-500 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex md:justify-between md:items-center justify-start items-start">
          {/* Logo */}
          <h1 className="text-3xl font-title font-extrabold uppercase tracking-wide">
            Arts & Crafts club
          </h1>

          {/* Menu Links */}
          <div
            className={`hidden md:flex transition uppercase md:capitalize flex-row text-base md:space-x-4 md:py-0 py-2  ${
              isMenuOpen ? "flex" : "hidden"
            }`}
          >
            <a href="#" className="hover:underline mr-4">
              Home
            </a>
            <a href="#" className="hover:underline mr-4">
              Gallery
            </a>
            <a href="#" className="hover:underline mr-4">
              Submit
            </a>
            <a href="#" className="hover:underline mr-4">
              About Us
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden my-4">
            <button onClick={toggleMenu}>
              {/* Hamburger Icon */}
              <div className="space-y-2 mr-10">
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
            <a href="#" className="hover:underline mr-8">
              Home
            </a>
            <a href="#" className="hover:underline mr-8">
              Gallery
            </a>
            <a href="#" className="hover:underline mr-8">
              Submit
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
          </div>
      </div>
    </nav>
  );
};

export default TopNav;
