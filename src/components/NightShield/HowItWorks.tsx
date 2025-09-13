'use client'

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'
import TargetCursor from './TargetCursor'
import { gsap } from 'gsap'


const HowItWorks = () => {
  const { isMobile } = useIsMobile()

  const features = useMemo(() => ([
    {
      id: 1,
      title: 'Capture & Enhance',
      description: 'Multi-camera intake with noise reduction and image enhancement for crystal clear frames.',
      thumb: '/images/icons/icon-camera-lens.svg',
    },
    {
      id: 2,
      title: 'Fight Detection',
      description: 'AI instantly identifies physical altercations and aggressive behavior patterns in real-time.',
      thumb: '/images/icons/icon-shield-detection.svg',
    },
    {
      id: 3,
      title: 'Instant Alerts',
      description: 'Push notifications with snapshots and map pins reach security staff in under a second.',
      thumb: '/images/icons/icon-alert-bell.svg',
    },
    {
      id: 4,
      title: 'Evidence Vault',
      description: 'Tamper-proof recording archives incidents and audit trails for legal use.',
      thumb: '/images/icons/icon-vault-secure.svg',
    },
  ]), [])

  // Add image gallery data with predefined fighting scene targets
  const galleryImages = useMemo(() => [
    {
      id: 1,
      src: '/images/Gemini_Generated_Image_qu6y1oqu6y1oqu6y.png',
      alt: 'NightShield Target View',
      title: 'Main Security View',
      fightingTargets: [
        { x: 50, y: 45, label: 'Primary Threat' }
      ]
    },
    {
      id: 2,
      src: '/images/Gemini_Generated_Image_x4rg8gx4rg8gx4rg.png',
      alt: 'NightShield Linear View',
      title: 'Linear Detection',
      fightingTargets: [
        { x: 60, y: 50, label: 'Active Conflict' }
      ]
    },
    {
      id: 3,
      src: '/images/ezgif-46cf96e654a1ca.jpg',
      alt: 'NightShield Cover',
      title: 'System Overview',
      fightingTargets: [
        { x: 40, y: 55, label: 'Central Threat' }
      ]
    }
  ], [])

  const containerRef = useRef<HTMLDivElement | null>(null)
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const timelineRef = useRef<HTMLDivElement | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  const [activeStep, setActiveStep] = useState<number>(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false)
  const [isCursorActive, setIsCursorActive] = useState<boolean>(false)
  const [detectionStatus, setDetectionStatus] = useState<string>('')
  const [showDetectionOverlay, setShowDetectionOverlay] = useState<boolean>(false)
  const [showDemoGuide, setShowDemoGuide] = useState<boolean>(false)
  const [demoStep, setDemoStep] = useState<number>(0)
  const [isLowPerformance, setIsLowPerformance] = useState<boolean>(false)


  // Enhanced image switch handler with animations
  const handleImageSwitch = useCallback((idx: number) => {
    if (idx === selectedImageIndex) return
    
    setSelectedImageIndex(idx)
    
    // Reset cursor state when switching images
    setIsCursorActive(false)
    setDetectionStatus('')
    setShowDetectionOverlay(false)
    
    // Minimal animation for mobile to prevent lag
    if (stickyRef.current && !isMobile) {
      // Only animate on desktop
      gsap.fromTo(stickyRef.current, 
        { scale: 0.98, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 0.2, ease: 'power1.out' }
      )
    }
  }, [selectedImageIndex, isMobile])

  // Enhanced cursor interaction handlers for instant fighting scene detection
  const handleCursorEnter = useCallback(() => {
    // Instant activation for immediate feedback
    setIsCursorActive(true)
    setShowDetectionOverlay(true)
    setDetectionStatus('AI Analyzing...')
    
    // Faster timing for mobile to reduce lag and improve UX
    const timingMultiplier = isMobile ? 0.6 : 1
    
    setTimeout(() => {
      setDetectionStatus('Threat Detected!')
    }, 400 * timingMultiplier)
    
    setTimeout(() => {
      setDetectionStatus('Alert Sent!')
    }, 800 * timingMultiplier)
    
    setTimeout(() => {
      setDetectionStatus('Security Notified!')
    }, 1200 * timingMultiplier)
    
    setTimeout(() => {
      setDetectionStatus('Response Deployed!')
    }, 1600 * timingMultiplier)
  }, [isMobile])

  const handleCursorLeave = useCallback(() => {
    // Add slight delay to prevent flickering
    setTimeout(() => {
      setIsCursorActive(false)
      setDetectionStatus('')
      setShowDetectionOverlay(false)
    }, 100)
  }, [])

  // Mobile touch handlers for better mobile experience
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    // Only handle touch on mobile
    if (isMobile) {
      handleCursorEnter()
    }
  }, [handleCursorEnter, isMobile])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    // Only handle touch on mobile
    if (isMobile) {
      // Add delay for mobile to show the full detection sequence
      setTimeout(() => {
        handleCursorLeave()
      }, 1000) // Show for 1 second on mobile
    }
  }, [handleCursorLeave, isMobile])

  // Click handler for both mouse and touch
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    // Only handle mouse events on desktop
    if (!isMobile) {
      if (isCursorActive) {
        handleCursorLeave()
      } else {
        handleCursorEnter()
      }
    }
  }, [isCursorActive, handleCursorEnter, handleCursorLeave, isMobile])

  // Start guided demo
  const startDemo = useCallback(() => {
    setShowDemoGuide(true)
    setDemoStep(0)
    
    // Auto-progress through demo steps - much faster
    setTimeout(() => setDemoStep(1), 200)
    setTimeout(() => setDemoStep(2), 400)
    setTimeout(() => setDemoStep(3), 600)
    setTimeout(() => {
      setShowDemoGuide(false)
      handleCursorEnter()
    }, 800)
  }, [handleCursorEnter])

  // Reset demo
  const resetDemo = useCallback(() => {
    setShowDemoGuide(false)
    setDemoStep(0)
    setIsCursorActive(false)
    setDetectionStatus('')
    setShowDetectionOverlay(false)
  }, [])

  // Auto-play functionality for image gallery
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setSelectedImageIndex(prev => (prev + 1) % galleryImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, galleryImages.length])

  // Enhanced step interaction handler with cursor integration
  const handleStepClick = useCallback((stepIndex: number) => {
    setActiveStep(stepIndex)
    
    // Minimal animation for mobile to prevent lag
    const stepElement = cardRefs.current[stepIndex]
    if (stepElement && !isMobile) {
      // Only animate on desktop to prevent mobile lag
      gsap.fromTo(stepElement,
        { scale: 0.99 },
        { scale: 1.01, duration: 0.15, yoyo: true, repeat: 1 }
      )
    }

    // Update progress indicator - simpler for mobile
    if (progressRef.current) {
      const progress = ((stepIndex + 1) / features.length) * 100
      if (isMobile) {
        // Simple CSS transition for mobile
        progressRef.current.style.transition = 'width 0.3s ease-out'
        progressRef.current.style.width = `${progress}%`
      } else {
        // Use GSAP for desktop
        gsap.to(progressRef.current, {
          width: `${progress}%`,
          duration: 0.4,
          ease: 'power1.out'
        })
      }
    }

    // Feature-specific interactions with enhanced visual feedback
    if (stepIndex === 0) { // Capture & Enhance
      setIsCursorActive(true)
      setShowDetectionOverlay(true)
      setDetectionStatus('📹 Multi-Camera System Initializing...')
      setTimeout(() => setDetectionStatus('🔍 Scanning Environment'), 600)
      setTimeout(() => setDetectionStatus('🔧 Noise Reduction Active'), 1200)
      setTimeout(() => setDetectionStatus('✨ Image Enhancement Complete'), 1800)
      setTimeout(() => setDetectionStatus('🎯 Crystal Clear Frames Ready'), 2400)
      setTimeout(() => {
        setIsCursorActive(false)
        setShowDetectionOverlay(false)
        setDetectionStatus('')
      }, 3500)
    } else if (stepIndex === 1) { // Fight Detection
      setTimeout(() => {
        handleCursorEnter()
      }, 500)
    } else if (stepIndex === 2) { // Instant Alerts
      setIsCursorActive(true)
      setShowDetectionOverlay(true)
      setDetectionStatus('🚨 Alert System Activated')
      setTimeout(() => setDetectionStatus('📊 Analyzing Threat Level'), 500)
      setTimeout(() => setDetectionStatus('📱 Push Notification Sent'), 1000)
      setTimeout(() => setDetectionStatus('📍 GPS Location Marked'), 1500)
      setTimeout(() => setDetectionStatus('👮 Security Team Notified'), 2000)
      setTimeout(() => setDetectionStatus('⚡ Response Time: <1 Second'), 2500)
      setTimeout(() => {
        setIsCursorActive(false)
        setShowDetectionOverlay(false)
        setDetectionStatus('')
      }, 3500)
    } else if (stepIndex === 3) { // Evidence Vault
      setIsCursorActive(true)
      setShowDetectionOverlay(true)
      setDetectionStatus('🔒 Secure Vault Accessing...')
      setTimeout(() => setDetectionStatus('🔐 Encryption Keys Verified'), 600)
      setTimeout(() => setDetectionStatus('📹 Recording Archived'), 1200)
      setTimeout(() => setDetectionStatus('🛡️ Tamper-Proof Seal Applied'), 1800)
      setTimeout(() => setDetectionStatus('📋 Audit Trail Generated'), 2400)
      setTimeout(() => setDetectionStatus('⚖️ Legal Evidence Ready'), 3000)
      setTimeout(() => {
        setIsCursorActive(false)
        setShowDetectionOverlay(false)
        setDetectionStatus('')
      }, 4000)
    }

    // Reset cursor state for non-fight detection steps
    if (stepIndex !== 1) {
      handleCursorLeave()
    }
  }, [features.length, handleCursorEnter, handleCursorLeave, isMobile])

  // Intersection Observer for scroll-based animations (simplified for mobile)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (isMobile) {
              // Very simple fade-in for mobile to prevent lag
              const element = entry.target as HTMLElement
              element.style.transition = 'opacity 0.4s ease-out'
              element.style.opacity = '1'
            } else {
              // Use GSAP for desktop
              gsap.fromTo(entry.target,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' }
              )
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [isMobile])

  // Initialize animations on mount (simplified for mobile)
  useEffect(() => {
    if (timelineRef.current && !isMobile) {
      // Only animate timeline on desktop
      gsap.fromTo(timelineRef.current,
        { scaleY: 0 },
        { scaleY: 1, duration: 0.8, ease: 'power1.out', delay: 0.3 }
      )
    }
  }, [isMobile])

  // Performance monitoring for mobile devices
  useEffect(() => {
    if (!isMobile) return

    let frameCount = 0
    let lastTime = performance.now()
    let fps = 0

    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        frameCount = 0
        lastTime = currentTime
        
        // Mark as low performance if FPS is below 30
        setIsLowPerformance(fps < 30)
      }
      
      requestAnimationFrame(measureFPS)
    }

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(measureFPS)
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [isMobile])

  // Auto-trigger cursor interaction based on active step
  useEffect(() => {
    if (activeStep === 1) { // Fight Detection step
      const timer = setTimeout(() => {
        handleCursorEnter()
      }, 1000)
      
      return () => clearTimeout(timer)
    } else {
      handleCursorLeave()
    }
  }, [activeStep, handleCursorEnter, handleCursorLeave])

  return (
    <section id="how-it-works" className={`relative overflow-hidden ${isMobile ? 'py-8' : 'py-24'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black" />
      <div className="absolute inset-0 grid-texture opacity-10" />
      
      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
      
      {/* Enhanced Target Cursor for Instant Fight Scene Detection - Desktop Only */}
      {!isMobile && (
        <TargetCursor 
          targetSelector=".cursor-target"
          spinDuration={isCursorActive ? 0.8 : 2}
          hideDefaultCursor={false}
        />
      )}

      <div className="container relative z-10">
        <div className={`text-center ${isMobile ? 'mb-6 px-4' : 'mb-8 sm:mb-12 md:mb-16 px-4'}`}>
          <div className={`flex justify-center items-center ${isMobile ? 'space-x-2 mb-2' : 'space-x-2 sm:space-x-4 mb-3 sm:mb-5'}`}>
            <Image src="/images/logo/LOGO TRANSPARENT.png" alt="NightShield Logo" width={56} height={56} className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'}`} />
            <h2 className={`${isMobile ? 'text-xl' : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'} font-bold`}>How <span className="text-red-500">NightShield</span> Works</h2>
          </div>
          <p className={`${isMobile ? 'text-sm' : 'text-sm sm:text-base md:text-lg lg:text-xl'} text-gray-300 max-w-3xl mx-auto`}>
            Experience NightShield's advanced AI detection system in action. {!isMobile && 'Explore our comprehensive security workflow below.'}
          </p>
          
          {/* AI Detection Status Indicator */}
          {isCursorActive && (
            <div className="mt-4 flex items-center justify-center gap-2 animate-fadeIn">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-medium">AI Detection System Active</span>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
          )}

          {/* Performance Warning for Mobile */}
          {isMobile && isLowPerformance && (
            <div className="mt-4 flex items-center justify-center gap-2 animate-fadeIn">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
              <span className="text-yellow-400 text-sm font-medium">Performance Mode: Simplified animations enabled</span>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
            </div>
          )}
        </div>

        <div ref={containerRef} className={`grid lg:grid-cols-12 ${isMobile ? 'gap-3' : 'gap-4 sm:gap-6'} items-start`}>
          {/* Sticky Security Visual */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div
              ref={stickyRef}
              className={`${isMobile ? 'aspect-[4/3]' : 'aspect-[16/10] lg:aspect-[4/3]'} ${isMobile ? 'rounded-lg' : 'rounded-xl sm:rounded-2xl'} overflow-hidden bg-black/60 border border-red-500/20 backdrop-blur-sm lg:sticky lg:top-24 group hover:border-red-500/40 transition-all duration-300`}
            >
             
              <Image
                key={selectedImageIndex}
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].alt}
                fill
                className="object-cover opacity-90 transition-opacity duration-300"
                priority
                sizes={isMobile ? "100vw" : "50vw"}
                quality={isMobile ? 75 : 90}
              />
    
              {/* Enhanced Interactive Target Areas for all features */}
              <div 
                className={`cursor-target absolute inset-0 pointer-events-auto touch-manipulation ${!isMobile ? 'cursor-pointer' : ''}`}
                onMouseEnter={!isMobile && activeStep === 1 ? handleCursorEnter : undefined}
                onMouseLeave={!isMobile && activeStep === 1 ? handleCursorLeave : undefined}
                onTouchStart={isMobile ? handleTouchStart : undefined}
                onTouchEnd={isMobile ? handleTouchEnd : undefined}
                onClick={() => handleStepClick(activeStep)}
              >
                {/* Feature-specific target areas */}
                {activeStep === 0 && ( // Capture & Enhance
                  <div className={`absolute ${isMobile ? 'top-1/4 left-1/3 w-1/3 h-1/2' : 'top-1/6 left-1/4 w-1/2 h-2/3'} pointer-events-none`}>
                    <div className={`absolute inset-0 border-2 border-blue-500/50 rounded-lg transition-all ${isMobile ? 'duration-300' : 'duration-500'} ${
                      isCursorActive ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}>
                      <div className={`absolute inset-0 bg-blue-500/10 rounded-lg ${
                        (isLowPerformance || isMobile) ? '' : 'animate-pulse'
                      }`} />
                      {/* Simplified camera scan lines for mobile */}
                      {!isMobile && (
                        <div className={`absolute inset-0 ${isCursorActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-400 animate-pulse" />
                          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-blue-400 animate-pulse" style={{animationDelay: '0.5s'}} />
                          <div className="absolute top-2/3 left-0 w-full h-0.5 bg-blue-400 animate-pulse" style={{animationDelay: '1s'}} />
                          {/* Corner camera indicators */}
                          <div className="absolute top-2 left-2 w-3 h-3 border-2 border-blue-400 rounded-full animate-ping" />
                          <div className="absolute top-2 right-2 w-3 h-3 border-2 border-blue-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}} />
                          <div className="absolute bottom-2 left-2 w-3 h-3 border-2 border-blue-400 rounded-full animate-ping" style={{animationDelay: '0.6s'}} />
                          <div className="absolute bottom-2 right-2 w-3 h-3 border-2 border-blue-400 rounded-full animate-ping" style={{animationDelay: '0.9s'}} />
                        </div>
                      )}
                      {/* Mobile simplified indicators */}
                      {isMobile && (
                        <div className={`absolute inset-0 ${isCursorActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                          <div className="absolute top-2 left-2 w-2 h-2 border border-blue-400 rounded-full animate-pulse" />
                          <div className="absolute top-2 right-2 w-2 h-2 border border-blue-400 rounded-full animate-pulse" />
                        </div>
                      )}
                      {/* Rotating focus ring - disabled on mobile */}
                      {!isMobile && (
                        <div className={`absolute inset-0 rounded-lg border border-blue-400/30 ${isCursorActive ? 'animate-spin' : 'opacity-0'}`} style={{animationDuration: '4s'}} />
                      )}
                    </div>
                    {(isCursorActive || detectionStatus) && (
                      <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        (isLowPerformance || isMobile) ? '' : 'animate-bounce'
                      }`}>
                        {detectionStatus}
                      </div>
                    )}
                  </div>
                )}

                {activeStep === 1 && ( // Fight Detection
                  <div className={`absolute ${isMobile ? 'top-1/3 left-1/3 w-1/3 h-1/3' : 'top-1/4 left-1/3 w-1/3 h-1/2'} pointer-events-none`}>
                    <div className={`absolute inset-0 border-2 border-red-500/50 rounded-lg transition-all ${isMobile ? 'duration-300' : 'duration-500'} ${
                      isCursorActive ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}>
                      <div className={`absolute inset-0 bg-red-500/10 rounded-lg ${
                        (isLowPerformance || isMobile) ? '' : 'animate-pulse'
                      }`} />
                      {/* Simplified fight detection effects for mobile */}
                      {!isMobile && (
                        <div className={`absolute inset-0 ${isCursorActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                          {/* Crosshair targeting system */}
                          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-400 animate-pulse" />
                          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-red-400 animate-pulse" />
                          {/* Corner threat indicators */}
                          <div className="absolute top-1 left-1 w-2 h-2 border border-red-400 animate-ping" />
                          <div className="absolute top-1 right-1 w-2 h-2 border border-red-400 animate-ping" style={{animationDelay: '0.2s'}} />
                          <div className="absolute bottom-1 left-1 w-2 h-2 border border-red-400 animate-ping" style={{animationDelay: '0.4s'}} />
                          <div className="absolute bottom-1 right-1 w-2 h-2 border border-red-400 animate-ping" style={{animationDelay: '0.6s'}} />
                          {/* Pulsing threat zone */}
                          <div className="absolute inset-2 border border-red-400/50 rounded animate-pulse" />
                        </div>
                      )}
                      {/* Mobile simplified crosshair */}
                      {isMobile && (
                        <div className={`absolute inset-0 ${isCursorActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                          <div className="absolute top-1/2 left-0 w-full h-px bg-red-400" />
                          <div className="absolute top-0 left-1/2 w-px h-full bg-red-400" />
                        </div>
                      )}
                      {/* Rotating threat scanner - disabled on mobile */}
                      {!isMobile && (
                        <div className={`absolute inset-0 rounded-lg border border-red-400/30 ${isCursorActive ? 'animate-spin' : 'opacity-0'}`} style={{animationDuration: '2s'}} />
                      )}
                    </div>
                    {(isCursorActive || detectionStatus) && (
                      <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500/90 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        (isLowPerformance || isMobile) ? '' : 'animate-bounce'
                      }`}>
                        {detectionStatus}
                      </div>
                    )}
                  </div>
                )}

                {activeStep === 2 && ( // Instant Alerts
                  <div className={`absolute ${isMobile ? 'top-1/4 left-1/4 w-1/2 h-1/2' : 'top-1/8 left-1/8 w-3/4 h-3/4'} pointer-events-none`}>
                    <div className={`absolute inset-0 border-2 border-yellow-500/50 rounded-lg transition-all ${isMobile ? 'duration-300' : 'duration-500'} ${
                      isCursorActive ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}>
                      <div className={`absolute inset-0 bg-yellow-500/10 rounded-lg ${
                        (isLowPerformance || isMobile) ? '' : 'animate-pulse'
                      }`} />
                      {/* Simplified alert effects for mobile */}
                      {!isMobile && (
                        <div className={`absolute inset-0 ${isCursorActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                          {/* Notification waves */}
                          <div className={`absolute top-2 right-2 w-4 h-4 bg-yellow-400 rounded-full ${isCursorActive ? 'animate-ping' : 'opacity-0'}`} />
                          <div className={`absolute bottom-2 left-2 w-4 h-4 bg-yellow-400 rounded-full ${isCursorActive ? 'animate-ping' : 'opacity-0'}`} style={{animationDelay: '0.5s'}} />
                          <div className={`absolute top-1/2 left-2 w-3 h-3 bg-yellow-400 rounded-full ${isCursorActive ? 'animate-ping' : 'opacity-0'}`} style={{animationDelay: '1s'}} />
                          <div className={`absolute top-1/2 right-2 w-3 h-3 bg-yellow-400 rounded-full ${isCursorActive ? 'animate-ping' : 'opacity-0'}`} style={{animationDelay: '1.5s'}} />
                          {/* Signal strength bars */}
                          <div className="absolute top-1 left-1 flex space-x-1">
                            <div className="w-1 h-2 bg-yellow-400 animate-pulse" />
                            <div className="w-1 h-3 bg-yellow-400 animate-pulse" style={{animationDelay: '0.1s'}} />
                            <div className="w-1 h-4 bg-yellow-400 animate-pulse" style={{animationDelay: '0.2s'}} />
                            <div className="w-1 h-3 bg-yellow-400 animate-pulse" style={{animationDelay: '0.3s'}} />
                          </div>
                          {/* Alert ripple effect */}
                          <div className="absolute inset-4 border border-yellow-400/50 rounded animate-pulse" />
                        </div>
                      )}
                      {/* Mobile simplified alert indicators */}
                      {isMobile && (
                        <div className={`absolute inset-0 ${isCursorActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                          <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                          <div className="absolute bottom-2 left-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                        </div>
                      )}
                      {/* Rotating alert scanner - disabled on mobile */}
                      {!isMobile && (
                        <div className={`absolute inset-0 rounded-lg border border-yellow-400/30 ${isCursorActive ? 'animate-spin' : 'opacity-0'}`} style={{animationDuration: '3s'}} />
                      )}
                    </div>
                    {(isCursorActive || detectionStatus) && (
                      <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-500/90 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        (isLowPerformance || isMobile) ? '' : 'animate-bounce'
                      }`}>
                        {detectionStatus}
                      </div>
                    )}
                  </div>
                )}

                {activeStep === 3 && ( // Evidence Vault
                  <div className={`absolute ${isMobile ? 'top-1/3 left-1/3 w-1/3 h-1/3' : 'top-1/5 left-1/5 w-3/5 h-3/5'} pointer-events-none`}>
                    <div className={`absolute inset-0 border-2 border-green-500/50 rounded-lg transition-all ${isMobile ? 'duration-300' : 'duration-500'} ${
                      isCursorActive ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}>
                      <div className={`absolute inset-0 bg-green-500/10 rounded-lg ${
                        (isLowPerformance || isMobile) ? '' : 'animate-pulse'
                      }`} />
                      {/* Simplified vault effects for mobile */}
                      {!isMobile && (
                        <div className={`absolute inset-0 ${isCursorActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                          {/* Main vault lock */}
                          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-green-400 rounded-full ${isCursorActive ? 'animate-spin' : 'opacity-0'}`} style={{animationDuration: '3s'}} />
                          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full ${isCursorActive ? 'animate-pulse' : 'opacity-0'}`} />
                          {/* Security corner indicators */}
                          <div className="absolute top-2 left-2 w-2 h-2 border border-green-400 rounded-full animate-ping" />
                          <div className="absolute top-2 right-2 w-2 h-2 border border-green-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}} />
                          <div className="absolute bottom-2 left-2 w-2 h-2 border border-green-400 rounded-full animate-ping" style={{animationDelay: '0.4s'}} />
                          <div className="absolute bottom-2 right-2 w-2 h-2 border border-green-400 rounded-full animate-ping" style={{animationDelay: '0.6s'}} />
                          {/* Encryption lines */}
                          <div className="absolute top-1/4 left-1/4 w-1/2 h-0.5 bg-green-400/50 animate-pulse" />
                          <div className="absolute top-3/4 left-1/4 w-1/2 h-0.5 bg-green-400/50 animate-pulse" style={{animationDelay: '0.5s'}} />
                          <div className="absolute top-1/2 left-1/4 w-0.5 h-1/2 bg-green-400/50 animate-pulse" style={{animationDelay: '1s'}} />
                          <div className="absolute top-1/2 right-1/4 w-0.5 h-1/2 bg-green-400/50 animate-pulse" style={{animationDelay: '1.5s'}} />
                          {/* Vault door frame */}
                          <div className="absolute inset-4 border border-green-400/30 rounded animate-pulse" />
                        </div>
                      )}
                      {/* Mobile simplified vault lock */}
                      {isMobile && (
                        <div className={`absolute inset-0 ${isCursorActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-green-400 rounded-full animate-pulse`} />
                          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full`} />
                        </div>
                      )}
                      {/* Rotating security scanner - disabled on mobile */}
                      {!isMobile && (
                        <div className={`absolute inset-0 rounded-lg border border-green-400/30 ${isCursorActive ? 'animate-spin' : 'opacity-0'}`} style={{animationDuration: '5s'}} />
                      )}
                    </div>
                    {(isCursorActive || detectionStatus) && (
                      <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        (isLowPerformance || isMobile) ? '' : 'animate-bounce'
                      }`}>
                        {detectionStatus}
                      </div>
                    )}
                  </div>
                )}

                {/* Secondary target areas for different images - also larger */}
                {selectedImageIndex === 1 && (
                  <div className="absolute top-1/2 right-1/4 w-1/4 h-1/3 pointer-events-none">
                    <div className={`absolute inset-0 border-2 border-red-500/50 rounded-lg transition-all duration-500 ${
                      isCursorActive ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}>
                      <div className="absolute inset-0 bg-red-500/10 rounded-lg animate-pulse" />
                    </div>
                  </div>
                )}

                {selectedImageIndex === 2 && (
                  <div className="absolute bottom-1/3 left-1/4 w-1/3 h-1/4 pointer-events-none">
                    <div className={`absolute inset-0 border-2 border-red-500/50 rounded-lg transition-all duration-500 ${
                      isCursorActive ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}>
                      <div className="absolute inset-0 bg-red-500/10 rounded-lg animate-pulse" />
                    </div>
                  </div>
                )}

                {/* Additional fighting scene areas for better coverage */}
                <div className="absolute top-1/6 left-1/6 w-1/2 h-2/3 pointer-events-none">
                  <div className={`absolute inset-0 border border-red-500/30 rounded-lg transition-all duration-500 ${
                    isCursorActive ? 'opacity-50' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 bg-red-500/5 rounded-lg" />
                  </div>
                </div>
              </div>
    
              {/* Enhanced vignette with detection overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
              
              {/* Feature Status Overlay - Shows for all features with color coding */}
              {(isCursorActive || detectionStatus) && (
                <div className={`absolute top-4 left-4 bg-black/80 backdrop-blur-sm border rounded-lg p-3 animate-fadeIn ${
                  activeStep === 0 ? 'border-blue-500/30' :
                  activeStep === 1 ? 'border-red-500/30' :
                  activeStep === 2 ? 'border-yellow-500/30' :
                  'border-green-500/30'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      activeStep === 0 ? 'bg-blue-500' :
                      activeStep === 1 ? 'bg-red-500' :
                      activeStep === 2 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`} />
                    <span className={`text-sm font-medium ${
                      activeStep === 0 ? 'text-blue-400' :
                      activeStep === 1 ? 'text-red-400' :
                      activeStep === 2 ? 'text-yellow-400' :
                      'text-green-400'
                    }`}>
                      {features[activeStep]?.title + ' Active'}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs mt-1">
                    {activeStep === 0 ? 'Multi-camera system processing frames' :
                     activeStep === 1 ? 'Instant lock-on detection system engaged' :
                     activeStep === 2 ? 'Real-time alert system broadcasting' :
                     'Secure vault encrypting evidence'}
                  </p>
                </div>
              )}

              {/* Interactive area indicator */}
              {!isCursorActive && (
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm border border-gray-500/30 rounded-lg p-2 opacity-70 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" />
                    <span className="text-gray-300 text-xs">
                      {isMobile ? 'Tap to activate AI detection' : 'Hover to activate AI detection'}
                    </span>
                  </div>
                </div>
              )}

              {/* Call to Action Button */}
              {!isCursorActive && !showDemoGuide && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <button
                    onClick={startDemo}
                    className="bg-red-500/90 hover:bg-red-500 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 animate-pulse touch-manipulation active:scale-95"
                  >
                    🚀 {isMobile ? 'Tap to Try AI Demo' : 'Try AI Detection Demo'}
                  </button>
                </div>
              )}

              {/* Reset Button */}
              {(isCursorActive || showDemoGuide) && (
                <div className="absolute top-4 left-4">
                  <button
                    onClick={resetDemo}
                    className="bg-gray-600/80 hover:bg-gray-600 text-white px-4 py-2 rounded-full font-medium text-xs shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    🔄 Reset Demo
                  </button>
                </div>
              )}

              {/* Enhanced interaction hint */}
              {!isCursorActive && !showDemoGuide && (
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-gray-500/30 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      activeStep === 0 ? 'bg-blue-400' :
                      activeStep === 1 ? 'bg-red-400' :
                      activeStep === 2 ? 'bg-yellow-400' :
                      'bg-green-400'
                    }`} />
                    <span className="text-gray-300 text-xs">
                      {isMobile ? `Tap to see ${features[activeStep]?.title} in action` : `Click to see ${features[activeStep]?.title} in action`}
                    </span>
                  </div>
                </div>
              )}
              
            </div>

            {/* Enhanced Thumbnail Gallery with Controls */}
            <div className={`${isMobile ? 'mt-3' : 'mt-4 sm:mt-6'}`}>
              {/* Gallery Controls - Mobile Optimized */}
              <div className={`flex items-center justify-between ${isMobile ? 'mb-2' : 'mb-3 sm:mb-4'}`}>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 touch-manipulation ${
                      isAutoPlaying
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : 'bg-gray-800/50 text-gray-300 border border-gray-600/30 hover:bg-gray-700/50 active:bg-gray-600/50'
                    }`}
                  >
                    {isAutoPlaying ? '⏸️ Auto' : '▶️ Auto'}
                  </button>
                  <span className="text-xs text-gray-400">
                    {selectedImageIndex + 1} / {galleryImages.length}
                  </span>
                </div>
                
                {/* Navigation arrows - Mobile optimized */}
                <div className="flex gap-1 sm:gap-2">
                  <button
                    onClick={() => handleImageSwitch((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length)}
                    className="p-1.5 sm:p-2 rounded-full bg-gray-800/50 text-gray-300 hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 touch-manipulation active:scale-95"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => handleImageSwitch((selectedImageIndex + 1) % galleryImages.length)}
                    className="p-1.5 sm:p-2 rounded-full bg-gray-800/50 text-gray-300 hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 touch-manipulation active:scale-95"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery - Mobile Responsive */}
              <div className={`flex ${isMobile ? 'gap-1' : 'gap-1.5 sm:gap-2 md:gap-4'} justify-between overflow-x-auto ${isMobile ? 'pb-1' : 'pb-2'}`}>
                {galleryImages.map((image, idx) => (
                  <div
                    key={image.id}
                    onClick={() => handleImageSwitch(idx)}
                    className={`relative cursor-pointer transition-all duration-300 group flex-1 touch-manipulation ${
                      selectedImageIndex === idx 
                        ? 'scale-[1.05]' 
                        : 'hover:scale-[1.02] active:scale-[1.03]'
                    }`}
                  >
                    <div className={`w-full h-16 sm:h-20 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 relative ${
                      selectedImageIndex === idx
                        ? 'border-red-500 shadow-lg shadow-red-500/20'
                        : 'border-red-500/30 hover:border-red-500/50'
                    }`}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes={isMobile ? "25vw" : "12vw"}
                        quality={isMobile ? 60 : 80}
                        loading="lazy"
                      />
                      {/* Enhanced Overlay */}
                      <div className={`absolute inset-0 transition-all duration-300 ${
                        selectedImageIndex === idx
                          ? 'bg-red-500/20'
                          : 'bg-black/40 group-hover:bg-black/20'
                      }`} />
                      
                      {/* Active indicator */}
                      {selectedImageIndex === idx && (
                        <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      )}
                    </div>
                    
                    {/* Image title with enhanced styling */}
                    <div className="mt-1 sm:mt-2 text-center">
                      <p className={`text-xs font-medium transition-colors duration-300 ${
                        selectedImageIndex === idx
                          ? 'text-red-400'
                          : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {image.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Feature List */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              {/* Progress Indicator */}
              <div className={`${isMobile ? 'mb-4' : 'mb-6 sm:mb-8'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm font-medium text-gray-300">Progress</span>
                  <span className="text-xs sm:text-sm text-red-400">{activeStep + 1} / {features.length}</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-1.5 sm:h-2 overflow-hidden">
                  <div
                    ref={progressRef}
                    className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full transition-all duration-500 ease-out"
                    style={{ width: '0%' }}
                  />
                </div>
              </div>

              {/* Enhanced Vertical timeline line */}
              <div 
                ref={timelineRef}
                className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/60 via-red-500/40 to-red-500/20 origin-top"
              />
              
              {/* Workflow steps */}
              <div className={`${isMobile ? 'space-y-3' : 'space-y-4 sm:space-y-6'}`}>
                {features.map((f, idx) => (
                  <div
                    key={f.id}
                    ref={(el) => { cardRefs.current[idx] = el }}
                    data-index={idx}
                    onClick={() => handleStepClick(idx)}
                    className={`group relative transition-all duration-300 cursor-pointer will-change-transform touch-manipulation ${
                      activeStep === idx 
                        ? 'scale-[1.02]' 
                        : 'hover:scale-[1.01] active:scale-[1.02]'
                    }`}
                  >
                    {/* Enhanced Step number circle */}
                    <div className={`absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center text-sm sm:text-base font-bold transition-all duration-300 ${
                      activeStep === idx
                        ? 'border-red-500 bg-red-500/20 text-red-400 shadow-lg shadow-red-500/30'
                        : 'border-red-500/40 bg-black/80 text-red-500/80 group-hover:border-red-500/60 group-hover:text-red-400'
                    }`}>
                      {idx + 1}
                      {/* Pulse effect for active step */}
                      {activeStep === idx && (
                        <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping opacity-75" />
                      )}
                    </div>

                    {/* Enhanced Connecting arrow with animation */}
                    {idx < features.length - 1 && (
                      <div className="absolute left-5 sm:left-6 md:left-7 top-10 sm:top-12 md:top-14 w-0.5 h-4 sm:h-5 md:h-6 transition-all duration-300 bg-red-500/40">
                        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[3px] sm:border-l-[4px] border-r-[3px] sm:border-r-[4px] border-t-[4px] sm:border-t-[5px] border-l-transparent border-r-transparent transition-all duration-300 ${
                          activeStep >= idx ? 'border-t-red-500' : 'border-t-red-500/40'
                        }`} />
                        {/* Animated flow indicator */}
                        {activeStep >= idx && (
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                        )}
                      </div>
                    )}

                    {/* Enhanced Feature card */}
                    <div className={`${isMobile ? 'ml-10' : 'ml-12 sm:ml-16 md:ml-20'} rounded-lg border ${isMobile ? 'p-3' : 'p-3 sm:p-4 md:p-5'} transition-all duration-300 ${
                      activeStep === idx
                        ? 'bg-card-bg/95 border-red-500/60 shadow-lg shadow-red-500/10'
                        : 'bg-card-bg/95 border-red-500/20 hover:border-red-500/40'
                    }`}>
                      <div className={`flex items-start ${isMobile ? 'gap-2' : 'gap-3 sm:gap-4'}`}>
                        <div className={`relative ${isMobile ? 'w-6 h-6' : 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'} shrink-0 rounded-md overflow-hidden border transition-all duration-300 flex items-center justify-center ${
                          activeStep === idx
                            ? `border-${idx === 0 ? 'blue' : idx === 1 ? 'red' : idx === 2 ? 'yellow' : 'green'}-500/50 bg-${idx === 0 ? 'blue' : idx === 1 ? 'red' : idx === 2 ? 'yellow' : 'green'}-500/10 rotate-3 scale-[1.05]`
                            : 'border-red-500/30 bg-black/90 group-hover:rotate-3 group-hover:scale-[1.03]'
                        }`}>
                          <img 
                            src={f.thumb} 
                            alt={f.title} 
                            className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'} transition-all duration-300 ${
                              activeStep === idx 
                                ? `text-${idx === 0 ? 'blue' : idx === 1 ? 'red' : idx === 2 ? 'yellow' : 'green'}-500 ${!isMobile ? 'animate-pulse' : ''}` 
                                : 'text-red-500'
                            }`} 
                          />
                          {/* Enhanced glow effect for active step - simplified for mobile */}
                          {activeStep === idx && !isMobile && (
                            <>
                              <div className={`absolute inset-0 rounded-md bg-${idx === 0 ? 'blue' : idx === 1 ? 'red' : idx === 2 ? 'yellow' : 'green'}-500/20 animate-pulse`} />
                              <div className={`absolute inset-0 rounded-md bg-${idx === 0 ? 'blue' : idx === 1 ? 'red' : idx === 2 ? 'yellow' : 'green'}-500/30 animate-ping`} />
                              {/* Rotating ring effect */}
                              <div className={`absolute inset-0 rounded-md border-2 border-${idx === 0 ? 'blue' : idx === 1 ? 'red' : idx === 2 ? 'yellow' : 'green'}-400 animate-spin`} style={{animationDuration: '3s'}} />
                            </>
                          )}
                          {/* Simple glow for mobile */}
                          {activeStep === idx && isMobile && (
                            <div className={`absolute inset-0 rounded-md bg-${idx === 0 ? 'blue' : idx === 1 ? 'red' : idx === 2 ? 'yellow' : 'green'}-500/20`} />
                          )}
                          {/* Hover glow effect */}
                          {activeStep !== idx && (
                            <div className="absolute inset-0 rounded-md bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className={`${isMobile ? 'text-sm' : 'text-base sm:text-lg'} font-semibold ${isMobile ? 'mb-1' : 'mb-1 sm:mb-2'} transition-colors ${
                            activeStep === idx
                              ? 'text-red-400'
                              : 'text-white group-hover:text-red-400'
                          }`}>
                            {f.title}
                          </h3>
                          <p className={`text-gray-100 leading-relaxed ${isMobile ? 'text-xs' : 'text-xs sm:text-sm'}`}>{f.description}</p>
                          
                          {/* Additional info for active step - simplified for mobile */}
                          {activeStep === idx && !isMobile && (
                            <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                              <p className="text-xs text-red-300 font-medium">
                                💡 Click to explore this step in detail
                              </p>
                              {/* Special indicator for fight detection step */}
                              {idx === 1 && (
                                <div className="mt-1 sm:mt-2 flex items-center gap-1.5 sm:gap-2">
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
                                  <p className="text-xs text-red-400 font-medium">
                                    🎯 Hover anywhere on the image for instant AI lock-on detection
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                          {/* Simplified mobile info */}
                          {activeStep === idx && isMobile && idx === 1 && (
                            <div className="mt-2 p-2 bg-red-500/10 rounded-lg border border-red-500/20">
                              <p className="text-xs text-red-400 font-medium">
                                🎯 Tap the image for AI detection
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

           
          </div>
        </div>


        {/* Secondary gallery removed to match requested compact layout */}
      </div>
    </section>
  )
}

export default HowItWorks

