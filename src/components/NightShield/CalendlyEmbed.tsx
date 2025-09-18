'use client'

import React, { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'

interface CalendlyEmbedProps {
  url: string
  className?: string
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Add Calendly styles to the document head
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Add custom mobile styles for Calendly
    const style = document.createElement('style')
    style.textContent = `
      .calendly-embed-container {
        width: 100% !important;
        max-width: 100% !important;
      }
      .calendly-embed-container .calendly-widget-container {
        overflow-x: auto !important;
        -webkit-overflow-scrolling: touch !important;
      }
      .calendly-embed-container iframe {
        max-width: none !important;
      }
      @media (max-width: 640px) {
        .calendly-embed-container .calendly-widget-container {
          margin: 0 -8px !important;
          padding: 0 8px !important;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      window.removeEventListener('resize', checkMobile)
      // Cleanup on unmount
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')
      if (existingLink) {
        document.head.removeChild(existingLink)
      }
      const existingStyle = document.querySelector('style[data-calendly-mobile]')
      if (existingStyle) {
        document.head.removeChild(existingStyle)
      }
    }
  }, [])


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
    <div className={`calendly-embed-container w-full ${className}`}>
      <div className="bg-black/50 border border-red-500/20 rounded-lg p-2 sm:p-4 w-full overflow-hidden">
        <div className="text-center mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19V7Z"/>
            </svg>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Schedule Your Demo</h4>
          <p className="text-gray-300 text-xs sm:text-sm">
            Choose a time that works for you
          </p>
        </div>
        
        <div className="calendly-widget-container rounded-lg overflow-hidden w-full relative">
          {/* Mobile scroll hint */}
          {isMobile && (
            <div className="absolute top-2 right-2 z-10 bg-red-500/80 text-white text-xs px-2 py-1 rounded-full opacity-70">
              <span className="flex items-center space-x-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                </svg>
                <span>Scroll</span>
              </span>
            </div>
          )}
          
          {/* Mobile-optimized container */}
          <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-red-500/50 scrollbar-track-transparent">
            <div className="min-w-[320px] w-full">
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
                  height: isMobile ? '450px' : '500px', // Dynamic height based on screen size
                  width: '100%',
                  minWidth: '300px', // Minimum width for mobile
                  border: 'none',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="mt-3 sm:mt-4 text-center">
          <p className="text-xs text-gray-400">
            Powered by Calendly • Secure booking
          </p>
        </div>
      </div>
    </div>
  )
}

export default CalendlyEmbed
