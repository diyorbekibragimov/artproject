import Image from "next/image";
import TopNav from "../components/TopNav";
import First from "./galleries/first";
import FirstGallery from "./galleries/first-gallery";
import Second from "./galleries/second";
import SecondGallery from "./galleries/second-gallery";
import Third from "./galleries/third";
import ThirdGallery1 from "./galleries/third-gallery";
import Fourth from "./galleries/fourth";
import FourthGallery from "./galleries/fourth-gallery";
import Fifth from "./galleries/fifth";
import FifthGallery from "./galleries/fifth-gallery";
import Sixth from "./galleries/sixth";
import SixthGallery from "./galleries/sixth-gallery";
import Seven from "./galleries/seven";
import SeventhGallery from "./galleries/seven-gallery";
import Eigth from "./galleries/eigth";
import EigthGallery1 from "./galleries/eigth-gallery-1";
import EigthGallery2 from "./galleries/eigth-gallery-2";
import Ninth from "./galleries/ninth";
import NinthGallery1 from "./galleries/nine-gallery-1";
import NinthGallery2 from "./galleries/nine-gallery-2";
import TenGallery1 from "./galleries/ten-gallery-1";
import TenGallery2 from "./galleries/ten-gallery-2";
import Ten from "./galleries/ten";
import ElevenGallery1 from "./galleries/evelen-gallery-1";
import ElevenGallery2 from "./galleries/evelen-gallery-2";
import Eleven from "./galleries/eleven";
import Twelve from "./galleries/twelve";
import TwelveGallery from "./galleries/twelve-gallery";
import Thirteen from './galleries/thirteen';
import ThirteenGalllery from './galleries/thirteen-gallery'

const AboutUs = () => (
  <div className="text-white relative h-min-full h-full min-h-dvh bg-black">
    <TopNav alwaysBlack />
    <div className="container mx-auto py-12">
      <div className="mt-14">
        <First/>
        <FirstGallery/>
        <Second/>
        <SecondGallery/>
        <Third/>
        <ThirdGallery1/>
        <Fourth/>
        <FourthGallery/>
        <Fifth/>
        <FifthGallery/>
        <Sixth/>
        <SixthGallery/>
        <Seven/>
        <SeventhGallery/>
        <Eigth/>
        <EigthGallery1/>
        <EigthGallery2/>
        <Ninth/>
        <NinthGallery1/>
        <NinthGallery2/>
        <Ten/>
        <TenGallery1/>
        <TenGallery2/>
        <Eleven/>
        <ElevenGallery1/>
        <ElevenGallery2/>
        <Twelve/>
        <TwelveGallery/>
        <Thirteen/>
        <ThirteenGalllery/>
      </div>
    </div>
  </div>
);

export default AboutUs;
