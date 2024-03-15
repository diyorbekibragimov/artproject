import Image from "next/image";
import TopNav from "../components/TopNav";
import First from "./galleries/first";
import FirstGallery from "./galleries/first-gallery";
import Second from "./galleries/second";
import SecondGallery1 from "./galleries/second-gallery";
import SecondGallery2 from "./galleries/second-gallery-2";
import Third from "./galleries/third";
import ThirdGallery1 from "./galleries/third-gallery";
import Fourth from "./galleries/fourth";
import FourthGallery from "./galleries/fourth-gallery";

const AboutUs = () => (
  <div className="text-white relative h-min-full h-full min-h-dvh bg-black">
    <TopNav alwaysBlack />
    <div className="container mx-auto py-12">
      <div className="mt-14">
        <First/>
        <FirstGallery/>
        <Second/>
        <SecondGallery1/>
        <SecondGallery2/>
        <Third/>
        <ThirdGallery1/>
        <Fourth/>
        <FourthGallery/>
      </div>
    </div>
  </div>
);

export default AboutUs;
