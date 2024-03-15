import Image from "next/image";
import TopNav from "../components/TopNav";

const AboutUs = () => (
  <div className="text-white relative h-min-full h-full min-h-dvh bg-black">
    <TopNav alwaysBlack />
    <div className="container mx-auto py-12">
      <div className="flex mt-14 flex-wrap items-center justify-start md:border-l-2 md:pl-10 p-10 pt-20 border-white">
        <div className="w-full md:w-3/5 z-10">
          <div className="font-title">
            <h2 className="md:text-8xl text-6xl font-bold mb-2">About</h2>
            <h2 className="text-white md:text-8xl text-6xl font-bold mb-2">
              Us
            </h2>
          </div>
          <p className="mb-8 text-2xl text-white mt-4">
            We are a Carnegie Mellon University club called Arts & Crafts,
            founded in 2023 by Amna Al-Quradaghi, Noran Al Safar, Hiba Hamad,
            and Mariam Abdelatef. Our mission is to foster a more creative and
            artistic community.
          </p>
        </div>
      </div>
    </div>
    <div className="absolute md:top-0 right-0 md:w-1/2 blur-sm md:h-full bottom-0 h-1/2 w-full">
      {/* Image */}
      <div
        style={{
          zIndex: "20",
          width: "100%",
          height: "100%",
          background: "black",
          position: "relative",
        }}
      >
        <Image src="/bgpage.jpg" alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  </div>
);

export default AboutUs;
