'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { IconMenu2, IconX, IconChevronDown } from '@tabler/icons-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    setIsDropdownOpen(false)
    document.body.style.overflow = 'unset'
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '/pricing' },
    // { name: 'Venues', href: '/venues' },
    // { name: 'Contact', href: '#contact' },
  ]

  const featuresDropdown = [
    { name: 'AI Surveillance', href: '#ai-surveillance' },
    { name: 'Real-time Monitoring', href: '#real-time' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Integration', href: '#integration' },
  ]

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50' 
            : 'bg-black/20 backdrop-blur-sm'
        }`}
      >

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
                <div className="relative">
                  <Image 
                    src="/images/logo/LOGO TRANSPARENT.png" 
                    alt="NightShield Logo" 
                    width={48} 
                    height={48}
                    className="w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  />
                  <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
                </div>
                <span className="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                  Night<span className="text-red-500 group-hover:text-red-400">Shield</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:flex items-center space-x-8"
            >
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {item.name === 'Features' ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors duration-200 group"
                      >
                        <span>{item.name}</span>
                        <IconChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                          >
                            {featuresDropdown.map((feature) => (
                              <Link
                                key={feature.name}
                                href={feature.href}
                                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-b-0"
                                onClick={() => setIsDropdownOpen(false)}
                              >
                                {feature.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-all duration-200 relative group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side Actions */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden lg:flex items-center space-x-4"
            >
              {/* CTA Button */}
              <Link
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 border border-red-400/20 hover:border-red-400/40"
              >
                Get Started
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
            >
              {isOpen ? (
                <IconX size={24} className="text-white" />
              ) : (
                <IconMenu2 size={24} className="text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
                  <Image 
                    src="/images/logo/LOGO TRANSPARENT.png" 
                    alt="NightShield Logo" 
                    width={40} 
                    height={40}
                    className="w-10 h-10"
                  />
                  <span className="text-lg font-bold text-white">
                    Night<span className="text-red-500">Shield</span>
                  </span>
                </Link>
                
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  <IconX size={20} className="text-white" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 px-6 py-8">
                <div className="space-y-6">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.name === 'Features' ? (
                        <div>
                          <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center justify-between w-full text-left text-lg text-white/80 hover:text-white transition-colors duration-200"
                          >
                            <span>{item.name}</span>
                            <IconChevronDown 
                              size={20} 
                              className={`transition-transform duration-200 ${
                                isDropdownOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          
                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 ml-4 space-y-3 overflow-hidden"
                              >
                                {featuresDropdown.map((feature) => (
                                  <Link
                                    key={feature.name}
                                    href={feature.href}
                                    className="block text-white/60 hover:text-white transition-colors duration-200"
                                    onClick={closeMenu}
                                  >
                                    {feature.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block text-lg text-white/80 hover:text-white transition-colors duration-200"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <Link
                    href="#contact"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg text-center transition-all duration-300 border border-red-400/20 hover:border-red-400/40"
                    onClick={closeMenu}
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Mobile Footer */}
              <div className="p-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">© 2024 NightShield</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
