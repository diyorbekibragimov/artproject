import React from "react";
import Image from "next/image";

const SixthGallery = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="w-full p-10 md:p-0 flex flex-col md:flex-row flex-wrap items-center justify-start">
        <div className="w-full md:w-1/5 md:block hidden">
          <div className="transform flex flex-row-reverse justify-center rotate-180 text-center">
            {/* Custom style for vertical writing mode */}
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-6xl font-bold uppercase tracking-wider font-extra-condensed"
            >
              Basel ELmaqosui
            </div>
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-4xl capitalize tracking-widest font-semibold font-title"
            >
              Art Pieces
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/5 text-center flex flex-wrap gap-4 p-2 md:p-10">
          <Image
            className="flex-1"
            src="/sixth-1.jpg"
            alt=""
            width="300"
            height="300"
            loading="lazy"
            objectFit="cover"
          />
          <Image
            className="flex-1"
            src="/sixth-2.jpg"
            alt=""
            width="300"
            height="300"
            loading="lazy"
            objectFit="cover"
          />
          <Image
            className="flex-1"
            src="/sixth-3.jpg"
            alt=""
            width="300"
            height="300"
            loading="lazy"
            objectFit="cover"
          />
          <Image
            className="flex-1"
            src="/sixth-4.jpg"
            alt=""
            width="300"
            height="300"
            loading="lazy"
            objectFit="cover"
          />
          <Image
            className="flex-1"
            src="/sixth-5.jpg"
            alt=""
            width="300"
            height="300"
            loading="lazy"
            objectFit="cover"
          />
          <Image
            className="flex-1"
            src="/sixth-6.jpg"
            alt=""
            width="300"
            height="300"
            loading="lazy"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SixthGallery;
