import React from "react";
import Image from "next/image";

const TenGallery2 = () => {
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
              Sohail Salem
            </div>
            <div
              style={{ writingMode: "vertical-lr" }}
              className="text-white bg-black text-4xl capitalize tracking-widest font-semibold font-title"
            >
              Art Pieces
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/5 flex flex-col items-start p-2 md:p-10">
          <div className="text-white font-title text-normal mt-4 text-center">
            Sohail is enchanted by the delicate and layered touches of color, a sight that feels expressive of himself and his surroundings. He describes his work as &quot;expression across line and color,&quot; with most of his pieces belonging to the expressionist side of art.
            <br /><br />
            His subjects are simple and familiar, drawn from human beings and still life. Through intentional modification and distortion, Sohail conveys internal stress and personal experiences, attempting to visualize the totality of feelings and the inner movement of anxiety he feels.
            <br /><br />
            His work serves as a psychological expression of his perspective on life and society. Sohail has produced several installation art projects, the most recent being &quot;A Boat from Gaza,&quot; in which he used recycled materials, including empty plastic bottles. In addition to this, he has experience in sculpture, photography, graphic design, and puppetry.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenGallery2;