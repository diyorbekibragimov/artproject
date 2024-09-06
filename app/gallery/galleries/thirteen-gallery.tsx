import React from "react";
import Image from "next/image";

const FirstGallery = () => {
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
                            Dena Matter
                        </div>
                        <div
                            style={{ writingMode: "vertical-lr" }}
                            className="text-white bg-black text-4xl capitalize tracking-widest font-semibold font-title"
                        >
                            Art work
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/5 text-center flex flex-col p-2 md:p-10">
                    <Image
                        src="/thirteen-1.jpg"
                        alt=""
                        className="my-1"
                        width="500"
                        height="500"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full md:w-2/5 flex flex-col p-2 md:p-2">
                    <div className="text-white text-normal font-poppins mt-4 font-title">
                        <p>
                        The painting speaks of resistance having two faces: one can resist through knowledge and work by creating a new, educated generation, rather than through wars and bloodshed. This is achieved by incorporating Palestinian symbols and elements that represent love and life, such as flowers and children.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstGallery;
