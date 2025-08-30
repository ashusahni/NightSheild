import React from 'react'
import { Metadata } from 'next'
import Hero from '@/components/NightShield/Hero'
import Features from '@/components/NightShield/Features'
import WhoItsFor from '@/components/NightShield/WhoItsFor'
import Industries from '@/components/NightShield/Industries'
import Pricing from '@/components/NightShield/Pricing'
import Contact from '@/components/NightShield/Contact'
import CookieConsent from '@/components/NightShield/CookieConsent'
import HowItWorks from '@/components/NightShield/HowItWorks'



export const metadata: Metadata = {
  title: 'NightShield - AI Surveillance That Protects Venues Before It\'s Too Late',
  description: 'Real-time AI surveillance system that detects threats and protects venues before incidents occur. Advanced security for nightclubs, casinos, event venues, and more.',
  keywords: 'AI surveillance, venue security, threat detection, nightclub security, casino security, event venue security, real-time monitoring, AI security system',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png'
  }
}

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <WhoItsFor />
      <Industries />
      {/* <Comparison /> */}
      <Pricing />
      {/* <Testimonials /> */}
      {/* <About /> */}
      <Contact />
      <CookieConsent />
    </main>
  )
}