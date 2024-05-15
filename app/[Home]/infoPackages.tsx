import PackagesSlider from "@/components/PackagesSlider"

const infoPackages = () => {
    return (
        <div className="flex flex-col items-center justify-center py-[74px] px-18 bg-[#F6F6F6]">
            <div className=" text-xl lg:text-4xl font-medium">Specialized Health Packages</div>
            <main className="flex flex-row items-center justify-center py-10">
                <PackagesSlider />
            </main>
        </div>
    )
}

export default infoPackages