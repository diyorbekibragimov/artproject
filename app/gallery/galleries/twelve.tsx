import React from "react";
import Image from "next/image";

const Twelve = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="w-full md:w-2/5">
          <Image
            src="/twelve-main.jpg"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <div className="uppercase bg-black md:py-4 px-10 md:text-4xl md:-ml-20 mt-4">
          Dorgham Qreaiqea
          </div>
          <p className="text-white text-xl mt-2 font-title md:px-30">
          Dorgham Qreaiqea is a Palestinian artist residing in Gaza, born in 1997. He is a student of interior design and decor and works in the field of visual arts, specializing in expressionist style. Previously, he worked as an assistant logistics and procurement coordinator at the Tamer Institute for Community Education. He has completed several local and international training courses and workshops in visual arts. He has participated in numerous local and international exhibitions. He lived in the Old City of Gaza, specifically in the eastern part of Shuja&lsquo;iya neighborhood, overlooking the occupied borders, which have witnessed multiple wars and escalations since his birth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Twelve;