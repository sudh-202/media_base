import Image from "next/image"

const newsLetter = () => {
  return (
    <div className=" m-32">
        <Image 
            src="/newsletter.webp"
            alt="letter"
            width={1920}
            height={1080}
            priority
            className="lg:w-full contain" 
            />
    </div>
  )
}

export default newsLetter