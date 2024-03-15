import React from "react";
import Image from "next/image";

const ThirdGallery1 = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="w-full p-2 md:p-0 flex flex-col md:flex-row flex-wrap items-center justify-start">
        <div className="w-full md:w-1/5 md:block hidden">
          <div className="transform flex flex-row-reverse justify-center rotate-180 text-center">
            {/* Custom style for vertical writing mode */}
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-6xl fond-bold uppercase tracking-wider font-extra-condensed"
            >
              HIBA ABU NADA
            </div>
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-4xl capitalize tracking-widest font-semibold font-title"
            >
              Poetry
            </div>
          </div>
        </div>
        <div className="w-4/5 flex flex-col">
          <div className="flex flex-col bg-[#7d7d7d] bg-opacity-40 p-2 md:px-10 md:py-4">
            <div className="text-start text-normal font-poppins">
              <p className="font-bold text-lg">Our Loneliness</p>
              <p>Hiba Abu Nada</p>
              <p>(trans. Salma Harland)</p>
            </div>
            <div className="text-center md:text-start mt-2 flex flex-row flex-wrap items-start justify-between">
              <div className="md:w-1/3 w-full">
                <p>How alone it was,</p>
                <p>our loneliness,</p>
                <p>when they won their wars. </p>
                <p className="mt-2">Only you were left behind,</p>
                <p>naked,</p>
                <p>before this loneliness.</p>
                <p>Darwish,</p>
                <p>no poetry could ever bring it back:</p>
                <p>what the lonely one has lost.</p>
              </div>
              <div className="md:w-1/3 w-full">
                <p>It&apos;s another age of ignorance,</p>
                <p> our loneliness. </p>
                <p>Damned be that which divided us </p>
                <p>then stands united at your funeral.</p>{" "}
                <p className="mt-2">
                  Now your land is auctioned and the world&apos;s
                </p>
                <p>a free market.</p>
              </div>
              <div className="md:w-1/3 w-full">
                <p>It&apos;s a barbaric era, </p>
                <p>our loneliness,</p>
                <p>one when none will stand up for us.</p>

                <p className="mt-2">So, my country, wipe away your poems,</p>
                <p>the old and the new,</p>
                <p>and your tears,</p>
                <p>and pull yourself together.</p>
              </div>
            </div>
          </div>
          <div className="mt-2">
            The writer, Hiba Abu Nada, recited this poem in an interview in
            April 2023 (available on youtube). Hiba states that this poem is
            about the loneliness of a Palestinian as they are battling and
            facing a violent settler colony all alone. There is repetition of
            the word “our loneliness”. The loneliness is born of the grief of
            loss, loss of life that even poetry cannot bring back: “no poetry
            could ever bring it back: what the lonely one has lost”. The
            loneliness is also born of, as she has stated in the interview, the
            loneliness of being alone in fighting your own annihilation against
            the genocidal enemy, Israel: “our loneliness, one where none will
            stand up for us”. In the interview, she states that a writer is one
            who writes to voice the ideas and thoughts of the people. She
            believes that writers are the voice of a society. The interviewer
            states that because of writers voicing out what the general public
            thinks, there is a consensus in ideas and so people do not feel so
            alone in their thoughts anymore. She agreed to that thought, which
            was perhaps also her aim in this poem: to acknowledge the loneliness
            that an entire people share, so that they could feel less alone in
            that feeling.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdGallery1;
