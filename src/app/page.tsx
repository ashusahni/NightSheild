import React from 'react'
import { Metadata } from 'next'
import Navbar from '@/components/NightShield/Navbar'
import Hero from '@/components/NightShield/Hero'
import HowItWorks from '@/components/NightShield/HowItWorks'
import Features from '@/components/NightShield/Features'
import WhoItsFor from '@/components/NightShield/WhoItsFor'
import Industries from '@/components/NightShield/Industries'
import Comparison from '@/components/NightShield/Comparison'
import Pricing from '@/components/NightShield/Pricing'
import Testimonials from '@/components/NightShield/Testimonials'
import About from '@/components/NightShield/About'
import Contact from '@/components/NightShield/Contact'
import CookieConsent from '@/components/NightShield/CookieConsent'

export const metadata: Metadata = {
  title: 'NightShield - Real-Time AI Surveillance That Protects Venues',
  description: 'Advanced AI surveillance system that protects venues before incidents occur. Real-time threat detection for nightclubs, casinos, event venues, and more.',
  keywords: 'AI surveillance, venue security, real-time monitoring, threat detection, nightclub security, casino security',
}

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* <Navbar /> */}
      <Hero />
      <HowItWorks />
      <Features />
      <WhoItsFor />
      <Industries />
      <Comparison />
      <Pricing />
      <Testimonials />
      <About />
      <Contact />
      <CookieConsent />
    </main>
  )
}
