'use client'

import React, { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'

interface CalendlyEmbedProps {
  url: string
  className?: string
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Add Calendly styles to the document head
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      // Cleanup on unmount
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')
      if (existingLink) {
        document.head.removeChild(existingLink)
      }
    }
  }, [])

  const handlePageHeight = (data: any) => {
    // Optional: Handle height changes if needed
    console.log('Calendly page height:', data)
  }

  const prefill = {
    name: '',
    email: '',
    customAnswers: {
      a1: '', // Custom answer 1
      a2: '', // Custom answer 2
    }
  }

  const utm = {
    utmCampaign: 'nightshield-demo',
    utmSource: 'website',
    utmMedium: 'embedded-widget',
    utmContent: 'contact-section',
    utmTerm: 'ai-surveillance'
  }

  return (
    <div className={`calendly-embed-container ${className}`}>
      <div className="bg-black/50 border border-red-500/20 rounded-lg p-4">
        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19V7Z"/>
            </svg>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Schedule Your Demo</h4>
          <p className="text-gray-300 text-sm">
            Choose a time that works for you
          </p>
        </div>
        
        <div className="calendly-widget-container rounded-lg overflow-hidden">
          <InlineWidget
            url={url}
            prefill={prefill}
            utm={utm}
            pageSettings={{
              backgroundColor: '000000',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: 'ef4444', // red-500
              textColor: 'ffffff'
            }}
            styles={{
              height: '600px',
              width: '100%',
              border: 'none',
              borderRadius: '8px'
            }}
            onPageHeight={handlePageHeight}
          />
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            Powered by Calendly • Secure booking
          </p>
        </div>
      </div>
    </div>
  )
}

export default CalendlyEmbed
