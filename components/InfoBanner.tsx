


import Image from "next/image";


const InfoBanner = () => {
  return (
    <div className="bg-white flex justify-center items-center w-full m-6">
      <Image src="/newbanner.webp" alt="/newbanner" width={1100} height={400} />
    </div>
  );
};

export default InfoBanner;
