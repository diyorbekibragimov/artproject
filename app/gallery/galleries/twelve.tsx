import React from "react";
import Image from "next/image";

const Twelve = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="w-full md:w-2/5">
          <Image
            src="/twelve-main.webp"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <div className="uppercase bg-black md:py-4 px-10 tracking-wide md:-ml-20">
            Saleem Al-Naffar
          </div>
          <p className="text-white text-xl mt-2 font-title md:px-30">
            Saleem Al-Naffar, born in a Gaza refugee camp in 1963, overcame
            early hardships through literature, discovering a passion for poetry
            in high school. Despite forced migration, he pursued Arabic
            literature studies and gained recognition for works reflecting
            Palestinian dignity and resilience. Returning to Gaza
            post-Palestinian Authority, he prolifically authored poetry, novels,
            and an autobiography. Al-Naffar&apos;s writings, centered on struggle and
            hope, earned acclaim for their refusal to embrace bitterness or
            violence. As an editor, he enriched the Arab cultural landscape,
            leaving a legacy of profound human insight amid conflict.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Twelve;
