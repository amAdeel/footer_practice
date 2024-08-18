import { FOOTER_LINKS, SOCIALS } from '../../constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className=" mb-24 mt-5 mx-12 bg-[#F7F7F7] text-[#666666]">
      <div className=" flex w-full flex-col gap-10">
      <div className="border bg-red-20"  />
      <div className='flex justify-between'>
        <p>PromptLayer All Right Reserved</p>
        <div className='flex gap-5'>
          <p>Privacy Policy</p>
          <p>Term</p>
        </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-[25%] md:flex-row ">
          <div className='flex flex-col '>
          <Link href="/">
            <Image src="/logo.jpeg" alt="logo" width={192} height={81}/>
          </Link>
           <p className='font-sans'>New York City.California, USA</p>
           
          </div>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1 '>
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn  title={columns.title} key={index} >
                <ul className=" flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link, subIndex) => (
                    <Link href="/" key={subIndex}>
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className=" flex  gap-4 text-gray-30">
                    <Link href="https://www.facebook.com/maher.adeel.96199/" target='blank' key="facebook">
                      <Image src="/facebook.svg" alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="https://www.instagram.com/maher_adeel_6421/" target='blank' key="instagram">
                      <Image src="/instagram.svg" alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="/" key="twitter">
                      <Image src="/twitter.svg" alt="logo" width={24} height={24} />
                    </Link>
                    <Link href="https://www.youtube.com/@thisisMrAdeeel" target='blank' key="youtube">
                      <Image src="/youtube.svg" alt="logo" width={24} height={24} />
                    </Link>
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className=" text-[18px] font-[700] whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;