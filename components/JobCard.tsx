

interface JobCardProps {
  title: string;
  description: string;
  location: string;
  postedDate: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, description, location, postedDate }) => {
  return (
    <div className="p-6 border border-gray-200 rounded-lg mb-4 bg-white lg:p-10 ">
        <div className="lg:pb-4">
         <h2 className="lg:text-2xl text-xl font-medium text-teal-600 mb-2">{title}</h2>
         <p className="lg:text-md text-sm">{description}</p>
        </div>
        <div className="flex space-x-4 mt-2">
        <div>
          <p className="lg:text-xl font-medium">Location</p>
          <p className="lg:text-xl font-medium">Posted Date</p>
        </div>
        <div>
          <p className="lg:text-xl font-medium">: {location}</p>
          <p className="lg:text-xl font-medium">: {postedDate}</p>
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        <button className="bg-gray-200 px-4 py-2 rounded">View Details</button>
        <button className="bg-lime-500 px-4 py-2 rounded text-white">Apply Job</button>
      </div>
    </div>
  );
};

export default JobCard;
