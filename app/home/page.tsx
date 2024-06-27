
import ImageInfo from "./ImageInfo";
import InfoForm from "./InfoForm";
import InfoSlider from "./infoSlider";
import InfoPackages from "./infoPackages";
import AboutMedia from "./aboutMedia";
import GetReport from "./getReport";
import AddMap from "./addMap";
import Healthcare from "./healthcare";
import ImageSlider from "@/components/ImageSlider";
import Testimonials from "./testimonials";
import { images } from "@/constants";
import Recommended from "./Recommended";
import ImageInfoV1 from "./ImageInfoV1";
import OurServices from "./ourServices";
import InfoBanner from "@/components/InfoBanner";
import SafetyStepsSection from "./safetyStepsData";

export default function HomePage() {
  return (
    <>
      <ImageSlider images={images} />
      {/* <ImageInfo/> */}
      {/* <InfoForm/> */}
      <InfoSlider />
      <InfoPackages />
      {/* <AboutMedia /> */}
      <Recommended />
      <ImageInfoV1 />
      <OurServices />
      <SafetyStepsSection />
      <InfoBanner />
      <Healthcare />
      <Testimonials />
      <GetReport />
      <AddMap />
    </>
  )
}