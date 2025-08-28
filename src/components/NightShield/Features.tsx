'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Features = () => {
  const features = [
    {
      title: "Real-Time Threat Detection",
      description: "Advanced AI algorithms detect potential threats within 2 seconds of detection.",
      icon: (
        <Image 
          src="/images/icons/icon-star.svg" 
          alt="Threat Detection" 
          width={32} 
          height={32}
          className="w-8 h-8"
        />
      ),
      status: "available",
      highlight: true
    },
    {
      title: "Night Vision Cameras",
      description: "High-resolution cameras with infrared capabilities for 24/7 monitoring.",
      icon: (
        <Image 
          src="/images/icons/icon-consulting.svg" 
          alt="Night Vision" 
          width={32} 
          height={32}
          className="w-8 h-8"
        />
      ),
      status: "available",
      highlight: false
    },
    {
      title: "Mobile App Alerts",
      description: "Instant notifications sent directly to security personnel's mobile devices.",
      icon: (
        <Image 
          src="/images/icons/icon-bag.svg" 
          alt="Mobile Alerts" 
          width={32} 
          height={32}
          className="w-8 h-8"
        />
      ),
      status: "available",
      highlight: false
    },
    {
      title: "Cloud Storage",
      description: "Secure cloud storage for all surveillance footage with automatic backup.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
        </svg>
      ),
      status: "available",
      highlight: false
    },
    {
      title: "Facial Recognition",
      description: "Advanced facial recognition to identify known threats and VIP customers.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
        </svg>
      ),
      status: "coming-soon",
      highlight: false
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered analytics to predict potential incidents before they occur.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20A8 8 0 0 1 4 12A8 8 0 0 1 12 4M12 6A6 6 0 0 0 6 12A6 6 0 0 0 12 18A6 6 0 0 0 18 12A6 6 0 0 0 12 6M12 8A4 4 0 0 1 16 12A4 4 0 0 1 12 16A4 4 0 0 1 8 12A4 4 0 0 1 12 8Z"/>
        </svg>
      ),
      status: "coming-soon",
      highlight: false
    },
    {
      title: "Integration APIs",
      description: "Seamless integration with existing security systems and third-party platforms.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      status: "coming-soon",
      highlight: false
    },
    {
      title: "Multi-Venue Management",
      description: "Centralized dashboard to manage multiple venues from a single interface.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
        </svg>
      ),
      status: "coming-soon",
      highlight: false
    }
  ]

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black"></div>
      <div className="absolute inset-0 grid-texture opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Image 
              src="/images/logo/LOGO TRANSPARENT.png" 
              alt="NightShield Logo" 
              width={48} 
              height={48}
              className="w-12 h-12"
            />
            <h2 className="text-4xl md:text-5xl font-bold">
              Powerful <span className="text-red-500">Features</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to protect your venue with cutting-edge AI surveillance technology
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${feature.highlight ? 'lg:col-span-2' : ''}`}
            >
              <div className={`tilted-card bg-card-bg border border-red-500/20 rounded-xl p-6 h-full transition-all duration-300 ${
                feature.status === 'coming-soon' ? 'opacity-60' : 'card-hover'
              } ${feature.highlight ? 'border-red-500/40 bg-gradient-to-br from-card-bg to-red-500/5' : ''}`}>
                
                {/* Status Badge */}
                {feature.status === 'coming-soon' && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
                      </svg>
                      <span>Coming Soon</span>
                    </div>
                  </div>
                )}

                {/* Highlight Badge */}
                {feature.highlight && (
                  <div className="absolute -top-3 left-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      MVP Feature
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  feature.status === 'coming-soon' 
                    ? 'bg-gray-600/20 text-gray-400' 
                    : 'bg-red-500/10 text-red-500'
                }`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-4 ${
                  feature.status === 'coming-soon' ? 'text-gray-400' : 'text-white'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed ${
                  feature.status === 'coming-soon' ? 'text-gray-500' : 'text-gray-300'
                }`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-card-bg border border-red-500/20 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-500 mb-2">Available Now</h3>
              <p className="text-gray-300">Core features ready for immediate deployment</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-400 mb-2">Coming Soon</h3>
              <p className="text-gray-500">Advanced features in development</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-500 mb-2">Future Updates</h3>
              <p className="text-gray-300">Continuous improvements and new capabilities</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
