'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BeautifulComparisonTable = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const competitors = [
    {
      company: "Verkada",
      category: "Cloud Cameras",
      strength: "AI analytics & remote management",
      weakness: "Generic security, no nightlife focus",
      advantage: "Specialized AI for crowd behavior & altercation detection"
    },
    {
      company: "Genetec",
      category: "Enterprise Platform",
      strength: "Unified security with access control",
      weakness: "Overengineered, lacks crowd monitoring",
      advantage: "Instant crowd alerts & mobile incident response"
    },
    {
      company: "Milestone",
      category: "Open VMS",
      strength: "Extensive integrations & scalability",
      weakness: "Heavy customization required",
      advantage: "Pre-configured incident types for nightlife"
    },
    {
      company: "Avigilon",
      category: "HD Analytics",
      strength: "High-definition cameras & video analytics",
      weakness: "Retail focus, misses venue needs",
      advantage: "Venue-tuned analytics & VIP monitoring"
    }
  ]

  const keyPoints = [
    "Specialized for nightlife incidents",
    "Real-time crowd density monitoring",
    "Mobile-first staff coordination",
    "Built-in venue intelligence"
  ]

  return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="text-red-500">NightShield</span> vs <span className="text-gray-400">Competitors</span>
          </h2>
        </div>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Why nightlife venues choose NightShield over traditional security solutions
        </p>
      </motion.div>

      {/* Modern Card-Based Comparison */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* Competitor Cards */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-300 mb-6">Traditional Solutions</h3>
          {competitors.map((competitor, index) => (
            <motion.div
              key={competitor.company}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              className="group cursor-pointer"
              onHoverStart={() => setHoveredRow(index)}
              onHoverEnd={() => setHoveredRow(null)}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:border-gray-600/70 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      whileHover={{ 
                        rotate: 5,
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {competitor.company.charAt(0)}
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
                        {competitor.company}
                      </h4>
                      <p className="text-sm text-gray-400">{competitor.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-300">{competitor.strength}</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-red-300">{competitor.weakness}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* NightShield Card */}
        <div className="lg:sticky lg:top-8">
          <h3 className="text-2xl font-bold text-white mb-6">NightShield Solution</h3>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-red-900/30 to-red-800/30 backdrop-blur-sm rounded-2xl border border-red-500/50 p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-600/20 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-2xl shadow-xl"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  NS
                </motion.div>
                <div>
                  <h4 className="text-2xl font-bold text-white">NightShield</h4>
                  <p className="text-red-300 font-medium">Nightlife Security AI</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {competitors.map((competitor, index) => (
                  <motion.div
                    key={competitor.company}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    className="bg-white/5 rounded-xl p-4 border border-red-500/20"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm text-white font-medium mb-1">vs {competitor.company}</p>
                        <p className="text-sm text-gray-300">{competitor.advantage}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Features Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Why <span className="text-red-500">NightShield</span> Wins
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Four key advantages that make NightShield the clear choice for nightlife venues
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
              className="group cursor-pointer"
              onHoverStart={() => setActiveFeature(index)}
              onHoverEnd={() => setActiveFeature(null)}
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl h-full">
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                    Feature {index + 1}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                    {point}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm rounded-2xl border border-red-500/30 p-8">
          <h4 className="text-2xl font-bold text-white mb-4">
            Ready to Upgrade Your Security?
          </h4>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join leading nightlife venues who trust NightShield for their security needs
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </div>
        <p className="text-xs text-gray-500 mt-6 italic">
          Comparisons based on publicly available information; features may vary by region.
        </p>
      </motion.div>
    </div>
  )
}

export default BeautifulComparisonTable
