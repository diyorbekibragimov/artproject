import React from "react";
import Image from "next/image";

const Fourth = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="w-full md:w-2/5">
          <Image
            src="/fourth-main.jpg"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <div className="uppercase bg-black md:py-4 px-10 tracking-wide md:-ml-20">
            mohammed al-hawajri
          </div>
          <p className="text-white mt-4 font-bold text-center text-3xl md:text-6xl text-title md:-ml-40">
            “An artist needs freedom, which is the lung from which he breathes
            and which is the main engine for his ideas.”
          </p>
          <p className="text-white text-xl mt-2 text-title md:px-30">
            Mohammed Al Hawajri (1976 -) is a Palestinian multimedia artist born
            and raised in Al-Bureij refugee camp in Gaza. He founded the
            Eltiqa&apos;Group for Contemporary Art in the Gaza Strip, which is a
            group that organizes art events, exhibitions and workshops in Gaza
            in hopes to spread awareness and interest in art. Keeping the art
            scene alive in Gaza is one of the artist&apos;s main goals since being a
            professional artist. In the current day, he states that art is very
            much alive. He believes that living in Gaza as an artist is an
            achievement due to the violent Israeli occupation: there is no
            freedom in Gaza, nor equipment or an environment for supporting art,
            all of which help foster artistic growth. He participated in
            exhibitions in several countries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
