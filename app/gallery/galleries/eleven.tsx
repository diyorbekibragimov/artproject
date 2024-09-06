import React from "react";
import Image from "next/image";

const Eleven = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="w-full md:w-2/5">
          <Image
            src="/eleventh-main.jpg"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <div className="uppercase bg-black md:py-4 px-10 md:text-4xl md:-ml-20 mt-4">
          Sohail Salem
          </div>
          <p className="text-white text-xl mt-2 font-title md:px-30">
          Sohail Salem co-founded Eltiqa Group of Contemporary Arts. 
          He received a residency in Jordan - Amman &quot;September Summer Academy for Arts&quot; Darat Al Funun, Khalid Shoman Foundation, supervised by the artist Marwan Kassab Bashi in 2001 and 2003, a residency in Switzerland - Geneva &quot;Arts Place de l&lsquo;ile&quot; in 2005, and a residency in City International des Arts - France, Paris in 2010. 
          He participated in numerous local and international shows. 
          Sohail held four personal exhibitions and spent a year teaching Fine Arts at the University of Al-Aqsa University. He was a supervisor in the contemporary arts programme &quot;GCAP&quot; at Eltiqa Gallery in 2014. 
          Sohail currently resides in Gaza and works in graphic design and visual arts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eleven;
