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
          <div className="w-full h-full bg-gradient-to-br from-black via-red-900/20 to-black">
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
        <div className="max-w-4xl mx-auto text-center">
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
              />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              <div className="mb-3">
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
              <div className="mb-3">
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

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-center"
            >
              Advanced AI surveillance system that detects threats and protects venues before incidents occur. 
              Real-time monitoring with instant alerts and proactive security measures.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12"
            >
              <a
                href="https://calendly.com/nightshield/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-lg font-semibold hover:scale-105 active:scale-95 transition-transform"
              >
                Book Free Demo
              </a>
              <button
                onClick={scrollToAction}
                className="px-8 py-4 text-lg font-semibold border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 rounded-lg"
              >
                Learn More
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              className="grid grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 max-w-lg mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-1">
                  {useCounter({ end: 99.9, delay: isMobile ? 1300 : 2600, duration: isMobile ? 750 : 1500, decimals: 1 })}%
                </div>
                <div className="text-sm sm:text-base text-white font-medium">Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-1">
                  &lt;{useCounter({ end: 2, delay: isMobile ? 1300 : 2600, duration: isMobile ? 750 : 1500, decimals: 0 })}s
                </div>
                <div className="text-sm sm:text-base text-white font-medium">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-1">
                  {useCounter({ end: 24, delay: isMobile ? 1300 : 2600, duration: isMobile ? 750 : 1500, decimals: 0 })}/7
                </div>
                <div className="text-sm sm:text-base text-white font-medium">Monitoring</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: isMobile ? [0, 5, 0] : [0, 10, 0] }}
        transition={{ duration: isMobile ? 1.5 : 2, repeat: Infinity, ease: "easeInOut" }}
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