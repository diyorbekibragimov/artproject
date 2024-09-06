import React from "react";
import Image from "next/image";

const EigthGallery2 = () => {
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
                            Maisara Baroud
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
                    <div className="text-white font-title text-normal mt-4">
                        Maisara Baroud, a Palestinian artist, uses his art to address themes of war, immigration, political prisoners, and violence, exploring grief, sadness, and hope. 
                        Despite facing immense challenges, including the destruction of his studio and frequent relocations for safety, he continues to document the fear and devastation around him. 
                        Baroud participates in exhibitions globally, recently creating a piece for an exhibit in the Netherlands, inspired by his series of daily drawings titled "I Am Still Alive."
                        <br /><br />
                        His art is characterized by a stark black-and-white dichotomy, emphasizing human suffering and humanitarian issues. 
                        In an interview, he reflects on the impact of war on his life and art, describing how tragedy shapes his work. 
                        Drawing has become his refuge and a means to confront the occupation, allowing him to express resilience despite the dire circumstances in Gaza, where he lives with 25 others in a small house. 
                        Baroud views his drawings as a call to the world to recognize the ongoing struggles in Gaza and as a personal way to cope with the challenges of his reality.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EigthGallery2;
