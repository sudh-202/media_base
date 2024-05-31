import Image from 'next/image';

import { countdata, countimageSrc } from '@/constants';

const Counter: React.FC = () => {

    return (

        <>
            {countdata.map((item, index) => (
                <div key={index} className="flex lg:flex-row gap-3  items-center m-4">
                    <div className="w-16 h-16 relative">
                        <Image src={countimageSrc} alt="icon" layout="fill" objectFit="contain" />
                    </div>
                    <div className='flex flex-col w-3/2'>
                        <div className="text-5xl font-light">{item.count}</div>
                        <div className="text-base flex justify-start text-center ">{item.text}</div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default Counter;