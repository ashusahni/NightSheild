'use client'

import React from 'react'
import { motion } from 'framer-motion'

const WhoItsFor = () => {
  const industries = [
    {
      name: "Nightclubs",
      description: "Protect your patrons and staff from violence, theft, and unauthorized access in high-energy environments.",
      icon: "🎵",
      challenges: ["Late-night security", "Crowd control", "VIP protection"],
      benefits: ["Reduced incidents by 85%", "Faster response times", "24/7 monitoring"]
    },
    {
      name: "Casinos",
      description: "Safeguard gaming floors, detect cheating, and protect high-value assets with precision AI monitoring.",
      icon: "🎰",
      challenges: ["Gaming security", "Asset protection", "Regulatory compliance"],
      benefits: ["Fraud detection", "Asset tracking", "Compliance reporting"]
    },
    {
      name: "Event Venues",
      description: "Ensure safety at concerts, conferences, and large gatherings with real-time crowd monitoring.",
      icon: "🎪",
      challenges: ["Crowd management", "Emergency response", "Access control"],
      benefits: ["Crowd analytics", "Emergency alerts", "Capacity monitoring"]
    },
    {
      name: "Pubs & Bars",
      description: "Maintain a safe environment for customers while preventing incidents before they escalate.",
      icon: "🍺",
      challenges: ["Intoxication management", "Fight prevention", "Staff safety"],
      benefits: ["Behavioral analysis", "Early warning system", "Staff protection"]
    },
    {
      name: "Hospitality",
      description: "Protect guests and staff in hotels, resorts, and hospitality venues with discreet surveillance.",
      icon: "🏨",
      challenges: ["Guest safety", "Property protection", "Staff security"],
      benefits: ["Discreet monitoring", "Guest protection", "Asset security"]
    },
    {
      name: "Security Services",
      description: "Enhance your security operations with AI-powered tools for better threat detection and response.",
      icon: "🛡️",
      challenges: ["Threat assessment", "Response coordination", "Evidence collection"],
      benefits: ["Enhanced detection", "Better coordination", "Digital evidence"]
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who <span className="text-red-500">It's For</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            NightShield is designed for venues that prioritize safety and security in high-risk environments
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <div className="bg-card-bg border border-red-500/20 rounded-xl p-6 h-full">
                {/* Content */}
                <div>
                  {/* Icon */}
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {industry.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Challenges */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-red-500 mb-3 uppercase tracking-wide">
                      Key Challenges
                    </h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-500 mb-3 uppercase tracking-wide">
                      NightShield Benefits
                    </h4>
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.querySelector('#contact')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="btn-primary w-full"
                  >
                    Get Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-card-bg border border-red-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Not Sure If NightShield Fits Your Venue?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Our security experts will analyze your specific needs and create a customized solution for your venue type.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary text-lg px-8 py-4"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#pricing')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Pricing
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhoItsFor
