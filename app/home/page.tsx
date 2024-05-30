
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

export default function HomePage() {
  return (
    <>
      <ImageSlider images={images}/>
      <ImageInfo/>
      <InfoForm/>
      <InfoSlider />
      <InfoPackages />
      <AboutMedia />
      <Healthcare />
      <Testimonials />
      <GetReport />
      <AddMap />
    </>
  )
}