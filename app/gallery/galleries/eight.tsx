import React from "react";
import Image from "next/image";

const Eigth = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="w-full md:w-2/5">
          <Image
            src="/eight-main.webp"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <p className="text-white font-bold text-center text-3xl md:text-6xl text-title md:-ml-20">
            “ A very well-respected role model and was loved by everyone who
            knew her. She was often described as being big-hearted, gentle, and
            kind. ”
          </p>
          <div className="uppercase bg-black md:py-4 px-10 tracking-wide md:-ml-20 mt-4">
            nesma abu sha&apos;ira
          </div>
          <p className="text-white text-xl mt-2 text-title md:px-30">
            MNesma Abu Shaira, a 36-year-old Palestinian artist, wife, and
            mother of 2, was brutally killed in an Israeli air strike alongside
            her family members, including one of her daughters, Habiba, on
            October 26th, 2023. She was working on various artworks to “document
            Palestine” in her own way and was committed to making fun
            illustrations while ensuring that she never lost touch with her
            Palestinian roots
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eigth;
