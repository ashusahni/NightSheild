'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import CalendlyEmbed from './CalendlyEmbed'

interface ContactProps {
  compact?: boolean
}

const Contact = ({ compact = false }: ContactProps) => {
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
  const [submitError, setSubmitError] = useState('')

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
    setSubmitError('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }
      
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        venueType: '',
        message: '',
        consent: false
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
    <section id="contact" className={`${compact ? 'pt-12 pb-0' : 'py-20'} relative overflow-hidden`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black"></div>
      <div className="absolute inset-0 grid-texture opacity-10"></div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2 sm:px-4">
          <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
            <Image 
              src="/images/logo/LOGO TRANSPARENT.png" 
              alt="NightShield Logo" 
              width={48} 
              height={48}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Get in <span className="text-red-500">Touch</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Ready to protect your venue? Contact us for a personalized consultation and live demo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="w-full">
            <div className="bg-card-bg border border-red-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-white">Contact Us</h3>
              
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Thank You!</h4>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitSuccess(false)
                      setSubmitError('')
                    }}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {submitError && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                        <p className="text-red-500 text-sm">{submitError}</p>
                      </div>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div className="w-full">
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
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="w-full">
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
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors text-sm sm:text-base"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div className="w-full">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors text-sm sm:text-base"
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="venueType" className="block text-sm font-medium text-gray-300 mb-2">
                        Venue Type
                      </label>
                      <select
                        id="venueType"
                        name="venueType"
                        value={formData.venueType}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-red-500/20 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none text-sm sm:text-base"
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
                      className="mt-1 w-4 h-4 text-red-500 bg-black/50 border border-red-500/30 rounded focus:ring-red-500 focus:ring-2 focus:ring-offset-0 accent-red-500"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-300 leading-relaxed">
                      I consent to NightShield processing my personal data in accordance with the{' '}
                      <a href="#" className="text-red-500 hover:underline">Privacy Policy</a> and{' '}
                      <a href="#" className="text-red-500 hover:underline">Terms of Service</a>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-3 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 text-sm sm:text-base"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Calendly Integration */}
          <div className="w-full">
            <div className="bg-card-bg border border-red-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-white">Schedule a Demo</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Book a personalized demo with our security experts. See NightShield in action and get answers to all your questions.
              </p>
              
              {/* Embedded Calendly Widget */}
              <CalendlyEmbed 
                url="https://calendly.com/nightshield/demo"
                className="w-full"
              />

              {/* Contact Info */}
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5A1 1 0 0 1 21 16.5V20A1 1 0 0 1 20 21A17 17 0 0 1 3 4A1 1 0 0 1 4 3H7.5A1 1 0 0 1 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">Phone</div>
                    <a href="tel:+447706085067" className="text-gray-300 hover:text-red-500 transition-colors text-sm sm:text-base">
                      +44 7706085067
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4M20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">Email</div>
                    <a href="mailto:contact@nightshield.ai" className="text-gray-300 hover:text-red-500 transition-colors text-sm sm:text-base break-all">
                      contact@nightshield.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2M12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">Location</div>
                    <div className="text-gray-300 text-sm sm:text-base">Croydon, London</div>
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
