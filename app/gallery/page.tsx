import Image from "next/image";
import TopNav from "../components/TopNav";
import First from "./galleries/first";
import FirstGallery from "./galleries/first-gallery";

const AboutUs = () => (
  <div className="text-white relative h-min-full h-full min-h-dvh bg-black">
    <TopNav alwaysBlack />
    <div className="container mx-auto py-12">
      <div className="mt-14">
        <First/>
        <FirstGallery/>
      </div>
    </div>
  </div>
);

export default AboutUs;
