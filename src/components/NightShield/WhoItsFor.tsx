'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/useIsMobile'

const WhoItsFor = () => {
  const { isMobile, isClient } = useIsMobile()

  // Mobile-optimized content with reduced complexity
  const mobileContent = {
    features: [
      { icon: '🛡️', title: 'Real-time Monitoring', desc: '24/7 AI surveillance' },
      { icon: '⚡', title: 'Fast Response', desc: 'Instant alerts' },
      { icon: '📊', title: 'Analytics', desc: 'Smart insights' },
      { icon: '🔒', title: 'Secure', desc: 'Enterprise security' }
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
        {/* Enhanced Header with Animations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-3 mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg animate-pulse"></div>
              <Image 
                src="/images/logo/LOGO TRANSPARENT.png" 
                alt="NightShield Logo" 
                width={48} 
                height={48}
                className="w-12 h-12 relative z-10"
                priority
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Who <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">It&apos;s For</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            NightShield is designed for venues that prioritize safety and security in high-risk environments
          </motion.p>
        </motion.div>

        {/* Main Content - Mobile Optimized */}
        {isMobile ? (
          // Mobile Layout - Simplified and Performance Optimized
          <div className="space-y-12 mb-16">
            {/* Mobile Header */}
            <div className="text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4">
                Perfect for High-Risk Venues
              </h3>
              <p className="text-gray-300 leading-relaxed">
                NightShield's AI-powered surveillance system is designed for venues that face unique security challenges.
              </p>
            </div>

            {/* Mobile Features Grid - Simplified */}
            <div className="grid grid-cols-2 gap-4">
              {mobileContent.features.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-gradient-to-br from-[#0B0B0F]/80 to-[#1A1A1F]/60 backdrop-blur-xl border border-red-500/20 hover:border-red-500/40 p-4 rounded-xl transition-all duration-300 cursor-pointer"
                >
                  <motion.div 
                    className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="font-bold text-white group-hover:text-red-100 mb-1 text-sm transition-colors duration-300">{item.title}</h4>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Mobile Benefits - Simplified */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="group bg-gradient-to-r from-red-600/10 via-red-500/5 to-red-800/10 backdrop-blur-xl border border-red-500/30 hover:border-red-500/50 p-6 rounded-xl transition-all duration-300"
            >
              <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent group-hover:from-red-50 group-hover:to-red-200 transition-all duration-300">Why Choose NightShield?</h4>
              <ul className="space-y-2">
                {mobileContent.benefits.map((item, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-gray-300 group-hover:text-gray-200 transition-all duration-300 cursor-pointer"
                  >
                    <motion.div 
                      className="w-2 h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-full group-hover:scale-125 transition-transform duration-300"
                      whileHover={{ scale: 1.3, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    <span className="text-sm font-medium group-hover:font-semibold transition-all duration-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        ) : (
          // Desktop Layout - Full Featured
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Enhanced Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                {/* Glow Effect */}
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-red-500/10 to-red-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                
                <motion.div 
                  className="relative bg-[#0B0B0F]/90 backdrop-blur-xl border border-red-500/30 hover:border-red-500/50 rounded-2xl p-8 shadow-2xl transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-center mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 group-hover:from-red-50 group-hover:to-red-100 bg-clip-text text-transparent mb-3 transition-all duration-300">
                      NightShield Security Dashboard
                    </h3>
                    <motion.div 
                      className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/30 hover:border-red-500/50 rounded-full px-4 py-2 transition-all duration-300 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-red-500 rounded-full animate-pulse"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      ></motion.div>
                      <p className="text-red-400 group-hover:text-red-300 text-sm font-medium transition-colors duration-300">AI-Powered Surveillance</p>
                    </motion.div>
                  </motion.div>
                
                  {/* Enhanced Dashboard Mockup */}
                  <motion.div 
                    className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/70 shadow-inner transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <motion.div 
                          className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        ></motion.div>
                        <motion.div 
                          className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        ></motion.div>
                        <motion.div 
                          className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        ></motion.div>
                      </div>
                      <motion.div 
                        className="text-xs text-gray-400 bg-gray-800/50 hover:bg-gray-700/50 px-2 py-1 rounded transition-all duration-300 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        NightShield v2.1
                      </motion.div>
                    </div>
                  
                    {/* Enhanced Dashboard Content */}
                    <div className="space-y-4">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="group bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-lg p-4 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">Active Cameras</span>
                          <motion.span 
                            className="text-green-400 text-sm font-bold bg-green-400/10 hover:bg-green-400/20 px-2 py-1 rounded transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            24/24
                          </motion.span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2 mt-3 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full shadow-lg shadow-green-500/50 group-hover:shadow-green-500/70 transition-all duration-300"
                          ></motion.div>
                        </div>
                      </motion.div>
                    
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -3 }}
                          className="group bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-lg p-4 border border-gray-600/30 hover:border-red-500/30 transition-all duration-300 cursor-pointer"
                        >
                          <div className="text-center">
                            <motion.div 
                              className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-1 group-hover:from-red-300 group-hover:to-red-500 transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              0
                            </motion.div>
                            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Active Threats</div>
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -3 }}
                          className="group bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-lg p-4 border border-gray-600/30 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                        >
                          <div className="text-center">
                            <motion.div 
                              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-1 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              98.7%
                            </motion.div>
                            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">System Health</div>
                          </div>
                        </motion.div>
                      </div>
                    
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="group bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-lg p-4 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 cursor-pointer"
                      >
                        <div className="text-xs text-gray-400 mb-3 font-medium group-hover:text-gray-300 transition-colors duration-300">Recent Activity</div>
                        <div className="space-y-3">
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5, scale: 1.02 }}
                            className="group/item flex items-center space-x-3 p-2 rounded-md bg-green-500/5 border-l-2 border-green-500/50 hover:bg-green-500/10 transition-all duration-300 cursor-pointer"
                          >
                            <motion.div 
                              className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50 group-hover/item:scale-125 transition-transform duration-300"
                              whileHover={{ scale: 1.5, rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            ></motion.div>
                            <span className="text-white text-xs group-hover/item:text-green-100 transition-colors duration-300">Camera 12: Motion detected</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5, scale: 1.02 }}
                            className="group/item flex items-center space-x-3 p-2 rounded-md bg-blue-500/5 border-l-2 border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer"
                          >
                            <motion.div 
                              className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50 group-hover/item:scale-125 transition-transform duration-300"
                              whileHover={{ scale: 1.5, rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            ></motion.div>
                            <span className="text-white text-xs group-hover/item:text-blue-100 transition-colors duration-300">System: Backup completed</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 5, scale: 1.02 }}
                            className="group/item flex items-center space-x-3 p-2 rounded-md bg-yellow-500/5 border-l-2 border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300 cursor-pointer"
                          >
                            <motion.div 
                              className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50 group-hover/item:scale-125 transition-transform duration-300"
                              whileHover={{ scale: 1.5, rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            ></motion.div>
                            <span className="text-white text-xs group-hover/item:text-yellow-100 transition-colors duration-300">Alert: Unusual pattern detected</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
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
                    { icon: '🛡️', title: 'Real-time Monitoring', desc: '24/7 AI surveillance with instant threat detection', delay: 0.3 },
                    { icon: '⚡', title: 'Fast Response', desc: 'Immediate alerts and automated response systems', delay: 0.4 },
                    { icon: '📊', title: 'Analytics', desc: 'Comprehensive reporting and insights', delay: 0.5 },
                    { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security and compliance', delay: 0.6 }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: item.delay }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative bg-gradient-to-br from-[#0B0B0F]/80 to-[#1A1A1F]/60 backdrop-blur-xl border border-red-500/20 p-6 rounded-xl shadow-2xl hover:border-red-500/40 transition-all duration-300 cursor-pointer"
                    >
                      {/* Enhanced glow effect on hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                      
                      <div className="relative z-10">
                        <motion.div 
                          className="text-3xl mb-3 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          {item.icon}
                        </motion.div>
                        <h4 className="font-bold text-white mb-2 text-lg group-hover:text-red-100 transition-colors duration-300">{item.title}</h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed duration-300">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="relative group cursor-pointer"
                >
                  {/* Enhanced glow border effect */}
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-red-500/30 via-red-600/20 to-red-500/30 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  
                  <motion.div 
                    className="relative bg-gradient-to-r from-red-600/10 via-red-500/5 to-red-800/10 backdrop-blur-xl border border-red-500/30 hover:border-red-500/50 p-6 rounded-xl transition-all duration-300"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-bold text-xl mb-4 bg-gradient-to-r from-white to-red-100 group-hover:from-red-50 group-hover:to-red-200 bg-clip-text text-transparent transition-all duration-300">Why Choose NightShield?</h4>
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
                          whileHover={{ x: 5, scale: 1.02 }}
                          className="group/item flex items-center space-x-3 text-gray-300 group-hover:text-gray-200 transition-all duration-300 cursor-pointer"
                        >
                          <motion.div 
                            className="w-2 h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-full shadow-lg shadow-red-500/50 group-hover/item:scale-125 transition-transform duration-300"
                            whileHover={{ scale: 1.5, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          ></motion.div>
                          <span className="text-sm font-medium group-hover/item:font-semibold transition-all duration-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default WhoItsFor