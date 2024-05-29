import React from 'react'
import Image from 'next/image'


const GetReport = () => {
    return (


        <section className='flex flexCenter m-5 lg:m-0 flex-col pb-[100px] '>
            <div className=' flex lg:flex-row flex-col bg-[#C9D851] rounded-xl '>

                <div className="flex flex-1 items-center justify-start">
                    <Image src="/report.webp" alt="report" width={372} height={390} />
                </div>

                <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12 p-16">
                    <h2 className="bold-40 lg:lg:text-2xl xl:max-w-[320px] underline underline-offset-2 decoration-[#52B2AD] decoration-4" >Get for free now!</h2>
                    <p className="lg:w-[70%] regular-16 lg:text-2xl text-black">हमारे मोबाइल एप्लिकेशन पर अपनी रिपोर्ट प्राप्त करने की सुविधा</p>
                    <div className="flex w-full lg:flex-row flex-col gap-3 whitespace-nowrap ">
                        <a href="http://your-destination-url.com">
                            <img
                                src="/playstore.webp"
                                alt="report"
                                style={{ width: '100%', height: 'auto', maxWidth: '372px', maxHeight: '390px' }}
                            />
                        </a>
                        <a href="http://your-destination-url.com">
                            <img
                                src="/appstore.webp"
                                alt="report"
                                style={{ width: '100%', height: 'auto', maxWidth: '372px', maxHeight: '390px' }}
                            />
                        </a>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default GetReport