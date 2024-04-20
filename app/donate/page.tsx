import Image from "next/image";
import TopNav from "../components/TopNav";

const AboutUs = () => (
  <div className="text-white relative h-min-full h-full min-h-dvh bg-black">
    <TopNav alwaysBlack />
    <div className="container mx-auto py-40 flex md:flex-row flex-col justify-between">
      <div className="w-full md:w-3/5 z-10 md:border-l-2 md:pl-10 p-10 pt-20 border-white">
        <div className="font-title">
          <h2 className="md:text-4xl text-4xl font-bold mb-2 drop-shadow-lg">
            Supporting the Artists&apos; Family:
            Donate through the link/QR code!
          </h2>
        </div>
        <p className="mb-8 text-2xl text-white mt-4">
          A collaboration with Qatar Red Crescent to donate and help the
          artists&apos; families financially. Your generous contribution can
          make a profound difference in their lives.
        </p>
        <p className="mb-8 mt-6 text-2xl text-white">
          link:{" "}
          <a href="https://qrcs.qa/QF" className="underline font-bold">
            https://qrcs.qa/QF
          </a>
        </p>
      </div>
      <div className="w-full md:w-2/5 flex ">
      <Image src={"/qr.png"} className="mx-auto my-auto" alt="" width={300} height={300} />
      </div>
    </div>
  </div>
);

export default AboutUs;

{
  /* <div className="flex mt-14 flex-wrap w-3/5 items-center justify-start md:border-l-2 md:pl-10 p-10 pt-20 border-white">

<div className="w-2/5">
  <Image src={"/qr.ong"} alt="" width={500} height={500} />
</div>
</div> */
}
