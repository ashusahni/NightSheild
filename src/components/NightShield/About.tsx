'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      bio: "Former security consultant with 15+ years in venue protection. Led AI research at leading tech companies.",
      avatar: "👨‍💼"
    },
    {
      name: "Dr. Sarah Kim",
      role: "CTO",
      bio: "PhD in Computer Vision with expertise in AI and machine learning. Previously at Google AI and MIT.",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Security",
      bio: "Former law enforcement with 20+ years experience in crowd control and threat assessment.",
      avatar: "👨‍💼"
    },
    {
      name: "Emily Chen",
      role: "VP of Operations",
      bio: "Hospitality industry veteran with deep understanding of venue security challenges and compliance.",
      avatar: "👩‍💼"
    }
  ]

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a mission to revolutionize venue security" },
    { year: "2021", title: "First Deployment", description: "Successfully deployed at 50+ venues across the US" },
    { year: "2022", title: "AI Breakthrough", description: "Achieved 99.9% detection accuracy with new algorithms" },
    { year: "2023", title: "Global Expansion", description: "Expanded to 500+ venues across 25 countries" },
    { year: "2024", title: "Industry Leader", description: "Recognized as the leading AI security platform" }
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
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Image 
              src="/images/logo/LOGO TRANSPARENT.png" 
              alt="NightShield Logo" 
              width={48} 
              height={48}
              className="w-12 h-12"
            />
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-red-500">NightShield</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to make every venue safer through cutting-edge AI technology
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card-bg border border-red-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Our <span className="text-red-500">Mission</span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-center mb-6">
              NightShield was born from a simple belief: every venue deserves world-class security. 
              We combine advanced AI technology with deep industry expertise to create surveillance 
              systems that don't just record incidents—they prevent them.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Our team of security experts, AI researchers, and hospitality professionals work 
              together to deliver solutions that protect people, assets, and reputations.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-red-500">Journey</span>
          </h3>
          <div className="grid md:grid-cols-5 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-card-bg border border-red-500/20 rounded-xl p-6 card-hover">
                  <div className="text-2xl font-bold text-red-500 mb-2">{milestone.year}</div>
                  <h4 className="font-semibold text-white mb-2">{milestone.title}</h4>
                  <p className="text-sm text-gray-300">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Meet Our <span className="text-red-500">Team</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card-bg border border-red-500/20 rounded-xl p-6 text-center card-hover"
              >
                <div className="text-4xl mb-4">{member.avatar}</div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <div className="text-red-500 font-semibold mb-4">{member.role}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-card-bg border border-red-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Our <span className="text-red-500">Values</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Innovation</h4>
                <p className="text-gray-300">
                  We constantly push the boundaries of AI technology to deliver better security solutions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20A8 8 0 0 1 4 12A8 8 0 0 1 12 4M12 6A6 6 0 0 0 6 12A6 6 0 0 0 12 18A6 6 0 0 0 18 12A6 6 0 0 0 12 6M12 8A4 4 0 0 1 16 12A4 4 0 0 1 12 16A4 4 0 0 1 8 12A4 4 0 0 1 12 8Z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Reliability</h4>
                <p className="text-gray-300">
                  Our systems are built to work 24/7, providing consistent protection when it matters most.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Trust</h4>
                <p className="text-gray-300">
                  We build lasting partnerships with our clients, earning their trust through exceptional service.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
