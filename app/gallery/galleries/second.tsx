import React from "react";
import Image from "next/image";

const Second = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="md:absolute hidden md:block -mt-10 top-0 right-0">
          <Image
            src="/second-1.jpg"
            alt=""
            width="350"
            height="150"
            objectFit="cover"
          />
        </div>
        <div className="w-full md:mt-8 md:w-2/5">
          <Image
            src="/second-main.jpg"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <div className="uppercase bg-black md:py-4 px-10 tracking-wide md:-ml-20">
            Omar Abu shawish
          </div>
          <p className="text-white text-xl mt-8 md:mt-24 text-title md:px-30">
            Palestinian poet and activist Omar Fares Abu Shawish tragically died
            on October 7 during the Gaza bombardment. Renowned for youth
            advocacy, he co-founded organizations and earned international
            recognition, including &quot;Best National Song of the Year
            2007&quot; and the &quot;Distinguished Arab Youth&quot; award in
            2013. His literary works, including &quot;Alā qayd al-mawt&quot;
            (2016), showcase his talent. His legacy lies in empowering youth and
            enriching Palestinian culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Second;
