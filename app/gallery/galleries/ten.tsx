import React from "react";
import Image from "next/image";

const Ten = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="w-full md:w-2/5">
          <Image
            src="/ten-main.webp"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <div className="uppercase bg-black md:py-4 px-10 tracking-wide md:-ml-20 mt-4">
            youssef DAWAS
          </div>
          <p className="text-white text-xl mt-2 font-title md:px-30">
            Yousef a 22-year-old Palestinian used to pursue his passion for
            writing and photography besides studying to a psychoanalyst. He was
            one of the founding members and contributing writers for We Are Not
            Numbers (WANN), a youth-led Palestinian nonprofit project, an
            initiative where “Palestinian youth tell their human stories behind
            the numbers in the news. The young Palestinian pursued his passion
            for writing in both Arabic and English. He was killed by an Israeli
            missile strike on his family&apos;s home in the northern town of Beit
            Lahia. Several other members of his family were also killed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ten;
