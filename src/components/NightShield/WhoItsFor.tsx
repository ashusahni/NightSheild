'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useRouter } from 'next/navigation'

const WhoItsFor = () => {
  const { isMobile, isClient } = useIsMobile()
  const router = useRouter()

  // Mobile-optimized content with enhanced descriptions
  const mobileContent = {
    features: [
      { 
        icon: (
          <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg>
        ), 
        title: 'Real-time Monitoring', 
        desc: '24/7 AI surveillance with instant threat detection' 
      },
      { 
        icon: (
          <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        ), 
        title: 'Fast Response', 
        desc: 'Immediate alerts and automated response systems' 
      },
      { 
        icon: (
          <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
          </svg>
        ), 
        title: 'Analytics', 
        desc: 'Comprehensive reporting and smart insights' 
      },
      { 
        icon: (
          <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
        ), 
        title: 'Secure', 
        desc: 'Enterprise-grade security and compliance' 
      }
    ],
    benefits: [
      '85% fewer incidents',
      '60% faster response',
      '24/7 AI monitoring',
      'Easy integration'
    ]
  }

  // Don't render until client-side to avoid hydration mismatch
  if (!isClient) {
    return (
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0B0B0F] to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Who <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">It&apos;s For</span>
            </h2>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Simplified Background for Mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0B0B0F] to-black"></div>
      {!isMobile && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 grid-texture opacity-5"></div>
          {/* Animated Background Elements - Only on desktop */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Futuristic Header with Holographic Effects */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative">
            {/* Holographic Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-600/10 rounded-full blur-3xl"></div>
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
                <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600">
                  WHO IT&apos;S FOR
                </h1>
              </motion.div>
              
              <div className="flex items-center justify-center space-x-8 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent flex-1 max-w-24"></div>
                <span className="text-3xl font-bold text-gray-300">TARGET AUDIENCE</span>
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

        {/* Main Content - Mobile Optimized */}
        {isMobile ? (
          // Mobile Layout - Modern Card-Based Design
          <div className="space-y-8 mb-6">
            {/* Hero Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full mb-4">
                    <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Perfect for High-Risk Venues</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    AI-powered surveillance designed for venues facing unique security challenges
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Features Carousel */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white text-center mb-6">Core Capabilities</h4>
              <div className="space-y-3">
                {mobileContent.features.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-xl p-4 hover:border-red-500/40 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-white text-sm mb-1">{item.title}</h5>
                          <p className="text-gray-400 text-xs">{item.desc}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-500/10 via-orange-500/5 to-red-600/10 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-4 text-center">Proven Results</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '85%', label: 'Fewer Incidents', color: 'from-red-400 to-red-600' },
                  { value: '60%', label: 'Faster Response', color: 'from-orange-400 to-orange-600' },
                  { value: '24/7', label: 'AI Monitoring', color: 'from-blue-400 to-blue-600' },
                  { value: 'Easy', label: 'Integration', color: 'from-green-400 to-green-600' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card - Compact & Clean */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-xl p-5 text-center">
                <h4 className="text-lg font-bold text-white mb-2">Ready to Deploy?</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Join the future of nightlife security with AI-powered surveillance
                </p>
                <div className="space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const element = document.querySelector('#contact')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="w-full text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Deploy Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push('/pricing')}
                    className="w-full bg-transparent border border-orange-500 text-orange-400 text-sm font-medium py-2 px-4 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    View Pricing
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          // Desktop Layout - Full Featured
          <div className="relative">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Enhanced Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-red-500/10 to-red-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <motion.h3 
                      className="text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent mb-3"
                      animate={{ 
                        textShadow: [
                          "0 0 10px rgba(239, 68, 68, 0.3)",
                          "0 0 20px rgba(239, 68, 68, 0.6)",
                          "0 0 10px rgba(239, 68, 68, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      NightShield Security Dashboard
                    </motion.h3>
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/50 rounded-full px-4 py-2 backdrop-blur-sm">
                      <motion.div 
                        className="w-2 h-2 bg-red-500 rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      ></motion.div>
                      <p className="text-red-400 text-sm font-medium">AI-Powered Surveillance</p>
                    </div>
                  </div>
                
                  {/* Enhanced Dashboard Mockup */}
                  <div className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] rounded-xl p-6 border border-gray-700/50 shadow-inner relative overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full" style={{
                        backgroundImage: `
                          linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                      }}></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-2">
                          <motion.div 
                            className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
                            animate={{ 
                              scale: [1, 1.1, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          ></motion.div>
                          <motion.div 
                            className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"
                            animate={{ 
                              scale: [1, 1.1, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                          ></motion.div>
                          <motion.div 
                            className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                            animate={{ 
                              scale: [1, 1.1, 1],
                              opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                          ></motion.div>
                        </div>
                        <div className="text-xs text-gray-400 bg-gradient-to-r from-gray-800/50 to-gray-700/50 px-2 py-1 rounded border border-gray-600/30">
                          <span className="text-red-400 font-bold">NightShield</span> v2.1
                        </div>
                      </div>
                  
                    {/* Enhanced Dashboard Content */}
                    <div className="space-y-4">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-lg p-4 border border-gray-600/30"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white text-sm font-medium">Active Cameras</span>
                          <span className="text-green-400 text-sm font-bold bg-green-400/10 px-2 py-1 rounded">24/24</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2 mt-3 overflow-hidden relative">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full shadow-lg shadow-green-500/50 relative"
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-lg p-4 border border-gray-600/30 relative overflow-hidden group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10 text-center">
                            <motion.div 
                              className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-1"
                              animate={{ 
                                textShadow: [
                                  "0 0 10px rgba(239, 68, 68, 0.3)",
                                  "0 0 20px rgba(239, 68, 68, 0.6)",
                                  "0 0 10px rgba(239, 68, 68, 0.3)"
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >0</motion.div>
                            <div className="text-xs text-gray-400">Active Threats</div>
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-lg p-4 border border-gray-600/30 relative overflow-hidden group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative z-10 text-center">
                            <motion.div 
                              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-1"
                              animate={{ 
                                textShadow: [
                                  "0 0 10px rgba(59, 130, 246, 0.3)",
                                  "0 0 20px rgba(59, 130, 246, 0.6)",
                                  "0 0 10px rgba(59, 130, 246, 0.3)"
                                ]
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            >98.7%</motion.div>
                            <div className="text-xs text-gray-400">System Health</div>
                          </div>
                        </motion.div>
                      </div>
                    
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-lg p-4 border border-gray-600/30"
                      >
                        <div className="text-xs text-gray-400 mb-3 font-medium">Recent Activity</div>
                        <div className="space-y-3">
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 p-2 rounded-md bg-green-500/5 border-l-2 border-green-500/50 relative overflow-hidden group"
                          >
                            <motion.div 
                              className="w-2 h-2 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            ></motion.div>
                            <span className="text-white text-xs group-hover:text-green-100 transition-colors">Camera 12: Motion detected</span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent"
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                            />
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 p-2 rounded-md bg-blue-500/5 border-l-2 border-blue-500/50 relative overflow-hidden group"
                          >
                            <motion.div 
                              className="w-2 h-2 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                            ></motion.div>
                            <span className="text-white text-xs group-hover:text-blue-100 transition-colors">System: Backup completed</span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, delay: 1 }}
                            />
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 p-2 rounded-md bg-yellow-500/5 border-l-2 border-yellow-500/50 relative overflow-hidden group"
                          >
                            <motion.div 
                              className="w-2 h-2 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                            ></motion.div>
                            <span className="text-white text-xs group-hover:text-yellow-100 transition-colors">Alert: Unusual pattern detected</span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent"
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, delay: 2 }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Enhanced Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6">
                    Perfect for High-Risk Venues
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    NightShield's AI-powered surveillance system is specifically designed for venues that face unique security challenges. 
                    Our advanced technology helps you maintain a safe environment while protecting your assets and people.
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { 
                      icon: (
                        <svg className="w-8 h-8 text-red-500 drop-shadow-lg shadow-red-500/50" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                        </svg>
                      ), 
                      title: 'Real-time Monitoring', 
                      desc: '24/7 AI surveillance with instant threat detection', 
                      delay: 0.3,
                      color: 'red'
                    },
                    { 
                      icon: (
                        <svg className="w-8 h-8 text-orange-500 drop-shadow-lg shadow-orange-500/50" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                      ), 
                      title: 'Fast Response', 
                      desc: 'Immediate alerts and automated response systems', 
                      delay: 0.4,
                      color: 'orange'
                    },
                    { 
                      icon: (
                        <svg className="w-8 h-8 text-blue-500 drop-shadow-lg shadow-blue-500/50" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                        </svg>
                      ), 
                      title: 'Analytics', 
                      desc: 'Comprehensive reporting and insights', 
                      delay: 0.5,
                      color: 'blue'
                    },
                    { 
                      icon: (
                        <svg className="w-8 h-8 text-green-500 drop-shadow-lg shadow-green-500/50" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                        </svg>
                      ), 
                      title: 'Secure', 
                      desc: 'Enterprise-grade security and compliance', 
                      delay: 0.6,
                      color: 'green'
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: item.delay }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 p-6 rounded-xl shadow-2xl hover:border-red-500/40 transition-all duration-300 overflow-hidden"
                    >
                      {/* Holographic background effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-orange-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Animated border glow */}
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: `linear-gradient(45deg, transparent, ${item.color === 'red' ? 'rgba(239, 68, 68, 0.3)' : item.color === 'orange' ? 'rgba(249, 115, 22, 0.3)' : item.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(34, 197, 94, 0.3)'}, transparent)`
                        }}
                        animate={{ 
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      
                      {/* Pulsing icon glow */}
                      <motion.div
                        className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full opacity-20"
                        style={{
                          backgroundColor: item.color === 'red' ? '#ef4444' : item.color === 'orange' ? '#f97316' : item.color === 'blue' ? '#3b82f6' : '#22c55e'
                        }}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: item.delay }}
                      />
                      
                      <div className="relative z-10">
                        <motion.div 
                          className="mb-3 flex items-center justify-center filter drop-shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.icon}
                        </motion.div>
                        <motion.h4 
                          className="font-bold text-white mb-2 text-lg group-hover:text-red-100 transition-colors"
                          animate={{ 
                            textShadow: [
                              "0 0 5px rgba(255, 255, 255, 0.1)",
                              "0 0 10px rgba(255, 255, 255, 0.2)",
                              "0 0 5px rgba(255, 255, 255, 0.1)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: item.delay }}
                        >
                          {item.title}
                        </motion.h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Enhanced glow border effect */}
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-red-500/30 via-orange-500/20 to-red-600/30 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  ></motion.div>
                  
                  <div className="relative bg-gradient-to-r from-red-600/10 via-orange-500/5 to-red-800/10 backdrop-blur-xl border border-red-500/30 p-6 rounded-xl overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full" style={{
                        backgroundImage: `
                          linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                      }}></div>
                    </div>
                    
                    <div className="relative z-10">
                      <motion.h4 
                        className="font-bold text-xl mb-4 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent"
                        animate={{ 
                          textShadow: [
                            "0 0 10px rgba(239, 68, 68, 0.3)",
                            "0 0 20px rgba(239, 68, 68, 0.6)",
                            "0 0 10px rgba(239, 68, 68, 0.3)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Why Choose NightShield?
                      </motion.h4>
                      <ul className="space-y-3">
                        {[
                          '85% reduction in security incidents',
                          '60% faster response times',
                          '24/7 AI monitoring',
                          'Easy integration with existing systems'
                        ].map((item, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 text-gray-300 group-hover:text-gray-200 transition-colors relative"
                          >
                            <motion.div 
                              className="w-2 h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-full shadow-lg shadow-red-500/50"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            ></motion.div>
                            <span className="text-sm font-medium">{item}</span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent"
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, delay: index * 0.5 }}
                            />
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            </div>
          </div>
        )}



      </div>
    </section>
  )
}

export default WhoItsFor
