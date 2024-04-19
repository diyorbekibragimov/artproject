import React from "react";
import Image from "next/image";

const Fifth = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="w-full md:w-2/5">
          <Image
            src="/motaz.jpg"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <div className="uppercase bg-black md:py-4 px-10 tracking-wide md:-ml-20">
            Motaz azaiza
          </div>
          <p className="text-white mt-4 font-bold text-center text-3xl md:text-6xl font-title md:-ml-40">
            “My photos traveled the world but my feet couldn&apos;t touch my
            Homeland.”
          </p>
          <p className="text-white text-xl mt-2 font-title md:px-30">
            Motaz Azaiza is one of the most well known journalists documenting
            the ongoing genocide in Gaza. Prior to this, he was focused on
            photography and documenting his life in Gaza. Azaiza graduated in
            2022 from Al Azhar university in Gaza with a degree in English
            studies and is currently employed by UNRWA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
