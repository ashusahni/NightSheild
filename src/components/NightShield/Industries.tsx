'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Industries = () => {
  const industryStats = [
    { metric: "500+", label: "Venues Protected", icon: "🏢" },
    { metric: "99.9%", label: "Detection Rate", icon: "🎯" },
    { metric: "24/7", label: "Monitoring", icon: "⏰" },
    { metric: "2s", label: "Response Time", icon: "⚡" },
    { metric: "85%", label: "Incident Reduction", icon: "📉" },
    { metric: "50+", label: "Cities Served", icon: "🌍" }
  ]

  const useCases = [
    {
      title: "Crowd Control",
      description: "Monitor crowd density and detect potential disturbances before they escalate.",
      icon: "👥"
    },
    {
      title: "Asset Protection",
      description: "Protect valuable equipment, cash, and inventory with intelligent monitoring.",
      icon: "💰"
    },
    {
      title: "Staff Safety",
      description: "Ensure the safety of your employees with real-time threat detection.",
      icon: "👷"
    },
    {
      title: "Compliance",
      description: "Meet regulatory requirements with comprehensive surveillance and reporting.",
      icon: "📋"
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
            Trusted Across <span className="text-red-500">Industries</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            NightShield is protecting venues and businesses across multiple industries with proven results
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
        >
          {industryStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-card-bg border border-red-500/20 rounded-xl p-6 card-hover">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-red-500 mb-2">{stat.metric}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Common <span className="text-red-500">Use Cases</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card-bg border border-red-500/20 rounded-xl p-6 card-hover"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-white">{useCase.title}</h4>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-card-bg border border-red-500/20 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Global <span className="text-red-500">Presence</span>
            </h3>
            <p className="text-gray-300">
              NightShield is deployed across major cities worldwide, protecting venues and businesses 24/7
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">North America</div>
              <div className="text-gray-300">200+ Venues</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">Europe</div>
              <div className="text-gray-300">150+ Venues</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">Asia Pacific</div>
              <div className="text-gray-300">100+ Venues</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 mb-2">Other Regions</div>
              <div className="text-gray-300">50+ Venues</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries
