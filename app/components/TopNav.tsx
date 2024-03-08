import React from "react";

const TopNav = () => {
  return (
    <div className="w-2/5 m-auto hidden md:block">
      <nav className="flex justify-end mr-4 uppercase tracking-wider drop-shadow-xl">
        <a href="#" className="hover:underline mr-8">
          Home
        </a>
        <a href="#" className="hover:underline mr-8">
          Submit
        </a>
        <a href="#" className="hover:underline mr-4">
          About Us
        </a>
      </nav>
    </div>
  );
};

export default TopNav;
