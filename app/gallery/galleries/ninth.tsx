import React from "react";
import Image from "next/image";

const Ninth = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex flex-col w-full items-center space-y-4">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full">
            <Image
              src="/ninth-main.jpeg"
              alt=""
              width="800"
              height="800"
              objectFit="cover"
            />
          </div>
          <div className="w-full p-10 md:p-0">
            <div className="uppercase bg-black md:py-4 px-10 md:text-2xl md:-ml-20 mt-4">
              Ahmed Al Daalsa
            </div>
          </div>
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <p className="text-white mt-2 font-title md:px-30">
            Ahmed Al Daalsa, hailing from Gaza, Palestine, is a visual artist, cartoonist, and photographer aspiring to nurture his talents. 
            Prior to the onset of the recent conflict, he played a vibrant role in the local art community. 
            Ahmed has showcased his work in numerous exhibitions and actively engaged in workshops, including collaborating with children in schools to foster creativity and entertainment. 
            Amidst these endeavors, he undertook small projects to aid his family during challenging times. 
            Regrettably, despite their best efforts, the situation demands external support to navigate through these hardships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ninth;