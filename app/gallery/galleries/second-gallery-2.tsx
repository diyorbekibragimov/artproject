import React from "react";
import Image from "next/image";

const SecondGallery2 = () => {
  return (
    <div className="py-5 md:py-20 min-h-full h-full">
      <div className="w-full p-10 md:p-0 flex flex-col md:flex-row flex-wrap items-center justify-between">
        <div className="w-full md:w-2/5 md:block hidden">
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
              className="text-white bg-black text-4xl mr-6 capitalize tracking-widest font-semibold font-title"
            >
              Work
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 text-center flex flex-col p-2 md:p-2">
          <div className="text-white text-normal mt-4 capitalize md:uppercase font-title">
            <p className="font-bold mb-1">Letters Under the Rubble</p>
            <div className="text-start">
              <p>By the poet Omar Faris Abu Shawish</p>
              <p>13/12/2009</p>
            </div>
            <p>Oh, my sigh, my tears have become the night&apos;s prisoner</p>
            <p>In clouds that no longer respond to those who come</p>
            <p>Has the abode of villains invaded the sanctuary?</p>
            <p>Or have the homelands wept?</p>
            <p>How much you make us weep</p>
            <p>My call fled as a lover from the purity of my land</p>
            <p>Oh horses!</p>
            <p>Have you dishonored yourselves?</p>
            <p>Or did you not hear us?</p>
            <p>Death condensed my call in the tenderness of a line</p>
            <p>And my pen screamed from its silence, where is the world?</p>
            <p>Have they started devouring flesh alive</p>
            <p>Watching my children being killed, torn apart</p>
            <p>Or have they been frightened by treacherous planes</p>
            <p>By Allah, the enemies have departed defeated</p>
            <p>In their graves, the blood of sacrifice cried out</p>
            <p>The dawn of victory shone, our banners sang</p>
            <p>In Gaza, there is no dawn, no cities for them</p>
            <p>Not even the tents of humiliation shelter us</p>
            <p>My tears fall, wiping the cheeks of the people</p>
            <p>There is no longer a nation or leaders on the earth</p>
            <p>Only they, who crafted loyalty, have a homeland</p>
            <p>Palestine, their mother, guides and honors us</p>
            <p>Write about our children, saddle our horses</p>
            <p>And write about my pride, you shall remain undefeated</p>
            <p>Is it enough for you, my tears, to write poetry?</p>
            <p>Have you borne fruit, or are you still screaming?</p>
            <p>The free did not hear the echoes of your silence</p>
            <p>Humiliation has engulfed them, so calm down</p>
            <p>And woe to the Arabs if they extend their hands</p>
            <p>No wealth will quench the earth for us to remain safe</p>
            <p>Come then, my tears, return to my ink for</p>
            <p>I shall not sleep</p>
            <p>As long as you,</p>
            <p>Gaza of the rebels, call out to us.</p>
            <p className="mt-3">References:</p>
            <p>
              حروف تحت الركام ..الشاعر عمر فارس أبو شاويش - شبكة فلسطين للحوار.
              (n.d.). شبكة فلسطين للحوار.
              <a
                className="underline"
                href="https://paldf.net/f/node/413715#post11405009"
              >
                link
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondGallery2;
