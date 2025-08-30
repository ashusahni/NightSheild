'use client'

import React from 'react'
import Image from 'next/image'

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
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black"></div>
      <div className="absolute inset-0 grid-texture opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Image 
              src="/images/logo/LOGO TRANSPARENT.png" 
              alt="NightShield Logo" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <h2 className="text-3xl md:text-4xl font-bold">
              Who <span className="text-red-500">It&apos;s For</span>
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            NightShield is designed for venues that prioritize safety and security in high-risk environments
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Dashboard Preview */}
          <div className="order-2 lg:order-1">
            <div className="bg-card-bg border border-red-500/20 rounded-xl p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  NightShield Security Dashboard
                </h3>
                <p className="text-red-500 text-sm">AI-Powered Surveillance</p>
              </div>
              
              {/* Dashboard Mockup */}
              <div className="bg-black rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-400">NightShield v2.1</div>
                </div>
                
                {/* Dashboard Content */}
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">Active Cameras</span>
                      <span className="text-green-400 text-sm font-bold">24/24</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-800 rounded p-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-500">0</div>
                        <div className="text-xs text-gray-400">Active Threats</div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded p-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-500">98.7%</div>
                        <div className="text-xs text-gray-400">System Health</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded p-3">
                    <div className="text-xs text-gray-400 mb-2">Recent Activity</div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-white text-xs">Camera 12: Motion detected</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-white text-xs">System: Backup completed</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-white text-xs">Alert: Unusual pattern detected</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Perfect for High-Risk Venues
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  NightShield's AI-powered surveillance system is specifically designed for venues that face unique security challenges. 
                  Our advanced technology helps you maintain a safe environment while protecting your assets and people.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card-bg border border-red-500/20 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🛡️</div>
                  <h4 className="font-semibold text-white mb-1">Real-time Monitoring</h4>
                  <p className="text-xs text-gray-400">24/7 AI surveillance with instant threat detection</p>
                </div>
                <div className="bg-card-bg border border-red-500/20 p-4 rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-semibold text-white mb-1">Fast Response</h4>
                  <p className="text-xs text-gray-400">Immediate alerts and automated response systems</p>
                </div>
                <div className="bg-card-bg border border-red-500/20 p-4 rounded-lg">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-semibold text-white mb-1">Analytics</h4>
                  <p className="text-xs text-gray-400">Comprehensive reporting and insights</p>
                </div>
                <div className="bg-card-bg border border-red-500/20 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🔒</div>
                  <h4 className="font-semibold text-white mb-1">Secure</h4>
                  <p className="text-xs text-gray-400">Enterprise-grade security and compliance</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-500/30 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Why Choose NightShield?</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 85% reduction in security incidents</li>
                  <li>• 60% faster response times</li>
                  <li>• 24/7 AI monitoring</li>
                  <li>• Easy integration with existing systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Trusted by Leading Venues
            </h3>
            <p className="text-gray-300">
              From nightclubs to casinos, NightShield protects diverse environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group relative">
                {/* Background Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 p-8 h-full rounded-2xl shadow-2xl hover:shadow-red-500/10 transition-all duration-500 hover:scale-[1.02]">
                  {/* Top Section with Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-red-500/30 group-hover:border-red-500/50 transition-colors duration-300">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                      </div>
                      {/* Floating accent dot */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Industry Type Badge */}
                    <div className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-full">
                      <span className="text-xs font-medium text-red-400 uppercase tracking-wider">
                        {industry.name === "Nightclubs" ? "Entertainment" : 
                         industry.name === "Casinos" ? "Gaming" :
                         industry.name === "Event Venues" ? "Events" :
                         industry.name === "Pubs & Bars" ? "Hospitality" :
                         industry.name === "Hospitality" ? "Luxury" : "Security"}
                      </span>
                    </div>
                  </div>

                  {/* Title with Gradient Text */}
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                    {industry.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-8 leading-relaxed flex-grow text-sm">
                    {industry.description}
                  </p>

                  {/* Challenges Section */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                        Key Challenges
                      </h4>
                    </div>
                    <div className="space-y-2 ml-5">
                      {industry.challenges.map((challenge, idx) => (
                        <div key={idx} className="flex items-center group/challenge">
                          <div className="w-1.5 h-1.5 bg-red-500/60 rounded-full mr-3 group-hover/challenge:bg-red-400 transition-colors duration-200"></div>
                          <span className="text-xs text-gray-400 group-hover/challenge:text-gray-300 transition-colors duration-200">
                            {challenge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits Section */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                        NightShield Benefits
                      </h4>
                    </div>
                    <div className="space-y-2 ml-5">
                      {industry.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center group/benefit">
                          <div className="w-1.5 h-1.5 bg-green-500/60 rounded-full mr-3 group-hover/benefit:bg-green-400 transition-colors duration-200"></div>
                          <span className="text-xs text-gray-300 group-hover/benefit:text-white transition-colors duration-200">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Indicator */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-500">Active Protection</span>
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-red-400 transition-colors duration-300">
                      Learn More →
                    </div>
                  </div>

                  {/* Hover Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-card-bg border border-red-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Not Sure If NightShield Fits Your Venue?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Our security experts will analyze your specific needs and create a customized solution for your venue type.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="py-3 px-8 rounded-lg font-medium text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#pricing')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="py-3 px-8 rounded-lg font-medium text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoItsFor
