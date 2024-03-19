import React from "react";

const ElevenGallery = () => {
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
              roshdi sarraj
            </div>
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-4xl capitalize tracking-widest font-semibold font-title"
            >
              Work
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/5 text-center flex flex-col items-start justify-center p-2 md:p-10">
          <div className="text-white text-normal font-poppins mt-4 text-center">
            <p className="bold mb-1">About his work:</p>
            In 2021, he collaborated with Ain Media on a project commissioned by
            Just World Ed, focusing on food sovereignty challenges in Palestine
            and beyond, titled &quot;Beyond Survival.&quot; Among the three
            5-minute short films produced was one featuring Intisar, a
            52-year-old woman farmer from Jabaliyya. In this captivating film,
            Sarraj showcased Intisar&apos;s daily life as she tended to her
            farmland, using a mule cart to transport goods and working amidst
            her crops and animals. Through intimate conversations with Intisar,
            the film not only depicted her personal story but also shed light on
            the broader challenges faced by Palestinian farmers in Gaza.
          </div>
          <div className="w-full h-auto">
            <iframe
              className="w-full h-48 md:h-[26rem] mt-4"
              src="https://www.youtube.com/embed/-lhILfrlNOk"
              title="Beyond Survival"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevenGallery;
