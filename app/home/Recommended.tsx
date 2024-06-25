import ButtonRound from "@/components/ButtonRoud"
import ImageSlider from "../../components/ImageSlider"
import { carouselImages, ageGroups } from "@/constants"
import Image from "next/image"




const aboutMedia = () => {
    return (
        <main className="flex flex-col bg-[#FEFFFE]">

            <div className="flex flex-col justify-center items-center lg:4xl lg:p-24 p-10">
                <h2 className="lg:text-4xl text-2xl font-medium uppercase">Recommended Checkups for Men</h2>
                <p className="text-lg lg:p-2.5 text-center w-full lg:w-[60%] ">Curated by Doctors for you
                </p>
                <div className="container mx-auto py-10 px-4 border-black border-b-2">
                    <div className="relative flex flex-wrap justify-center gap-16 pb-10">
                        {ageGroups.map((group, index) => (
                            <div
                                key={group.id}
                                className="relative w-80 rounded-lg overflow-hidden shadow-lg bg-[#FEFFFE]"
                                style={{ marginLeft: index !== 0 ? '-40px' : '0' }}
                            >
                                <Image
                                    src={group.src}
                                    alt={group.alt}
                                    width={320}
                                    height={200}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <p className="text-2xl font-bold text-teal-500  bg-opacity-70 p-2 rounded">
                                        {group.title}<br></br> <span className="text-black">{group.highlight}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:4xl lg:px-24 p-10">
                <h2 className="lg:text-4xl text-2xl font-medium uppercase">Recommended Checkups for Women</h2>
                <p className="text-lg lg:p-2.5 text-center w-full lg:w-[60%] ">Curated by Doctors for you
                </p>
                <div className="container mx-auto py-10 px-4 border-black ">
                    <div className="relative flex flex-wrap justify-center gap-16 ">
                        {ageGroups.map((group, index) => (
                            <div
                                key={group.id}
                                className="relative w-80 rounded-lg overflow-hidden shadow-lg bg-[#FEFFFE]"
                                style={{ marginLeft: index !== 0 ? '-40px' : '0' }}
                            >
                                <Image
                                    src={group.src}
                                    alt={group.alt}
                                    width={320}
                                    height={200}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <p className="text-2xl font-bold text-teal-500  bg-opacity-70 p-2 rounded">
                                        {group.title}<br></br> <span className="text-black">{group.highlight}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




        </main>


    )
}

export default aboutMedia