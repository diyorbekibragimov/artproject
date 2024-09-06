import React from "react";
import Image from "next/image";

const SixthGallery2 = () => {
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
                            Ahmed Al Daalsa
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
                        <p>Shrapnel - Splinters</p>
                        Shrapnel all the way, splinters all the time, not only those shrapnel cutting people in pieces, not only those splinters cutting buildings in half. 
                        People themselves are splintering, life it self is splintering, nothing complete, nothing perfect, everything splintered. 
                        The human beings, the buildings, the streets, the trees, the tents, the human right.
                        Life itself became shrapnel, splinters and pieces. Who is going to collect back to one standing piece a child lost his parents, a man lost his beloved wife, a mother lost her baby, or a worker whose source of livelihood was lost, or a patient who lost his hospital, or a factory owner whose factory was destroyed, or the owner of a house he built with years of sweat saw his house in ruins. 
                        <br /><br />
                        All of my life as a Palestinian, as an artist did my best to draw complete images. 
                        Today, within this genocide I am trying to bring back pieces, shrapnel and splinters to become a one complete image, would I succeed?
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SixthGallery2;
