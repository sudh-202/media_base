"use client";

import Image from 'next/image';
import { testContent } from '@/constants/index';
import Carousel from '@/components/carousel';
import AccordionComponent from "@/components/accordion";

const Test: React.FC = () => {
    const { title, subTitle, } = testContent;



    return (
        <main className="px-[65px] max-w-screen-2xl pt-20 ">
            <div className="flex gap-5 mb-20">
                <section className="w-full">
                    <div className="bg-[#C9D851] p-[35px] rounded-2xl h-[15%]" />
                    <div className="md:flex border-2 border-[#3d7f99] rounded-2xl mx-[35px] mt-[-120px] bg-white">
                        <div className="w-full h-[300px] rounded-xl" style={{ backgroundImage: "url('/test.webp')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className='flex gap-10 px-8 '>
                                <div className='pt-8'>
                                    <p className=" mb-4 text-[24px] text-white">{subTitle}</p>
                                    <h2 className="text-[48px] font-medium mb-2 text-white">{title}</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <div className='bg-[#FBFCF6] rounded-2xl'>

                        
                                <h1>What is a Full Body Checkup?</h1>
                                <p>
                                    A full body checkup, also known as a complete body checkup, is a collection of health checkups and tests that aim to provide a comprehensive evaluation of an individual's health. It includes comprehensive physical exams, lab tests, and screenings to identify potential health concerns.
                                </p>
                          

                            <div >
                                <h2>What is the Purpose of a Full Body Check-up?</h2>
                                <p>
                                    The world around us is constantly evolving, and so are we. With the advancement of technology, our lives have become more convenient but also more stressful due to our fast-paced lifestyle. Continuous stress can affect our health and have a serious impact on immunity, leading to increased illnesses. Studies report that globally, three out of four grown adults feel stressed, and almost half of them mentioned that their stress levels increased in the past year. According to the World Health Organization (WHO), around 60% of the factors affecting your health are connected to your lifestyle.
                                </p>
                                <p>
                                    In times like these, prioritizing your health by getting a full body health checkup is crucial for your well-being. A full body health check-up includes laboratory tests such as blood count, blood sugar, and lipid profile to check the function of different organs in your body such as your heart and kidneys. This helps you and your doctor find possible health issues early and take preventive measures to keep you healthy.
                                </p>
                            </div>

                            <div >
                                <h2>Benefits of Getting a Full Body Checkup in Bihar Shareef</h2>
                                <p>
                                    Hyderabad, also called the city of pearls, is one of India’s busiest cities. Known worldwide for trading precious gems and natural pearls, it also has the most people living in a small space. Along with its growing trade ventures, Bihar Shareef has also seen an increase in several health conditions among its citizens. As of 2016, heart disease was one of the top causes of death in both males and females in Hyderabad, along with high blood pressure being the most prevalent at 25.4%, followed by diabetes at 9.0%. Research has shown that urban residents are 1.15 times more likely to have a chronic disease as of 2018.
                                </p>
                                <p>
                                    Statistics like these make it clear how important getting a full body checkup is for the people living in Hyderabad. If you’re still wondering whether to get a full body health checkup in Bihar Shareef, let us give you a few more reasons:
                                </p>
                                <ul >
                                    <li>Identifying health issues early: Regular full-body check-ups can identify health issues early and make your treatment easier, especially for chronic diseases like diabetes, heart disease, and cancer.</li>
                                    <li>Early treatment and better prognosis: You can immediately start treatment for conditions such as cancer if they are detected in your health check-up. Timely treatment for these conditions allows for a better prognosis.</li>
                                    <li>Lifestyle changes for better health: You can coordinate with your doctor to make a custom-made healthcare plan and adopt a healthy lifestyle based on your health needs and history.</li>
                                </ul>
                                <p>
                                    In today’s age, making a habit of getting routine complete body checkups is crucial. How often you need check-ups depends mostly on your lifestyle and your prevailing health conditions.
                                </p>
                            </div>

                            <div >
                                <h2>Key Components of a Full Body Checkup in Hyderabad</h2>
                                <p>
                                    With Medi Bridge Labs full body check-up, your worries can take a back seat. Our list of full body health checkup packages consists of specially selected tests by doctors, including several parameters to check the well-being of your organs and systems such as:
                                </p>
                                <ul >
                                    <li>Liver</li>
                                    <li>Kidneys</li>
                                    <li>Blood sugar</li>
                                    <li>Thyroid</li>
                                    <li>Cholesterol</li>
                                    <li>Blood</li>
                                    <li>Urine</li>
                                </ul>
                                <p>
                                    Along with these tests, we also include tests for vitamin B12, iron levels, allergy screening, and important cardiac risk indicators. Our full body check-up packages not only ensure affordability but also deliver a diverse array of tests, providing exceptional value for your money. The tests included in one of our packages, the Full Body Health Checkup Package – Basic with 79 parameters included in 7 tests, are given below:
                                </p>
                                <ul >
                                    <li>Complete blood count (24 parameters)</li>
                                    <li>Kidney/Renal function tests with electrolytes (KFTs / RFTs) (11 parameters)</li>
                                    <li>Liver function tests (12 parameters)</li>
                                    <li>Total cholesterol (1 parameter)</li>
                                    <li>Thyroid function tests (TFTs) (3 parameters)</li>
                                    <li>Blood sugar (1 parameter)</li>
                                    <li>Urine complete analysis (27 parameters)</li>
                                </ul>
                            </div>

                            <div >
                                <h2>Steps to Book a Health Checkup Package in Hyderabad</h2>
                                <p>
                                    Medi Bridge Labs stands out in the sphere of at-home lab tests and best health checkup packages in Bihar Shareef. Along with earning the title of the quickest diagnostic lab in the country, we have also delivered top-notch at-home blood tests to over 1,000,000 customers. Our eMedics have been trained for over 100 hours for a painless sample collection process for you.
                                </p>
                                <p>Book your full body test with us today by following these easy steps:</p>
                                <ul >
                                    <li>Choose a "Full Body Checkup Bihar Shareef" package based on your health requirement and book a slot.</li>
                                    <li>Our eMedics will reach out to you based on your slot for sample collection.</li>
                                    <li>A small needle is used to draw blood from a vein in your arm.</li>
                                    <li>The entire process usually takes less than five minutes.</li>
                                    <li>Your samples will be tested at our NABL- and ICMR-accredited laboratory, and results will be conveyed to you through WhatsApp and registered email within 6-24 hours.</li>
                                </ul>
                                <p>
                                    We, at Medi Bridge, guarantee that you will receive the highest quality diagnostic tests and accurate results without needing to step out of your house!
                                </p>
                            </div>
                        </div> */}

                  
                    {/* new section */}
                    <main className=' px-[35px]'>

                        <div className='my-10 bg-[#FBFCF6] p-14 rounded-xl'>
                            <h2 className='text-2xl font-semibold'>Tests Included</h2>
                            <p className='text-md text-[#52B2AD] font-semibold pb-10'>6 tests | 69 parameters</p>
                            <AccordionComponent />
                        </div>
                    </main>

                </section>


            </div>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-7  px-24">
                <div className='w-[40%] mt-[-680px]'>
                    <Carousel />
                </div>
                <div className="md:w-1/2 w-full pr-28 flex flex-col justify-between">
                    <div className="bg-white rounded-3xl px-[65px] py-8 mb-4 border-[#C9D851] border-2">
                        <Image src="/3steps.webp" alt="MediBridge Building" className="rounded-md mb-2 w-full h-auto" width={500} height={100} />
                        <button className="bg-[#0F3C49] text-white px-4 py-3  rounded-xl w-full mt-[-25px]">Order now</button>
                    </div>
                    <div className="">
                        <Image src="/medibuild.webp" alt="MediBridge Building" className="" width={500} height={100} />
                        {/* <button className="bg-blue-600 text-white px-4 py-3 rounded">Watch Video</button> */}
                    </div>
                </div>
            </div>
            <div
                className="relative px-16 py-14 flex flex-col h-[280px] w-[74%] mx-32 mb-10 border-2 border-[#C9D851] rounded-[50px] "
                style={{ backgroundImage: "url('/news.webp')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top' }}
            >
                <h3 className='text-white text-4xl font-normal '>Subscribe our Newsletter</h3>
                <p className='text-white text-base my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                {/* <Image src="/newsletterimg1.webp" alt="MediBridge Building" className="w-full h-auto" width={500} height={100} /> */}
                <button className=" bg-[#52B2AD] text-white px-4 py-3 rounded-[20px] w-[25%] my-5">Subscribe </button>
            </div>


        </main>
    );
};

export default Test;

