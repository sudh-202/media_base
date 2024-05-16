import ButtonRound from "@/components/ButtonRoud"
import ImageSlider from "../../../components/ImageSlider"
import { carouselImages } from "@/constants"




const aboutMedia = () => {
    return (
        <main className="flex flex-col bg-white">
            <div className="flex flex-col justify-center items-center lg:4xl lg:p-24 p-10">
                <h2 className="lg:text-4xl text-2xl text-[rgb(82,178,173)]">About Medi Bridge</h2>
                <p className="text-base lg:p-2.5 text-center w-full lg:w-[60%] m-4">Medi Bridge diagnostic is the advanced level diagnostic
                    center in the District. We are offering to offer a wide variety of test menus.
                    We wish to diagnose all the possible diseases inside the human body. We have
                    incorporated almost 95 % of automation in our state-of-art healthcare equipment.
                </p>
                <ButtonRound
                    className="lg:mt-4 my-10" />
                <h2 className="lg:text-4xl text-xl text-black font-medium">Why Medi Bridge</h2>
            </div>
            
            <div className="lg:px-44 lg:pb-24 px-4 ">
                <ImageSlider images={carouselImages}/>
            </div>

        </main>
    )
}

export default aboutMedia