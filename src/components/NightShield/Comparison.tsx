"use client";
import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { useIsMobile } from "@/hooks/useIsMobile";

const Comparison = () => {
  const { isMobile, isClient } = useIsMobile();
  
  const comparisonData = [
    {
      feature: "Response Time",
      traditional: "5-10 minutes",
      nightshield: "< 2 seconds",
      advantage: "nightshield"
    },
    {
      feature: "Detection Accuracy",
      traditional: "60-70%",
      nightshield: "99.9%",
      advantage: "nightshield"
    },
    {
      feature: "24/7 Monitoring",
      traditional: "Manual (limited)",
      nightshield: "Fully Automated",
      advantage: "nightshield"
    },
    {
      feature: "False Alarms",
      traditional: "High",
      nightshield: "Minimal",
      advantage: "nightshield"
    },
    {
      feature: "Setup Time",
      traditional: "Weeks",
      nightshield: "Hours",
      advantage: "nightshield"
    },
    {
      feature: "Cost per Month",
      traditional: "$2,000-5,000",
      nightshield: "$500-1,500",
      advantage: "nightshield"
    },
    {
      feature: "Scalability",
      traditional: "Limited",
      nightshield: "Unlimited",
      advantage: "nightshield"
    },
    {
      feature: "Data Analytics",
      traditional: "Basic",
      nightshield: "Advanced AI",
      advantage: "nightshield"
    }
  ]

  // Don't render until client-side to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Desktop Layout with Macbook Scroll */}
        {!isMobile && (
          <div className="mb-16">
            <MacbookScroll
              src="/images/Gemini_.png"
              title={
                <span className="text-white">
                  Experience NightShield&apos;s AI in Action <br />
                  <span className="text-red-500">Real-time Security Monitoring</span>
                </span>
              }
              showGradient={false}
            />
          </div>
        )}

        {/* Mobile Layout - Card-based Comparison */}
        {isMobile && (
          <div className="space-y-8">
            {/* Mobile Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Experience NightShield&apos;s AI in Action
              </h2>
              <p className="text-red-500 text-xl font-semibold">
                Real-time Security Monitoring
              </p>
            </div>

            {/* Mobile Comparison Cards */}
            <div className="space-y-6">
              {comparisonData.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.feature}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Traditional Security */}
                    <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-600/30">
                      <div className="text-sm text-gray-400 mb-2">Traditional Security</div>
                      <div className="text-lg font-semibold text-gray-300">
                        {item.traditional}
                      </div>
                    </div>
                    
                    {/* NightShield */}
                    <div className="text-center p-4 bg-gradient-to-br from-red-900/30 to-red-800/30 rounded-xl border border-red-500/30">
                      <div className="text-sm text-red-300 mb-2">NightShield</div>
                      <div className="text-lg font-bold text-white">
                        {item.nightshield}
                      </div>
                    </div>
                  </div>
                  
                  {/* Advantage Indicator */}
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-red-300 text-sm font-medium">
                        NightShield Advantage
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-8 border border-red-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Experience the Future?
                </h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of venues already using NightShield for superior security
                </p>
                <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Comparison
