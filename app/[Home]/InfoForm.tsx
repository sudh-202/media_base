// components/Section.tsx
import React from "react";
import { imageData, textData, formData } from "@/constants/index";

const InfoForm: React.FC = () => {
    return (

        <div className="flex bg-[#52B2AD] lg:px-14 lg:py-5 px-2 py-4">
            <div className="flex flex-row">
                <div className="hidden md:flex md:flex-row">
                    <img
                        src={imageData.imageUrl}
                        alt="Image"
                        style={{ width: 78, height: 68 }}
                        className="w-full h-auto rounded-lg"
                    />
                </div>


               
                <div className="flex flex-row lg:flex-row px-2 lg:px-5 ">
                    <div className="w-full lg:w-1/2 ">
                        <h2 className="flex lg:items-center font-sans text-xl lg:text-6xl font-normal text-white ">{textData.title}</h2>
                    </div>
                    <div className="w-full lg:w-1/2 ">
                        <p className="flex  font-sans text-xl lg:text-balance lg:items-center  lg:text-2xl lg:font-semibold uppercase text-white" style={{ lineHeight: '28px', }}>
                            {textData.description.map((text, index) => (
                                <React.Fragment key={index}>
                                    {text}
                                    {index !== textData.description.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row ">
                    <form className="flex flex-col md:flex-row relative gap-2">
                        {formData.fields.map((field, index) => (
                            <div key={index} className="hidden lg:relative lg:flex lg:items-center lg:flex-grow ">
                                {field.type === "select" ? (
                                    <select
                                        className="border border-[#C9D851] py-2 px-4 text-white bg-transparent z-10 w-full "
                                    >
                                        {field.options?.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <div className="relative">
                                        <input
                                            className="border border-[#C9D851] text-white bg-transparent w-full py-2 px-4"
                                            id={field.label}
                                            type={field.type || "text"}
                                        />
                                        <label
                                            htmlFor={field.label}
                                            className="absolute top-2 left-4 text-white bg-transparent pointer-events-none "
                                        >
                                            {field.label}
                                        </label>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div>
                            <button className="bg-[#C9D851] hover:bg-blue-700 text-white mt-3 text-base font-semibold w-full py-2.5 px-10 whitespace-nowrap">
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default InfoForm;
