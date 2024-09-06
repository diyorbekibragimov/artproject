import React from "react";
import Image from "next/image";

const Twelve = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="w-full md:w-2/5">
          <Image
            src="/thirteen-main.jpg"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <div className="uppercase bg-black md:py-4 px-10 md:text-4xl md:-ml-20 mt-4">
          Dena Matter
          </div>
          <p className="text-white text-xl mt-2 font-title md:px-30">
          Dena Mattar, who was born in Gaza in 1985, graduated in 2007 with a bachelor&lsquo;s degree in art education from Al Aqsa University in Gaza. Mattar worked on multiple projects with European artists and took part in local workshops and exhibitions in Gaza in association with the French Cultural Centre and the A.M. Qattan Foundation. Additionally, her art was on show in Geneva and France at international exhibitions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Twelve;