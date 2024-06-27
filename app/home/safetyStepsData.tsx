import Image from "next/image";
import { safetyStepsData } from "@/constants/index";

const SafetyStepsSection: React.FC = () => {
  return (
    <div className="bg-[#52B2AD] text-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold">4 Step Safety Assured</h2>
        <p className="text-sm md:text-lg mt-2">We assure and provide utmost care and safety</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around mx-4">
        {safetyStepsData.map((step, index) => (
          <div key={index} className="bg-white text-black rounded-lg p-4 flex flex-row gap-4 items-center m-4 w-64">
            <Image src={step.image} alt={step.title} width={80} height={80} />
            <p className="mt-4 font-semibold">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyStepsSection;
