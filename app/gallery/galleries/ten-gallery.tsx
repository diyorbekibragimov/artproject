import React from "react";
import Image from "next/image";

const TenGallery = () => {
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
              youssef dawas
            </div>
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-4xl capitalize tracking-widest font-semibold font-title"
            >
              Art Pieces
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/5 text-center flex flex-col items-start p-2 md:p-10">
          <div className="text-white font-title text-normal mt-4 text-center">
            Yousef wrote a <a href="/dawas-writing" className="bold underline">writing</a> piece after the war on Gaza in 2021 where his
            family farmland was destroyed. He recounts the destruction of his
            family&apos;s orchard by an Israeli missile strike in May 2022. The
            orchard trees produced olives, oranges, clementines, loquat, guavas,
            lemons and pomegranates, and its loss as he described destroyed an
            important piece of his family&apos;s past, history, and heritage.
          <p className="mt-2">
            Access it <a href="/dawas-writing" className="bold underline">here</a>.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenGallery;
