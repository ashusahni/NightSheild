'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AdvancedComparison = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
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
      id: 0,
      name: "Verkada",
      category: "Cloud Cameras",
      icon: "V",
      color: "from-blue-500 to-blue-600",
      strength: "AI analytics & remote management",
      weakness: "Generic security, no nightlife focus",
      advantage: "Specialized AI for crowd behavior & altercation detection",
      score: 6
    },
    {
      id: 1,
      name: "Genetec",
      category: "Enterprise Platform",
      icon: "G",
      color: "from-purple-500 to-purple-600",
      strength: "Unified security with access control",
      weakness: "Overengineered, lacks crowd monitoring",
      advantage: "Instant crowd alerts & mobile incident response",
      score: 5
    },
    {
      id: 2,
      name: "Milestone",
      category: "Open VMS",
      icon: "M",
      color: "from-green-500 to-green-600",
      strength: "Extensive integrations & scalability",
      weakness: "Heavy customization required",
      advantage: "Pre-configured incident types for nightlife",
      score: 4
    },
    {
      id: 3,
      name: "Avigilon",
      category: "HD Analytics",
      icon: "A",
      color: "from-orange-500 to-orange-600",
      strength: "High-definition cameras & video analytics",
      weakness: "Retail focus, misses venue needs",
      advantage: "Venue-tuned analytics & VIP monitoring",
      score: 5
    }
  ]

  const nightShieldFeatures = [
    {
      title: "Nightlife-Specific AI",
      description: "Trained specifically for venue incidents",
      icon: "🎯"
    },
    {
      title: "Real-Time Crowd Monitoring",
      description: "Prevents overcapacity violations",
      icon: "👥"
    },
    {
      title: "Mobile-First Coordination",
      description: "Instant staff communication",
      icon: "📱"
    },
    {
      title: "Venue Intelligence",
      description: "VIP monitoring & door coordination",
      icon: "🏢"
    }
  ]

  const comparisonMetrics = [
    { label: "Nightlife Focus", nightShield: 10, competitors: 3 },
    { label: "Ease of Use", nightShield: 9, competitors: 5 },
    { label: "Real-Time Alerts", nightShield: 10, competitors: 6 },
    { label: "Mobile Integration", nightShield: 9, competitors: 4 },
    { label: "Venue Optimization", nightShield: 10, competitors: 2 }
  ]

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Hero Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="relative inline-block mb-6">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl blur-lg"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-4 shadow-xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
              NightShield vs <span className="text-gray-200">Competitors</span>
            </h1>
            <p className="text-lg text-red-100">
              The definitive comparison for nightlife security
            </p>
          </div>
        </div>
      </motion.div>

      {/* Interactive Comparison Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['Overview', 'Features', 'Performance'].map((tab, index) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 0 && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {/* Competitors Overview */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">Traditional Solutions</h3>
                {competitors.map((competitor, index) => (
                  <motion.div
                    key={competitor.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onHoverStart={() => setHoveredCard(competitor.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4 hover:border-gray-600/70 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <motion.div 
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${competitor.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                            whileHover={{ 
                              rotate: 10,
                              scale: 1.1,
                              transition: { duration: 0.3 }
                            }}
                          >
                            {competitor.icon}
                          </motion.div>
                          <div>
                            <h4 className="text-lg font-bold text-white">{competitor.name}</h4>
                            <p className="text-sm text-gray-400">{competitor.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-gray-400">{competitor.score}/10</div>
                          <div className="w-12 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div 
                              className={`h-full bg-gradient-to-r ${competitor.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${competitor.score * 10}%` }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-gray-300">{competitor.strength}</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-red-300">{competitor.weakness}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* NightShield Overview */}
              <div className="lg:sticky lg:top-8">
                <h3 className="text-2xl font-bold text-white mb-6">NightShield Solution</h3>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-gradient-to-br from-red-900/40 to-red-800/40 backdrop-blur-sm rounded-2xl border border-red-500/50 p-6 shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/20 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-red-600/20 to-transparent rounded-full translate-y-10 -translate-x-10"></div>
                  
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
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="text-2xl font-bold text-white">10/10</div>
                          <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1.5, delay: 0.8 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {competitors.map((competitor, index) => (
                        <motion.div
                          key={competitor.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                          className="bg-white/5 rounded-xl p-3 border border-red-500/20"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <p className="text-sm text-white font-medium mb-1">vs {competitor.name}</p>
                              <p className="text-sm text-gray-300">{competitor.advantage}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === 1 && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {nightShieldFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl h-full">
                    <div className="text-center">
                      <motion.div 
                        className="text-4xl mb-4"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 10,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 2 && (
            <motion.div
              key="performance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white text-center mb-8">Performance Comparison</h3>
              {comparisonMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-semibold text-white">{metric.label}</h4>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-gray-400">Competitors: {metric.competitors}/10</span>
                      <span className="text-xs text-red-400 font-semibold">NightShield: {metric.nightShield}/10</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-gray-400 w-16">Competitors</span>
                      <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-gray-500 to-gray-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.competitors * 10}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-red-400 w-16">NightShield</span>
                      <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.nightShield * 10}%` }}
                          transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Final CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm rounded-2xl border border-red-500/30 p-8">
          <h4 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h4>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the nightlife venues that have already upgraded to NightShield's advanced AI security system
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-red-500 text-red-400 px-8 py-3 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AdvancedComparison




"use client";
import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import AdvancedComparison from "./AdvancedComparison";

const Comparison = () => {
  const { isMobile, isClient } = useIsMobile();
  
  const competitorData = [
    {
      company: "Verkada",
      strength: "AI-powered cloud cameras with excellent analytics and remote management",
      weakness: "Generic security focus lacks nightlife-specific incident detection for fights, overcrowding, or blackout scenarios",
      advantage: "Purpose-built for nightlife incidents with specialized AI for crowd behavior, altercation detection, and venue-specific alerts"
    },
    {
      company: "Genetec",
      strength: "Enterprise-grade unified security platform with robust access control integration",
      weakness: "Complex enterprise solution overengineered for venue needs, lacks real-time crowd density monitoring",
      advantage: "Streamlined for venue operations with instant crowd alerts, door coordination, and staff-friendly mobile incident response"
    },
    {
      company: "Milestone",
      strength: "Open platform VMS with extensive third-party integrations and scalability",
      weakness: "Requires heavy customization for nightlife use cases, no built-in incident categorization for venue scenarios",
      advantage: "Pre-configured incident types (fights, medical, overcrowding) with automated escalation workflows designed for nightlife"
    },
    {
      company: "Avigilon",
      strength: "High-definition cameras with advanced video analytics and appearance search",
      weakness: "Retail/corporate focus misses venue-specific needs like intoxication detection and crowd flow management",
      advantage: "Venue-tuned analytics for patron behavior, entry/exit flow optimization, and VIP area monitoring with staff coordination"
    }
  ]

  const keyPoints = [
    "We're not a general VMS; we're the incident layer tuned for nightlife—fights, falls, overcrowding, blackouts",
    "Real-time crowd density alerts prevent overcapacity violations before they happen",
    "Mobile-first staff coordination with instant incident escalation to security, medical, and management",
    "Built-in venue intelligence: VIP area monitoring, door coordination, and patron flow optimization"
  ]

  // Don't render until client-side to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Desktop Layout with Advanced Comparison */}
        {!isMobile && (
          <AdvancedComparison />
        )}

        {/* Mobile Layout - Competitor Comparison */}
        {isMobile && (
          <div className="space-y-8">
            {/* Mobile Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
              Nightshield vs Other security companies              </h2>
              <p className="text-gray-300 text-sm">
                See how we compare to traditional security solutions
              </p>
            </div>

            {/* Mobile Competitor Comparison Table */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
              {/* Table Header */}
              <div className="bg-gray-800/70 p-4 border-b border-gray-700/50">
                <div className="grid grid-cols-1 gap-2 text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  <div>Company Comparison</div>
                </div>
              </div>

              {/* Competitor Rows */}
              <div className="divide-y divide-gray-700/30">
                {competitorData.map((competitor, index) => (
                  <div key={index} className="p-4 space-y-4">
                    {/* Company Name */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-white mb-3">
                        {competitor.company}
                      </h3>
                    </div>

                    {/* What they're great at */}
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        What they're great at
                      </div>
                      <div className="text-sm text-gray-300 bg-gray-800/30 p-3 rounded-lg">
                        {competitor.strength}
                      </div>
                    </div>

                    {/* Where this falls short */}
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Where this falls short for nightlife venues
                      </div>
                      <div className="text-sm text-red-300 bg-red-900/20 p-3 rounded-lg border border-red-500/20">
                        {competitor.weakness}
                      </div>
                    </div>

                    {/* Why NightShield is better */}
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-red-300 uppercase tracking-wide">
                        Why NightShield is better for venues
                      </div>
                      <div className="text-sm text-white bg-gradient-to-r from-red-900/30 to-red-800/30 p-3 rounded-lg border border-red-500/30">
                        {competitor.advantage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white text-center mb-6">
                Why Choose NightShield?
              </h3>
              <div className="space-y-3">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            {/* <div className="text-center">
              <p className="text-xs text-gray-500 italic">
                Comparisons based on publicly available positioning; features and pricing may vary by SKU/region.
              </p>
            </div> */}
          </div>
        )}
      </div>
    </section>
  )
}

export default Comparison

