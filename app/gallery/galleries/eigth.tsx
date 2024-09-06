import React from "react";
import Image from "next/image";

const Eigth = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex flex-col w-full items-center space-y-4">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full">
            <Image
              src="/eigth-main.png"
              alt=""
              width="800"
              height="800"
              objectFit="cover"
            />
          </div>
          <div className="w-full p-10 md:p-0">
            <div className="uppercase bg-black md:py-4 px-10 md:text-2xl md:-ml-20 mt-4">
              Maisara Baroud
            </div>
          </div>
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <p className="text-white mt-2 font-title md:px-30">
            Maisara Fathi Baroud is a distinguished visual artist and a professor in college of fine arts - AQSA university,
            with a profound expertise in interior design and graphic arts.
            Born with a passion for creative expression, Maisara has dedicated over two decades to refining his craft and delivering exceptional design solutions characterized by precision and artistic flair.
            Maisara Fathi Baroud, an artist from Gaza, has faced displacement 11 times, enduring the relentless bombings while continuing to create art daily.
            Each stroke of his brush is a testament to his resilience, a message to his friends that he is still alive despite the destruction of his home, studio, and the university where he once lectured.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eigth;