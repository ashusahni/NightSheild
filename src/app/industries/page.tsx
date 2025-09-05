'use client'

import React, { useState, useEffect, useMemo, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

// Minimal CountUp Component
const CountUp = ({ end, duration = 2000, delay = 0, suffix = "" }: { 
  end: number; 
  duration?: number; 
  delay?: number; 
  suffix?: string; 
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const count = useMotionValue(0)
  const rounded = useSpring(count, { damping: 30, stiffness: 60 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const unsubscribe = rounded.onChange(v => setDisplayValue(Math.round(v)))
    return unsubscribe
  }, [rounded])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      count.set(end)
    }, delay)

    return () => clearTimeout(timer)
  }, [end, delay, count])

  return (
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: "easeOut" }}
      className="font-medium tabular-nums"
    >
      {displayValue}{suffix}
    </motion.span>
  )
}

const Industries = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  // Minimal industry stats
  const industryStats = useMemo(() => [
    { 
      metric: 500, 
      label: "Venues Protected", 
      suffix: "+",
      description: "Active deployments worldwide"
    },
    { 
      metric: 99.9, 
      label: "Detection Accuracy", 
      suffix: "%",
      description: "AI-powered threat identification"
    },
    { 
      metric: 24, 
      label: "Hour Monitoring", 
      suffix: "/7",
      description: "Continuous surveillance coverage"
    },
    { 
      metric: 2, 
      label: "Second Response", 
      suffix: "s",
      description: "Average detection time"
    }
  ], [])

  const useCases = useMemo(() => [
    {
      title: "Crowd Management",
      description: "Real-time crowd density monitoring with intelligent behavior analysis and automated alerts.",
      features: ["Density mapping", "Pattern recognition", "Smart alerts"]
    },
    {
      title: "Asset Security",
      description: "Comprehensive protection for valuable equipment and inventory with motion detection.",
      features: ["Perimeter monitoring", "Motion alerts", "Asset tracking"]
    },
    {
      title: "Staff Protection",
      description: "Employee safety through real-time threat detection and emergency response systems.",
      features: ["Threat detection", "Emergency alerts", "Safe zones"]
    },
    {
      title: "Compliance",
      description: "Automated reporting and audit trails to meet regulatory requirements effortlessly.",
      features: ["Auto reporting", "Audit logs", "Compliance tracking"]
    }
  ], [])

  const industrySectors = useMemo(() => [
    {
      name: "Entertainment",
      description: "Bars, clubs, and venues with high-traffic environments",
      venues: 280,
    },
    {
      name: "Retail",
      description: "Shopping centers and stores with comprehensive security needs",
      venues: 120,
    },
    {
      name: "Corporate",
      description: "Business centers and offices with access control requirements",
      venues: 85,
    },
    {
      name: "Hospitality",
      description: "Hotels and resorts ensuring guest safety and security",
      venues: 65,
    }
  ], [])

  const globalPresence = useMemo(() => [
    { 
      region: "North America", 
      venues: 200, 
      delay: 0,
      cities: ["New York", "Los Angeles", "Toronto"]
    },
    { 
      region: "Europe", 
      venues: 150, 
      delay: 200,
      cities: ["London", "Berlin", "Amsterdam"]
    },
    { 
      region: "Asia Pacific", 
      venues: 100, 
      delay: 400,
      cities: ["Tokyo", "Sydney", "Singapore"]
    },
    { 
      region: "Other Regions", 
      venues: 50, 
      delay: 600,
      cities: ["Dubai", "São Paulo", "Mumbai"]
    }
  ], [])

  return (
    <section className="py-32 bg-black" ref={containerRef}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Image 
              src="/images/logo/LOGO TRANSPARENT.png" 
              alt="NightShield Logo" 
              width={32} 
              height={32}
              className="w-8 h-8"
              priority
            />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight">
              Trusted Across Industries
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Protecting venues and businesses worldwide with AI-powered surveillance technology
          </p>
        </motion.div>

        {/* Minimal Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                  <CountUp 
                    end={stat.metric} 
                    duration={1500} 
                    delay={600 + index * 100} 
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-lg md:text-xl font-medium text-gray-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm md:text-base text-gray-500">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Key Applications</h2>
            <p className="text-lg md:text-xl text-gray-400">Essential security solutions for modern businesses</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:bg-gray-900/70 hover:border-gray-700 transition-all group"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-red-100 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 text-sm md:text-base text-gray-500">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Industry Coverage</h2>
            <p className="text-lg md:text-xl text-gray-400">Serving diverse business sectors with tailored solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="border border-gray-800 rounded-lg p-8 hover:border-gray-700 hover:bg-gray-900/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-red-100 transition-colors">
                    {sector.name}
                  </h3>
                  <div className="text-base font-medium text-gray-400 bg-gray-800 px-3 py-2 rounded-full">
                    {sector.venues}
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {sector.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Presence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Global Reach</h2>
              <p className="text-lg md:text-xl text-gray-400">Deployed across major cities worldwide with continuous expansion</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalPresence.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-3">
                    <CountUp 
                      end={region.venues} 
                      duration={1500} 
                      delay={1800 + region.delay} 
                      suffix="+" 
                    />
                  </div>
                  <div className="text-lg md:text-xl font-medium text-gray-300 mb-4">
                    {region.region}
                  </div>
                  <div className="space-y-2">
                    {region.cities.map((city, cityIndex) => (
                      <div key={cityIndex} className="text-sm md:text-base text-gray-500">
                        {city}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries
