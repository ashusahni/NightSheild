'use client'

import React, { useState, useEffect, useMemo, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

// Enhanced CountUp Component with Framer Motion
const CountUp = ({ end, duration = 2000, delay = 0, suffix = "" }: { 
  end: number; 
  duration?: number; 
  delay?: number; 
  suffix?: string; 
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const count = useMotionValue(0)
  const rounded = useSpring(count, { damping: 50, stiffness: 100 })
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
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="font-bold"
    >
      {displayValue}{suffix}
    </motion.span>
  )
}

const Industries = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  // Enhanced industry stats with gradients and animations
  const industryStats = useMemo(() => [
    { 
      metric: 500, 
      label: "Venues Protected", 
      icon: "🏢", 
      suffix: "+",
      gradient: "from-blue-500/20 to-cyan-500/20",
      description: "Bars, clubs, and entertainment venues worldwide"
    },
    { 
      metric: 99.9, 
      label: "Detection Rate", 
      icon: "🎯", 
      suffix: "%",
      gradient: "from-green-500/20 to-emerald-500/20",
      description: "AI accuracy in threat identification"
    },
    { 
      metric: 24, 
      label: "Monitoring", 
      icon: "⏰", 
      suffix: "/7",
      gradient: "from-purple-500/20 to-pink-500/20",
      description: "Round-the-clock surveillance coverage"
    },
    { 
      metric: 2, 
      label: "Response Time", 
      icon: "⚡", 
      suffix: "s",
      gradient: "from-yellow-500/20 to-orange-500/20",
      description: "Average threat detection speed"
    },
    { 
      metric: 85, 
      label: "Incident Reduction", 
      icon: "📉", 
      suffix: "%",
      gradient: "from-red-500/20 to-pink-500/20",
      description: "Decrease in security incidents"
    },
    { 
      metric: 50, 
      label: "Cities Served", 
      icon: "🌍", 
      suffix: "+",
      gradient: "from-indigo-500/20 to-blue-500/20",
      description: "Global deployment across major cities"
    }
  ], [])

  const useCases = useMemo(() => [
    {
      title: "Crowd Control",
      description: "Monitor crowd density and detect potential disturbances before they escalate with AI-powered crowd analysis.",
      icon: "👥",
      gradient: "from-blue-500/20 to-cyan-500/20",
      features: ["Real-time density mapping", "Behavior pattern analysis", "Automatic alerts"]
    },
    {
      title: "Asset Protection",
      description: "Protect valuable equipment, cash, and inventory with intelligent monitoring and instant threat detection.",
      icon: "💰",
      gradient: "from-green-500/20 to-emerald-500/20",
      features: ["Perimeter security", "Motion detection", "Asset tracking"]
    },
    {
      title: "Staff Safety",
      description: "Ensure the safety of your employees with real-time threat detection and emergency response protocols.",
      icon: "👷",
      gradient: "from-purple-500/20 to-pink-500/20",
      features: ["Panic button integration", "Safe zone monitoring", "Emergency protocols"]
    },
    {
      title: "Compliance",
      description: "Meet regulatory requirements with comprehensive surveillance, reporting, and audit trail capabilities.",
      icon: "📋",
      gradient: "from-orange-500/20 to-red-500/20",
      features: ["Automated reporting", "Audit trails", "Regulatory compliance"]
    }
  ], [])

  const globalPresence = useMemo(() => [
    { 
      region: "North America", 
      venues: 200, 
      delay: 0,
      gradient: "from-blue-500/20 to-cyan-500/20",
      cities: ["New York", "Los Angeles", "Toronto"],
      growth: "+25%"
    },
    { 
      region: "Europe", 
      venues: 150, 
      delay: 200,
      gradient: "from-green-500/20 to-emerald-500/20",
      cities: ["London", "Berlin", "Amsterdam"],
      growth: "+18%"
    },
    { 
      region: "Asia Pacific", 
      venues: 100, 
      delay: 400,
      gradient: "from-purple-500/20 to-pink-500/20",
      cities: ["Tokyo", "Sydney", "Singapore"],
      growth: "+32%"
    },
    { 
      region: "Other Regions", 
      venues: 50, 
      delay: 600,
      gradient: "from-orange-500/20 to-red-500/20",
      cities: ["Dubai", "São Paulo", "Mumbai"],
      growth: "+40%"
    }
  ], [])

  // Add new industry sectors data
  const industrySectors = useMemo(() => [
    {
      name: "Nightlife & Entertainment",
      description: "Bars, clubs, and entertainment venues with high-traffic environments",
      icon: "🎭",
      venues: 280,
      gradient: "from-pink-500/20 to-rose-500/20",
      features: ["Crowd management", "VIP area monitoring", "Incident prevention"]
    },
    {
      name: "Retail & Shopping",
      description: "Shopping centers, malls, and retail stores requiring comprehensive security",
      icon: "🛍️",
      venues: 120,
      gradient: "from-blue-500/20 to-indigo-500/20",
      features: ["Theft prevention", "Customer analytics", "Asset protection"]
    },
    {
      name: "Corporate & Offices",
      description: "Business centers and corporate facilities with access control needs",
      icon: "🏢",
      venues: 85,
      gradient: "from-green-500/20 to-teal-500/20",
      features: ["Access control", "Perimeter security", "Employee safety"]
    },
    {
      name: "Hospitality",
      description: "Hotels, resorts, and hospitality venues ensuring guest safety",
      icon: "🏨",
      venues: 65,
      gradient: "from-purple-500/20 to-violet-500/20",
      features: ["Guest monitoring", "Property security", "Emergency response"]
    }
  ], [])

  return (
    <section className="py-24 relative overflow-hidden bg-black" ref={containerRef}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-blue-500/5" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"
          animate={{ scale: [1, 1.5, 1], x: [-50, 50, -50], y: [-30, 30, -30] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            className="flex justify-center items-center space-x-4 mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="/images/logo/LOGO TRANSPARENT.png" 
                alt="NightShield Logo" 
                width={64} 
                height={64}
                className="w-16 h-16"
                priority
              />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Trusted Across <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Industries</span>
            </h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            NightShield is protecting venues and businesses across multiple industries with proven results and cutting-edge AI surveillance technology
          </motion.p>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Performance <span className="text-red-500">Metrics</span></h3>
            <p className="text-gray-400 text-lg">Real-world results across all deployments</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industryStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className={cn(
                    "relative p-8 rounded-3xl border transition-all duration-500 h-full bg-gradient-to-br backdrop-blur-xl",
                    `bg-gradient-to-br ${stat.gradient}`,
                    hoveredCard === index 
                      ? "border-red-500/50 shadow-2xl shadow-red-500/20" 
                      : "border-gray-700 hover:border-gray-500"
                  )}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(239, 68, 68, 0.3)"
                  }}
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                      animate={{ x: hoveredCard === index ? ["0%", "200%"] : "0%" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </div>

                  <div className="relative z-10 text-center">
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500/30 to-orange-500/20 rounded-2xl flex items-center justify-center border border-red-500/40"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-4xl">{stat.icon}</div>
                    </motion.div>
                    
                    <div className="text-3xl font-bold text-red-400 mb-3">
                      <CountUp 
                        end={stat.metric} 
                        duration={2000} 
                        delay={1000 + index * 150} 
                        suffix={stat.suffix}
                      />
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors">
                      {stat.label}
                    </h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {stat.description}
                    </p>

                    {/* Progress indicators */}
                    <div className="flex justify-center mt-6">
                      <motion.div
                        className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 48 } : { width: 0 }}
                        transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                      />
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-red-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-red-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-red-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-red-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">
              Common <span className="text-red-500">Use Cases</span>
            </h3>
            <p className="text-gray-400 text-lg">Versatile solutions for every security challenge</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: 90 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 30, rotateY: 90 }}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.2 }}
                className="group relative"
              >
                <motion.div
                  className={cn(
                    "relative p-8 rounded-3xl border transition-all duration-500 h-full bg-gradient-to-br backdrop-blur-xl",
                    `bg-gradient-to-br ${useCase.gradient}`,
                    "border-gray-700 hover:border-red-500/50"
                  )}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    rotateY: 5
                  }}
                >
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    />
                  </div>

                  <div className="relative z-10 text-center">
                    <motion.div
                      className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-red-500/30 to-orange-500/20 rounded-3xl flex items-center justify-center border border-red-500/40"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-5xl">{useCase.icon}</div>
                    </motion.div>
                    
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors">
                      {useCase.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                      {useCase.description}
                    </p>

                    {/* Feature list */}
                    <div className="space-y-2">
                      {useCase.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center justify-center space-x-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: 1.8 + index * 0.2 + featureIndex * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.02 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">
              Industry <span className="text-red-500">Sectors</span>
            </h3>
            <p className="text-gray-400 text-lg">Specialized solutions for different business environments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {industrySectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : { opacity: 0, scale: 0.8, rotateX: 90 }}
                transition={{ duration: 0.8, delay: 2.6 + index * 0.15 }}
                className="group relative"
              >
                <motion.div
                  className={cn(
                    "relative p-8 rounded-3xl border transition-all duration-500 h-full bg-gradient-to-br backdrop-blur-xl",
                    `bg-gradient-to-br ${sector.gradient}`,
                    "border-gray-700 hover:border-purple-500/50"
                  )}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -15,
                    boxShadow: "0 25px 50px rgba(147, 51, 234, 0.2)",
                    rotateX: 5
                  }}
                >
                  <div className="relative z-10 text-center">
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-3xl flex items-center justify-center border border-purple-500/40"
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="text-4xl">{sector.icon}</div>
                    </motion.div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-100 transition-colors">
                      {sector.name}
                    </h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                      {sector.description}
                    </p>

                    <div className="text-center mb-4">
                      <div className="inline-flex items-center space-x-2 bg-purple-500/20 rounded-full px-4 py-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                        <span className="text-purple-300 font-semibold text-sm">{sector.venues} venues</span>
                      </div>
                    </div>

                    {/* Feature list */}
                    <div className="space-y-2">
                      {sector.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center justify-center space-x-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: 2.8 + index * 0.15 + featureIndex * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ 
                      background: [
                        "linear-gradient(45deg, rgba(147, 51, 234, 0.05), transparent, rgba(236, 72, 153, 0.05))",
                        "linear-gradient(135deg, rgba(236, 72, 153, 0.05), transparent, rgba(147, 51, 234, 0.05))",
                        "linear-gradient(225deg, rgba(147, 51, 234, 0.05), transparent, rgba(236, 72, 153, 0.05))"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Global Presence */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="mb-20"
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl p-12 border border-gray-700 relative overflow-hidden"
            whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
            transition={{ duration: 0.5 }}
          >
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-blue-500/5 opacity-50" />
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-white mb-4">
                  Global <span className="text-red-500">Presence</span>
                </h3>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                  NightShield is deployed across major cities worldwide, protecting venues and businesses 24/7 with continuous expansion
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {globalPresence.map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 3.4 + index * 0.15 }}
                    className="group relative text-center"
                  >
                    <motion.div
                      className={cn(
                        "relative p-8 rounded-2xl border transition-all duration-500 bg-gradient-to-br backdrop-blur-sm",
                        `bg-gradient-to-br ${region.gradient}`,
                        "border-gray-600 hover:border-red-500/50"
                      )}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -10,
                        boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)"
                      }}
                    >
                      <motion.div
                        className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500/30 to-orange-500/20 rounded-full flex items-center justify-center border border-red-500/40"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="text-3xl">🌍</div>
                      </motion.div>
                      
                      <h4 className="text-xl font-bold text-red-400 mb-3 group-hover:text-red-300 transition-colors">
                        {region.region}
                      </h4>
                      
                      <div className="text-white text-2xl font-bold mb-2">
                        <CountUp 
                          end={region.venues} 
                          duration={2000} 
                          delay={3600 + region.delay} 
                          suffix="+" 
                        />
                      </div>
                      <div className="text-gray-400 text-sm mb-4">Active Venues</div>

                      {/* Growth indicator */}
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center space-x-2 bg-green-500/20 rounded-full px-3 py-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-green-400 font-semibold text-xs">{region.growth} growth</span>
                        </div>
                      </div>

                      {/* Cities list */}
                      <div className="space-y-1">
                        {region.cities.map((city, cityIndex) => (
                          <motion.div
                            key={cityIndex}
                            className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 3.6 + index * 0.15 + cityIndex * 0.1 }}
                          >
                            {city}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries
