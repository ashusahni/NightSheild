'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FuturisticComparison = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState<number | null>(null)
  const [activeMetric, setActiveMetric] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

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
      type: "Cloud Platform",
      score: 7,
      color: "#3B82F6",
      position: { x: 20, y: 30 },
      data: {
        nightlife: 25,
        ease: 78,
        alerts: 82,
        mobile: 85,
        venue: 15
      }
    },
    {
      id: 1,
      name: "Genetec",
      type: "Enterprise Suite",
      score: 8,
      color: "#8B5CF6",
      position: { x: 60, y: 20 },
      data: {
        nightlife: 20,
        ease: 45,
        alerts: 88,
        mobile: 65,
        venue: 12
      }
    },
    {
      id: 2,
      name: "Milestone",
      type: "Open VMS",
      score: 6,
      color: "#10B981",
      position: { x: 40, y: 60 },
      data: {
        nightlife: 18,
        ease: 40,
        alerts: 75,
        mobile: 55,
        venue: 10
      }
    },
    {
      id: 3,
      name: "Avigilon",
      type: "HD Analytics",
      score: 7,
      color: "#F59E0B",
      position: { x: 80, y: 50 },
      data: {
        nightlife: 12,
        ease: 65,
        alerts: 90,
        mobile: 70,
        venue: 8
      }
    }
  ]

  const nightShieldData = {
    nightlife: 95,
    ease: 85,
    alerts: 92,
    mobile: 90,
    venue: 88
  }

  const metrics = [
    { key: 'nightlife', label: 'Nightlife Focus', icon: '🎯' },
    { key: 'ease', label: 'Ease of Use', icon: '⚡' },
    { key: 'alerts', label: 'Real-Time Alerts', icon: '🚨' },
    { key: 'mobile', label: 'Mobile Integration', icon: '📱' },
    { key: 'venue', label: 'Venue Optimization', icon: '🏆' }
  ]

  return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Futuristic Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="relative">
          {/* Holographic Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-red-500/10 via-red-600/10 to-red-700/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <motion.div
              className="inline-block mb-6"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(239, 68, 68, 0.5)",
                  "0 0 40px rgba(239, 68, 68, 0.8)",
                  "0 0 20px rgba(239, 68, 68, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700">
                NIGHTSHIELD
              </h1>
            </motion.div>
            
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent flex-1 max-w-24"></div>
              <span className="text-3xl font-bold text-gray-300">VS</span>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent flex-1 max-w-24"></div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-4">
              Security Intelligence Matrix
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Advanced AI surveillance technology for the future of nightlife security
            </p>
          </div>
        </div>
      </motion.div>

      {/* Interactive 3D-Style Comparison */}
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {/* Competitor Network */}
        <div className="lg:col-span-2">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-6 lg:mb-8 text-center">Competitor Network</h3>
          <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl lg:rounded-3xl border border-gray-700/50 p-4 sm:p-6 lg:p-8 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            {/* Competitor Nodes */}
            {competitors.map((competitor, index) => (
              <motion.div
                key={competitor.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="absolute cursor-pointer group"
                style={{
                  left: `${competitor.position.x}%`,
                  top: `${competitor.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => setSelectedCompetitor(selectedCompetitor === competitor.id ? null : competitor.id)}
                whileHover={{ scale: 1.1 }}
              >
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg shadow-lg border-2 border-white/20"
                  style={{ backgroundColor: competitor.color }}
                >
                  {competitor.name.charAt(0)}
                </div>
                
                {/* Connection Lines */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-px h-20 bg-gradient-to-b from-red-500/50 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  style={{ transformOrigin: 'top' }}
                />
                
                {/* Score Display */}
                <motion.div
                  className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                >
                  {competitor.score}/10
                </motion.div>
              </motion.div>
            ))}

            {/* NightShield Central Node */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl shadow-2xl border-2 sm:border-4 border-white/30">
                NS
              </div>
              
              {/* Pulsing Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-red-500/50"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>

        {/* Metric Selector */}
        <div className="space-y-4 lg:space-y-6">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">Performance Metrics</h3>
          {metrics.map((metric, index) => (
            <motion.button
              key={metric.key}
              onClick={() => setActiveMetric(index)}
              className={`w-full p-3 lg:p-4 rounded-xl lg:rounded-2xl border transition-all duration-300 ${
                activeMetric === index
                  ? 'bg-gradient-to-r from-red-500/20 to-red-600/20 border-red-500/50'
                  : 'bg-gray-800/30 border-gray-700/50 hover:border-gray-600/70'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-2 lg:space-x-3">
                <span className="text-lg lg:text-2xl">{metric.icon}</span>
                <span className="text-white font-semibold text-sm lg:text-base">{metric.label}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Dynamic Comparison Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMetric}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl lg:rounded-3xl border border-gray-700/50 p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-6 lg:mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                {metrics[activeMetric].icon} {metrics[activeMetric].label}
              </h3>
              <p className="text-gray-400 text-sm lg:text-base">Performance comparison across all solutions</p>
            </div>

{/* Conditional rendering based on metric type */}
            {activeMetric === 0 ? (
              /* Futuristic Table format for Nightlife Focus */
              <div className="relative">
                {/* Holographic Grid Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                <div className="relative z-10 overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm border-b-2 border-red-500/30">
                      <tr>
                        <th className="px-6 py-4 text-left text-white font-bold text-sm lg:text-base tracking-wider">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span>COMPANY</span>
                          </div>
                        </th>
                        <th className="px-6 py-4 text-left text-white font-bold text-sm lg:text-base tracking-wider">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span>NIGHTLIFE FOCUS</span>
                          </div>
                        </th>
                        <th className="px-6 py-4 text-left text-white font-bold text-sm lg:text-base tracking-wider">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span>KEY STRENGTH</span>
                          </div>
                        </th>
                        <th className="px-6 py-4 text-left text-white font-bold text-sm lg:text-base tracking-wider">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span>NIGHTLIFE LIMITATION</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* NightShield Row - Enhanced */}
                      <motion.tr
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="border-b border-gray-700/50 bg-gradient-to-r from-red-500/15 to-red-600/15 hover:from-red-500/25 hover:to-red-600/25 transition-all duration-300 group"
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center space-x-4">
                            <motion.div 
                              className="relative w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                              whileHover={{ scale: 1.1 }}
                              animate={{ 
                                boxShadow: [
                                  "0 0 20px rgba(239, 68, 68, 0.3)",
                                  "0 0 30px rgba(239, 68, 68, 0.5)",
                                  "0 0 20px rgba(239, 68, 68, 0.3)"
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              NS
                              <div className="absolute inset-0 rounded-full border-2 border-red-400/50 animate-ping"></div>
                            </motion.div>
                            <div>
                              <div className="text-white font-bold text-lg group-hover:text-red-300 transition-colors">NightShield</div>
                              <div className="text-gray-400 text-sm">(Nightlife Security Platform)</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center space-x-3">
                            <motion.span 
                              className="text-red-400 font-bold text-2xl"
                              animate={{ 
                                textShadow: [
                                  "0 0 10px rgba(239, 68, 68, 0.5)",
                                  "0 0 20px rgba(239, 68, 68, 0.8)",
                                  "0 0 10px rgba(239, 68, 68, 0.5)"
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              95%
                            </motion.span>
                            <div className="relative w-20 h-3 bg-gray-700 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-full relative"
                                initial={{ width: 0 }}
                                animate={{ width: "95%" }}
                                transition={{ duration: 1.5, delay: 0.3 }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                              </motion.div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-300 text-sm lg:text-base group-hover:text-red-300 transition-colors">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span>Purpose-built for nightlife incidents</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-300 text-sm lg:text-base group-hover:text-red-300 transition-colors">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span>N/A - Designed for nightlife</span>
                          </div>
                        </td>
                      </motion.tr>

                      {/* Competitor Rows - Enhanced */}
                      {competitors.map((competitor, index) => (
                        <motion.tr
                          key={competitor.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                          className="border-b border-gray-700/50 hover:bg-gray-800/40 transition-all duration-300 group"
                        >
                          <td className="px-6 py-5">
                            <div className="flex items-center space-x-4">
                              <motion.div 
                                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
                                style={{ backgroundColor: competitor.color }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {competitor.name.charAt(0)}
                              </motion.div>
                              <div>
                                <div className="text-white font-semibold text-lg group-hover:text-gray-200 transition-colors">{competitor.name}</div>
                                <div className="text-gray-400 text-sm">({competitor.type})</div>
                              </div>
                  </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center space-x-3">
                              <span className="text-gray-400 font-bold text-2xl group-hover:text-gray-300 transition-colors">{competitor.data.nightlife}%</span>
                              <div className="relative w-20 h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                                  className="h-full rounded-full relative"
                                  style={{ backgroundColor: competitor.color }}
                      initial={{ width: 0 }}
                                  animate={{ width: `${competitor.data.nightlife}%` }}
                                  transition={{ duration: 1.5, delay: 0.4 + (index * 0.1) }}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                                </motion.div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-gray-300 text-sm lg:text-base group-hover:text-red-300 transition-colors">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span>
                                {competitor.name === "Verkada" && "AI cloud cameras & analytics"}
                                {competitor.name === "Genetec" && "Enterprise security platform"}
                                {competitor.name === "Milestone" && "Open VMS with integrations"}
                                {competitor.name === "Avigilon" && "HD cameras & video analytics"}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-gray-300 text-sm lg:text-base group-hover:text-red-300 transition-colors">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span>
                                {competitor.name === "Verkada" && "Generic security, no nightlife focus"}
                                {competitor.name === "Genetec" && "Overengineered, lacks crowd monitoring"}
                                {competitor.name === "Milestone" && "Heavy customization required"}
                                {competitor.name === "Avigilon" && "Retail focus, misses venue needs"}
                              </span>
                  </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              /* Futuristic Table format for other metrics */
              <div className="relative">
                {/* Holographic Grid Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
              </div>

                <div className="relative z-10 overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm border-b-2 border-red-500/30">
                      <tr>
                        <th className="px-6 py-4 text-left text-white font-bold text-sm lg:text-base tracking-wider">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span>COMPANY</span>
                          </div>
                        </th>
                        <th className="px-6 py-4 text-left text-white font-bold text-sm lg:text-base tracking-wider">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span>{metrics[activeMetric].label.toUpperCase()}</span>
                          </div>
                        </th>
                        <th className="px-6 py-4 text-left text-white font-bold text-sm lg:text-base tracking-wider">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span>KEY STRENGTH</span>
                          </div>
                        </th>
                        <th className="px-6 py-4 text-left text-white font-bold text-sm lg:text-base tracking-wider">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span>{metrics[activeMetric].label.toUpperCase()} LIMITATION</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* NightShield Row - Enhanced */}
                      <motion.tr
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="border-b border-gray-700/50 bg-gradient-to-r from-red-500/15 to-red-600/15 hover:from-red-500/25 hover:to-red-600/25 transition-all duration-300 group"
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center space-x-4">
                            <motion.div 
                              className="relative w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                              whileHover={{ scale: 1.1 }}
                              animate={{ 
                                boxShadow: [
                                  "0 0 20px rgba(239, 68, 68, 0.3)",
                                  "0 0 30px rgba(239, 68, 68, 0.5)",
                                  "0 0 20px rgba(239, 68, 68, 0.3)"
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              NS
                              <div className="absolute inset-0 rounded-full border-2 border-red-400/50 animate-ping"></div>
                            </motion.div>
                            <div>
                              <div className="text-white font-bold text-lg group-hover:text-red-300 transition-colors">NightShield</div>
                              <div className="text-gray-400 text-sm">(Nightlife Security Platform)</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center space-x-3">
                            <motion.span 
                              className="text-red-400 font-bold text-2xl"
                              animate={{ 
                                textShadow: [
                                  "0 0 10px rgba(239, 68, 68, 0.5)",
                                  "0 0 20px rgba(239, 68, 68, 0.8)",
                                  "0 0 10px rgba(239, 68, 68, 0.5)"
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              {nightShieldData[metrics[activeMetric].key as keyof typeof nightShieldData]}%
                            </motion.span>
                            <div className="relative w-20 h-3 bg-gray-700 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-full relative"
                                initial={{ width: 0 }}
                                animate={{ width: `${nightShieldData[metrics[activeMetric].key as keyof typeof nightShieldData]}%` }}
                                transition={{ duration: 1.5, delay: 0.3 }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                              </motion.div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-300 text-sm lg:text-base group-hover:text-red-300 transition-colors">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span>
                              {metrics[activeMetric].key === 'ease' && "Intuitive interface, minimal training"}
                              {metrics[activeMetric].key === 'alerts' && "Instant incident detection & response"}
                              {metrics[activeMetric].key === 'mobile' && "Mobile-first staff coordination"}
                              {metrics[activeMetric].key === 'venue' && "Purpose-built for nightlife venues"}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-gray-300 text-sm lg:text-base group-hover:text-red-300 transition-colors">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span>N/A - Designed for nightlife</span>
                          </div>
                        </td>
                      </motion.tr>

                      {/* Competitor Rows - Enhanced */}
              {competitors.map((competitor, index) => (
                        <motion.tr
                  key={competitor.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                          className="border-b border-gray-700/50 hover:bg-gray-800/40 transition-all duration-300 group"
                        >
                          <td className="px-6 py-5">
                            <div className="flex items-center space-x-4">
                              <motion.div 
                                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: competitor.color }}
                                whileHover={{ scale: 1.05 }}
                  >
                    {competitor.name.charAt(0)}
                              </motion.div>
                              <div>
                                <div className="text-white font-semibold text-lg group-hover:text-gray-200 transition-colors">{competitor.name}</div>
                                <div className="text-gray-400 text-sm">({competitor.type})</div>
                  </div>
                    </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center space-x-3">
                              <span className="text-gray-400 font-bold text-2xl group-hover:text-gray-300 transition-colors">{competitor.data[metrics[activeMetric].key as keyof typeof competitor.data]}%</span>
                              <div className="relative w-20 h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                                  className="h-full rounded-full relative"
                        style={{ backgroundColor: competitor.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${competitor.data[metrics[activeMetric].key as keyof typeof competitor.data]}%` }}
                                  transition={{ duration: 1.5, delay: 0.4 + (index * 0.1) }}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                                </motion.div>
                    </div>
                  </div>
                          </td>
                          <td className="px-6 py-5 text-gray-300 text-sm lg:text-base group-hover:text-red-300 transition-colors">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span>
                                {competitor.name === "Verkada" && "AI cloud cameras & analytics"}
                                {competitor.name === "Genetec" && "Enterprise security platform"}
                                {competitor.name === "Milestone" && "Open VMS with integrations"}
                                {competitor.name === "Avigilon" && "HD cameras & video analytics"}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-gray-300 text-sm lg:text-base group-hover:text-red-300 transition-colors">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span>
                                {metrics[activeMetric].key === 'ease' && (
                                  competitor.name === "Verkada" && "Complex setup, requires IT expertise" ||
                                  competitor.name === "Genetec" && "Steep learning curve, overengineered" ||
                                  competitor.name === "Milestone" && "Heavy configuration required" ||
                                  competitor.name === "Avigilon" && "Complex interface, training intensive"
                                )}
                                {metrics[activeMetric].key === 'alerts' && (
                                  competitor.name === "Verkada" && "Generic alerts, no nightlife focus" ||
                                  competitor.name === "Genetec" && "Delayed notifications, complex routing" ||
                                  competitor.name === "Milestone" && "Manual alert configuration required" ||
                                  competitor.name === "Avigilon" && "Basic alerting, lacks venue context"
                                )}
                                {metrics[activeMetric].key === 'mobile' && (
                                  competitor.name === "Verkada" && "Limited mobile features" ||
                                  competitor.name === "Genetec" && "Complex mobile interface" ||
                                  competitor.name === "Milestone" && "Basic mobile app functionality" ||
                                  competitor.name === "Avigilon" && "Limited mobile integration"
                                )}
                                {metrics[activeMetric].key === 'venue' && (
                                  competitor.name === "Verkada" && "Generic security, no venue focus" ||
                                  competitor.name === "Genetec" && "Enterprise focus, not venue-optimized" ||
                                  competitor.name === "Milestone" && "Requires heavy customization for venues" ||
                                  competitor.name === "Avigilon" && "Retail focus, misses venue needs"
                                )}
                              </span>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Competitor Details Modal */}
      <AnimatePresence>
        {selectedCompetitor !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCompetitor(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl lg:rounded-3xl border border-gray-700/50 p-4 sm:p-6 lg:p-8 max-w-2xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const competitor = competitors.find(c => c.id === selectedCompetitor)
                if (!competitor) return null
                
                return (
                  <div>
                    <div className="flex items-center space-x-3 lg:space-x-4 mb-4 lg:mb-6">
                      <div 
                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center text-white font-bold text-lg lg:text-2xl"
                        style={{ backgroundColor: competitor.color }}
                      >
                        {competitor.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white">{competitor.name}</h3>
                        <p className="text-gray-400 text-sm lg:text-base">{competitor.type}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3 lg:gap-4">
                        {metrics.map((metric, index) => (
                          <div key={metric.key} className="bg-gray-800/50 rounded-lg lg:rounded-xl p-3 lg:p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-base lg:text-lg">{metric.icon}</span>
                              <span className="text-xs lg:text-sm text-gray-300">{metric.label}</span>
                            </div>
                            <div className="text-lg lg:text-2xl font-bold text-white">
                              {competitor.data[metric.key as keyof typeof competitor.data]}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Futuristic CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-red-500/10 via-red-600/10 to-red-700/10 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-red-500/30 p-6 sm:p-8 lg:p-12 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-600/5"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="relative z-10">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6">
              Deploy Advanced Security Intelligence
            </h4>
            <p className="text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 max-w-3xl mx-auto">
              Join the future of nightlife security with AI-powered surveillance technology
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Deploy Now
              </motion.button>
              <motion.a
                href="https://calendly.com/nightshield/demo"
                target="_blank"
                rel="noopener noreferrer nofollow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-red-500 text-red-400 px-6 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold text-base lg:text-lg hover:bg-red-500 hover:text-white transition-all duration-300 inline-block text-center"
              >
                View Intelligence Report
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FuturisticComparison
