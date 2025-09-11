'use client'

import React, { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import { useIsMobile } from '../../hooks/useIsMobile'
// import { ContainerScroll } from '../ui/ContainerScroll'

const Features = () => {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { isMobile } = useIsMobile()

  useEffect(() => {
    // Only add mouse move listener on desktop
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
      window.addEventListener('mousemove', handleMouseMove)
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isMobile])

  // Throttled scroll handler for better mobile performance
  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    // Use passive listener for better mobile performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const availableFeatures = [
    {
      title: "Real-Time Threat Detection",
      description: "AI-powered algorithms detect potential threats within 2 seconds, providing instant alerts to security personnel.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L13.09 8.26L20 9L13.09 9.74L12 17L10.91 9.74L4 9L10.91 8.26L12 1Z"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      highlight: true,
      stats: "99.9% Accuracy"
    },
    {
      title: "High-Definition Cameras",
      description: "High-resolution cameras with 4K clarity for 24/7 monitoring with advanced image processing.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ),
      highlight: false,
      stats: "4K Resolution"
    },
    {
      title: "Mobile App Alerts",
      description: "Instant push notifications with detailed incident information sent directly to security teams.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
          <path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          <circle cx="12" cy="12" r="1"/>
        </svg>
      ),
      highlight: false,
      stats: "<2s Response"
    },
    {
      title: "Cloud Storage",
      description: "Secure, encrypted cloud storage with automatic backup and unlimited retention periods.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
        </svg>
      ),
      highlight: false,
      stats: "Unlimited Storage"
    }
  ]

  const upcomingFeatures = [
    {
      title: "Facial Recognition",
      description: "Advanced biometric identification for known threats and VIP customer recognition.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          <path d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"/>
        </svg>
      ),
      eta: "Q2 2024"
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered pattern recognition to predict and prevent incidents before they occur.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
        </svg>
      ),
      eta: "Q3 2024"
    },
    {
      title: "Integration APIs",
      description: "Seamless integration with existing security systems and third-party platforms.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      eta: "Q4 2024"
    },
    {
      title: "Multi-Venue Management",
      description: "Centralized dashboard to manage multiple venues from a single interface.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      eta: "Q1 2025"
    }
  ]

  return (
    <section id="features" className="py-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Animated Background Elements - Simplified for mobile */}
      <div className="absolute inset-0">
        {!isMobile && (
          <>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </>
        )}
        {isMobile && (
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/3 via-transparent to-red-500/3"></div>
        )}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <Image 
              src="/images/logo/LOGO TRANSPARENT.png" 
              alt="NightShield Logo" 
              width={48} 
              height={48}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Powerful <span className="text-red-500">Features</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to protect your venue with cutting-edge AI surveillance technology
          </p>
        </div>

        {/* Available Features - ScrollStack Layout */}
        <div className="mb-16">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4">
            <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-3 sm:mb-4">
              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full ${!isMobile ? 'animate-pulse' : ''}`}></div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Available Now</h3>
              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full ${!isMobile ? 'animate-pulse' : ''}`}></div>
            </div>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Core features ready for immediate deployment with cutting-edge AI surveillance technology
            </p>
            <div className="flex justify-center mt-3 sm:mt-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-full px-4 sm:px-6 py-1.5 sm:py-2">
                <span className="text-red-400 font-semibold text-xs sm:text-sm">Scroll down to see features in action</span>
              </div>
            </div>
          </div>

          {/* ScrollStack Container - Centered and Optimized */}
          <div className={`w-full max-w-5xl mx-auto ${isMobile ? 'h-[350px]' : 'h-[480px]'} bg-gradient-to-br from-[#0B0B0F] via-[#1A1A1F] to-[#0B0B0F] rounded-xl sm:rounded-2xl p-3 sm:p-4 overflow-hidden border border-red-500/20 ${isMobile ? 'shadow-lg' : 'shadow-2xl'} ${isMobile ? 'mx-4' : ''}`}>
            <ScrollStack
              className="w-full h-full"
              itemDistance={isMobile ? 15 : 30}
              itemScale={isMobile ? 0.008 : 0.015}
              itemStackDistance={isMobile ? 1.5 : 3}
              stackPosition={isMobile ? "15%" : "10%"}
              scaleEndPosition={isMobile ? "10%" : "5%"}
              baseScale={isMobile ? 0.98 : 0.95}
              rotationAmount={0}
              blurAmount={0}
              onStackComplete={() => console.log('Stack animation completed')}
            >
              {availableFeatures.map((feature, index) => (
                <ScrollStackItem key={index} itemClassName="bg-[#1A1A1F] border border-red-500/30 p-4 sm:p-6">
                  <div className="relative group h-full">
                    {/* Highlight Badge */}
                    {feature.highlight && (
                      <div className="absolute -top-1 sm:-top-2 left-2 sm:left-4 z-10">
                        <div className="bg-red-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold shadow-lg">
                          MVP Feature
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 h-full">
                      {/* Feature Image */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-red-500/30 flex-shrink-0">
                        {/* Background Pattern - Simplified for mobile */}
                        {!isMobile && (
                          <div className="absolute inset-0 opacity-20">
                            <div className="w-full h-full" style={{
                              backgroundImage: `linear-gradient(rgba(229, 18, 47, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 18, 47, 0.1) 1px, transparent 1px)`,
                              backgroundSize: '16px 16px'
                            }}></div>
                          </div>
                        )}
                        
                        {/* Feature Icon */}
                        <div className={`absolute inset-0 flex items-center justify-center ${
                          feature.highlight 
                            ? 'bg-red-500/25' 
                            : 'bg-red-500/15'
                        }`}>
                          <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            {feature.icon.props.children}
                          </svg>
                        </div>
                        
                        {/* Static Elements */}
                        <div className="absolute inset-0">
                          {/* Corner Brackets */}
                          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-red-500/60"></div>
                          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-red-500/60"></div>
                          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-red-500/60"></div>
                          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-red-500/60"></div>
                        </div>
                        
                        {/* Highlight Badge */}
                        {feature.highlight && (
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
                          {feature.description}
                        </p>
                        
                        {/* Stats with Visual Enhancement */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                            <div className="text-red-500 font-bold text-sm sm:text-base md:text-lg">
                              {feature.stats}
                            </div>
                          </div>
                          <div className="text-gray-500 text-xs sm:text-sm md:text-base font-mono bg-gray-800/50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>

        {/* Upcoming Features - Moving Bulletin Cards */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-400 mb-2 sm:mb-4">Coming Soon</h3>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg">Advanced features in development</p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Moving Background Elements - Simplified for mobile */}
            <div className="absolute inset-0 overflow-hidden">
              {!isMobile && (
                <>
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-bulletin-float-1"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red-500/10 rounded-full blur-xl animate-bulletin-float-2"></div>
                  <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-red-500/5 rounded-full blur-lg animate-bulletin-float-3"></div>
                </>
              )}
              {isMobile && (
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5"></div>
              )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative z-10 px-4 sm:px-0">
              {upcomingFeatures.map((feature, index) => {
                const baseDelay = index * 0.3
                const moveDelay = index * 0.8
                
                return (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Enhanced Glowing Trail Effect - Disabled on mobile */}
                    {!isMobile && (
                      <>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/40 via-red-500/20 to-red-500/40 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md scale-110 group-hover:scale-125 glow-trail"></div>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/30 via-transparent to-red-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg scale-105 group-hover:scale-115"></div>
                      </>
                    )}
                    
                    {/* Main Card */}
                    <div 
                      className={`relative bg-[#0B0B0F]/80 border border-gray-600/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full backdrop-blur-md coming-soon-card
                               group-hover:border-red-500 group-hover:bg-[#0B0B0F]/95 
                               transition-all duration-500 ease-out transform ${isMobile ? '' : 'group-hover:scale-105 group-hover:-translate-y-2'}
                               hover:shadow-[0_0_30px_rgba(229,18,47,0.3)] hover:shadow-red-500/50 cursor-pointer
                               overflow-hidden`}
                      style={{
                        boxShadow: '0 0 20px rgba(229, 18, 47, 0.1)',
                        transition: isMobile ? 'all 0.3s ease-out' : 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      {/* Animated Background Pattern */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/15 via-transparent to-red-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isMobile ? 'hidden' : ''}`}></div>
                      
                      {/* Enhanced Moving Bulletin Particles - Disabled on mobile */}
                      {!isMobile && (
                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                          <div className="absolute top-2 left-2 w-2 h-2 bg-red-500/60 rounded-full animate-bulletin-particle-1 shadow-[0_0_8px_rgba(229,18,47,0.6)] bulletin-particle-enhanced"></div>
                          <div className="absolute top-1/3 right-2 w-1.5 h-1.5 bg-red-500/50 rounded-full animate-bulletin-particle-2 shadow-[0_0_6px_rgba(229,18,47,0.5)] bulletin-particle-enhanced"></div>
                          <div className="absolute bottom-1/3 left-2 w-2 h-2 bg-red-500/55 rounded-full animate-bulletin-particle-3 shadow-[0_0_7px_rgba(229,18,47,0.55)] bulletin-particle-enhanced"></div>
                        </div>
                      )}
                      
                      {/* Feature Preview Image with Enhanced Glow */}
                      <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 text-gray-200 flex items-center justify-center mb-4 sm:mb-5 coming-soon-icon
                                    group-hover:bg-red-500/30 group-hover:text-red-400 group-hover:shadow-[0_0_25px_rgba(229,18,47,0.6)] group-hover:shadow-red-500/60
                                    transition-all duration-500 ease-out transform ${isMobile ? '' : 'group-hover:scale-110 group-hover:rotate-2'}
                                    ${isMobile ? '' : 'animate-bulletin-pulse'} overflow-hidden border border-red-500/20 group-hover:border-red-500/50`}>
                        {/* Background Pattern - Simplified for mobile */}
                        {!isMobile && (
                          <div className="absolute inset-0 opacity-20">
                            <div className="w-full h-full" style={{
                              backgroundImage: `linear-gradient(rgba(229, 18, 47, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 18, 47, 0.1) 1px, transparent 1px)`,
                              backgroundSize: '12px 12px'
                            }}></div>
                          </div>
                        )}
                        
                        {/* Feature Icon */}
                        <div className="relative z-10">
                          {feature.icon}
                        </div>
                        
                        {/* Enhanced Icon Glow Ring - Disabled on mobile */}
                        {!isMobile && (
                          <>
                            <div className="absolute inset-0 rounded-xl bg-red-500/40 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-125"></div>
                            <div className="absolute inset-0 rounded-xl bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-125 group-hover:scale-150"></div>
                          </>
                        )}
                        
                        {/* Coming Soon Badge with Glow */}
                        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,193,7,0.6)] group-hover:shadow-[0_0_15px_rgba(255,193,7,0.8)] transition-all duration-500">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-200 mb-2 sm:mb-3 group-hover:text-white transition-colors duration-500">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 group-hover:text-gray-200 transition-colors duration-500">
                          {feature.description}
                        </p>

                        {/* ETA and Number with Enhanced Bulletin Effects - Simplified for mobile */}
                        <div className="flex items-center justify-between">
                          <div className="text-gray-500 text-xs font-medium group-hover:text-red-300 transition-colors duration-500 relative">
                            <span className="relative z-10">{feature.eta}</span>
                            {!isMobile && (
                              <div className="absolute inset-0 bg-red-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-125"></div>
                            )}
                          </div>
                          <div className="text-gray-600 text-sm sm:text-lg font-bold group-hover:text-red-300 transition-colors duration-500 relative">
                            <span className="relative z-10">{String(index + 1).padStart(2, '0')}</span>
                            {!isMobile && (
                              <div className="absolute inset-0 bg-red-500/25 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-125"></div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Hover Border Animation with Glow - Disabled on mobile */}
                      {!isMobile && (
                        <>
                          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-500/60 transition-all duration-500 ease-out shadow-[0_0_20px_rgba(229,18,47,0.3)] group-hover:shadow-[0_0_30px_rgba(229,18,47,0.5)] coming-soon-border"></div>
                          
                          {/* Corner Glow Effects */}
                          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-red-500/40 group-hover:border-red-500/80 transition-all duration-500 rounded-tl-2xl opacity-0 group-hover:opacity-100 corner-glow"></div>
                          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-red-500/40 group-hover:border-red-500/80 transition-all duration-500 rounded-tr-2xl opacity-0 group-hover:opacity-100 corner-glow"></div>
                          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-red-500/40 group-hover:border-red-500/80 transition-all duration-500 rounded-bl-2xl opacity-0 group-hover:opacity-100 corner-glow"></div>
                          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-red-500/40 group-hover:border-red-500/80 transition-all duration-500 rounded-br-2xl opacity-0 group-hover:opacity-100 corner-glow"></div>
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

       
      </div>
    </section>
  )
}

export default Features