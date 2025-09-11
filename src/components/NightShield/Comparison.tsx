"use client";
import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import FuturisticComparison from "./FuturisticComparison";

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
    <section className={`relative overflow-hidden ${isMobile ? 'py-4' : 'py-6'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Futuristic Comparison for All Devices */}
        <FuturisticComparison />
      </div>
    </section>
  )
}

export default Comparison
