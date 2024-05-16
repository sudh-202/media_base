import LogoSlider from "@/components/LogoSlider"

const infoSlider = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 lg:py-[74px] lg:px-8 px-2">
        <div className="text-xl lg:text-4xl font-medium">Search Test and Packages</div>
        <main className="flex flex-col items-center justify-center py-10">
        <LogoSlider />
        </main>
    </div>
  )
}

export default infoSlider