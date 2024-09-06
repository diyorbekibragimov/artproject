import React from "react";
import Image from "next/image";

const Third = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="flex-col relative md:flex-row flex w-full items-center">
        <div className="w-full md:w-2/5">
          <Image
            src="/third-main.jpg"
            alt=""
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full p-10 md:p-0 md:w-3/5">
          <div className="">
            <div className="uppercase bg-black md:py-4 px-10 md:-ml-20">
              Refaat Alareer
            </div>
            <p className="text-white mt-4 font-bold text-2xl md:text-5xl font-title" style={{lineHeight: 1.5}}>
              “Sometimes a homeland becomes a tale. We love the story because it
              is about our homeland and we love our homeland even more because
              of the story.”
            </p>
            <p className="text-white text-xl mt-2 font-title md:px-30">
              Refaat Alareer was a Palestinian writer, poet, professor, and
              activist from the Gaza Strip. Alareer earned a BA in English in
              2001 from the Islamic University of Gaza and an MA from University
              College London in 2007. He earned a PhD in English Literature at
              the Universiti Putra Malaysia in 2017 with a dissertation on John
              Donne. He taught literature and creative writing at the Islamic
              University of Gaza and co-founded the organization We Are Not
              Numbers, which matched experienced authors with young writers in
              Gaza, and promoted the power of storytelling as a means of
              Palestinian resistance. (Wikipedia) One of his students, Lina
              Alsharif, emphasized that “His support to his students, especially
              me, was continuous. He believed in my lousy poems, he even taught
              one [of] them. He believed in all of his students.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
