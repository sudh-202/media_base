import React from 'react';

const Healthcare: React.FC = () => {
  return (
    <main className='flex items-center justify-center lg:px-40 px-8 py-28'>
    <div className="flex flex-col lg:flex-row items-center justify-around bg-[#F6F6F6] px:10 lg:px-36 py-12 rounded-lg shadow-lg">
      <div className="flex-shrink-0 mb-4 lg:mb-0">
        <img
          src="/healthcareimg.webp"
          alt="Making Healthcare Better"
          className="h-32 w-full  lg:px-10"
        />
      </div>
      <div className="flex-grow lg:ml-8 text-center lg:text-left">
        <h2 className="text-xl font-bold mb-4">Lorem ipsum dolor sit amet</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
        </p>
        <button className="px-6 py-2 border border-black rounded-full text-black hover:bg-black hover:text-white transition">
          Know more
        </button>
      </div>
    </div>
    </main>
  );
};

export default Healthcare;
