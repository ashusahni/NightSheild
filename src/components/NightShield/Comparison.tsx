"use client";
import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

const Comparison = () => {
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

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
      
        {/* Macbook Scroll Demo */}
        <div className="mb-16">
          <MacbookScroll
            src="/images/linear.webp"
            title={
              <span className="text-white">
                Experience NightShield&apos;s AI in Action <br />
                <span className="text-red-500">Real-time Security Monitoring</span>
              </span>
            }
            showGradient={false}
          />
        </div>
      </div>
    </section>
  )
}

export default Comparison
