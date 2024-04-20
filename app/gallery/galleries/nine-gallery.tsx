import React from "react";
import Image from "next/image";

const NineGallery = () => {
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
        <div className="w-full md:w-2/5 text-center flex flex-col items-start p-2 md:p-10">
          <Image
            src="/nine-1.jpeg"
            alt=""
            className="my-1"
            width="500"
            height="500"
            objectFit="cover"
          />
          <div className="text-white text-normal font-poppins mt-4 text-center">
            His painting showcases the mournful reality of the situation in
            Gaza. He wrote a sentence in Arabic beneath this painting, which
            means that he paints to feel humanized amidst the pain of war, as he
            believes painting enables him to feel the pain of others around him
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col p-2 md:p-10 text-center">
          <div className="text-white text-normal font-poppins mt-4">
            Basel&apos;s painting showcases one of the women displaced to one of
            the tents in a camp in Rafah. He describes the woman in Arabic as
            the pillar of the tent
          </div>
          <Image
            src="/nine-2.jpeg"
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

export default NineGallery;
