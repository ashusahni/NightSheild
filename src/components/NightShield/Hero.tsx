'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import DarkVeil from './DarkVeil'
import SplitText from '../ui/SplitText'
import { useCounter } from '../../hooks/useCounter'
import { useIsMobile } from '../../hooks/useIsMobile'





const Hero = () => {
  const { isMobile } = useIsMobile()

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const scrollToAction = () => {
    const element = document.querySelector('#how-it-works')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }





  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden aurora-bg" style={{
      boxShadow: 'inset 0 0 100px rgba(139, 0, 0, 0.1)'
    }}>



      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        {isMobile ? (
          // Mobile-optimized static background matching website theme
          <div className=" w-full h-full bg-gradient-to-br from-black via-red-900/20 to-black">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10"></div>
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 30% 40%, rgba(229, 18, 47, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(139, 0, 0, 0.06) 0%, transparent 50%)',
                mixBlendMode: 'overlay'
              }}
            />
          </div>
        ) : (
          // Desktop WebGL background
          <DarkVeil 
            hueShift={0}
            noiseIntensity={0.01}
            scanlineIntensity={0}
            speed={0.3}
            scanlineFrequency={0}
            warpAmount={0.02}
            resolutionScale={1}
          />
        )}
      </div>
      {/* Background Effects - Enhanced Red Theme */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-red-900/20 to-black"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10"></div>
      
      {/* Floating Elements - Enhanced Red Theme (Desktop only for performance) */}
      <div className="hidden md:block absolute top-20 left-10 w-20 h-20 bg-red-600/20 rounded-full blur-xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-20 right-10 w-32 h-32 bg-red-700/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="hidden md:block absolute top-1/2 left-1/4 w-16 h-16 bg-red-600/25 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="w-full px-4 relative z-10">
        <div className="max-w-4xl lg:pt-20 mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex justify-center mb-4 sm:mb-6 lg:mb-8"
            >
              <Image 
                src="/images/logo/NIGHTSHIELD copy 3.png" 
                alt="NightShield Logo" 
                width={80} 
                height={80}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                priority
                loading="eager"
              />
            </motion.div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
              <div className="mb-2 sm:mb-3">
                <SplitText 
                  delay={0.2}
                  duration={0.6}
                  staggerDelay={0.08}
                  splitBy="words"
                  animationType="slideUp"
                  className="text-white"
                >
                  Real-Time AI Surveillance
                </SplitText>
              </div>
              <div className="mb-2 sm:mb-3">
                <SplitText 
                  delay={0.6}
                  duration={0.6}
                  staggerDelay={0.08}
                  splitBy="words"
                  animationType="slideUp"
                  className="text-red-500"
                >
                  That Protects Venues
                </SplitText>
              </div>
              <div>
                <SplitText 
                  delay={1.0}
                  duration={0.6}
                  staggerDelay={0.08}
                  splitBy="words"
                  animationType="slideUp"
                  className="text-red-500"
                >
                  Before It&apos;s Too Late
                </SplitText>
              </div>
            </h1>

            


            {/* VSL Section - Hidden on Mobile */}
            {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="mb-8 sm:mb-12"
            >
              {/* VSL Header */}
              <div className="text-center mb-4 sm:mb-6 px-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4 tracking-tight">
                  See NightShield in Action
                </h2>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  Watch our AI prevent incidents before they happen
                </p>
              </div>

              {/* VSL Video Container */}
              <div className="relative max-w-4xl mx-auto vsl-video-container">
                {/* VSL Border Container with Red Theme */}
                <div className="relative p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-red-900/30 via-red-800/20 to-red-900/30 rounded-2xl border-2 border-red-200/40 shadow-2xl shadow-red-100/40">
                  {/* Inner Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 via-transparent to-red-600/10 pointer-events-none"></div>
                  
                  {/* VSL Video Container */}
                  <div className="relative bg-black rounded-xl overflow-hidden shadow-xl border border-red-500/30">
                    <div className="relative" style={{ paddingTop: '56.25%' }}>
                      <iframe
                        src="https://customer-k3cj56a9l7jvykr1.cloudflarestream.com/05611ee0f64fcd0e1b317bed8cfce772/iframe?poster=https%3A%2F%2Fimagedelivery.net%2FsGwlGTkiTjXCqLHfhol7bg%2Fd8dda54a-02da-4f7e-0659-754569d93a00%2Fpublic"

                        loading="eager"
                        style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
                        allow="accelerometer; gyroscope; encrypted-media; picture-in-picture; autoplay; fullscreen"
                        allowFullScreen
                        title="NightShield VSL Video"
                      ></iframe>
                      
                      {/* Enhanced CCTV Frame Overlay */}
                      <div className="absolute inset-0 pointer-events-none">
                        {/* Top Bar with Enhanced Styling */}
                        <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-black/80 via-black/60 to-black/80 backdrop-blur-sm flex items-center justify-between px-3 text-white text-xs">
                          <span className="text-red-400 font-bold flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                            NightShield AI
                          </span>
                          <span className="text-green-400 flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                            LIVE
                          </span>
                        </div>
                        
                        {/* Enhanced Corner Brackets */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-red-500"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-red-500"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-red-500"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-red-500"></div>
                        
                        {/* Subtle Scan Line Effect */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* VSL Caption with Enhanced Styling */}
                  <div className="mt-4 text-center">
                    <p className="text-gray-200 text-sm font-medium">
                      Real-time incident prevention
                    </p>
                    <div className="mt-2 w-16 h-0.5 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
            )}

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="flex justify-center items-center mb-6 sm:mb-8 md:mb-12 px-4"
            >
              <a
                href="https://calendly.com/nightshield/demo"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:scale-105 active:scale-95 transition-transform w-full sm:w-auto text-center"
              >
                Book Free Demo
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 max-w-lg mx-auto px-4"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-1">
                  {useCounter({ end: 99.9, delay: isMobile ? 1300 : 2600, duration: isMobile ? 750 : 1500, decimals: 1 })}%
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white font-medium">Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-1">
                  &lt;{useCounter({ end: 2, delay: isMobile ? 1300 : 2600, duration: isMobile ? 750 : 1500, decimals: 0 })}s
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white font-medium">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-1">
                  {useCounter({ end: 24, delay: isMobile ? 1300 : 2600, duration: isMobile ? 750 : 1500, decimals: 0 })}/7
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white font-medium">Monitoring</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}

export default Hero