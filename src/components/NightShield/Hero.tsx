'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import DarkVeil from './DarkVeil'
import SplitText from '../ui/SplitText'
import { useCounter } from '../../hooks/useCounter'





const Hero = () => {


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
  <DarkVeil 
    hueShift={0}
    noiseIntensity={0.01}
    scanlineIntensity={0}
    speed={0.3}
    scanlineFrequency={0}
    warpAmount={0.02}
    resolutionScale={1}
  />
</div>
      {/* Background Effects - Enhanced Red Theme */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-red-900/20 to-black"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10"></div>
      
      {/* Floating Elements - Enhanced Red Theme */}
      <div className="hidden md:block absolute top-20 left-10 w-20 h-20 bg-red-600/20 rounded-full blur-xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-20 right-10 w-32 h-32 bg-red-700/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="hidden md:block absolute top-1/2 left-1/4 w-16 h-16 bg-red-600/25 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:col-span-2"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex justify-center lg:justify-start mb-4 sm:mb-6 lg:mb-8"
            >
              <Image 
                src="/images/logo/LOGO BLACK BACKGROUND.png" 
             
                alt="NightShield Logo" 
                width={80} 
                height={80}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              />
            </motion.div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              <div className="mb-2">
                <SplitText 
                  delay={0.2}
                  duration={0.6}
                  staggerDelay={0.08}
                  splitBy="words"
                  animationType="slideUp"
                  className=""
                >
                  Real-Time AI Surveillance
                </SplitText>
              </div>
              <div className="mb-2">
                <SplitText 
                  delay={0.6}
                  duration={0.6}
                  staggerDelay={0.08}
                  splitBy="words"
                  animationType="slideUp"
                  className="gradient-text"
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

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-primary text-sm sm:text-base md:text-lg px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4"
              >
                Book Live Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAction}
                className="btn-secondary text-sm sm:text-base md:text-lg px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4"
              >
                See It In Action
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-500">
                  {useCounter({ end: 99.9, delay: 2600, duration: 1500, decimals: 1 })}%
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-500">
                  &lt;{useCounter({ end: 2, delay: 2600, duration: 1500, decimals: 0 })}s
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-500">
                  {useCounter({ end: 24, delay: 2600, duration: 1500, decimals: 0 })}/7
                </div>
                <div className="text-xs sm:text-sm text-gray-400">Monitoring</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - VSL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:col-span-3 mt-8 lg:mt-0"
          >
            <div className="spotlight-card bg-card-bg rounded-2xl p-3 sm:p-4 lg:p-6 border border-red-500/20">
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=OF-II5a54d2t5-zY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                
                {/* Simplified CCTV Frame Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Simple Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-black/60 backdrop-blur-sm flex items-center justify-between px-3 text-white text-xs">
                    <span className="text-red-500 font-bold">NightShield AI</span>
                    <span className="text-green-400">● LIVE</span>
                  </div>
                  
                  {/* Simple Corner Brackets */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-red-500"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-red-500"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-red-500"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-red-500"></div>
                  
                  {/* Simple Motion Detection Box */}
                  {/* <div className="absolute top-1/3 left-1/4 w-24 h-16 border border-red-500 border-dashed">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      DETECTED
                    </div>
                  </div> */}
                </div>
              </div>
              
              <div className="mt-3 sm:mt-4 text-center">
                <p className="text-gray-300 text-xs sm:text-sm">
                  Watch how NightShield prevents incidents in real-time
                </p>
              </div>
            </div>


          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-red-500 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-red-500 rounded-full mt-1 sm:mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero