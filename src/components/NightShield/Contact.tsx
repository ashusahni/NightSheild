'use client'

import React, { useState } from 'react'

import Image from 'next/image'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    venueType: '',
    message: '',
    consent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({
      name: '',
      email: '',
      company: '',
      venueType: '',
      message: '',
      consent: false
    })
  }

  const venueTypes = [
    "Nightclub",
    "Casino",
    "Event Venue",
    "Pub/Bar",
    "Hotel/Resort",
    "Restaurant",
    "Convention Center",
    "Other"
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black"></div>
      <div className="absolute inset-0 grid-texture opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Image 
              src="/images/logo/LOGO TRANSPARENT.png" 
              alt="NightShield Logo" 
              width={48} 
              height={48}
              className="w-12 h-12"
            />
            <h2 className="text-4xl md:text-5xl font-bold">
              Get in <span className="text-red-500">Touch</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to protect your venue? Contact us for a personalized consultation and live demo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <div className="bg-card-bg border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Us</h3>
              
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                  <p className="text-gray-300 mb-6">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="venueType" className="block text-sm font-medium text-gray-300 mb-2">
                        Venue Type
                      </label>
                      <select
                        id="venueType"
                        name="venueType"
                        value={formData.venueType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                      >
                        <option value="">Select venue type</option>
                        {venueTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                      placeholder="Tell us about your security needs..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 text-red-500 bg-black/50 border-red-500/20 rounded focus:ring-red-500 focus:ring-2"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-300">
                      I consent to NightShield processing my personal data in accordance with the{' '}
                      <a href="#" className="text-red-500 hover:underline">Privacy Policy</a> and{' '}
                      <a href="#" className="text-red-500 hover:underline">Terms of Service</a>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Calendly Integration */}
          <div>
            <div className="bg-card-bg border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Schedule a Demo</h3>
              <p className="text-gray-300 mb-6">
                Book a personalized demo with our security experts. See NightShield in action and get answers to all your questions.
              </p>
              
              {/* Calendly Placeholder */}
              <div className="bg-black/50 border border-red-500/20 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19V7Z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Calendly Integration</h4>
                <p className="text-gray-300 mb-4">
                  Click below to schedule your personalized demo
                </p>
                <button
                  className="btn-primary hover:scale-105 active:scale-95"
                >
                  Book Demo Now
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5A1 1 0 0 1 21 16.5V20A1 1 0 0 1 20 21A17 17 0 0 1 3 4A1 1 0 0 1 4 3H7.5A1 1 0 0 1 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4M20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">hello@nightshield.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2M12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Office</div>
                    <div className="text-gray-300">123 Security Ave, Tech City, TC 12345</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
