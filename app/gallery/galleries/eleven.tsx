import React from "react";
import Image from "next/image";

const Eleven = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="w-full md:w-2/5">
          <Image
            src="/eleven-main.webp"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <div className="uppercase bg-black md:py-4 px-10 tracking-wide md:-ml-20 mt-4">
            Roshdi Sarraj
          </div>
          <p className="text-white mt-4 font-bold text-center text-3xl md:text-6xl font-title md:-ml-40">
            “We will not leave... And if we left Gaza, it&apos;s to heaven.. And
            heaven only”
          </p>
          <p className="text-white text-xl mt-2 font-title md:px-30">
            Roshdi Sarraj, a Palestinian journalist and filmmaker from Gaza, was
            renowned for his dedication to portraying the beauty and resilience
            of his homeland amidst adversity. Despite the blockade, he
            passionately documented Gaza&apos;s landscapes and daily life with
            digital cameras. In 2012, he co-founded Ain Media with his close
            friend Yaser Murtaja, aiming to capture Gaza&apos;s essence. Their
            documentaries, such as one depicting the rescue of a young girl
            named Bisan, illuminated the human stories behind the headlines,
            showcasing Sarraj&apos;s commitment to portraying Gaza&apos;s reality beyond
            conflict narratives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eleven;
