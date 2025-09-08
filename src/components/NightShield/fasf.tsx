"use client";
import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import BeautifulComparisonTable from "./BeautifulComparisonTable";

const Comparison = () => {
  const { isMobile, isClient } = useIsMobile();
  
  const competitorData = [
    {
      company: "Verkada",
      strength: "AI-powered cloud cameras with excellent analytics and remote management",
      weakness: "Generic security focus lacks nightlife-specific incident detection for fights, overcrowding, or blackout scenarios",
      advantage: "Purpose-built for nightlife incidents with specialized AI for crowd behavior, altercation detection, and venue-specific alerts"
    },
    {
      company: "Genetec",
      strength: "Enterprise-grade unified security platform with robust access control integration",
      weakness: "Complex enterprise solution overengineered for venue needs, lacks real-time crowd density monitoring",
      advantage: "Streamlined for venue operations with instant crowd alerts, door coordination, and staff-friendly mobile incident response"
    },
    {
      company: "Milestone",
      strength: "Open platform VMS with extensive third-party integrations and scalability",
      weakness: "Requires heavy customization for nightlife use cases, no built-in incident categorization for venue scenarios",
      advantage: "Pre-configured incident types (fights, medical, overcrowding) with automated escalation workflows designed for nightlife"
    },
    {
      company: "Avigilon",
      strength: "High-definition cameras with advanced video analytics and appearance search",
      weakness: "Retail/corporate focus misses venue-specific needs like intoxication detection and crowd flow management",
      advantage: "Venue-tuned analytics for patron behavior, entry/exit flow optimization, and VIP area monitoring with staff coordination"
    }
  ]

  const keyPoints = [
    "We're not a general VMS; we're the incident layer tuned for nightlife—fights, falls, overcrowding, blackouts",
    "Real-time crowd density alerts prevent overcapacity violations before they happen",
    "Mobile-first staff coordination with instant incident escalation to security, medical, and management",
    "Built-in venue intelligence: VIP area monitoring, door coordination, and patron flow optimization"
  ]

  // Don't render until client-side to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Desktop Layout with Beautiful Comparison Table */}
        {!isMobile && (
          <BeautifulComparisonTable />
        )}

        {/* Mobile Layout - Competitor Comparison */}
        {isMobile && (
          <div className="space-y-8">
            {/* Mobile Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
              Nightshield vs Other security companies              </h2>
              <p className="text-gray-300 text-sm">
                See how we compare to traditional security solutions
              </p>
            </div>

            {/* Mobile Competitor Comparison Table */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
              {/* Table Header */}
              <div className="bg-gray-800/70 p-4 border-b border-gray-700/50">
                <div className="grid grid-cols-1 gap-2 text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  <div>Company Comparison</div>
                </div>
              </div>

              {/* Competitor Rows */}
              <div className="divide-y divide-gray-700/30">
                {competitorData.map((competitor, index) => (
                  <div key={index} className="p-4 space-y-4">
                    {/* Company Name */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-white mb-3">
                        {competitor.company}
                      </h3>
                    </div>

                    {/* What they're great at */}
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        What they're great at
                      </div>
                      <div className="text-sm text-gray-300 bg-gray-800/30 p-3 rounded-lg">
                        {competitor.strength}
                      </div>
                    </div>

                    {/* Where this falls short */}
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Where this falls short for nightlife venues
                      </div>
                      <div className="text-sm text-red-300 bg-red-900/20 p-3 rounded-lg border border-red-500/20">
                        {competitor.weakness}
                      </div>
                    </div>

                    {/* Why NightShield is better */}
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-red-300 uppercase tracking-wide">
                        Why NightShield is better for venues
                      </div>
                      <div className="text-sm text-white bg-gradient-to-r from-red-900/30 to-red-800/30 p-3 rounded-lg border border-red-500/30">
                        {competitor.advantage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white text-center mb-6">
                Why Choose NightShield?
              </h3>
              <div className="space-y-3">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            {/* <div className="text-center">
              <p className="text-xs text-gray-500 italic">
                Comparisons based on publicly available positioning; features and pricing may vary by SKU/region.
              </p>
            </div> */}
          </div>
        )}
      </div>
    </section>
  )
}

export default Comparison
