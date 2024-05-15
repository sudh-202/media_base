
import ImageInfo from "@/app/[Home]/ImageInfo";
import Hero from "./[Home]/Hero";
import InfoForm from "./[Home]/InfoForm";
import InfoSlider from "./[Home]/infoSlider";
import InfoPackages from "./[Home]/infoPackages";

export default function Home() {
  return (
    <>
      <Hero />
      <ImageInfo/>
      <InfoForm/>
      <InfoSlider />
      <InfoPackages />
    </>
  )
}