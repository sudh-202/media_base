import ButtonRound from "@/components/ButtonRoud"
import ImageSlider from "../../components/ImageSlider"
import { carouselImages, OurServices } from "@/constants"
import Image from "next/image"




const ourServices = () => {
    return (
        <main className="flex flex-col bg-[#FEFFFE]">

            <div className="flex flex-col justify-center items-center lg:4xl lg:p-24 p-10">
                <h2 className="lg:text-4xl text-2xl font-medium uppercase">Our services</h2>
                <div className="container mx-auto py-10 px-4 ">
                    <div className="relative flex flex-wrap justify-center gap-16 pb-10">
                        {OurServices.map((group, index) => (
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
                                    <p className="lg:text-3xl font-bold text-white  bg-opacity-70 p-2 rounded">
                                        {group.title}
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

export default ourServices