import React from "react";

const TwelveGallery1 = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="w-full p-10 md:p-0 flex flex-col md:flex-row flex-wrap items-center justify-start">
        <div className="w-full md:w-1/5 md:block hidden">
          <div className="transform flex flex-row-reverse justify-center rotate-180 text-center">
            {/* Custom style for vertical writing mode */}
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-6xl font-bold uppercase tracking-wider font-extra-condensed"
            >
              Saleem al Naffar
            </div>
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-4xl capitalize tracking-widest font-semibold font-title"
            >
              Work
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 text-center flex flex-col items-center p-2 md:p-10">
          <div className="text-white text-normal font-poppins mt-4 text-justify">
            &quot;Departure&quot; portrays the poet&apos;s yearning for an end
            to the senseless persecution faced by his people. Despite the
            looming siege in the present, he holds onto a vision of a future
            where such brutality is consigned to history, allowing for a new
            chapter of peace and dignity.
          </div>
          <div className="text-white text-normal font-poppins mt-4 text-start bg-[#7d7d7d] bg-opacity-40 p-2 md:px-10 md:py-4">
            <p className="text-center bold text-lg">Departure</p>
            <p>Earth is yawning,</p>
            <p>spreading her wings,</p>
            <p>soldiers are babbling,</p>
            <p>siege coming closer.</p>
            <p>Mirrors will go extinct:</p>
            <p>soldiers will depart</p>
            <p>without one word.</p>
          </div>
        </div>
        <div className="w-full md:w-2/5 text-center flex flex-col items-center p-2 md:p-10">
          <div className="text-white text-normal w-auto font-poppins mt-4 text-start bg-[#7d7d7d] bg-opacity-40 p-2 md:px-10 md:py-4">
            <p className="text-center bold text-lg">Life</p>
            <p>Knives might eat</p>
            <p>what remains of my ribs,</p>
            <p>machines might smash</p>
            <p>what remains of stones,</p>
            <p>but life is coming,</p>
            <p>for that is its way,</p>
            <p>creating life even for us.</p>
          </div>
          <div className="text-white text-normal font-poppins mt-4 text-justify">
            In &quot;Life,&quot; Al Naffar captures the enduring spirit of
            Palestinians amidst ongoing violence. He sees the suffering endured
            as a testament to their steadfastness, with each cycle of brutality
            serving as a reminder of the resilience that defines their struggle
            for freedom.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwelveGallery1;
