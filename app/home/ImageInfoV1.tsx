import React from "react";
import Image from "next/image";
import { stepsData } from "@/constants/index";

const StepsSection: React.FC = () => {
  return (
    <>
    <h2 className="lg:text-4xl text-2xl font-medium uppercase flex justify-center">We make the process easy</h2>
    <div className="flex flex-col md:flex-row items-center justify-center my-8 px-48 gap-12">

      {stepsData.map((step, index) => (
        <div key={index} className="flex flex-row items-center justify-start text-left m-4 ">
          <Image src={step.image} alt={`Step ${index + 1}`} width={150} height={150} />
          <p className="ml-5 text-sm ">{step.text}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default StepsSection;
