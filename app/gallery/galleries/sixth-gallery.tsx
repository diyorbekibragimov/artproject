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
              className="text-white bg-black text-6xl fond-bold uppercase tracking-wider font-extra-condensed"
            >
              Refaat alareer
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
          <div className="text-white text-normal font-poppins mt-4 text-justify">
            The poem “If I Must Die” was written by Alareer just weeks before
            his martyrdom. His poetic last will and testament had gained a lot
            of attention since and had touched the hearts of many.
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col p-2 md:p-10 text-justify">
          <div className="text-white text-normal font-poppins mt-4">
            “Drenched” was the last poem written by Alareer before his
            martyrdom. In “Drenched,” Alareer leans on the mythopoetics of the
            Hebrew Bible, specifically on Psalm 137 (“By the rivers of Babylon
            …”), to conjure up a climate of internal displacement. In this inapt
            analogy, the Gazans become the Jews of Babylonian captivity, and
            today&apos;s Israelis the new Edomites. By implication, Alareer hopes
            that the poetry he composes is seen as running counter to the stark
            refusal of ancient Israelites to perform before their captors in
            Psalm 137.
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

export default SixthGallery;
