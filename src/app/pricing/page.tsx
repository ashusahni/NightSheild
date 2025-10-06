'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import Contact from '@/components/NightShield/Contact'
import NightShieldROI from '@/components/NightShield/RoiCalc'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: "Starter",
      price: { monthly: 499, yearly: 399 },
      description: "Perfect for small venues and bars",
      features: [
        "Up to 4 cameras",
        "Basic AI detection",
        "Mobile app alerts",
        "7-day cloud storage",
        "Email support"
      ],
      popular: false,
      bestFor: "Small bars, cafes, and intimate venues",
      setupTime: "1-2 days",
      uptime: "99.5%"
    },
    {
      name: "Professional",
      price: { monthly: 999, yearly: 799 },
      description: "Ideal for medium-sized venues and clubs",
      features: [
        "Up to 12 cameras",
        "Advanced AI detection",
        "Real-time alerts",
        "30-day cloud storage",
        "Priority support",
        "Custom integrations",
        "Analytics dashboard"
      ],
      popular: true,
      bestFor: "Medium clubs, restaurants, and event spaces",
      setupTime: "2-3 days",
      uptime: "99.8%"
    },
    {
      name: "Enterprise",
      price: { monthly: 1999, yearly: 1599 },
      description: "For large venues and multi-location businesses",
      features: [
        "Unlimited cameras",
        "Premium AI detection",
        "Instant alerts",
        "90-day cloud storage",
        "24/7 phone support",
        "Custom integrations",
        "Advanced analytics",
        "Multi-venue management",
        "Dedicated account manager"
      ],
      popular: false,
      bestFor: "Large venues, chains, and multi-location businesses",
      setupTime: "3-5 days",
      uptime: "99.9%"
    }
  ]



    return (
    <section id="pricing" className="relative overflow-hidden py-12 md:py-16 px-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 md:w-64 md:h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto relative z-10 pt-20 md:pt-0">
        {/* Hero Section */}
        
        <div className="text-center max-w-4xl mx-auto mb-16 lg:pt-20">
          {/* Icon with glow effect */}
          <div className="relative inline-block mb-4 md:mb-6">
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl scale-150"></div>
            <div className="relative bg-gradient-to-r from-red-500 to-red-600 p-2 md:p-3 rounded-xl shadow-2xl">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
          <br className="block lg:hidden"/>
          {/* Main heading with gradient text */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Simple
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          
          {/* Subtitle with modern styling */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-6 md:mb-8 px-2">
            Choose the perfect plan for your venue size and security needs. All plans include professional installation, 24/7 support, and our industry-leading AI technology.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-3 md:space-x-4">
            <span className={`text-xs md:text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 md:w-16 md:h-8 bg-red-500/20 rounded-full p-1 transition-colors duration-200"
            >
              <div
                className={`w-5 h-5 md:w-6 md:h-6 bg-red-500 rounded-full transition-transform duration-200 ${billingCycle === 'yearly' ? 'translate-x-7 md:translate-x-8' : 'translate-x-0'}`}
              />
            </button>
            <span className={`text-xs md:text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly <span className="text-red-500">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-16 px-2">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Glassmorphism card */}
              <div className={`relative bg-white/5 backdrop-blur-xl border rounded-2xl p-4 md:p-6 h-full transition-all duration-300 ${
                plan.popular 
                  ? 'border-red-500/50 shadow-2xl shadow-red-500/20' 
                  : 'border-white/10'
              }`}>
                {/* Plan Header */}
                <div className="relative z-10 text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">{plan.description}</p>
                  <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6">{plan.bestFor}</p>
                  
                  {/* Price with glow effect */}
                  <div className="mb-4 md:mb-6 relative">
                    <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                        £{plan.price[billingCycle as keyof typeof plan.price]}
                      </span>
                      <span className="text-gray-400 text-sm md:text-base ml-1">/month</span>
                    </div>
                  </div>

                  {/* Plan Details */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6 text-xs md:text-sm">
                    <div className="text-center p-2 bg-black/20 rounded-lg">
                      <div className="text-red-400 font-semibold">Setup</div>
                      <div className="text-gray-300">{plan.setupTime}</div>
                    </div>
                    <div className="text-center p-2 bg-black/20 rounded-lg">
                      <div className="text-red-400 font-semibold">Uptime</div>
                      <div className="text-gray-300">{plan.uptime}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      const element = document.querySelector('#contact')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`w-full py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 text-sm md:text-base ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
                        : 'bg-transparent border border-red-500/50 text-red-500 hover:bg-red-500/10 hover:border-red-500'
                    }`}
                  >
                    Get Started
                  </button>
                </div>

                {/* Features */}
                <div className="relative z-10">
                  <h4 className="font-semibold text-white mb-3 md:mb-4 text-sm md:text-base group-hover:text-red-100 transition-colors">What&apos;s included:</h4>
                  <ul className="space-y-2 md:space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-xs md:text-sm group-hover:text-gray-200 transition-colors">
                        <div className="w-4 h-4 md:w-5 md:h-5 bg-red-500/20 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                          <svg className="w-2 h-2 md:w-3 md:h-3 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center px-2">
          <div className="relative group">
            {/* Glassmorphism card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto hover:bg-white/10 hover:border-red-500/30 transition-all duration-500">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-red-100 transition-colors">
                  Need a Custom Solution?
                </h3>
                <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors">
                  We offer custom pricing for enterprise clients and special requirements. 
                  Contact us for a personalized quote and dedicated support.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-xs md:text-sm mb-6 md:mb-8">
                  <div className="text-center p-3 bg-black/20 rounded-lg">
                    <div className="text-red-400 font-semibold mb-1 md:mb-2">Free Setup</div>
                    <div className="text-gray-300">Professional installation included</div>
                  </div>
                  <div className="text-center p-3 bg-black/20 rounded-lg">
                    <div className="text-red-400 font-semibold mb-1 md:mb-2">30-Day Trial</div>
                    <div className="text-gray-300">Test NightShield risk-free</div>
                  </div>
                  <div className="text-center p-3 bg-black/20 rounded-lg">
                    <div className="text-red-400 font-semibold mb-1 md:mb-2">24/7 Support</div>
                    <div className="text-gray-300">Always here when you need us</div>
                  </div>
                  <div className="text-center p-3 bg-black/20 rounded-lg">
                    <div className="text-red-400 font-semibold mb-1 md:mb-2">Money-Back Guarantee</div>
                    <div className="text-gray-300">30-day satisfaction guarantee</div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 text-sm md:text-base"
                >
                  Get Custom Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* ROI Calculator Section */}
      <div className="mt-20">
        <NightShieldROI />
      </div>
      
      <Contact compact />
    </section>
  )
}

export default Pricing
