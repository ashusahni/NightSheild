'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import Contact from '@/components/NightShield/Contact'


interface Feature {
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  stats: string
  badge?: string
}

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  const features: Feature[] = [
    {
      title: "Real-Time Threat Detection",
      description: "AI-powered algorithms detect potential threats within 2 seconds, providing instant alerts to security personnel with 99.9% accuracy.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: "from-red-500/20 to-orange-500/20",
      stats: "99.9% Accuracy",
      badge: "MVP"
    },
    {
      title: "Night Vision Cameras",
      description: "High-resolution infrared cameras with 4K clarity for 24/7 monitoring in complete darkness with advanced image processing.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-blue-500/20 to-cyan-500/20",
      stats: "4K Resolution"
    },
    {
      title: "Mobile App Alerts",
      description: "Instant push notifications with detailed incident information sent directly to security teams in under 2 seconds.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-purple-500/20 to-pink-500/20",
      stats: "<2s Response"
    },
    {
      title: "Cloud Storage",
      description: "Secure, encrypted cloud storage with automatic backup and unlimited retention periods for all surveillance data.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      gradient: "from-green-500/20 to-emerald-500/20",
      stats: "Unlimited Storage"
    }
  ]

  const technicalSpecs = [
    {
      category: "Hardware Requirements",
      specs: [
        { 
          name: "Camera Resolution", 
          value: "1080p HD (1920×1080)", 
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )
        },
        { 
          name: "Night Vision Range", 
          value: "Up to 30 meters", 
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )
        },
        { 
          name: "Storage Capacity", 
          value: "1TB - 10TB options", 
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
          )
        },
        { 
          name: "Processing Power", 
          value: "Intel i5/AMD Ryzen 5", 
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        }
      ]
    },
    {
      category: "Software Capabilities",
      specs: [
        { 
          name: "AI Processing Speed", 
          value: "< 5 seconds detection", 
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          )
        },
        { 
          name: "Concurrent Streams", 
          value: "Up to 16 cameras", 
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        },
        { 
          name: "Uptime Guarantee", 
          value: "99.5% availability", 
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          )
        },
        { 
          name: "Data Retention", 
          value: "30-90 days storage", 
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          )
        }
      ]
    }
  ]

  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "AES-256 encryption for all data transmission and storage",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      gradient: "from-green-500/20 to-emerald-500/20",
      compliance: "SOC 2 Type II"
    },
    {
      title: "GDPR Compliance",
      description: "Full compliance with data protection regulations and privacy laws",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      gradient: "from-blue-500/20 to-cyan-500/20",
      compliance: "GDPR Ready"
    },
    {
      title: "Multi-Factor Authentication",
      description: "Advanced user authentication with token-based security",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: "from-purple-500/20 to-pink-500/20",
      compliance: "ISO 27001"
    },
    {
      title: "Audit Trail",
      description: "Complete logging and monitoring of all system access and activities",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      gradient: "from-orange-500/20 to-red-500/20",
      compliance: "HIPAA Compatible"
    }
  ]

  const analyticsFeatures = [
    {
      title: "Real-Time Dashboard",
      description: "Comprehensive overview of all security metrics and system status",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      metrics: "20+ KPIs tracked"
    },
    
    {
      title: "Incident Reports",
      description: "Automated generation of detailed incident documentation and analysis",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      metrics: "PDF/Excel export"
    },
    {
      title: "Predictive Insights",
      description: "AI-powered forecasting of potential security risks and patterns",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      metrics: "85% accuracy rate"
    }
  ]

 

  const deploymentOptions = [
    {
      title: "Cloud Deployment",
      description: "Fully managed cloud solution with automatic updates and scaling",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      setup: "30 minutes",
      features: ["Auto-scaling", "Global CDN", "99.5% uptime"]
    },
    {
      title: "On-Premise Installation",
      description: "Complete control with local hardware and data storage",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      setup: "2-4 hours",
      features: ["Full control", "Local storage", "Custom config"]
    },
    {
      title: "Hybrid Solution",
      description: "Best of both worlds with local processing and cloud backup",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      setup: "1-2 hours",
      features: ["Edge computing", "Cloud backup", "Flexible scaling"]
    }
  ]

  const upcomingFeatures = [
    {
      title: "Facial Recognition",
      description: "Advanced biometric identification for known threats and VIP customer recognition.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      eta: "Q2 2024",
      gradient: "from-amber-500/20 to-yellow-500/20"
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered pattern recognition to predict and prevent incidents before they occur.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      eta: "Q3 2024",
      gradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "Integration APIs",
      description: "Seamless integration with existing security systems and third-party platforms.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      eta: "Q4 2024",
      gradient: "from-teal-500/20 to-blue-500/20"
    }
  ]

  // Auto-rotate through features
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveFeature((prev) => (prev + 1) % features.length)
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [isHovered, features.length])

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-black">
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
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Mobile Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8 md:hidden"
        >
          <img 
            src="/images/logo/TRANSPARENT LOGO + TEXT.png" 
            alt="NightShield Logo" 
            className="h-16 w-auto"
          />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Powerful <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Features</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Everything you need to protect your venue with cutting-edge AI surveillance technology
          </motion.p>
        </motion.div>

        {/* Interactive Feature Cards */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-white mb-4">Available Now</h3>
            <p className="text-gray-400 text-lg">Core features ready for deployment</p>
          </motion.div>

          <div 
            className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className={cn(
                    "relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer group",
                    activeFeature === index
                      ? "bg-gradient-to-r from-gray-900/90 to-gray-800/90 border-red-500/50 shadow-2xl shadow-red-500/20"
                      : "bg-gray-900/50 border-gray-800 hover:border-gray-600"
                  )}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Badge */}
                  {feature.badge && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {feature.badge}
                    </div>
                  )}

                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={cn(
                        "p-3 rounded-xl transition-all duration-500",
                        activeFeature === index ? "bg-red-500/20 text-red-400" : "bg-gray-800 text-gray-400"
                      )}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-100 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {feature.description}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-red-400 font-semibold text-sm">{feature.stats}</span>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Active indicator */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-orange-500 rounded-r"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: activeFeature === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Feature Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="relative"
            >
              <div className="sticky top-24">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className={cn(
                    "relative p-8 rounded-3xl border-2 bg-gradient-to-br backdrop-blur-xl",
                    `bg-gradient-to-br ${features[activeFeature].gradient}`,
                    "border-white/20 shadow-2xl"
                  )}
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer" />
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="text-white scale-150">
                        {features[activeFeature].icon}
                      </div>
                    </motion.div>

                    <h3 className="text-3xl font-bold text-white text-center mb-4">
                      {features[activeFeature].title}
                    </h3>

                    <p className="text-gray-300 text-center leading-relaxed mb-6">
                      {features[activeFeature].description}
                    </p>

                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-white font-semibold">{features[activeFeature].stats}</span>
                      </div>
                    </div>

                    {/* Progress indicators */}
                    <div className="flex justify-center space-x-2 mt-8">
                      {features.map((_, index) => (
                        <motion.div
                          key={index}
                          className={cn(
                            "w-2 h-2 rounded-full cursor-pointer transition-all duration-300",
                            activeFeature === index ? "bg-red-500 w-8" : "bg-gray-600"
                          )}
                          onClick={() => setActiveFeature(index)}
                          whileHover={{ scale: 1.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Coming Soon Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-400 mb-4">Coming Soon</h3>
            <p className="text-gray-500 text-lg">Advanced features in development</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                className="group relative"
              >
                <motion.div
                  className="relative p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-600 transition-all duration-500 h-full"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                >
                  {/* Coming soon badge */}
                  <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-semibold">
                    Soon
                  </div>

                  <motion.div
                    className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br",
                      feature.gradient
                    )}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                    {feature.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400 font-semibold text-sm">{feature.eta}</span>
                    <motion.div
                      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Technical Specifications</h3>
            <p className="text-gray-400 text-lg">Enterprise-grade hardware and software capabilities</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {technicalSpecs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, x: categoryIndex === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: categoryIndex === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: 2.2 + categoryIndex * 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-500 h-full">
                  <h4 className="text-2xl font-bold text-white mb-8 text-center">{category.category}</h4>
                  
                  <div className="space-y-6">
                    {category.specs.map((spec, specIndex) => (
                      <motion.div
                        key={specIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, delay: 2.4 + categoryIndex * 0.2 + specIndex * 0.1 }}
                        className="flex items-center justify-between p-4 bg-black/30 rounded-xl hover:bg-black/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-4">
                          <motion.div
                            className="text-2xl"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {spec.icon}
                          </motion.div>
                          <div>
                            <p className="text-gray-300 font-medium group-hover:text-white transition-colors">
                              {spec.name}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-red-400 font-bold text-sm">
                            {spec.value}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative gradient border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    whileHover={{ scale: 1.02 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advanced Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Advanced Security</h3>
            <p className="text-gray-400 text-lg">Enterprise-grade security and compliance standards</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 2.6 + index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  className={cn(
                    "relative p-6 rounded-2xl border transition-all duration-500 h-full bg-gradient-to-br",
                    feature.gradient,
                    "border-gray-700 hover:border-gray-500 backdrop-blur-sm"
                  )}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                  }}
                >
                  {/* Compliance badge */}
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {feature.compliance}
                  </div>

                  <motion.div
                    className="text-4xl mb-4 text-center"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>

                  <h4 className="text-xl font-bold text-white mb-3 text-center group-hover:text-gray-200 transition-colors">
                    {feature.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed text-center group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>

                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Analytics & Reporting */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Analytics & Reporting</h3>
            <p className="text-gray-400 text-lg">Comprehensive insights and intelligent reporting</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {analyticsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 3.0 + index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transition-all duration-500 h-full"
                  whileHover={{ 
                    scale: 1.03, 
                    y: -5,
                    boxShadow: "0 15px 30px rgba(239, 68, 68, 0.2)"
                  }}
                >
                  <motion.div
                    className="text-3xl mb-4 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>

                  <h4 className="text-lg font-bold text-white mb-3 text-center group-hover:text-red-100 transition-colors">
                    {feature.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed text-center mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>

                  <div className="text-center">
                    <span className="inline-flex items-center space-x-2 bg-red-500/20 rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                      <span className="text-red-400 font-semibold text-xs">{feature.metrics}</span>
                    </span>
                  </div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.02 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Deployment Options */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 3.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Deployment Options</h3>
            <p className="text-gray-400 text-lg">Flexible installation methods to suit your needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {deploymentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 3.8 + index * 0.2 }}
                className="group relative"
              >
                <motion.div
                  className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 h-full"
                  whileHover={{ 
                    scale: 1.03, 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(147, 51, 234, 0.2)"
                  }}
                >
                  <motion.div
                    className="text-5xl mb-6 text-center"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.4 }}
                  >
                    {option.icon}
                  </motion.div>

                  <h4 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-purple-100 transition-colors">
                    {option.title}
                  </h4>

                  <p className="text-gray-400 leading-relaxed text-center mb-6 group-hover:text-gray-300 transition-colors">
                    {option.description}
                  </p>

                  <div className="text-center mb-6">
                    <div className="inline-flex items-center space-x-2 bg-purple-500/20 rounded-full px-4 py-2">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-purple-300 font-semibold text-sm">Setup: {option.setup}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {option.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 4.0 + index * 0.2 + featureIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                        <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                      </motion.div>
                    ))}
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

        {/* Support & Maintenance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 4.0 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">Support & Maintenance</h3>
            <p className="text-gray-400 text-lg">24/7 support and continuous system optimization</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-3xl p-8 border border-gray-700"
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 4.2 }}
                  className="group"
                >
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.3, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                    24/7 Technical Support
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    Round-the-clock expert support with average response time under 15 minutes
                  </p>
                  <div className="mt-3">
                    <span className="inline-flex items-center space-x-2 bg-green-500/20 rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 font-semibold text-xs">&lt; 15min response</span>
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 4.4 }}
                  className="group"
                >
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.3, rotate: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    Automatic Updates
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    Seamless security patches and feature updates with zero downtime deployment
                  </p>
                  <div className="mt-3">
                    <span className="inline-flex items-center space-x-2 bg-blue-500/20 rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      <span className="text-blue-400 font-semibold text-xs">Zero downtime</span>
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 4.6 }}
                  className="group"
                >
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    Performance Monitoring
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    Continuous system optimization and performance analytics for peak efficiency
                  </p>
                  <div className="mt-3">
                    <span className="inline-flex items-center space-x-2 bg-purple-500/20 rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                      <span className="text-purple-400 font-semibold text-xs">Real-time monitoring</span>
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Call to action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 4.8 }}
                className="text-center mt-12"
              >
                <motion.button
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-4 px-8 rounded-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
                <p className="text-gray-400 text-sm mt-3">
                  Contact our team for a personalized demo and consultation
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Contact />
    </section>
  )
}

export default Features