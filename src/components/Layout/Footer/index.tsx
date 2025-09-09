'use client'
import React, { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import CookieSettingsModal from '../../NightShield/CookieSettings'

const Footer: FC = () => {
  const currentYear = new Date().getFullYear()
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(section)) {
        newSet.delete(section)
      } else {
        newSet.add(section)
      }
      return newSet
    })
  }

  const FooterSection = ({ title, children, sectionKey }: { title: string, children: React.ReactNode, sectionKey: string }) => {
    const isExpanded = expandedSections.has(sectionKey)
    
    return (
      <div className="group">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex items-center justify-between w-full lg:justify-start lg:pointer-events-none mb-4 lg:mb-6"
        >
          <h4 className="text-white font-semibold text-lg relative group-hover:text-red-500 transition-colors duration-300">
            {title}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300 hidden lg:block"></div>
          </h4>
          <Icon
            icon="lucide:chevron-down"
            className={`text-white/60 transition-transform duration-300 lg:hidden ${
              isExpanded ? 'rotate-180' : ''
            }`}
            width="20"
            height="20"
          />
        </button>
        <div className={`transition-all duration-300 overflow-hidden ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:max-h-96 lg:opacity-100'
        }`}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <footer className='bg-black relative overflow-hidden'>
      {/* Background Effects - Matching Website Theme */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-red-900/5 to-black'></div>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-900/3 via-transparent to-red-900/3'></div>
      
      {/* Subtle Grid Texture */}
      <div className='absolute inset-0 grid-texture opacity-20'></div>

      <div className='container px-4 py-8 lg:py-16 relative z-10'>
        {/* Logo Section - Mobile Optimized */}
        <div className='flex justify-center lg:justify-start mb-8 lg:mb-12'>
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/images/logo/TRANSPARENT LOGO WITH CIRCLE.png"
                alt="NightShield Logo"
                width={40}
                height={40}
                className="w-10 h-10 lg:w-12 lg:h-12 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-lg lg:text-2xl font-bold">
              Night<span className="text-red-500">Shield</span>
            </span>
          </div>
        </div>

        {/* Mobile-First Collapsible Layout */}
        <div className='space-y-6 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-8 pb-8 lg:pb-16'>
          
          {/* Product Section */}
          <FooterSection title="Product" sectionKey="product">
            <ul className='space-y-3'>
              <li>
                <Link href="/#how-it-works" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/security" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  Security
                </Link>
              </li>
            </ul>
          </FooterSection>

          {/* Company Section */}
          <FooterSection title="Company" sectionKey="company">
            <ul className='space-y-3'>
              <li>
                <Link href="/about" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  About
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/support" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  Support & SLA
                </Link>
              </li>
            </ul>
          </FooterSection>

          {/* Legal Section */}
          <FooterSection title="Legal & Privacy" sectionKey="legal">
            <ul className='space-y-3'>
              <li>
                <Link href="/privacy" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/aup" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  Acceptable Use
                </Link>
              </li>
              <li>
                <Link href="/data-retention" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  Data Retention
                </Link>
              </li>
              <li>
                <Link href="/dsar" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  DSAR (Data Request)
                </Link>
              </li>
            </ul>
          </FooterSection>

          {/* Compliance Section */}
          <FooterSection title="Compliance" sectionKey="compliance">
            <ul className='space-y-3'>
              <li>
                <Link href="/msa" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  Master Service Agreement (MSA)
                </Link>
                
              </li>
              <li>
              <Link href="/dpa" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  Data Processing Addendum (DPA)
                </Link>
              </li>
              <li>
               <Link href="/subprocessors" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  Sub-processors
                </Link>
              </li>
              <li>
                <Link href="/vulnerability-disclosure" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  Vulnerability Disclosure
                </Link>
              </li>
              <li>
                <Link href="/alerts-terms" className='text-white/60 hover:text-red-500 transition-all duration-200 hover:translate-x-1 block py-1'>
                  Operational Alerts Terms
                </Link>
              </li>
            </ul>
          </FooterSection>
        </div>

        {/* Utility Strip - Mobile Optimized */}
        <div className='border-t border-red-500/20 pt-6 pb-6 relative'>
          {/* Subtle glow effect on border */}
          <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent'></div>

          <div className='flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between'>
            
            {/* Copyright - Mobile First */}
            <div className='text-center lg:text-left'>
              <div className='text-white/60 text-sm'>
                © <strong className='text-white'>NightShield AI Ltd</strong> · {currentYear}
              </div>
              <div className='text-white/40 text-xs mt-1'>
                All rights reserved
              </div>
            </div>

            {/* Social Icons & Contact - Mobile Optimized */}
            <div className='flex flex-col items-center space-y-3 lg:flex-row lg:space-y-0 lg:space-x-6'>
              <div className='flex gap-4'>
                <Link href='https://www.linkedin.com/in/stilyxn' target='_blank' rel='noopener noreferrer' className='group relative'>
                  <div className='absolute inset-0 bg-red-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <Icon
                    icon='fa6-brands:linkedin'
                    width='20'
                    height='20'
                    className='text-white/60 group-hover:text-red-500 transition-all duration-300 relative z-10 group-hover:scale-110'
                  />
                </Link>
                <Link href='https://www.instagram.com/nightshield.ai' target='_blank' rel='noopener noreferrer' className='group relative'>
                  <div className='absolute inset-0 bg-red-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <Icon
                    icon='fa6-brands:instagram'
                    width='20'
                    height='20'
                    className='text-white/60 group-hover:text-red-500 transition-all duration-300 relative z-10 group-hover:scale-110'
                  />
                </Link>
              </div>
              
              <a
                href='mailto:contact@nightshield.ai'
                className='text-white/60 hover:text-red-500 transition-all duration-300 text-sm font-medium hover:underline text-center lg:text-left'
              >
                contact@nightshield.ai
              </a>
            </div>

            {/* Cookie Settings - Mobile Optimized */}
            <div className='text-center lg:text-right'>
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