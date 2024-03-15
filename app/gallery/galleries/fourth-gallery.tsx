import React from "react";
import Image from "next/image";

const FourthGallery = () => {
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
              Mohammed AL-HAWAJRI
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
            src="/fourth-1.png"
            alt=""
            className="my-1"
            width="500"
            height="500"
            objectFit="cover"
          />
          <div className="text-white text-normal font-poppins mt-4 text-justify">
            The artist handcrafted slippers using a real-life cactus, amongst
            many other cactus-utilized creations in his project “Cactus Borders”
            (2010). His aim was to represent Palestinians&apos; harsh living
            conditions due to the oppressive and genocidal zionist regime. He
            states that “it&apos;s impossible for anyone to use these slippers
            to move from one place to another, because of the thorns”.
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col p-2 md:p-10 text-justify">
          <div className="text-white text-normal font-poppins mt-4">
            The artist created the below acrylic on canvas painting in September
            2023, a month before the violent escalation of Israel&apos;s act of
            genocide against Palestinians. In February 2024, the artist reposted
            this artwork on his Instagram after risking rescuing it under the
            rubble of his office and home after intense bombing. He states that
            after October, the painting feels like a premonition to the
            escalation of Israel&apos;s war crimes: “Unfortunately I did not
            know that this future was very close and that the fire burned us
            until nothing was left. The fire engulfs everything, human stone
            tree, everything is engulfed in the fire of the war”.
          </div>
          <Image
            src="/fourth-2.jpg"
            alt=""
            className="my-1"
            width="600"
            height="300"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FourthGallery;
