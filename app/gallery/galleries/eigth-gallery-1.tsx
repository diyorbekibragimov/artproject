import React from "react";
import Image from "next/image";

const EigthGallery1 = () => {
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
              Maisara Baroud
            </div>
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-4xl capitalize tracking-widest font-semibold font-title"
            >
              Art Pieces
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/5 text-center flex flex-wrap gap-5 p-2 md:p-10">
          <Image
            className="flex-0.5"
            src="/eigth-1.png"
            alt=""
            width="300"
            height="300"
            loading="lazy"
            objectFit="cover"
          />
          <Image
            className="flex-0.5"
            src="/eigth-2.png"
            alt=""
            width="300"
            height="300"
            loading="lazy"
            objectFit="cover"
          />
          <Image
            className="flex-0.5"
            src="/eigth-3.png"
            alt=""
            width="300"
            height="300"
            loading="lazy"
            objectFit="cover"
          />
          <Image
            className="flex-0.5"
            src="/eigth-4.png"
            alt=""
            width="300"
            height="300"
            loading="lazy"
            objectFit="cover"
          />
          <Image
            className="flex-0.5"
            src="/eigth-5.png"
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

export default EigthGallery1;