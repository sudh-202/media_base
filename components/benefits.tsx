
import Image from 'next/image';
import { benefitsData } from '../constants';

const Benefits: React.FC = () => {
  return (<>
    {benefitsData.map((benefit) => (
        <div key={benefit.id} className="flex flex-col items-center mb-8 ">
          <img src={benefit.icon} alt={benefit.title} className="w-35 h-20 mb-4" />
          <p className="text-center text-md text-wrap ">{benefit.title}</p>
        </div>
      ))}
      </>
  );
};

export default Benefits;
