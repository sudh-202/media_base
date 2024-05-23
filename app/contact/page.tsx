
'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { CONTACT_FORM_FIELDS, CONTACT_DETAILS, SOCIALS } from '@/constants/index';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';


const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        // email: '',
        address: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            toast.success('Message sent successfully!');
        }).catch((err) => {
            console.log('FAILED...', err);
            toast.error('Failed to send message, please try again.');
        });
    };

    return (
        <main className="flex flex-col">
            {/* Contact Form Section */}
            <div className=' flex lg:flex-row flex-col justify-center  lg:py-10 px-8 lg:px-40 lg:w-screen lg:gap-10 gap-7'>
                <div className="flex-col mt-8 lg:mt-20 lg:w-[45%]">
                    <h1 className="lg:text-[80px] text-5xl font-normal text-[#52B2AD] pb-3">Contact <span className="text-[#C9D851]">us</span></h1>
                    <p className="text-md lg:text-xl text-md font-normal lg:w-3/4">Drop us a message with your requirement or just say hello and our team will get in touch with you within 2 hours.</p>
                </div>
                <div className="bg-[#C9D851] p-8 lg:p-14 flex justify-center flex-col lg:w-[55%]">
                    <h3 className="font-medium text-[25px] flex justify-center py-3">Drop us a message and we'll get in touch</h3>
                    <div className="w-full">
                        <form onSubmit={handleSubmit} className="">
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder={CONTACT_FORM_FIELDS.name.placeholder}
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full my-2 px-3 py-4 border"
                                />
                            </div>
                            {/* <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder={CONTACT_FORM_FIELDS.email.placeholder}
                value={formData.email}
                onChange={handleChange}
                className="w-full my-2 px-3 py-4 border"
              />
            </div> */}
                            <div>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder={CONTACT_FORM_FIELDS.address.placeholder}
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full my-2 px-3 py-4 border"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder={CONTACT_FORM_FIELDS.phone.placeholder}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full my-2 px-3 py-4 border"
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder={CONTACT_FORM_FIELDS.message.placeholder}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full my-2 px-3 pt-4 pb-16 border"
                                    rows={4}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#52B2AD] text-white py-2 hover:bg-[#31ada5] transition"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Contact Details Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center lg:px-20 py-20 px-45 lg:w-screen gap-10">
                <div className="w-full lg:w-[60%] h-[400px] lg:h-[600px] rounded-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.329506908786!2d85.52382991534548!3d25.204845783893453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2975c708aad2b%3A0xc221b1c0dc1fd4b3!2sMediBridge%20Diagnostic%20Centre!5e0!3m2!1sen!2sin!4v1652292245876!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        className='rounded-lg'
                    ></iframe>
                </div>
                <div className="w-full lg:w-[40%] flex flex-col items-start justify-center pl-7">
                    <h2 className="text-[48px] font-normal mb-4 w-3/4 leading-[54px]">Get in touch with us directly</h2>
                    {/* <span className='border bo'>b</span> */}
                    <div className="mb-4 flex items-start">
                        <span className="material-icons text-green-600 mr-2">location_on</span>
                        <p className='lg:w-3/5'>{CONTACT_DETAILS.address}</p>
                    </div>
                    <div className="mb-4 flex items-start">
                        <span className="material-icons text-[#52B2AD] mr-2">phone</span>
                        <p>{CONTACT_DETAILS.phone}</p>
                    </div>
                    <div className="mb-4 flex items-start">
                        <span className="material-icons text-[#52B2AD] mr-2">language</span>
                        <a href={`http://${CONTACT_DETAILS.website}`} className="text-green-600 hover:underline">
                            {CONTACT_DETAILS.website}
                        </a>
                    </div>
                    <div className="mb-4 flex items-start">
                        <span className="material-icons text-[#52B2AD] mr-2">email</span>
                        <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-green-600 hover:underline">
                            {CONTACT_DETAILS.email}
                        </a>
                    </div>
                    <div className="mt-4 flex items-center">
                        <span className="material-icons text-[#52B2AD] mr-2">share</span>
                        <p>Follow us:</p>
                        <div className="flex ml-2">

                            <ul className="regular-14 flex gap-4 text-gray-30">
                                {SOCIALS.links.map((link) => (
                                    <Link href="/" key={link}>
                                        <Image src={link} alt="logo" width={24} height={24} className='text-[#52B2AD]  rounded-sm' />
                                    </Link>
                                ))}
                                <p className='text-lg text-white'>Follow us</p>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
