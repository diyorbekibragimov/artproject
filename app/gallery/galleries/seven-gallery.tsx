import React from "react";
import Image from "next/image";

const SevenGallery = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="w-full p-10 md:p-0 flex flex-col md:flex-row flex-wrap items-center justify-start">
        <div className="w-full md:w-1/5 md:block hidden">
          <div className="transform flex flex-row-reverse justify-center rotate-180 text-center">
            {/* Custom style for vertical writing mode */}
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-6xl fond-bold uppercase tracking-wider font-extra-condensed"
            >
              Heba zagout
            </div>
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-4xl capitalize tracking-widest font-semibold font-title"
            >
              Art Pieces
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 text-center flex flex-col items-start p-2 md:p-10">
          <Image
            src="/seven-1.webp"
            alt=""
            className="my-1"
            width="500"
            height="800"
            objectFit="cover"
          />
          <div className="text-white text-normal mt-4 text-center">
            The painting shows Zagout in a self-portrait, as a young, smiling
            Palestinian woman dressed in a black thobe with tatreez embroidery,
            and draped in a white scarf, standing in front of several colorful
            scenes from a village.
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col p-2 md:p-10 text-center">
          <div className="text-white text-normal mt-4">
            Trees and historic buildings occupy a painting of Jerusalem and the
            iconic Dome of the Rock.
          </div>
          <Image
            src="/seven-2.webp"
            alt=""
            className="my-1"
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SevenGallery;
