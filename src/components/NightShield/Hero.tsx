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





  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden aurora-bg">



      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
  <DarkVeil 
    hueShift={0} // Red hue (0 degrees is red)
    noiseIntensity={0.02} // Subtle noise for texture
    scanlineIntensity={0.1} // Subtle scanlines
    speed={0.3} // Slower animation for subtlety
    scanlineFrequency={2.0} // Scanline frequency
    warpAmount={0.02} // Subtle warping
    resolutionScale={1}
  />
</div>
      {/* Background Effects */}
      <div className="absolute inset-0 grid-texture opacity-10 md:opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      
      {/* Floating Elements - Hidden on mobile for performance */}
      <div className="hidden md:block absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-20 right-10 w-32 h-32 bg-red-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="hidden md:block absolute top-1/2 left-1/4 w-16 h-16 bg-red-500/15 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="flex items-center space-x-3">
                <Image 
                  src="/images/logo/LOGO TRANSPARENT.png" 
                  alt="NightShield Logo" 
                  width={64} 
                  height={64}
                  className="w-16 h-16"
                />
                <span className="text-2xl lg:text-3xl font-bold">
                  Night<span className="text-red-500">Shield</span>
                </span>
              </div>
            </motion.div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <div className="mb-2">
                <SplitText 
                  delay={0.2}
                  duration={0.6}
                  staggerDelay={0.02}
                  splitBy="chars"
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
                  staggerDelay={0.02}
                  splitBy="chars"
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
                  staggerDelay={0.02}
                  splitBy="chars"
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
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-primary text-lg px-8 py-4"
              >
                Book Live Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-secondary text-lg px-8 py-4"
              >
                See It In Action
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">
                  {useCounter({ end: 99.9, delay: 2600, duration: 1500, decimals: 1 })}%
                </div>
                <div className="text-sm text-gray-400">Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">
                  &lt;{useCounter({ end: 2, delay: 2600, duration: 1500, decimals: 0 })}s
                </div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">
                  {useCounter({ end: 24, delay: 2600, duration: 1500, decimals: 0 })}/7
                </div>
                <div className="text-sm text-gray-400">Monitoring</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - VSL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="spotlight-card bg-card-bg rounded-2xl p-6 border border-red-500/20">
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
                {/* Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                
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
                  <div className="absolute top-1/3 left-1/4 w-24 h-16 border border-red-500 border-dashed">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      DETECTED
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-gray-300 text-sm">
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero