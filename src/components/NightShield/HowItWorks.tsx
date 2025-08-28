'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


const HowItWorks = () => {
  const surveillanceScenes = [
    {
      id: 1,
      title: "Camera Detection",
      description: "High-resolution cameras capture real-time footage with advanced night vision capabilities.",
      videoUrl: "/images/videos/WhatsApp Video 2025-08-28 at 23.05.22_6b90b8d6.mp4",
      targetPosition: { x: 70, y: 30 },
      threatLevel: "HIGH",
      timestamp: "23:45:32"
    },
    {
      id: 2,
      title: "AI Brain Analysis",
      description: "Our advanced AI algorithms analyze behavior patterns and detect potential threats in milliseconds.",
      videoUrl: "/images/videos/WhatsApp Video 2025-08-28 at 23.05.22_6b90b8d6.mp4",
      targetPosition: { x: 25, y: 60 },
      threatLevel: "MEDIUM",
      timestamp: "23:45:35"
    },
    {
      id: 3,
      title: "Instant Alert",
      description: "Security personnel receive immediate notifications via phone, tablet, or control room displays.",
      videoUrl: "/images/videos/WhatsApp Video 2025-08-28 at 23.05.22_6b90b8d6.mp4",
      targetPosition: { x: 80, y: 70 },
      threatLevel: "CRITICAL",
      timestamp: "23:45:38"
    },
    {
      id: 4,
      title: "Evidence Recording",
      description: "All incidents are automatically recorded and stored for legal proceedings and training purposes.",
      videoUrl: "/images/videos/WhatsApp Video 2025-08-28 at 23.05.22_6b90b8d6.mp4",
      targetPosition: { x: 45, y: 45 },
      threatLevel: "LOW",
      timestamp: "23:45:41"
    }
  ]

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black"></div>
      <div className="absolute inset-0 grid-texture opacity-10"></div>
      
      {/* Ripple Grid Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-500/2 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
                <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <div className="flex justify-center items-center space-x-4 mb-8">
            <Image 
              src="/images/logo/LOGO TRANSPARENT.png" 
              alt="NightShield Logo" 
              width={56} 
              height={56}
              className="w-14 h-14"
            />
            <h2 className="text-4xl md:text-5xl font-bold">
              How <span className="text-red-500">NightShield</span> Works
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered surveillance system works in four simple steps to keep your venue safe 24/7
          </p>
          

        </motion.div>

        {/* Surveillance Scenes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {surveillanceScenes.map((scene, index) => (
            <motion.div
              key={scene.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-base z-20 shadow-lg">
                {scene.id}
              </div>

              {/* Surveillance Image Container */}
              <div className="bg-card-bg border border-red-500/20 rounded-2xl overflow-hidden relative group hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500">
                {/* Video */}
                <div className="relative aspect-square bg-black">
                  <video 
                    src={scene.videoUrl} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                  
                  {/* CCTV Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Top Bar */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-black/80 backdrop-blur-sm flex items-center justify-between px-3 text-white text-xs font-mono">
                      <span className="text-red-500 font-bold">CAM {scene.id.toString().padStart(2, '0')}</span>
                      <span className="text-gray-300">{scene.timestamp}</span>
                    </div>
                    
                    {/* Threat Level Indicator */}
                    <div className={`absolute top-2 right-2 px-2 py-1 rounded text-white text-xs font-bold ${
                      scene.threatLevel === 'CRITICAL' ? 'bg-red-600' :
                      scene.threatLevel === 'HIGH' ? 'bg-orange-600' :
                      scene.threatLevel === 'MEDIUM' ? 'bg-yellow-600' :
                      'bg-green-600'
                    }`}>
                      {scene.threatLevel}
                    </div>
                    
                    {/* Target Lock Box */}
                    <div 
                      className="absolute border-2 border-red-500 border-dashed animate-pulse"
                      style={{
                        left: `${scene.targetPosition.x}%`,
                        top: `${scene.targetPosition.y}%`,
                        width: '40px',
                        height: '40px',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {/* Crosshair */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1 h-full bg-red-500"></div>
                        <div className="absolute w-full h-1 bg-red-500"></div>
                      </div>
                      
                      {/* Corner Brackets */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-red-500"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-red-500"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-red-500"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-red-500"></div>
                    </div>
                    
                    {/* Scan Lines */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="h-px bg-white/30 animate-pulse"></div>
                      <div className="h-px bg-white/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    
                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-red-500/50"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-red-500/50"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-red-500/50"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-red-500/50"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                    {scene.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {scene.description}
                  </p>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Connection Line */}
              {index < surveillanceScenes.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-red-500/50 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-card-bg border border-red-500/20 rounded-2xl p-10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Protect Your Venue?
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              See NightShield in action with a live demonstration tailored to your venue type.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              Schedule Live Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
