import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS, ADDRESS, PHONE, WEBSITE, EMAIL, ICONS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <footer className="flexCenter  bg-[#222222]">
      <div className="padding-container max-container flex w-full flex-col gap-14 pt-20 pb-6">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">

          {/* Changes */}

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-white">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                <div className="flex w-full flex-row lg:flex-col gap-3 whitespace-nowrap ">
                  <a href="http://your-destination-url.com">
                    <Image src="/footgoogle.webp" alt="report" width={172} height={390}  />
                  </a>
                  <a href="http://your-destination-url.com">
                    <Image src="/footapp.webp" alt="report" width={172} height={390} />
                  </a>

                </div>

              </FooterColumn>

              <div className=" text-white py-3 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="material-icons rounded-full bg-[#C9D851] mr-3 p-1">{ICONS.address}</span>
                  <div>
                    <p>{ADDRESS},</p>
                   
                   
                    
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <span className="material-icons rounded-full bg-[#C9D851] mr-3 p-1">{ICONS.phone}</span>
                  <p>{PHONE}</p>
                </div>
                <div className="flex items-center mb-4">
                  <span className="material-icons rounded-full bg-[#C9D851] mr-3 p-1">{ICONS.website}</span>
                  <a href={`http://${WEBSITE}`} className=" hover:underline">{WEBSITE}</a>
                </div>
                <div className="flex items-center">
                  <span className="material-icons rounded-full bg-[#C9D851] mr-3 p-1">{ICONS.email}</span>
                  <a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-0">
              <Link href="/" className="mb-10">
                <Image src="/footlogo.webp" alt="logo" width={123} height={150} />
              </Link>
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} className='bg-[#C9D851] rounded-lg' />
                    </Link>
                  ))}
                  <p className='text-lg text-white'>Follow us</p>
                </ul>

              </FooterColumn>
            </div>
          </div>

        </div>


        <p className="regular-14 w-full text-center lg:text-xl uppercase text-white">COPYRIGHT © MEDIBRIDGE | 2024</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap text-white">{title}</h4>
      {children}
    </div>
  )
}

export default Footer