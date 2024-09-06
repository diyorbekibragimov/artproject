import React from "react";
import Image from "next/image";

const Second = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="w-full md:w-2/5">
          <Image
            src="/second-main.jpeg"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <div className="uppercase bg-black md:py-4 px-10 tracking-wide md:-ml-20">
            HIBA ABU NADA
          </div>
          <p className="text-white mt-4 font-bold text-3xl md:text-5xl font-title md:-ml-48" style={{lineHeight: 1.5}}>
          ”When the people feel silenced the writer has a voice. When that voice is silent who will speak for the people?”
          </p>
          <p className="text-white text-xl mt-2 font-title md:px-30">
          Hiba Kamal Abu Nada (1991-2023) was a renowned Palestinian poet, writer, and nutritionist. 
          At 32, she was murdered by an Israeli airstrike in October 2023. 
          She was born in Saudi Arabia in 1991 as her family was violently displaced from their homes in Beit Jirja (a village Northeast of Gaza) in the first Nakba in 1948. 
          Among her literary works is a 2017 novel titled "الأكسجين ليس للموتى" (“Oxygen is not for the dead”) which won second place in the Sharjah Award for Arab Creativity in 2017. She also won first place in a short story contest. 
          Hiba's other works are poems, one of which was written in October, titled “I Grant You Refuge”. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Second;