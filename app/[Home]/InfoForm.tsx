// components/Section.tsx
import React from "react";
import { imageData, textData, formData } from "@/constants/index";

const InfoForm: React.FC = () => {
    return (
        <>
            {/* Desktop View */}
            <div className=" hidden md:flex bg-[#52B2AD] lg:flex-row  gap-5 px-16 lg-flex lg-flex-grow lg:py-7 py-2.5 justify-center">
                <div className="hidden md:flex md:flex-row">
                    <img
                        src={imageData.imageUrl}
                        alt="Image"
                        style={{ width: 78, height: 68 }}
                        className=" w-full h-auto rounded-lg max-w-fit"
                    />
                </div>

                {/* <div className="flex flex-row px-2 lg:items-center gap-1">
                <h2 className="flex lg:items-center font-sans text-xl lg:text-6xl font-normal text-white">{textData.title}</h2>
                <p className="flex font-sans text-xl uppercase text-white lg:items-center ">home sample<br></br> collection</p>
            </div> */}
                <div className="flex flex-row px-2 text-base lg:2xl lg:items-center gap-1 uppercase text-white text-left">
                    <span className="lg:text-6xl ">Free</span> home sample<br /> collection
                </div>


                <div className="flex flex-col md:flex-row">
                    <form className="flex flex-col md:flex-row relative gap-2">
                        {formData.fields.map((field, index) => (
                            <div key={index} className="hidden lg:relative lg:flex lg:items-center lg:flex-grow md:relative md:flex md:items-center">
                                {field.type === "select" ? (
                                    <select
                                        className="relative border border-[#C9D851] w-full py-2 px-4 pr-20 text-white bg-transparent z-10"
                                    >
                                        {field.options?.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <div className="relative overflow-hidden">
                                        <input
                                            className="border border-[#C9D851] text-white bg-transparent w-full py-2 px-4"
                                            id={field.label}
                                            type={field.type || "text"}
                                        />
                                        <label
                                            htmlFor={field.label}
                                            className="absolute top-2 left-4 text-white bg-transparent pointer-events-none"
                                        >
                                            {field.label}
                                        </label>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="flex items-center">
                            <button className="bg-[#C9D851] hover:bg-blue-700 text-white text-base font-semibold w-full lg:py-2.5 lg:px-20 whitespace-nowrap ">
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Mobile View */}
            <div className=" lg:hidden flex bg-[#52B2AD] flex-row   px-5 py-4 rounded-t-lg justify-between">
                <div className="flex  uppercase text-white text-left text-base ">Free sample collection</div>
                <div className=" flex ">
                    <button className="bg-[#C9D851] hover:bg-blue-700 text-white text-base font-semibold w-full py-2.5 px-16  whitespace-nowrap ">
                        Book Now
                    </button>
                </div>
            </div>
        </>







    );
};

export default InfoForm;
