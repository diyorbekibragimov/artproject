import React from "react";
import Image from "next/image";

const FifthGallery = () => {
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
              Nesma abu sha&apos;ra
            </div>
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-4xl capitalize tracking-widest font-semibold font-title"
            >
              Art Pieces
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 text-center flex flex-col p-2 md:p-10">
          <Image
            src="/fifth-1.png"
            alt=""
            className="my-1"
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full md:w-2/5 flex flex-col p-2 md:p-2">
          <div className="text-white text-normal font-poppins mt-4 font-title">
            <p>
            The artwork is part of her most recent project, in which she was creating illustrations for children's books. 
            She shared her excitement about this project on her Instagram page, @nesma_abu_shaira
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthGallery;
