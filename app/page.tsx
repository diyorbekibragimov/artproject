import { FC } from "react";
import TopNav from "./components/TopNav";

const HomePage: FC = () => {
  return (
    <div className="h-min-full h-full min-h-dvh bg-black flex flex-col">
      <header className="w-full relative flex flex-col justify-between text-center text-white">
        <div className="absolute inset-0 bg-hero bg-cover blur-sm"></div>

        <TopNav />
        <div className="w-full z-10 mt-24 mb-24 px-10 tracking-tight">
          <h1 className="text-4xl md:text-[110px]/[100px] text-start font-extrabold font-extra-condensed uppercase">
            Beneath the rubble, dreams persist:
            <span className="block">A tribute to resilient artists</span>
          </h1>
        </div>
      </header>

      {/* MOBILE VERSION */}
      <div className="block text-normal text-white md:hidden w-full">
        <div className="w-full flex flex-col text-center p-4 pb-10">
          <div className="font-normal font-body tracking-wide border-x-2 px-10">
            <p className="mt-4">
              Your participation matters! Contribute to our online gallery
              dedicated to Gaza&apos;s martyred artists. Click below to submit an
              artist from Gaza and help preserve their creative legacy.
              Let&apos;s honor their lives and dreams together.
            </p>
            <p className="mt-5 text-lg cursor-pointer font-extra-condensed underline">
              <a href="/submit" className="">click here to submit to the online gallery</a>
            </p>
          </div>
          <div className="font-normal  font-body tracking-wide border-x-2 px-10 pb-4">
            <p className="mt-4">
              This gallery honors Gaza&apos;s martyred artists, fulfilling their
              dream of having a space to showcase their creativity despite the
              ongoing genocide. Each piece is a tribute to their lives, echoing
              their dreams and resilience. It stands as a beacon of hope and a
              call for justice in the face of adversity. This gallery honors
              Gaza&apos;s martyred artists, fulfilling their dream of having a
              space to showcase their creativity despite the ongoing genocide.
              Each piece is a tribute to their lives, echoing their dreams and
              resilience. It stands as a beacon of hope and a call for justice
              in the face of adversity.
            </p>
            <p className="mt-5 text-lg cursor-pointer font-extra-condensed underline">
              <a className="underline" href="/gallery">
                click here to see the online gallery
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black hidden min-h-1/2 h-1/2 md:flex flex-col flex-grow">
        <div className="flex flex-col flex-grow">
          <div className="flex flex-row border-white border-b-2 font-extra-condensed text-white px-10">
            <div className="w-[40%]  text-2xl font-normal tracking-wide border-r-2 uppercase pt-10 pb-2">
              Submit
            </div>
            <div className="w-[60%]  text-2xl font-normal tracking-wide uppercase px-10 pt-10 pb-2">
              About Gallery
            </div>
          </div>
          <div className="flex flex-row border-white font-extra-condensed text-white px-10">
            <div className="w-[40%] font-normal font-body tracking-wide border-r-2 pr-10">
              <p className="mt-4 text-sm">
                Your participation matters! Contribute to our online gallery
                dedicated to Gaza&apos;s martyred artists. Click below to submit
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
          <div className="flex flex-row flex-grow border-white font-extra-condensed text-white px-10">
            <div className="w-[40%] pb-auto font-normal font-body tracking-wide border-r-2 pr-10">
              <p className="mt-5 text-2xl cursor-pointer font-extra-condensed hover:underline">
                <a href="/submit" className="">click here to submit to the online gallery</a>
              </p>
            </div>
            <div className="w-[60%] mb-auto pb-24 font-normal font-body tracking-wide px-10">
              <p className="mt-5 text-2xl cursor-pointer font-extra-condensed hover:underline">
                <a href="/gallery">click here to see the online gallery</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
