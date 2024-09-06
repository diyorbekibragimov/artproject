import React from "react";
import Image from "next/image";

const Ten = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="w-full md:w-2/5">
          <Image
            src="/tenth-main.jpg"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <div className="uppercase bg-black md:py-4 px-10 md:text-4xl md:-ml-20 mt-4">
          Halima Al-Kahlot
          </div>
          <p className="text-white text-xl mt-2 font-title md:px-30">
          Halima Abdel Karim Al-Kahlot, a 29-year-old artist from Gaza City, tragically lost her life in an Israeli airstrike on October 29. 
          Renowned for her innovative approach, Al-Kahlot used unconventional materials like brooms and cardboard to address pressing social issues. 
          Her passion for art, evident from her studies at Al-Aqsa University, led her to create impactful works such as "Pending," which symbolized inaccessible medical treatment by replacing broom bristles with prescription packages, and "Fragments of the City," where cardboard helicopters and knives represented the violence faced by Gazans. 
          Al-Kahlot's art highlighted critical human rights issues, including access to life and medical care, and her legacy endures through her powerful contributions to social justice and the art world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ten;
