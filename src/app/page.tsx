import React from 'react'
import { Metadata } from 'next'
import Hero from '@/components/NightShield/Hero'
import Features from '@/components/NightShield/Features'
import WhoItsFor from '@/components/NightShield/WhoItsFor'
import Industries from '@/components/NightShield/Industries'
// import Pricing from '@/components/NightShield/Pricing' - This is not needed anymore
import Contact from '@/components/NightShield/Contact'
import CookieConsent from '@/components/NightShield/CookieConsent'
import HowItWorks from '@/components/NightShield/HowItWorks'
import Comparison from '@/components/NightShield/Comparison'
// import Testimonials from '@/components/NightShield/Testimonials' - Not currently used

export const metadata: Metadata = {
  title: 'NightShield - AI Surveillance That Protects Venues Before It\'s Too Late',
  description: 'Advanced AI surveillance system that detects threats and protects nightlife venues, casinos, and events in real-time. Prevent incidents before they happen with cutting-edge security technology.',
  keywords: [
    'AI surveillance system',
    'venue security solutions',
    'threat detection technology',
    'nightclub security',
    'casino security',
    'event venue protection',
    'real-time monitoring',
    'incident prevention',
    'nightlife safety',
    'crowd monitoring AI',
    'security automation',
    'venue management'
  ],
  openGraph: {
    title: 'NightShield - AI Surveillance That Protects Venues Before It\'s Too Late',
    description: 'Advanced AI surveillance system that detects threats and protects nightlife venues, casinos, and events in real-time.',
    url: 'https://nightshield.ai',
    siteName: 'NightShield',
    images: [
      {
        url: '/images/logo/TRANSPARENT LOGO + TEXT.png',
        width: 1200,
        height: 630,
        alt: 'NightShield AI Surveillance System',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NightShield - AI Surveillance That Protects Venues Before It\'s Too Late',
    description: 'Advanced AI surveillance system that detects threats and protects nightlife venues in real-time.',
    images: ['/images/logo/TRANSPARENT LOGO + TEXT.png'],
  },
  alternates: {
    canonical: 'https://nightshield.ai',
  },
}

export default function Home() {
  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NightShield",
    "description": "Advanced AI surveillance system that detects threats and protects nightlife venues, casinos, and events in real-time.",
    "url": "https://nightshield.ai",
    "logo": "https://nightshield.ai/images/logo/TRANSPARENT LOGO + TEXT.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+447706085067",
      "contactType": "customer service",
      "areaServed": "GB",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Croydon",
      "addressRegion": "London",
      "addressCountry": "GB"
    },
    "sameAs": [
      "https://linkedin.com/company/nightshield-ai"
    ],
    "offers": {
      "@type": "Offer",
      "description": "AI surveillance and security solutions for venues",
      "category": "Security Technology"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="bg-black text-white min-h-screen">
        <div className="fixed inset-0 -z-10">
          <div className="wave-layer wave-1"></div>
          <div className="wave-layer wave-2"></div>
          <div className="wave-layer wave-3"></div>
        </div>
        
        <div className="relative">
          <Hero />
          <HowItWorks />
          <Features />
          <WhoItsFor />
          <Comparison />
          {/* <Industries /> */}
          {/* <Pricing /> */}
          {/* <Testimonials /> */}
          <Contact />
          <CookieConsent />
        </div>
      </main>
    </>
  )
}