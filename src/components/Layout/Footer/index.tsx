'use client'
import React, { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import CookieSettingsModal from '../../NightShield/CookieSettings'

const Footer: FC = () => {
  const currentYear = new Date().getFullYear()
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false)

  return (
    <footer className='pt-16 bg-black relative overflow-hidden'>
      {/* Background Effects - Matching Website Theme */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-red-900/5 to-black'></div>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-900/3 via-transparent to-red-900/3'></div>
      
      {/* Subtle Grid Texture */}
      <div className='absolute inset-0 grid-texture opacity-20'></div>
      
      <div className='container px-4 relative z-10'>
        {/* Logo Section */}
        <div className='flex justify-center lg:justify-start mb-12'>
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Image 
                src="/images/logo/TRANSPARENT LOGO WITH CIRCLE.png" 
                alt="NightShield Logo" 
                width={48} 
                height={48}
                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl lg:text-2xl font-bold">
              Night<span className="text-red-500">Shield</span>
            </span>
          </div>
        </div>

        {/* Four Column Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16'>
          
          {/* Column A — Product */}
          <div className='group'>
            <h4 className='text-white mb-6 font-semibold text-lg relative'>
              Product
              <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300'></div>
            </h4>
            <ul className='space-y-3'>
              <li>
                <Link href="/#how-it-works" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'>
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/security" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'>
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Column B — Company */}
          <div className='group'>
            <h4 className='text-white mb-6 font-semibold text-lg relative'>
              Company
              <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300'></div>
            </h4>
            <ul className='space-y-3'>
              <li>
                <Link href="/about" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'>
                  About
                </Link>
              </li>
             
              <li>
                <Link href="/accessibility" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'>
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/support" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'>
                  Support & SLA
                </Link>
              </li>
            </ul>
          </div>

          {/* Column C — Trust & Privacy */}
          <div className='group'>
            <h4 className='text-white mb-6 font-semibold text-lg relative'>
              Trust & Privacy
              <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300'></div>
            </h4>
            <ul className='space-y-3'>
              <li>
                <Link href="/privacy" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/aup" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'>
                  Acceptable Use
                </Link>
              </li>
              <li>
                <Link href="/data-retention" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'>
                  Data Retention
                </Link>
              </li>
              <li>
                <Link href="/dsar" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'>
                  DSAR (Data Request)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column D — Legal & Compliance */}
          <div className='group'>
            <h4 className='text-white mb-6 font-semibold text-lg relative'>
              Legal & Compliance
              <div className='absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300'></div>
            </h4>
            <ul className='space-y-3'>
              <li>
                <a 
                  href="https://file.notion.so/f/f/b4c677c7-5b9d-405a-8285-324910430d51/0e6ca4af-28b2-4f4e-b9e5-8575947ea8bd/MSA-Website.pdf?table=block&id=26358b3a-1cac-80e8-be6c-c9655d84e2ec&spaceId=b4c677c7-5b9d-405a-8285-324910430d51&expirationTimestamp=1757181600000&signature=AjgZlfWJQ77tCW9SfaFoNOvRqbDZ_QNCFQkvvg7j37w&downloadName=%2FMSA+Page.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'
                >
                  Master Service Agreement (MSA)
                </a>
              </li>
              <li>
                <a 
                  href="https://file.notion.so/f/f/b4c677c7-5b9d-405a-8285-324910430d51/ed49c5a4-eab9-4731-9d36-8efda6d35684/DPA-Website.pdf?table=block&id=26358b3a-1cac-8045-ac20-e6094e6fa2fe&spaceId=b4c677c7-5b9d-405a-8285-324910430d51&expirationTimestamp=1757181600000&signature=BF9ktoVD1CEuabhcE39b1M4MYtKRBV9R7sTgXEbqbSI&downloadName=%2FDPA+Page.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'
                >
                  Data Processing Addendum (DPA)
                </a>
              </li>
              <li>
                <a 
                  href="https://file.notion.so/f/f/b4c677c7-5b9d-405a-8285-324910430d51/2af7b1aa-d8b8-45a2-bff1-1b89bea5cce0/SUBPROCESSORS_-_Website.pdf?table=block&id=26358b3a-1cac-80bc-b843-f5d31372e753&spaceId=b4c677c7-5b9d-405a-8285-324910430d51&expirationTimestamp=1757181600000&signature=4N09g9mnhFOBA0oQPuoaiFcP4YEKEGle_2sIrLPdLjE&downloadName=%2FSubprocessors-Page.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'
                >
                  Sub-processors
                </a>
              </li>
              <li>
                <Link href="/vulnerability-disclosure" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'>
                  Vulnerability Disclosure
                </Link>
              </li>
              <li>
                <Link href="/alerts-terms" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block'>
                  Operational Alerts Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Utility Strip */}
        <div className='border-t border-red-500/20 pt-8 pb-8 relative'>
          {/* Subtle glow effect on border */}
          <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent'></div>
          
          <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
            {/* Left: Copyright */}
            <div className='text-white/60 text-sm'>
              © <strong className='text-white'>NightShield AI Ltd</strong> · {currentYear}. All rights reserved.
            </div>
            
            {/* Center: Social Icons & Contact */}
            <div className='flex items-center gap-6'>
              <div className='flex gap-4'>
                <Link href='https://www.linkedin.com/' className='group relative'>
                  <div className='absolute inset-0 bg-red-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <Icon
                    icon='fa6-brands:linkedin'
                    width='20'
                    height='20'
                    className='text-white/60 group-hover:text-red-500 transition-all duration-300 relative z-10 group-hover:scale-110'
                  />
                </Link>
                <Link href='https://www.twitter.com/' className='group relative'>
                  <div className='absolute inset-0 bg-red-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <Icon
                    icon='fa6-brands:x-twitter'
                    width='20'
                    height='20'
                    className='text-white/60 group-hover:text-red-500 transition-all duration-300 relative z-10 group-hover:scale-110'
                  />
                </Link>
              </div>
              <span className='text-white/60 text-sm'>·</span>
              <a 
                href='mailto:security@nightshield.ai' 
                className='text-white/60 hover:text-red-500 transition-all duration-300 text-sm font-medium hover:underline'
              >
                security@nightshield.ai
              </a>
            </div>
            
            {/* Right: Cookie Settings */}
            <div className='text-white/40 text-sm'>
              <button
                onClick={() => setIsCookieSettingsOpen(true)}
                className="text-white/60 hover:text-red-500 transition-all duration-300 text-sm font-medium hover:underline"
              >
                Manage Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      <CookieSettingsModal
        isOpen={isCookieSettingsOpen}
        onClose={() => setIsCookieSettingsOpen(false)}
      />
    </footer>
  )
}

export default Footer