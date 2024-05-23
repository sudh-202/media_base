
import React from "react";
import { container_images } from "@/constants/index";
const imageUrls = container_images;

const ImageInfo: React.FC = () => {
  return (
    <div className="flex justify-center my-[36px] mx-[77px]">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="flex-none w-1/4 mx-2">
          <img src={imageUrl} alt={`Image ${index + 1}`} width={144} height={68} className="lg:max-container-banner" />
        </div>
      ))}
    </div>
  );
};

export default ImageInfo;
