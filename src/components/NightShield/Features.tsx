'use client'

import React, { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import { ContainerScroll } from '../ui/ContainerScroll'

const Features = () => {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const availableFeatures = [
    {
      title: "Real-Time Threat Detection",
      description: "AI-powered algorithms detect potential threats within 2 seconds, providing instant alerts to security personnel.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        </svg>
      ),
      highlight: true,
      stats: "99.9% Accuracy"
    },
    {
      title: "Night Vision Cameras",
      description: "High-resolution infrared cameras with 4K clarity for 24/7 monitoring in complete darkness.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
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
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
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
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
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
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
        </svg>
      ),
      eta: "Q2 2024"
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered pattern recognition to predict and prevent incidents before they occur.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20A8 8 0 0 1 4 12A8 8 0 0 1 12 4M12 6A6 6 0 0 0 6 12A6 6 0 0 0 12 18A6 6 0 0 0 18 12A6 6 0 0 0 12 6M12 8A4 4 0 0 1 16 12A4 4 0 0 1 12 16A4 4 0 0 1 8 12A4 4 0 0 1 12 8Z"/>
        </svg>
      ),
      eta: "Q3 2024"
    },
    {
      title: "Integration APIs",
      description: "Seamless integration with existing security systems and third-party platforms.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
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
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
        </svg>
      ),
      eta: "Q1 2025"
    }
  ]

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center space-x-3 mb-8">
            <Image 
              src="/images/logo/LOGO TRANSPARENT.png" 
              alt="NightShield Logo" 
              width={48} 
              height={48}
              className="w-12 h-12"
            />
            <h2 className="text-5xl md:text-6xl font-bold">
              Powerful <span className="text-red-500">Features</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to protect your venue with cutting-edge AI surveillance technology
          </p>
        </div>

        {/* Available Features - Container Scroll Layout */}
        <ContainerScroll
          titleComponent={
            <div className="text-center mb-8">
              <div className="flex justify-center items-center space-x-4 mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <h3 className="text-4xl md:text-5xl font-bold text-white">Available Now</h3>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                Core features ready for immediate deployment with cutting-edge AI surveillance technology
              </p>
              <div className="flex justify-center mt-6">
                <div className="bg-red-500/10 border border-red-500/30 rounded-full px-6 py-2">
                  <span className="text-red-400 font-semibold text-sm">Scroll down to see features in action</span>
                </div>
              </div>
            </div>
          }
        >
          <div className="w-full h-full bg-gradient-to-br from-[#0B0B0F] to-[#1A1A1F] rounded-2xl p-3 md:p-4">
            <div className="space-y-4 md:space-y-6">
              {availableFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="relative group bg-[#0B0B0F]/80 border border-red-500/20 rounded-xl p-4 md:p-6 shadow-2xl backdrop-blur-sm
                           hover:border-red-500/40 hover:bg-[#0B0B0F]/95 transition-all duration-500 hover:scale-[1.01]
                           animate-fade-in-up opacity-0"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {/* Highlight Badge */}
                  {feature.highlight && (
                    <div className="absolute -top-2 left-4 z-10">
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                        MVP Feature
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                    {/* Feature Image */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-red-500/20 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full" style={{
                          backgroundImage: `linear-gradient(rgba(229, 18, 47, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 18, 47, 0.1) 1px, transparent 1px)`,
                          backgroundSize: '16px 16px'
                        }}></div>
                      </div>
                      
                      {/* Feature Icon */}
                      <div className={`absolute inset-0 flex items-center justify-center ${
                        feature.highlight 
                          ? 'bg-red-500/20' 
                          : 'bg-red-500/10'
                      } group-hover:bg-red-500/30 transition-colors duration-500`}>
                        <svg className="w-10 h-10 md:w-12 md:h-12 text-red-500 group-hover:text-red-400 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                          {feature.icon.props.children}
                        </svg>
                      </div>
                      
                      {/* Animated Elements */}
                      <div className="absolute inset-0">
                        {/* Corner Brackets */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-red-500/60 group-hover:border-red-400 transition-colors duration-500"></div>
                        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-red-500/60 group-hover:border-red-400 transition-colors duration-500"></div>
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-red-500/60 group-hover:border-red-400 transition-colors duration-500"></div>
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-red-500/60 group-hover:border-red-400 transition-colors duration-500"></div>
                        
                        {/* Scan Line */}
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-60 animate-pulse"></div>
                      </div>
                      
                      {/* Highlight Badge */}
                      {feature.highlight && (
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-500">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base group-hover:text-gray-200 transition-colors duration-500">
                        {feature.description}
                      </p>
                      
                      {/* Stats with Visual Enhancement */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse group-hover:bg-red-400"></div>
                          <div className="text-red-500 font-bold text-base md:text-lg group-hover:text-red-400 transition-colors duration-500">
                            {feature.stats}
                          </div>
                        </div>
                        <div className="text-gray-500 text-sm md:text-base font-mono bg-gray-800/50 px-2 py-1 rounded-lg group-hover:bg-red-500/20 group-hover:text-red-300 transition-all duration-500">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </ContainerScroll>

        {/* Upcoming Features - Moving Bulletin Cards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-400 mb-4">Coming Soon</h3>
            <p className="text-gray-500 text-lg">Advanced features in development</p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Moving Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-bulletin-float-1"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red-500/10 rounded-full blur-xl animate-bulletin-float-2"></div>
              <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-red-500/5 rounded-full blur-lg animate-bulletin-float-3"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {upcomingFeatures.map((feature, index) => {
                const baseDelay = index * 0.3
                const moveDelay = index * 0.8
                
                return (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Enhanced Glowing Trail Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/40 via-red-500/20 to-red-500/40 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md scale-110 group-hover:scale-125 glow-trail"></div>
                    
                    {/* Secondary Glow Layer */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/30 via-transparent to-red-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg scale-105 group-hover:scale-115"></div>
                    
                    {/* Main Card */}
                    <div 
                      className="relative bg-[#0B0B0F]/80 border border-gray-600/50 rounded-2xl p-6 h-full backdrop-blur-md coming-soon-card
                               group-hover:border-red-500 group-hover:bg-[#0B0B0F]/95 
                               transition-all duration-500 ease-out transform group-hover:scale-105 group-hover:-translate-y-2
                               hover:shadow-[0_0_30px_rgba(229,18,47,0.3)] hover:shadow-red-500/50 cursor-pointer
                               overflow-hidden"
                      style={{
                        boxShadow: '0 0 20px rgba(229, 18, 47, 0.1)',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/15 via-transparent to-red-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Enhanced Moving Bulletin Particles */}
                      <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        <div className="absolute top-2 left-2 w-2 h-2 bg-red-500/60 rounded-full animate-bulletin-particle-1 shadow-[0_0_8px_rgba(229,18,47,0.6)] bulletin-particle-enhanced"></div>
                        <div className="absolute top-1/3 right-2 w-1.5 h-1.5 bg-red-500/50 rounded-full animate-bulletin-particle-2 shadow-[0_0_6px_rgba(229,18,47,0.5)] bulletin-particle-enhanced"></div>
                        <div className="absolute bottom-1/3 left-2 w-2 h-2 bg-red-500/55 rounded-full animate-bulletin-particle-3 shadow-[0_0_7px_rgba(229,18,47,0.55)] bulletin-particle-enhanced"></div>
                      </div>
                      
                      {/* Feature Preview Image with Enhanced Glow */}
                      <div className="relative w-20 h-20 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 text-gray-200 flex items-center justify-center mb-5 coming-soon-icon
                                    group-hover:bg-red-500/30 group-hover:text-red-400 group-hover:shadow-[0_0_25px_rgba(229,18,47,0.6)] group-hover:shadow-red-500/60
                                    transition-all duration-500 ease-out transform group-hover:scale-110 group-hover:rotate-2
                                    animate-bulletin-pulse overflow-hidden border border-red-500/20 group-hover:border-red-500/50">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="w-full h-full" style={{
                            backgroundImage: `linear-gradient(rgba(229, 18, 47, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 18, 47, 0.1) 1px, transparent 1px)`,
                            backgroundSize: '12px 12px'
                          }}></div>
                        </div>
                        
                        {/* Feature Icon */}
                        <div className="relative z-10">
                          {feature.icon}
                        </div>
                        
                        {/* Enhanced Icon Glow Ring */}
                        <div className="absolute inset-0 rounded-xl bg-red-500/40 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-125"></div>
                        
                        {/* Secondary Glow Ring */}
                        <div className="absolute inset-0 rounded-xl bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-125 group-hover:scale-150"></div>
                        
                        {/* Coming Soon Badge with Glow */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,193,7,0.6)] group-hover:shadow-[0_0_15px_rgba(255,193,7,0.8)] transition-all duration-500">
                          <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-white transition-colors duration-500">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-5 group-hover:text-gray-200 transition-colors duration-500">
                          {feature.description}
                        </p>

                        {/* ETA and Number with Enhanced Bulletin Effects */}
                        <div className="flex items-center justify-between">
                          <div className="text-gray-500 text-xs font-medium group-hover:text-red-300 transition-colors duration-500 relative">
                            <span className="relative z-10">{feature.eta}</span>
                            <div className="absolute inset-0 bg-red-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-125"></div>
                          </div>
                          <div className="text-gray-600 text-lg font-bold group-hover:text-red-300 transition-colors duration-500 relative">
                            <span className="relative z-10">{String(index + 1).padStart(2, '0')}</span>
                            <div className="absolute inset-0 bg-red-500/25 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-125"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Hover Border Animation with Glow */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-500/60 transition-all duration-500 ease-out shadow-[0_0_20px_rgba(229,18,47,0.3)] group-hover:shadow-[0_0_30px_rgba(229,18,47,0.5)] coming-soon-border"></div>
                      
                      {/* Corner Glow Effects */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-red-500/40 group-hover:border-red-500/80 transition-all duration-500 rounded-tl-2xl opacity-0 group-hover:opacity-100 corner-glow"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-red-500/40 group-hover:border-red-500/80 transition-all duration-500 rounded-tr-2xl opacity-0 group-hover:opacity-100 corner-glow"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-red-500/40 group-hover:border-red-500/80 transition-all duration-500 rounded-bl-2xl opacity-0 group-hover:opacity-100 corner-glow"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-red-500/40 group-hover:border-red-500/80 transition-all duration-500 rounded-br-2xl opacity-0 group-hover:opacity-100 corner-glow"></div>
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
