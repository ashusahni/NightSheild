import React, { FC } from 'react'
import Link from 'next/link'
import { footerlabels } from '@/app/api/data'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const Footer: FC = () => {
  return (
    <footer className='pt-16 bg-black'>
      <div className='container px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:gap-16 md:gap-8 gap-6 pb-16'>
          <div className='flex flex-col gap-6'>
            <div className="flex items-center space-x-3">
              <Image 
                src="/images/logo/LOGO TRANSPARENT.png" 
                alt="NightShield Logo" 
                width={48} 
                height={48}
                className="w-12 h-12"
              />
              <span className="text-xl lg:text-2xl font-bold">
                Night<span className="text-red-500">Shield</span>
              </span>
            </div>
            <p className='text-white/60 text-sm leading-relaxed'>Real-Time AI Surveillance That Protects Venues Before It&apos;s Too Late</p>
            <div className='flex gap-4 items-center'>
              <Link href='https://www.facebook.com/' className='group'>
                <Icon
                  icon='fa6-brands:facebook-f'
                  width='20'
                  height='20'
                  className='text-white group-hover:text-red-500 transition-colors'
                />
              </Link>
              <Link href='https://www.instagram.com/' className='group'>
                <Icon
                  icon='fa6-brands:instagram'
                  width='20'
                  height='20'
                  className='text-white group-hover:text-red-500 transition-colors'
                />
              </Link>
              <Link href='https://www.twitter.com/' className='group'>
                <Icon
                  icon='fa6-brands:x-twitter'
                  width='20'
                  height='20'
                  className='text-white group-hover:text-red-500 transition-colors'
                />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className='text-red-500 mb-4 font-semibold text-lg uppercase tracking-wider'>LEGALITY & COMPLIANCE</h4>
            <ul className='space-y-3'>
              <li>
                <Link href="#" className='flex items-center gap-2 text-white hover:text-red-500 text-sm transition-colors'>
                  <span className='text-red-500 text-sm font-bold'>!!</span>
                  <span className='underline'>GUIDE (IMPORTANT)</span>
                </Link>
              </li>
              <li>
                <Link href="#" className='flex items-center gap-2 text-white hover:text-red-500 text-sm transition-colors'>
                  <Icon 
                    icon='mdi:briefcase' 
                    width='14' 
                    height='14' 
                    className='text-amber-500'
                  />
                  <span className='underline'>Contract Library</span>
                </Link>
              </li>
              <li>
                <Link href="#" className='flex items-center gap-2 text-white hover:text-red-500 text-sm transition-colors'>
                  <Icon 
                    icon='mdi:bank' 
                    width='14' 
                    height='14' 
                    className='text-white'
                  />
                  <span className='underline'>Legal Checklist</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className='text-white mb-4 font-semibold text-lg uppercase tracking-wider'>Compliance & Legal</h4>
            <ul className='space-y-3'>
              <li>
                <Link href="#" className='flex items-center gap-2 text-white hover:text-red-500 text-sm transition-colors'>
                  <Icon 
                    icon='mdi:check-circle' 
                    width='14' 
                    height='14' 
                    className='text-blue-500'
                  />
                  <span className='underline'>GDPR Program</span>
                </Link>
              </li>
              <li>
                <Link href="#" className='flex items-center gap-2 text-white hover:text-red-500 text-sm transition-colors'>
                  <Icon 
                    icon='mdi:cctv' 
                    width='14' 
                    height='14' 
                    className='text-blue-500'
                  />
                  <span className='underline'>CCTV Signage SOP</span>
                </Link>
              </li>
              <li>
                <Link href="#" className='text-white hover:text-red-500 text-sm transition-colors underline'>
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className='text-white hover:text-red-500 text-sm transition-colors underline'>
                  Disclosures
                </Link>
              </li>
              <li>
                <Link href="#" className='text-white hover:text-red-500 text-sm transition-colors underline'>
                  Latest News
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className='text-white/40 text-center py-8 border-t border-white/20'>Design & Develop by Ananay Goyal | 2025</p>
      </div>
    </footer>
  )
}

export default Footer
