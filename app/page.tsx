
import ImageInfo from "@/app/[Home]/ImageInfo";
import Hero from "./[Home]/Hero";
import InfoForm from "./[Home]/InfoForm";
import InfoSlider from "./[Home]/infoSlider";
import InfoPackages from "./[Home]/infoPackages";
import AboutMedia from "./[Home]/about/aboutMedia";
import GetReport from "./[Home]/getReport";
import AddMap from "./[Home]/addMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ImageInfo/>
      <InfoForm/>
      <InfoSlider />
      <InfoPackages />
      <AboutMedia />
      <GetReport />
      <AddMap />
      <Footer />
    </>
  )
}