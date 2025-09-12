'use client'

import React, { useState } from 'react'

import Image from 'next/image'
import Contact from '@/components/NightShield/Contact'

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
    <section id="pricing" className="py-20 relative overflow-hidden">
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
              Simple <span className="text-red-500">Pricing</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your venue size and security needs. All plans include professional installation, 24/7 support, and our industry-leading AI technology.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-red-500/20 rounded-full p-1 transition-colors duration-200"
            >
              <div
                className={`w-6 h-6 bg-red-500 rounded-full transition-transform duration-200 ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'}`}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly <span className="text-red-500">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`bg-card-bg border rounded-xl p-8 h-full ${
                plan.popular 
                  ? 'border-red-500 bg-gradient-to-br from-card-bg to-red-500/5' 
                  : 'border-red-500/20'
              }`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <p className="text-sm text-gray-400 mb-6">{plan.bestFor}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-red-500">
                      £{plan.price[billingCycle as keyof typeof plan.price]}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>

                  {/* Plan Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="text-center">
                      <div className="text-red-500 font-semibold">Setup</div>
                      <div className="text-gray-400">{plan.setupTime}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-red-500 font-semibold">Uptime</div>
                      <div className="text-gray-400">{plan.uptime}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      const element = document.querySelector('#contact')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                      plan.popular
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    Get Started
                  </button>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-white mb-4">What&apos;s included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
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
        <div className="text-center">
          <div className="bg-card-bg border border-red-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6">
              We offer custom pricing for enterprise clients and special requirements. 
              Contact us for a personalized quote and dedicated support.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-sm mb-8">
              <div className="text-center">
                <div className="text-red-500 font-semibold mb-2">Free Setup</div>
                <div className="text-gray-400">Professional installation included</div>
              </div>
              <div className="text-center">
                <div className="text-red-500 font-semibold mb-2">30-Day Trial</div>
                <div className="text-gray-400">Test NightShield risk-free</div>
              </div>
              <div className="text-center">
                <div className="text-red-500 font-semibold mb-2">24/7 Support</div>
                <div className="text-gray-400">Always here when you need us</div>
              </div>
              <div className="text-center">
                <div className="text-red-500 font-semibold mb-2">Money-Back Guarantee</div>
                <div className="text-gray-400">30-day satisfaction guarantee</div>
              </div>
            </div>
            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  )
}

export default Pricing
