import Image from 'next/image';
import Counter from '@/components/counter';
import { jobs } from '@/constants';
import JobCard from '@/components/JobCard';
import JobForm from '@/components/JobForm';
import Benefits from '@/components/benefits';

const Careers: React.FC = () => {
  return (
    <main className='lg:w-[100%] h-full'>
      <Image
        src='/careersbanner.webp'
        alt='Masklogo'
        width={1920}
        height={1000}
      />

      <div className='lg:p-28 p-12'>
        <div className='flex  flex-col lg:gap-5'>
          <h3 className='text-[#52B2AD] lg:text-2xl text-lg font-medium'>Disclamer</h3>
          <p className='lg:text-xl text-sm leading-6'>“Dr. Lal Pathlabs Ltd does not
            endorse any job portal, consultant, agent to conduct hiring, issuance
            of employment offer on its behalf. We do not charge any money from a candidate
            to get a job opportunity with us. Our organization believes in meritocracy and
            does not encourage any back door entry mechanism to get employment. <br /><br />
            All candidates desirous of working with Dr. Lal Path Labs are advised to not pay
            money to any entity at any stage of their employment process. Any payment made would be at their own risk”.</p>
        </div>
      </div>

      <div className="container mx-auto lg:py-6 lg:w-[88%] ">
        <div className="flex flex-col lg:flex-row lg:gap-8 ">
          <div className="lg:w-2/3 bg-[#DFDFDF40] w-full p-9">
            <h1 className="text-2xl text-center mb-8 lg:text-5xl font-extralight">Careers At Medi Bridge</h1>
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                description={job.description}
                location={job.location}
                postedDate={job.postedDate}
              />
            ))}
          </div>
          <div className="lg:w-1/3 mt-4 lg:h-4/6  lg:mt-0 bg-[#52B2AD] lg:p-4 p-4">
            <JobForm />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center lg:py-8 lg:w-full gap-12 lg:p-20">
        <Counter />
      </div>
      
      <div className=' gap-24 justify-center lg:px-24 lg:py-14'>
      <h1 className='lg:text-2xl text-[#52B2AD] px-36 font-semibold'>Benefits / Facility</h1>
      <div className="lg:w-[78%] h-[2px] bg-[#C9D851] mx-auto my-4 flex justify-start"></div>
      <div className="flex flex-col md:flex-row gap-24 justify-center items-center mt-6 ">
        <Benefits />
      </div>
      </div>
    </main>
  )
}

export default Careers;