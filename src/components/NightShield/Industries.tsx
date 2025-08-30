'use client'

import React, { useState, useEffect } from 'react'

import Image from 'next/image'

// Simple CountUp Component
const CountUp = ({ end, duration = 2000, delay = 0, suffix = "" }: { 
  end: number; 
  duration?: number; 
  delay?: number; 
  suffix?: string; 
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [end, duration, delay])

  return <span>{count}{suffix}</span>
}

const Industries = () => {
  const industryStats = [
    { metric: 500, label: "Venues Protected", icon: "🏢", suffix: "+" },
    { metric: 99.9, label: "Detection Rate", icon: "🎯", suffix: "%" },
    { metric: 24, label: "Monitoring", icon: "⏰", suffix: "/7" },
    { metric: 2, label: "Response Time", icon: "⚡", suffix: "s" },
    { metric: 85, label: "Incident Reduction", icon: "📉", suffix: "%" },
    { metric: 50, label: "Cities Served", icon: "🌍", suffix: "+" }
  ]

  const useCases = [
    {
      title: "Crowd Control",
      description: "Monitor crowd density and detect potential disturbances before they escalate.",
      icon: "👥"
    },
    {
      title: "Asset Protection",
      description: "Protect valuable equipment, cash, and inventory with intelligent monitoring.",
      icon: "💰"
    },
    {
      title: "Staff Safety",
      description: "Ensure the safety of your employees with real-time threat detection.",
      icon: "👷"
    },
    {
      title: "Compliance",
      description: "Meet regulatory requirements with comprehensive surveillance and reporting.",
      icon: "📋"
    }
  ]

  const globalPresence = [
    { region: "North America", venues: 200, delay: 0 },
    { region: "Europe", venues: 150, delay: 200 },
    { region: "Asia Pacific", venues: 100, delay: 400 },
    { region: "Other Regions", venues: 50, delay: 600 }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black"></div>
      <div className="absolute inset-0 grid-texture opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Image 
              src="/images/logo/LOGO TRANSPARENT.png" 
              alt="NightShield Logo" 
              width={48} 
              height={48}
              className="w-12 h-12"
            />
            <h2 className="text-4xl md:text-5xl font-bold">
              Trusted Across <span className="text-red-500">Industries</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            NightShield is protecting venues and businesses across multiple industries with proven results
          </p>
        </div>

        {/* Stats Grid with CountUp */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {industryStats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="bg-card-bg border border-red-500/20 rounded-xl p-6 card-hover relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `linear-gradient(rgba(229, 18, 47, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 18, 47, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '16px 16px'
                  }}></div>
                </div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/30">
                    <div className="text-3xl">{stat.icon}</div>
                  </div>
                  
                  {/* Metric with CountUp */}
                  <div className="text-2xl font-bold text-red-500 mb-2">
                    <CountUp 
                      end={stat.metric} 
                      duration={2000} 
                      delay={index * 200} 
                      suffix={stat.suffix}
                    />
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
                
                {/* Corner Brackets */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-red-500/40"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-red-500/40"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-red-500/40"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-red-500/40"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Common <span className="text-red-500">Use Cases</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-card-bg border border-red-500/20 rounded-xl p-6 card-hover relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `linear-gradient(rgba(229, 18, 47, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 18, 47, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-2xl flex items-center justify-center border border-red-500/30">
                    <div className="text-4xl">{useCase.icon}</div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-bold mb-3 text-white text-center">{useCase.title}</h4>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-center">{useCase.description}</p>
                </div>
                
                {/* Corner Brackets */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-red-500/40"></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-red-500/40"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-red-500/40"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-red-500/40"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Map */}
        <div className="bg-card-bg border border-red-500/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Global <span className="text-red-500">Presence</span>
            </h3>
            <p className="text-gray-300">
              NightShield is deployed across major cities worldwide, protecting venues and businesses 24/7
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalPresence.map((region, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-red-500/20">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10 rounded-xl">
                    <div className="w-full h-full" style={{
                      backgroundImage: `linear-gradient(rgba(229, 18, 47, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 18, 47, 0.1) 1px, transparent 1px)`,
                      backgroundSize: '16px 16px'
                    }}></div>
                  </div>
                  
                  {/* Region Icon */}
                  <div className="relative z-10 mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-full flex items-center justify-center border border-red-500/30">
                      <div className="text-2xl">🌍</div>
                    </div>
                  </div>
                  
                  {/* Region Name */}
                  <div className="text-xl font-bold text-red-500 mb-3">{region.region}</div>
                  
                  {/* Venue Count with CountUp */}
                  <div className="text-gray-300 text-lg font-semibold">
                    <CountUp 
                      end={region.venues} 
                      duration={2000} 
                      delay={region.delay} 
                      suffix="+ Venues" 
                    />
                  </div>
                  
                  {/* Corner Brackets */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-red-500/40"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-red-500/40"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-red-500/40"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-red-500/40"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries
