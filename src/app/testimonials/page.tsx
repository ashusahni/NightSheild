'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Contact from '@/components/NightShield/Contact'
import { IconShield } from '@tabler/icons-react'

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Owner",
      company: "The Blue Moon Club",
      rating: 5,
      content: "NightShield has completely transformed our security operations. We've seen an 80% reduction in incidents since implementation. The AI detection is incredibly accurate and the response time is lightning fast.",
      avatar: "/images/profiles/sarah-johnson.jpg"
    },
    {
      name: "Michael Chen",
      role: "Security Manager",
      company: "Royal Casino",
      rating: 5,
      content: "The facial recognition and threat detection capabilities are outstanding. Our security team can now focus on prevention rather than reaction. NightShield has become an essential part of our operations.",
      avatar: "/images/profiles/michael-chen.jpg"
    },
    {
      name: "Emma Rodriguez",
      role: "General Manager",
      company: "Pulse Nightclub",
      rating: 5,
      content: "The mobile app alerts are game-changing. Our security staff receives instant notifications and can respond immediately. The system has paid for itself many times over in prevented incidents.",
      avatar: "/images/profiles/emma-rodriguez.jpg"
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
      <div className="">
        {/* Hero Section */}
        <section className="relative lg:pt-30 overflow-hidden py-12 md:py-16 px-4 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-64 md:h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="container mx-auto text-center max-w-6xl relative z-10">
          {/* Mobile Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8 md:hidden"
          >
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Icon with glow effect */}
            <div className="relative inline-block mb-4 md:mb-6">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl scale-150"></div>
              <div className="relative bg-gradient-to-r from-red-500 to-red-600 p-2 md:p-3 rounded-xl shadow-2xl">
                <IconShield size={24} className="md:hidden text-white" />
                <IconShield size={32} className="hidden md:block text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight px-2">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">Join us</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">on our mission</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-5xl mx-auto leading-relaxed">
              Get a month of NightShield completely free and honest feedback. 
              Help us build the future of venue security while protecting your business.
            </p>
            
            {/* Value Proposition Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto px-2">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-red-500/30 transition-all">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-lg font-semibold text-white mb-2">Free Trial</h3>
                <p className="text-gray-400 text-sm">Complete month of NightShield at no cost</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-red-500/30 transition-all">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-lg font-semibold text-white mb-2">Honest Feedback</h3>
                <p className="text-gray-400 text-sm">Help us improve while you benefit</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-red-500/30 transition-all">
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
      <section className="relative py-12 md:py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
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
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-red-500/30 transition-all group flex flex-col h-full"
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
                  <div className="w-12 h-12 mr-4 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name} profile picture`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
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
      <section className="relative py-12 md:py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proven Tested</h2>
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
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">90%+</div>
              <div className="text-lg md:text-xl font-medium text-gray-300 mb-2">Detection Accuracy</div>
              <div className="text-sm md:text-base text-gray-500">AI threat identification rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">&lt;2s</div>
              <div className="text-lg md:text-xl font-medium text-gray-300 mb-2">Latency Metrics</div>
              <div className="text-sm md:text-base text-gray-500">Real-time response time</div>
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
      <section className="relative py-12 md:py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 md:w-64 md:h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-4xl font-bold mb-6">
            Be One of the First to Experience What We Offer?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get a complete month of NightShield absolutely free. No strings attached, no hidden fees. 
              Just honest feedback in return for protecting your venue with cutting-edge AI security.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              {/* What You Get */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 text-left hover:bg-white/10 hover:border-red-500/30 transition-all">
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
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 text-left hover:bg-white/10 hover:border-red-500/30 transition-all">
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
        <Contact compact />
      </section>
      </div>
    </div>
  )
}

export default TestimonialsPage