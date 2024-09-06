import React from "react";
import Image from "next/image";

const Sixth = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="w-full md:w-2/5">
          <Image
            src="/sixth-main.webp"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <div className="uppercase bg-black md:py-4 px-10 md:text-4xl md:-ml-20 mt-4">
            basel elmaqosui
          </div>
          <p className="text-white text-xl mt-2 font-title md:px-30">
            Basel is a 53-year-old a visual artist and a freelance photographer
            from Gaza, Palestine. He has held art residencies in India, Algeria
            through a scholarship from UNESCO and the Carnac Foundation, United
            States, and Norway.Before the war, Mr. Basel used to teach art at
            the Jabalya Rehabilitation Center for deaf and dumb children. After
            the war on Gaza, he was obliged to evacuate the north of Gaza and
            head to Rafah. Regardless of the hard times during the war, he still
            tutors children in the camps and continues to paint to show his
            emotions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sixth;
