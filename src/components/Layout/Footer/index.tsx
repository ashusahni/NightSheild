import React, { FC } from 'react'
import Link from 'next/link'
import { footerlabels } from '@/app/api/data'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const Footer: FC = () => {
  return (
    <footer className='pt-16 bg-black'>
      <div className='container px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-11 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16'>
          <div className='lg:col-span-4 md:col-span-6 col-span-6 flex flex-col gap-6'>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-xl lg:text-2xl font-bold">
                Night<span className="text-red-500">Shield</span>
              </span>
            </div>
            <p className='text-white/60'>Real-Time AI Surveillance
That Protects Venues
Before It's Too Late</p>
            <div className='flex gap-6 items-center relative z-1'>
              <Link href='https://www.facebook.com/' className='group'>
                <Icon
                  icon='fa6-brands:facebook-f'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-red-500'
                />
              </Link>
              <Link href='https://www.instagram.com/' className='group'>
                <Icon
                  icon='fa6-brands:instagram'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-red-500'
                />
              </Link>
              <Link href='https://www.twitter.com/' className='group'>
                <Icon
                  icon='fa6-brands:x-twitter'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-red-500'
                />
              </Link>
            </div>
          </div>
          <div className='lg:col-span-2 md:col-span-3 col-span-6'>
            <h4 className='text-white mb-4 font-medium text-24'>Links</h4>
            <ul>
              <li className='pb-4'>
                <Link href="#how-it-works" className='text-white/60 hover:text-red-500 text-17'>
                  How It Works
                </Link>
              </li>
              <li className='pb-4'>
                <Link href="#features" className='text-white/60 hover:text-red-500 text-17'>
                  Features
                </Link>
              </li>
              <li className='pb-4'>
                <Link href="#pricing" className='text-white/60 hover:text-red-500 text-17'>
                  Pricing
                </Link>
              </li>
              <li className='pb-4'>
                <Link href="#contact" className='text-white/60 hover:text-red-500 text-17'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='lg:col-span-2 md:col-span-3 col-span-6'>
            <h4 className='text-white mb-4 font-medium text-24'>Other Pages</h4>
            <ul>
              {footerlabels.map((item, index) => (
                <li key={index} className='pb-4'>
                  <Link
                    href={item.herf}
                    className='text-white/60 hover:text-red-500 text-17'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:col-span-3 md:col-span-4 col-span-6'>
            <h3 className='text-white text-24 font-medium mb-4'>Download App</h3>
            <div className='flex flex-col gap-4'>
              <Link href={"https://www.google.com/"}><Image src={"/images/footer/app-store-bedge.svg"} alt='play-store-bedge' width={126} height={23} /></Link>
              <Link href={"https://www.apple.com/"}><Image src={"/images/footer/app-store.svg"} alt='play-store-bedge' width={126} height={23} /></Link>
            </div>
          </div>
        </div>
        <p className='text-white/40 text-center py-8 border-t border-white/20'>Design & Develop by Ananay Goyal | 2025</p>
      </div>
    </footer>
  )
}

export default Footer
