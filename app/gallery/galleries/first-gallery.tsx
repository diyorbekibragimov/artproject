import React from "react";
import Image from "next/image";

const FirstGallery = () => {
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
              mohammed sami
            </div>
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-4xl capitalize tracking-widest font-semibold font-title"
            >
              Art Work
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 text-center flex flex-col p-2 md:p-10">
          <Image
            src="/first-1.jpg"
            alt=""
            className="my-1"
            width="500"
            height="500"
            objectFit="cover"
          />
          <div className="text-white text-normal font-poppins mt-4 font-poppins text-justify">
            Above is one of his submissions for “Violet exhibition” held by the
            TAMER organization on 30/04/2019.
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col font-poppins text-justify p-2 md:p-10">
          <div className="text-white text-normal font-poppins mt-4">
            On the day Mohammed painted this piece, there were Israeli air raids
            on Gaza City that flattened three buildings and resulted in the
            deaths of at least 42 people (Uras & Siddiqui, 2021). He used the
            hashtags #gaza_under_attack and #genocideingaza, emphasizing that
            each of us resists in their own way.
          </div>
          <Image
            src="/first-2.jpg"
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

export default FirstGallery;
