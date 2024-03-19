import React from "react";
import Image from "next/image";

const TwelveGallery2 = () => {
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
        <div className="w-full md:w-2/5 text-center flex flex-col items-start p-2 md:p-10">
          <div className="text-white text-normal font-poppins mt-4 text-start bg-[#7d7d7d] bg-opacity-40 p-2 md:px-10 md:py-4">
            <p className="text-center bold text-lg">O My Lovers</p>
            <p>We will come one day, O lovers</p>
            <p>to our first things,</p>
            <p>no murder separating us</p>
            <p>nor time letting us forget.</p>
            <p>In such mysterioaus ages,</p>
            <p>right&apos;s clarity arises in us</p>
            <p>giving powers to our voices</p>
            <p>for dreams</p>
            <p>and days that make us brothers</p>
            <p>We will come one day, O lovers</p>
            <p>where passion is flame</p>
            <p>and oppression&apos;s fire bleeds us.</p>
            <p>Here many footpaths drove me:</p>
            <p>my child&apos;s eyes are narrating tales</p>
            <p>of stolen homes, diaspora</p>
            <p>and sorrows of our herdsmen</p>
            <p>His promise is enduring</p>
            <p>that we&apos;ll return</p>
            <p>even if our night is long</p>
            <p>Here are Haifa and Nazareth</p>
            <p>Here is Jaffa</p>
            <p>to break the heart with gentlest hands</p>
            <p>the river of the eye gives us</p>
            <p>bitterness and groans</p>
            <p>but days whisper to us</p>
            <p>yearning has shaken me</p>
            <p>for friends, games,</p>
            <p>where chambers of waiting shout aloud</p>
            <p>We&apos;ll come one day, O lovers</p>
            <p>Right will speak slowly</p>
            <p>so do not delay the dream</p>
            <p>nor hurry time</p>
            <p>Many corners of our home</p>
            <p>are wound with our history</p>
            <p>time did not exclude us</p>
            <p>their crazy evil machine</p>
            <p>did not smash our hopes</p>
            <p>the perfume of right sleeps in arteries</p>
            <p>buried inside us</p>
            <p>even if our footpaths lengthened</p>
            <p>and our tragedies went further than insane</p>
            <p>right will come, slowly</p>
            <p>slowly come to us.</p>
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col p-2 md:p-10 text-justify">
          <div className="text-white text-normal font-poppins mt-4">
            &quot;O My Lovers,&quot; Al Naffar calls for the acknowledgment of
            the truth behind the struggles of his people, including the loss of
            homes and the diaspora. With the dawn of freedom, he envisions a
            healing process for both the land and the people, marking a hopeful
            new beginning.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwelveGallery2;
