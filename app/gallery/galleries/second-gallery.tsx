import React from "react";
import Image from "next/image";

const SecondGallery1 = () => {
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
              OMAR ABU SHAWISH
            </div>
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-4xl capitalize tracking-widest font-semibold font-title"
            >
              Work
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 text-center flex flex-col p-2 md:p-10">
          <Image
            src="/second-g-1.jpg"
            alt=""
            className="my-1"
            width="500"
            height="500"
            objectFit="cover"
          />
        </div>
        <div className="w-full md:w-2/5 text-center flex flex-col p-2 md:p-2">
          <div className="text-white text-normal font-poppins mt-4 uppercase font-title">
            <p className="font-bold mb-1">Abstract: </p>
            <p>
              Between the sieges of love and death, Gaza stands, surrounded by
              tanks and barbed wires, its resilient roots uprooted, women baking
              fire for the little ones, waiting for dawn in moistened tents.The
              scent of despair hangs heavy as weary souls navigate absurd
              spaces, faces blurred with grim expressions, fearing the
              sniper&apos;s bullet controlling their fate.An ambulance worker
              waits for dark moments, while a cart owner offers weary bodies a
              ride, under the watchful eye of a monstrous bird.The city, once a
              symbol of heritage and culture, now bears witness to repeated
              deaths and renewed resilience in the face of barriers and
              fatigue.In this wounded city, sweet moments are tinged with pain,
              reminding us of past mistakes.Confronting personal and collective
              history reveals the small details shaping our lives, while the
              city itself becomes a metaphor for the ebb and flow of time,
              connecting souls in confinement.In the Monday market, a tableau of
              diverse generations meets, with children clutching wishes and
              mothers asking bitter questions about the price of fruits, amidst
              laughter and helplessness.
            </p>
            <p className="mt-3">References:</p>
            <p>
              جرير, & شاويش. (2016, January 1). على-قيد-الموت.
              <a href="https://jarirreader.com/book/7338/على-قيد-الموت">
                link
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondGallery1;
