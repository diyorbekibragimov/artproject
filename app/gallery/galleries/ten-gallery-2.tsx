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
                            Halima Al-Kahlot
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
                        <p>"Pending"</p>
                        The interplay between art and home life has always intrigued me. 
                        This artwork was inspired by the broom to present a path reflective of real life, as broom bristles are temporary tools for removing dust and quickly wear out, necessitating replacement. 
                        Similarly, a medical prescription serves as a temporary means to provide patients with hope, giving them the illusion of a solution to their illness. 
                        However, the real tragedy occurs when patients find that medical treatment is unavailable. 
                        This artwork aims to convey that medical prescriptions and actual treatment are parallel lines that never intersect. 
                        Will the "medical prescription" in the Gaza Strip remain as attached to the broom as its bristles? Will patients continue to cling to temporary hope, waiting for treatment that remains inaccessible due to the blockade? 
                        These questions may provoke reflection, but one thing is certain: the broom will always be there.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenGallery2;