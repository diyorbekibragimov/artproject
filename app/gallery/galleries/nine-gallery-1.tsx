import React from "react";
import Image from "next/image";

const NinthGallery1 = () => {
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
              Ahmed Al Daalsa
            </div>
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-4xl capitalize tracking-widest font-semibold font-title"
            >
              Art Pieces
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 text-center flex flex-wrap gap-5 p-2 md:p-10">
          <Image
            className="flex-0.5"
            src="/ninth-1.jpg"
            alt=""
            width="300"
            height="300"
            loading="lazy"
            objectFit="cover"
          />
          <Image
            className="flex-0.5"
            src="/ninth-2.jpg"
            alt=""
            width="300"
            height="300"
            loading="lazy"
            objectFit="cover"
          />
          <Image
            className="flex-0.5"
            src="/ninth-3.jpg"
            alt=""
            width="300"
            height="300"
            loading="lazy"
            objectFit="cover"
          />
        </div>
        <div className="w-full md:w-1/5">
          <p>
          Ahmed Al Daalsa&lsquo;s recent artwork serves as a poignant reflection of the devastation surrounding him, capturing his relentless pursuit to envision a better life for himself and his family. 
          Through his art, he grapples with the emotional turmoil of displacement, using creativity as a powerful outlet for coping with these challenges. 
          Each piece he creates embodies his resilience and determination to preserve hope amidst adversity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NinthGallery1;