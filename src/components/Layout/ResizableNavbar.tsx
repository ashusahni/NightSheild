'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from '@/components/ui/resizable-navbar'
import { cn } from '@/lib/utils'

type ResizableNavbarProps = {
  disableMobile?: boolean
}

const ResizableNavbar = ({ disableMobile = false }: ResizableNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Features', link: '/features' },
    { name: 'Testimonials', link: '/testimonials' },
    { name: 'About', link: '/about' },
    { name: 'Pricing', link: '/pricing' },
  ]

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMobileMenu = () => {
    setIsOpen(false)
  }

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody className="navbar-desktop">
        {/* Logo */}
        <Link href="/" className="navbar-logo relative z-20 mr-8 flex items-center space-x-3 group">
          <div className="relative">
            <Image 
              src="/images/logo/LOGO TRANSPARENT.png" 
              alt="NightShield Logo" 
              width={36} 
              height={36}
              className="w-9 h-9 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
          </div>
          <span className="text-lg font-bold text-white group-hover:text-red-500 transition-colors duration-300 whitespace-nowrap">
            Night<span className="text-red-500 group-hover:text-red-400">Shield</span>
          </span>
        </Link>

        {/* Navigation Items */}
        <NavItems 
          items={navItems} 
          onItemClick={closeMobileMenu}
          className="navbar-items text-black dark:text-white"
        />

        {/* CTA Button */}
        <NavbarButton
          href="#contact"
          variant="gradient"
          className="navbar-cta bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg hover:shadow-red-500/25 px-5 py-2 text-sm ml-8"
        >
          Get Started
        </NavbarButton>
      </NavBody>

      {/* Mobile Navigation */}
      {!disableMobile && (
        <MobileNav className="navbar-mobile">
          <MobileNavHeader>
            {/* Mobile Logo */}
            <Link href="/" className="flex items-center space-x-2 group" onClick={closeMobileMenu}>
              <div className="relative">
                <Image 
                  src="/images/logo/LOGO TRANSPARENT.png" 
                  alt="NightShield Logo" 
                  width={28} 
                  height={28}
                  className="w-7 h-7 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
              </div>
              <span className="text-base font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                Night<span className="text-red-500 group-hover:text-red-400">Shield</span>
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <MobileNavToggle isOpen={isOpen} onClick={toggleMobileMenu} />
          </MobileNavHeader>

          {/* Mobile Menu */}
          <MobileNavMenu isOpen={isOpen} onClose={closeMobileMenu}>
            <div className="space-y-4 w-full">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="block text-lg text-black dark:text-white hover:text-red-500 transition-colors duration-200 py-2"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <NavbarButton
                  href="#contact"
                  variant="gradient"
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg hover:shadow-red-500/25"
                  onClick={closeMobileMenu}
                >
                  Get Started
                </NavbarButton>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      )}
    </Navbar>
  )
}

export default ResizableNavbar