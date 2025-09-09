'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '../../hooks/useIsMobile'

const VSL = () => {
  const { isMobile } = useIsMobile()

  return (
    <section className="relative py-16 bg-gradient-to-br from-black via-red-900/5 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* VSL Header */}
          <div className="text-center mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4"
            >
              See NightShield in Action
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg max-w-2xl mx-auto"
            >
              Watch how our AI surveillance system prevents incidents before they happen
            </motion.p>
          </div>

          {/* VSL Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* VSL Border Container with Red Theme */}
            <div className="relative p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-red-900/30 via-red-800/20 to-red-900/30 rounded-3xl border-2 border-red-200/40 shadow-2xl shadow-red-100/40">
              {/* Inner Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/10 via-transparent to-red-600/10 pointer-events-none"></div>
              
              {/* VSL Video Container */}
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl border border-red-500/30">
                <div className="relative aspect-[16/10]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://drive.google.com/file/d/1qbR8VUeAJcKvePFYIC_gur8ySI9X2EDw/preview"
                    title="NightShield VSL Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; allowfullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  
                  {/* Enhanced CCTV Frame Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Top Bar with Enhanced Styling */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-black/80 via-black/60 to-black/80 backdrop-blur-sm flex items-center justify-between px-4 text-white text-sm">
                      <span className="text-red-400 font-bold flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        NightShield AI
                      </span>
                      <span className="text-green-400 flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        LIVE
                      </span>
                    </div>
                    
                    {/* Enhanced Corner Brackets */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-l-3 border-t-3 border-red-500"></div>
                    <div className="absolute top-0 right-0 w-6 h-6 border-r-3 border-t-3 border-red-500"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-l-3 border-b-3 border-red-500"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-r-3 border-b-3 border-red-500"></div>
                    
                    {/* Subtle Scan Line Effect */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* VSL Caption with Enhanced Styling */}
              <div className="mt-4 text-center">
                <p className="text-gray-200 text-sm sm:text-base font-medium">
                  Watch how NightShield prevents incidents in real-time
                </p>
                <div className="mt-2 w-16 h-0.5 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section Below Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-red-600/10 via-red-500/5 to-red-800/10 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Protect Your Venue?
              </h3>
              <p className="text-gray-300 mb-6">
                Book a live demonstration and see how NightShield can transform your security operations
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
              >
                Book Live Demo
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default VSL
