import { images } from "@/constants";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  // Define images for both desktop and mobile view


  return (
    <section className="lg:max-container-banner">
      <ImageSlider images={images} />
    </section>
  );
};

export default Hero;
