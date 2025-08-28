'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import DarkVeil from './DarkVeil'




const Hero = () => {
  const [timestamp, setTimestamp] = useState('')

  useEffect(() => {
    const updateTimestamp = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setTimestamp(timeString)
    }

    updateTimestamp()
    const interval = setInterval(updateTimestamp, 1000)

    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

 const seeInAction = () => {
  const element = document.querySelector('#how-it-works')
 
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  
 }

  const scrollToDemo = () => {
    const element = document.querySelector('#demo')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden aurora-bg">



      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
  <DarkVeil />
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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              <span className="split-text">
                <span>Real-Time AI Surveillance</span>
              </span>
              <br />
              <span className="gradient-text">That Protects Venues</span>
              <br />
              <span className="text-red-500">Before It's Too Late</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Advanced AI-powered surveillance system that detects threats in real-time, 
              protecting your venue and customers before incidents occur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
                onClick={seeInAction}
                className="btn-secondary text-lg px-8 py-4"
              >
                See It In Action
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">99.9%</div>
                <div className="text-sm text-gray-400">Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">&lt;2s</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">24/7</div>
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
                
                {/* CCTV Frame Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Top Bar - Camera Info */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black/80 backdrop-blur-sm flex items-center justify-between px-3 text-white text-xs font-mono">
                    <div className="flex items-center space-x-3">
                      <span className="text-red-500 font-bold">CAM 01</span>
                      <span className="text-gray-300">NightShield AI</span>
                      <span className="text-blue-400">ID: NS-2024-001</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-300">1080p</span>
                      <span className="text-green-400">●</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">●●●●●</span>
                        <span className="text-gray-300 text-xs">SIGNAL</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Top Right - REC Indicator */}
                  <div className="absolute top-2 right-2 flex items-center space-x-1 bg-red-500/90 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-bold">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>REC</span>
                    <span className="text-xs opacity-80">02:45:32</span>
                  </div>
                  
                  {/* Bottom Left - Timestamp */}
                  <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-mono">
                    <div className="flex items-center space-x-2">
                      <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-')}</span>
                      <span className="text-red-500">|</span>
                      <span className="text-green-400">{timestamp}</span>
                    </div>
                  </div>
                  
                  {/* Bottom Right - Status Indicators */}
                  <div className="absolute bottom-2 right-2 flex flex-col items-end space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="bg-green-500/90 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-bold">
                        <span className="flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                          <span>AI ACTIVE</span>
                        </span>
                      </div>
                      <div className="bg-blue-500/90 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-bold">
                        <span>HD</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-yellow-500/90 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-bold">
                        <span>ZOOM: 1.2x</span>
                      </div>
                      <div className="bg-purple-500/90 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-bold">
                        <span>AUTO FOCUS</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner Brackets */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-red-500"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-red-500"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-red-500"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-red-500"></div>
                  
                  {/* Scan Lines Effect */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="h-px bg-white/30 animate-pulse"></div>
                    <div className="h-px bg-white/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="h-px bg-white/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  {/* Grid Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  {/* Glitch Effect */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full bg-gradient-to-r from-red-500/20 via-transparent to-blue-500/20 animate-pulse" style={{ animationDuration: '3s' }}></div>
                  </div>
                  
                  {/* Motion Detection Box */}
                  <div className="absolute top-1/3 left-1/4 w-32 h-24 border-2 border-red-500 border-dashed animate-pulse">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      MOTION DETECTED
                    </div>
                  </div>
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-12 left-4 right-4">
                  <div className="flex items-center justify-between text-white/80 text-sm">
                    <span>NightShield Demo</span>
                    <div className="flex items-center space-x-2">
                      <span>2:45</span>
                      <div className="w-16 h-1 bg-white/20 rounded-full">
                        <div className="w-8 h-1 bg-red-500 rounded-full"></div>
                      </div>
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

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
            >
              LIVE DEMO
            </motion.div>
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