import React from "react";
import Image from "next/image";

const FifthGallery = () => {
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
              Motaz Azaiza
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
            src="/fifth-1.webp"
            alt=""
            className="my-1"
            width="500"
            height="500"
            objectFit="cover"
          />
          <div className="text-white text-normal font-poppins mt-4 text-justify">
            Motaz Azaiza captured these photos about a year ago in Dair Al Balah
            refugee camp. He posted them to Instagram with the caption: “You may
            notice that it&apos;s all about clouds ☁️, yes you&apos;re right but
            it&apos;s also about people with the clouds. As the main thing in my
            photography is people, I always try to merge them with another
            elements like nature for example.”
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col p-2 md:p-10 text-justify">
          <div className="text-white text-normal font-poppins mt-4">
            Motaz Azaiza has encountered a young girl stuck under the rubble of
            her home after an Israeli airstrike. It was difficult to see her and
            confirm whether or not she was alive, but with a low shutter speed
            on his camera, Azaiza was able to capture her. He said, “It&apos;s
            not possible to see it with your own eyes. So I put the camera, I
            flipped the screen, and was seeing her through my camera.” “It&apos;s
            painful to be in her place. It&apos;s painful to see her,” Aziza says.
            “She&apos;s so lucky she survived. What about people who, there was
            no hole for me to see them and they [were] still stuck under the
            rubble and they passed with no help.” Azaiza&apos;s piece was
            featured in the Time&apos;s top ten photos of 2023 although he
            wishes it was “a picture of the beauty of Gaza not a painful picture
            from Gaza.”
          </div>
          <Image
            src="/fifth-2.webp"
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

export default FifthGallery;
