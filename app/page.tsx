import { FC } from "react";
import TopNav from "./components/TopNav";

const HomePage: FC = () => {
  return (
    <div className="h-min-full h-full min-h-dvh bg-black">
      <header className="w-full relative flex flex-col justify-between py-5 text-center text-white">
        <div className="absolute inset-0 bg-hero bg-cover blur-sm"></div>

        <div className="start w-full z-10 flex flex-row justify-between md:px-20 px-10">
          <div className="md:w-3/5 w-full text-start">
            <h1 className="text-3xl font-title font-extrabold uppercase tracking-wide">
              Arts & Crafts club
            </h1>
          </div>
          <TopNav />
        </div>
        <div className="w-full z-10 mt-16 mb-24 px-10 tracking-tight">
          <h1 className="text-4xl md:text-[110px]/[100px] text-start font-extrabold font-extra-condensed uppercase">
            Beneath the rubble, dreams persist:
            <span className="block">A tribute to resilient artists</span>
          </h1>
        </div>
      </header>

      <div className="h-auto bg-black hidden md:block">
        <div className="flex flex-col">
          <div className="flex flex-row border-white border-b-2 font-extra-condensed text-white px-10">
            <div className="w-[40%]  text-2xl font-normal tracking-wide border-r-2 uppercase pt-10 pb-2">
              Submit
            </div>
            <div className="w-[60%]  text-2xl font-normal tracking-wide uppercase px-10 pt-10 pb-2">
              About Gallery
            </div>
          </div>
          <div className="flex mt-auto flex-row border-white font-extra-condensed text-white px-10">
            <div className="w-[40%] font-normal font-body tracking-wide border-r-2 pr-10">
              <p className="mt-4 text-sm">
                Your participation matters! Contribute to our online gallery
                dedicated to Gaza&apos;s martyred artists. Click here to submit
                an artist from Gaza and help preserve their creative legacy.
                Let&apos;s honor their lives and dreams together.
              </p>
            </div>
            <div className="w-[60%] font-normal font-body tracking-wide px-10 pb-2">
              <p className="mt-4 text-sm">
                This gallery honors Gaza&apos;s martyred artists, fulfilling
                their dream of having a space to showcase their creativity
                despite the ongoing genocide. Each piece is a tribute to their
                lives, echoing their dreams and resilience. It stands as a
                beacon of hope and a call for justice in the face of adversity.
              </p>
            </div>
          </div>
          <div className="flex flex-row border-white font-extra-condensed text-white px-10">
            <div className="w-[40%] pb-24 font-normal font-body tracking-wide border-r-2 pr-10">
              <p className="mt-5 text-2xl cursor-pointer font-extra-condensed hover:underline">
                <a className="">click here to submit to the online gallery</a>
              </p>
            </div>
            <div className="w-[60%] pb-24 font-normal font-body tracking-wide px-10">
              <p className="mt-5 text-2xl cursor-pointer font-extra-condensed hover:underline">
                <a className="">click here to see the online gallery</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="block text-normal md:hidden w-full">
        <div className="w-full flex flex-col text-center p-4 pb-10">
          <div className="font-normal font-body tracking-wide border-x-2 px-10">
            <p className="mt-4">
              Your participation matters! Contribute to our online gallery
              dedicated to Gaza&apos;s martyred artists. Click here to submit an
              artist from Gaza and help preserve their creative legacy.
              Let&apos;s honor their lives and dreams together.
            </p>
            <p className="mt-5 cursor-pointer font-extra-condensed underline">
              <a className="">click here to submit to the online gallery</a>
            </p>
          </div>
          <div className="font-normal font-body tracking-wide border-x-2 px-10 pb-4">
            <p className="mt-4">
              This gallery honors Gaza&apos;s martyred artists, fulfilling their
              dream of having a space to showcase their creativity despite the
              ongoing genocide. Each piece is a tribute to their lives, echoing
              their dreams and resilience. It stands as a beacon of hope and a
              call for justice in the face of adversity.
            </p>
            <p className="mt-5 cursor-pointer font-extra-condensed underline">
              <a className="">click here to see the online gallery</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
