
import Image from 'next/image';
import { benefitsData } from '../constants';

const Benefits: React.FC = () => {
  return (<>
    {benefitsData.map((benefit) => (
        <div key={benefit.id} className="flex flex-col items-center lg:mb-8 ">
          <img src={benefit.icon} alt={benefit.title} className="w-35 h-20 lg:mb-4 mb-2" />
          <p className="text-center text-md text-wrap ">{benefit.title}</p>
        </div>
      ))}
      </>
  );
};

export default Benefits;
