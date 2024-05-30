import Image from 'next/image';

const JobForm: React.FC = () => {
  return (
    <div className="lg:p-4 p-3">
      <h2 className="text-2xl text-center mb-8 lg:text-5xl font-extralight text-white">Apply For The Job</h2>
      <form>
        <input type="text" placeholder="Name" className="w-full mb-4 p-4 " />
        <input type="email" placeholder="Email" className="w-full mb-4 p-4 " />
        <input type="tel" placeholder="+91 987 654 3210" className="w-full mb-4 p-4 " />
        <div className="relative mb-2">
          <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
          <div className="flex items-center justify-between p-4  bg-white text-gray-500">
            <span>Choose File</span>
            <Image 
                src="/upload.webp"
                alt="upload"
                width={14}
                height={14}
            />
          </div>
        </div>
        <p className="text-white text-sm mb-4 flex justify-end ">*Only Pdf, Doc, Docx Extension Files</p>
        <textarea placeholder="Your Message" className="w-full mb-4 pt-4 pb-28 px-4"></textarea>
        <button type="submit" className="bg-[#C9D851] w-full p-4 rounded text-white">Submit</button>
      </form>
    </div>
  );
};

export default JobForm;
