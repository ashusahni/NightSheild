'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Contact from '@/components/NightShield/Contact'

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Owner",
      company: "The Blue Moon Club",
      rating: 5,
      content: "NightShield has completely transformed our security operations. We've seen an 80% reduction in incidents since implementation. The AI detection is incredibly accurate and the response time is lightning fast.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Security Manager",
      company: "Royal Casino",
      rating: 5,
      content: "The facial recognition and threat detection capabilities are outstanding. Our security team can now focus on prevention rather than reaction. NightShield has become an essential part of our operations.",
      avatar: "👨‍💼"
    },
    {
      name: "Emma Rodriguez",
      role: "General Manager",
      company: "Pulse Nightclub",
      rating: 5,
      content: "The mobile app alerts are game-changing. Our security staff receives instant notifications and can respond immediately. The system has paid for itself many times over in prevented incidents.",
      avatar: "👩‍💼"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 min-h-[80vh] flex items-center">
        <div className="container mx-auto text-center max-w-6xl">
          {/* Mobile Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8 md:hidden"
          >
            <Image 
              src="/images/logo/TRANSPARENT LOGO + TEXT.png" 
              alt="NightShield Logo" 
              width={200}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Be Our First Real Customer
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-5xl mx-auto leading-relaxed">
              Get a month of NightShield completely free and honest feedback. 
              Help us build the future of venue security while protecting your business.
            </p>
            
            {/* Value Proposition Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-lg font-semibold text-white mb-2">Free Trial</h3>
                <p className="text-gray-400 text-sm">Complete month of NightShield at no cost</p>
              </div>
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-lg font-semibold text-white mb-2">Honest Feedback</h3>
                <p className="text-gray-400 text-sm">Help us improve while you benefit</p>
              </div>
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Full Protection</h3>
                <p className="text-gray-400 text-sm">Complete AI security system included</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              >
                Get Your Free Month
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = '/pricing';
                }}
                className="border border-gray-600 hover:border-gray-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                View Pricing Plans
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Case Studies</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              See how NightShield has transformed security operations across different venues
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:bg-gray-900/70 hover:border-gray-700 transition-all group flex flex-col h-full"
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center mt-auto">
                  <div className="text-2xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-red-100 transition-colors">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proven Results</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Join the growing community of venues that trust NightShield
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">500+</div>
              <div className="text-lg md:text-xl font-medium text-gray-300 mb-2">Happy Clients</div>
              <div className="text-sm md:text-base text-gray-500">Active deployments worldwide</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">4.9/5</div>
              <div className="text-lg md:text-xl font-medium text-gray-300 mb-2">Average Rating</div>
              <div className="text-sm md:text-base text-gray-500">Customer satisfaction score</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">98%</div>
              <div className="text-lg md:text-xl font-medium text-gray-300 mb-2">Satisfaction Rate</div>
              <div className="text-sm md:text-base text-gray-500">Client retention rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">24/7</div>
              <div className="text-lg md:text-xl font-medium text-gray-300 mb-2">Support Available</div>
              <div className="text-sm md:text-base text-gray-500">Round-the-clock assistance</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Be Our First Real Customer?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get a complete month of NightShield absolutely free. No strings attached, no hidden fees. 
              Just honest feedback in return for protecting your venue with cutting-edge AI security.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* What You Get */}
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                  What You Get:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <span className="text-red-500 mr-3 text-xl">✓</span>
                    <span>Full AI security system setup</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-red-500 mr-3 text-xl">✓</span>
                    <span>Real-time threat detection</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-red-500 mr-3 text-xl">✓</span>
                    <span>Mobile app access</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-red-500 mr-3 text-xl">✓</span>
                    <span>Analytics dashboard</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-red-500 mr-3 text-xl">✓</span>
                    <span>24/7 support included</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-red-500 mr-3 text-xl">✓</span>
                    <span>Cloud storage & backup</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-red-500 mr-3 text-xl">✓</span>
                    <span>Custom configuration</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-red-500 mr-3 text-xl">✓</span>
                    <span>Honest feedback opportunity</span>
                  </div>
                </div>
              </div>

              {/* Why This Matters */}
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                  Why This Matters:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start text-gray-300">
                    <span className="text-blue-500 mr-3 text-xl mt-1">💡</span>
                    <div>
                      <span className="font-semibold">Help Shape the Future</span>
                      <p className="text-sm text-gray-400 mt-1">Your feedback directly influences our product development</p>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <span className="text-green-500 mr-3 text-xl mt-1">🆓</span>
                    <div>
                      <span className="font-semibold">Risk-Free Trial</span>
                      <p className="text-sm text-gray-400 mt-1">Test our system without any financial commitment</p>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <span className="text-purple-500 mr-3 text-xl mt-1">🚀</span>
                    <div>
                      <span className="font-semibold">Early Access</span>
                      <p className="text-sm text-gray-400 mt-1">Be among the first to experience next-gen security</p>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <span className="text-yellow-500 mr-3 text-xl mt-1">🤝</span>
                    <div>
                      <span className="font-semibold">Partnership</span>
                      <p className="text-sm text-gray-400 mt-1">Build a relationship with our founding team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
        <Contact />
      </section>
      </div>
    </div>
  )
}

export default TestimonialsPage
