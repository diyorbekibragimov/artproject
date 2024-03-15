import React from "react";
import Image from "next/image";

const EightGallery = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="w-full p-10 md:p-0 flex flex-col md:flex-row flex-wrap items-center justify-start">
        <div className="w-full md:w-1/5 md:block hidden">
          <div className="transform flex flex-row-reverse justify-center rotate-180 text-center">
            {/* Custom style for vertical writing mode */}
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-6xl fond-bold uppercase tracking-wider font-extra-condensed"
            >
              Nesma abu sha&apos;ra
            </div>
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-4xl capitalize tracking-widest font-semibold font-title"
            >
              Art Pieces
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 text-center flex flex-col items-start p-2 md:p-10">
          <Image
            src="/eight-1.webp"
            alt=""
            className="my-1"
            width="500"
            height="500"
            objectFit="cover"
          />
          <div className="text-white text-normal mt-4 text-center">
            Above is a painting Inspired by the Palestinian novel, &apos;Jaffa
            prepares the morning coffee&apos; by Anwar Hamed. The novel talks
            about life in the city of Jaffa before the Nakba occurred, and how
            Christians, Jews, and Muslims were all living together in harmony
            before the Israeli invasion.
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col p-2 md:p-10 text-center">
          <div className="text-white text-normal mt-4">
            Below is one of Nesma&apos;s artworks which she titled “The wheat
            lady”. She took inspiration from the women of Palestine.
          </div>
          <Image
            src="/eight-2.webp"
            alt=""
            className="my-1"
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default EightGallery;
