import React from "react";
import Image from "next/image";

const Seven = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="w-full md:w-2/5">
          <Image
            src="/seven-main.webp"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <p className="text-white mt-4 font-bold text-center text-2xl md:text-3xl lg:text-4xl font-title md:-ml-20">
            “She dedicated her life to her children and students to help them
            cope with the harsh living conditions in Gaza through art”
          </p>
          <div className="uppercase bg-black md:py-4 px-10 tracking-wide md:-ml-20">
            Heba zagout
          </div>
          <p className="text-white text-xl mt-2 font-title md:px-30">
            Heba Zagout, a 39-year-old Palestinian artist, wife, and mother of
            4, had her life unfairply taken from her amidst the ongoing genocide
            in Gaza alongside 2 of her 4 children, Adam and Mahmoud. Zagout
            lived in Gaza her entire life, and she used painting as a means to
            convey emotions regarding Palestinian struggles, including her own.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seven;
