'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

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

        {/* Available Features - Scroll Stack Layout */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Available Now</h3>
            <p className="text-gray-400 text-lg">Core features ready for immediate deployment</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto h-[400px]">
            <ScrollStack
              className="h-full"
              itemDistance={40}
              itemScale={0.02}
              itemStackDistance={15}
              stackPosition="15%"
              scaleEndPosition="5%"
              baseScale={0.98}
              rotationAmount={0}
              blurAmount={0.2}
            >
              {availableFeatures.map((feature, index) => (
                <ScrollStackItem
                  key={index}
                  itemClassName="bg-[#0B0B0F] border border-red-500/20 rounded-2xl p-8 shadow-2xl backdrop-blur-sm"
                >
                  {/* Highlight Badge */}
                  {feature.highlight && (
                    <div className="absolute -top-3 left-8 z-10">
                      <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        MVP Feature
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-8">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                      feature.highlight 
                        ? 'bg-red-500/20 text-red-500 shadow-lg shadow-red-500/20' 
                        : 'bg-red-500/10 text-red-500'
                    }`}>
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                        {feature.icon.props.children}
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                        {feature.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between">
                        <div className="text-red-500 font-bold text-xl">
                          {feature.stats}
                        </div>
                        <div className="text-gray-500 text-lg font-mono">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </div>

        {/* Upcoming Features - Enhanced with Cool Effects */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-400 mb-4">Coming Soon</h3>
            <p className="text-gray-500 text-lg">Advanced features in development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingFeatures.map((feature, index) => {
              const cardOffset = index * 100
              const scrollProgress = Math.max(0, Math.min(1, (scrollY - cardOffset) / 300))
              const translateY = scrollProgress * 30
              const opacity = Math.min(1, scrollProgress * 1.5)
              
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    transform: `translateY(${translateY}px)`,
                    opacity: opacity,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  {/* Magnetic Card */}
                  <div 
                    className="relative bg-[#0B0B0F]/50 border border-gray-600/30 rounded-xl p-6 h-full backdrop-blur-sm
                             group-hover:border-red-500/50 group-hover:bg-[#0B0B0F]/80 
                             transition-all duration-500 ease-out transform group-hover:scale-105 group-hover:-translate-y-2
                             hover:shadow-2xl hover:shadow-red-500/10"
                    style={{
                      transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.01}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.01}deg)`,
                    }}
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon with Glow Effect */}
                    <div className="relative w-12 h-12 rounded-lg bg-gray-600/20 text-gray-400 flex items-center justify-center mb-4 
                                  group-hover:bg-red-500/20 group-hover:text-red-500 group-hover:shadow-lg group-hover:shadow-red-500/20
                                  transition-all duration-500 ease-out transform group-hover:scale-110">
                      {feature.icon}
                    </div>

                    {/* Content with Staggered Animation */}
                    <div className="relative">
                      <h3 className="text-lg font-bold text-gray-400 mb-3 group-hover:text-white transition-colors duration-500">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-500">
                        {feature.description}
                      </p>

                      {/* ETA with Pulse Effect */}
                      <div className="flex items-center justify-between">
                        <div className="text-gray-600 text-xs font-medium group-hover:text-red-500 transition-colors duration-500 relative">
                          {feature.eta}
                          <div className="absolute inset-0 bg-red-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <div className="text-gray-700 text-xs group-hover:text-gray-500 transition-colors duration-500">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Feature Comparison - Enhanced with 3D Cards */}
        <div className="bg-[#0B0B0F] border border-red-500/20 rounded-3xl p-12 mb-20 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5"></div>
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {[
              {
                title: "Available Now",
                description: "Core features ready for immediate deployment with proven reliability",
                icon: (
                  <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  </svg>
                ),
                color: "red"
              },
              {
                title: "Coming Soon",
                description: "Advanced features in active development with clear roadmap",
                icon: (
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
                  </svg>
                ),
                color: "gray"
              },
              {
                title: "Future Updates",
                description: "Continuous improvements and new capabilities based on user feedback",
                icon: (
                  <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20A8 8 0 0 1 4 12A8 8 0 0 1 12 4M12 6A6 6 0 0 0 6 12A6 6 0 0 0 12 18A6 6 0 0 0 18 12A6 6 0 0 0 12 6M12 8A4 4 0 0 1 16 12A4 4 0 0 1 12 16A4 4 0 0 1 8 12A4 4 0 0 1 12 8Z"/>
                  </svg>
                ),
                color: "red"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 ${item.color === 'red' ? 'bg-red-500/20' : 'bg-gray-600/20'} rounded-2xl flex items-center justify-center mx-auto mb-6 
                                group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/20 transition-all duration-500 ease-out`}>
                  {item.icon}
                </div>
                <h3 className={`text-2xl font-bold ${item.color === 'red' ? 'text-red-500' : 'text-gray-400'} mb-3 group-hover:text-white transition-colors duration-500`}>
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
