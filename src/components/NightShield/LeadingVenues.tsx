'use client'

import React, { useMemo } from 'react'

const LeadingVenues = () => {
  // Memoize the industries data to prevent unnecessary re-renders
  const industries = useMemo(() => [
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
  ], [])

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background - Simplified for better performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black"></div>
      <div className="absolute inset-0 grid-texture opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            Trusted by Leading Venues
          </h3>
          <p className="text-gray-300">
            From nightclubs to casinos, NightShield protects diverse environments
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="relative">
              {/* Main Card - Simplified hover effects for better performance */}
              <div className="relative bg-card-bg border border-gray-700/40 p-5 h-full rounded-xl shadow-md hover:border-red-500/40 transition-colors duration-150">
                {/* Top Section with Icon and Badge */}
                <div className="flex items-start justify-between mb-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-red-500/30">
                      <div className="text-2xl">{industry.icon}</div>
                    </div>
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
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {industry.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-200 mb-4 leading-relaxed flex-grow text-sm">
                  {industry.description}
                </p>

                {/* Challenges Section */}
                <div className="mb-3">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                      Key Challenges
                    </h4>
                  </div>
                  <div className="space-y-2 ml-4">
                    {industry.challenges.map((challenge, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-red-500/60 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-200">
                          {challenge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="mb-3">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider">
                      NightShield Benefits
                    </h4>
                  </div>
                  <div className="space-y-2 ml-4">
                    {industry.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500/60 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-200">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Indicator */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">Active Protection</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Learn More →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LeadingVenues
