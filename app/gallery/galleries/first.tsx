import React from "react";
import Image from "next/image";

const First = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
      <div className="md:absolute hidden md:block -mt-10 top-0 right-0">
          <Image
            src="/first-two.jpg"
            alt=""
            width="250"
            height="150"
            objectFit="cover"
          />
        </div>
        <div className="w-full md:w-2/5">
          <Image
            src="/first-main.jpg"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">

          <div className="uppercase bg-black md:py-4 px-10 tracking-wide md:-ml-20">mohammed sami</div>
          <p className="text-white mt-4 font-bold text-center text-3xl md:text-6xl text-title md:-ml-48">
            “He loved life, he loved Gaza and he loved his story.”
          </p>
          <p className="text-white text-xl mt-2 text-title md:px-30">
            Mohammed Sami Qreqe was a 24-year-old Palestinian artist whose life
            was tragically cut short in the midst of genocide. Born and raised
            in Gaza, Mohammed sought solace and purpose amidst the chaos that
            surrounded him. Aspiring to capture the beauty of life despite
            adversity, he dedicated himself to his craft and to uplifting the
            spirits of those around him.
          </p>
        </div>
      </div>
    </div>
  );
};

export default First;
