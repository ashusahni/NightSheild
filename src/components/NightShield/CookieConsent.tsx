'use client'

import React, { useState, useEffect } from 'react'


const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const hasConsented = localStorage.getItem('nightshield-cookie-consent')
    if (!hasConsented) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('nightshield-cookie-consent', 'accepted')
    setShowConsent(false)
  }

  const handleDecline = () => {
    localStorage.setItem('nightshield-cookie-consent', 'declined')
    setShowConsent(false)
  }

  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "Required for the website to function properly. These cannot be disabled.",
      necessary: true
    },
    {
      name: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website by collecting anonymous information.",
      necessary: false
    },
    {
      name: "Marketing Cookies",
      description: "Used to track visitors across websites to display relevant advertisements.",
      necessary: false
    },
    {
      name: "Preference Cookies",
      description: "Allow the website to remember information that changes the way it behaves or looks.",
      necessary: false
    }
  ]

  return (
    <>
      {showConsent && (
        <div className="cookie-consent">
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-4 text-center lg:text-left">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">
                We Value Your Privacy
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                NightShield uses cookies to enhance your browsing experience, analyze site traffic, 
                and personalize content. By continuing to use our site, you consent to our use of cookies 
                in accordance with our{' '}
                <a href="#" className="text-red-500 hover:underline">Privacy Policy</a>.
              </p>
              
              {showDetails && (
                <div className="mt-4 space-y-3">
                  {cookieTypes.map((cookie, index) => (
                    <div key={index} className="bg-black/20 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-white text-sm">{cookie.name}</span>
                        {cookie.necessary && (
                          <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                            Necessary
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-xs">{cookie.description}</p>
                    </div>
                  ))}
                </div>
              )}
              
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-red-500 hover:text-red-400 text-sm underline block mx-auto lg:mx-0"
              >
                {showDetails ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0 justify-center lg:justify-end">
              <button
                onClick={handleDecline}
                className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-600/20 transition-colors text-sm"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-semibold"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CookieConsent
