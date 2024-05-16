import { images } from "@/constants";
import ImageSlider from "../../components/ImageSlider";

const Hero = () => {

  return (
    <section className="lg:max-container-banner">
      <ImageSlider images={images} />
    </section>
  );
};

export default Hero;
