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
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#0B0B0F]/80 to-[#1A1A1F]/60 backdrop-blur-xl border border-red-500/20 p-4 rounded-xl"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-bold text-white mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile Benefits - Simplified */}
            <div className="bg-gradient-to-r from-red-600/10 via-red-500/5 to-red-800/10 backdrop-blur-xl border border-red-500/30 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">Why Choose NightShield?</h4>
              <ul className="space-y-2">
                {mobileContent.benefits.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-red-500/10 to-red-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                <div className="relative bg-[#0B0B0F]/90 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">
                      NightShield Security Dashboard
                    </h3>
                    <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <p className="text-red-400 text-sm font-medium">AI-Powered Surveillance</p>
                    </div>
                  </div>
                
                  {/* Enhanced Dashboard Mockup */}
                  <div className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] rounded-xl p-6 border border-gray-700/50 shadow-inner">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                      </div>
                      <div className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">NightShield v2.1</div>
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
                        <div className="w-full bg-gray-700/50 rounded-full h-2 mt-3 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full shadow-lg shadow-green-500/50"
                          ></motion.div>
                        </div>
                      </motion.div>
                    
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-lg p-4 border border-gray-600/30"
                        >
                          <div className="text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-1">0</div>
                            <div className="text-xs text-gray-400">Active Threats</div>
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-lg p-4 border border-gray-600/30"
                        >
                          <div className="text-center">
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-1">98.7%</div>
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
                            className="flex items-center space-x-3 p-2 rounded-md bg-green-500/5 border-l-2 border-green-500/50"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                            <span className="text-white text-xs">Camera 12: Motion detected</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 p-2 rounded-md bg-blue-500/5 border-l-2 border-blue-500/50"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                            <span className="text-white text-xs">System: Backup completed</span>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 p-2 rounded-md bg-yellow-500/5 border-l-2 border-yellow-500/50"
                          >
                            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50"></div>
                            <span className="text-white text-xs">Alert: Unusual pattern detected</span>
                          </motion.div>
                        </div>
                      </motion.div>
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
                      className="group relative bg-gradient-to-br from-[#0B0B0F]/80 to-[#1A1A1F]/60 backdrop-blur-xl border border-red-500/20 p-6 rounded-xl shadow-2xl hover:border-red-500/40 transition-all duration-300"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="text-3xl mb-3 filter drop-shadow-lg">{item.icon}</div>
                        <h4 className="font-bold text-white mb-2 text-lg group-hover:text-red-100 transition-colors">{item.title}</h4>
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
                  {/* Glow border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 via-red-600/20 to-red-500/30 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  
                  <div className="relative bg-gradient-to-r from-red-600/10 via-red-500/5 to-red-800/10 backdrop-blur-xl border border-red-500/30 p-6 rounded-xl">
                    <h4 className="font-bold text-xl mb-4 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">Why Choose NightShield?</h4>
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
                          className="flex items-center space-x-3 text-gray-300 group-hover:text-gray-200 transition-colors"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-full shadow-lg shadow-red-500/50"></div>
                          <span className="text-sm font-medium">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}



        {/* Enhanced Bottom CTA - Mobile Optimized */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative group max-w-5xl mx-auto">
            {/* Enhanced glow effect - Only on desktop */}
            {!isMobile && (
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-red-600/10 to-red-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            )}
            
            <div className={`relative bg-gradient-to-br from-[#0B0B0F]/95 via-[#1A1A1F]/90 to-[#0B0B0F]/95 backdrop-blur-xl border border-red-500/30 rounded-3xl shadow-2xl ${isMobile ? 'p-6' : 'p-10'}`}>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={`font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent ${isMobile ? 'text-2xl' : 'text-4xl md:text-5xl'}`}
              >
                Not Sure If NightShield Fits Your Venue?
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className={`text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed ${isMobile ? 'text-base' : 'text-xl'}`}
              >
                Our security experts will analyze your specific needs and create a customized solution for your venue type.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.button
                  whileHover={{ scale: isMobile ? 1 : 1.05, y: isMobile ? 0 : -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`relative group rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 ${isMobile ? 'py-3 px-6' : 'py-4 px-10'}`}
                >
                  {!isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  <span className="relative">Schedule Consultation</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: isMobile ? 1 : 1.05, y: isMobile ? 0 : -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.querySelector('#pricing')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`relative group rounded-xl font-semibold text-white bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300 shadow-lg hover:shadow-xl ${isMobile ? 'py-3 px-6' : 'py-4 px-10'}`}
                >
                  {!isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  <span className="relative">View Pricing</span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhoItsFor
