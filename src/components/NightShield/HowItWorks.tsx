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
      description: 'Multi-camera intake with noise reduction and night-vision enhancement for crystal clear frames.',
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


  // Enhanced image switch handler with animations
  const handleImageSwitch = useCallback((idx: number) => {
    if (idx === selectedImageIndex) return
    
    setSelectedImageIndex(idx)
    
    // Reset cursor state when switching images
    setIsCursorActive(false)
    setDetectionStatus('')
    setShowDetectionOverlay(false)
    
    // Animate the main image
    if (stickyRef.current) {
      gsap.fromTo(stickyRef.current, 
        { scale: 0.95, opacity: 0.7 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' }
      )
    }
  }, [selectedImageIndex])

  // Enhanced cursor interaction handlers for instant fighting scene detection
  const handleCursorEnter = useCallback(() => {
    // Instant activation for immediate feedback
    setIsCursorActive(true)
    setShowDetectionOverlay(true)
    setDetectionStatus('AI Analyzing...')
    
    // Simulate AI detection process with realistic timing
    setTimeout(() => {
      setDetectionStatus('Threat Detected!')
    }, 600)
    
    setTimeout(() => {
      setDetectionStatus('Alert Sent!')
    }, 1200)
    
    setTimeout(() => {
      setDetectionStatus('Security Notified!')
    }, 1800)
    
    setTimeout(() => {
      setDetectionStatus('Response Deployed!')
    }, 2400)
  }, [])

  const handleCursorLeave = useCallback(() => {
    // Add slight delay to prevent flickering
    setTimeout(() => {
      setIsCursorActive(false)
      setDetectionStatus('')
      setShowDetectionOverlay(false)
    }, 100)
  }, [])

  // Start guided demo
  const startDemo = useCallback(() => {
    setShowDemoGuide(true)
    setDemoStep(0)
    
    // Auto-progress through demo steps
    setTimeout(() => setDemoStep(1), 1000)
    setTimeout(() => setDemoStep(2), 2000)
    setTimeout(() => setDemoStep(3), 3000)
    setTimeout(() => {
      setShowDemoGuide(false)
      handleCursorEnter()
    }, 4000)
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
    
    // Animate the clicked step
    const stepElement = cardRefs.current[stepIndex]
    if (stepElement) {
      gsap.fromTo(stepElement,
        { scale: 0.98 },
        { scale: 1.02, duration: 0.2, yoyo: true, repeat: 1 }
      )
    }

    // Update progress indicator
    if (progressRef.current) {
      const progress = ((stepIndex + 1) / features.length) * 100
      gsap.to(progressRef.current, {
        width: `${progress}%`,
        duration: 0.5,
        ease: 'power2.out'
      })
    }

    // Trigger cursor interaction for fight detection step
    if (stepIndex === 1) { // Fight Detection step
      setTimeout(() => {
        handleCursorEnter()
      }, 500)
    } else {
      handleCursorLeave()
    }
  }, [features.length, handleCursorEnter, handleCursorLeave])

  // Intersection Observer for scroll-based animations (without auto-selection)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only animate step appearance, don't change activeStep
            gsap.fromTo(entry.target,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
            )
          }
        })
      },
      { threshold: 0.3 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  // Initialize animations on mount
  useEffect(() => {
    if (timelineRef.current) {
      gsap.fromTo(timelineRef.current,
        { scaleY: 0 },
        { scaleY: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
      )
    }
  }, [])

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
    <section id="how-it-works" className="py-24 relative overflow-hidden">
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
      
      {/* Enhanced Target Cursor for Instant Fight Scene Detection */}
      <TargetCursor 
        targetSelector=".cursor-target"
        spinDuration={isCursorActive ? 0.8 : 2}
        hideDefaultCursor={false}
      />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-4 mb-5">
            <Image src="/images/logo/LOGO TRANSPARENT.png" alt="NightShield Logo" width={56} height={56} className="w-12 h-12" />
            <h2 className="text-4xl md:text-5xl font-bold">How <span className="text-red-500">NightShield</span> Works</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Experience NightShield's advanced AI detection system in action. Explore our comprehensive security workflow below.
          </p>
          
          {/* AI Detection Status Indicator */}
          {isCursorActive && (
            <div className="mt-4 flex items-center justify-center gap-2 animate-fadeIn">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-medium">AI Detection System Active</span>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
          )}
        </div>

        <div ref={containerRef} className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Sticky Security Visual */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div
              ref={stickyRef}
              className={`aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-red-500/20 backdrop-blur-sm group hover:border-red-500/40 transition-all duration-300 ${
                isMobile ? 'mb-6' : 'lg:sticky lg:top-24'
              }`}
            >
             
              <Image
                key={selectedImageIndex}
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].alt}
                fill
                className="object-cover opacity-90 transition-opacity duration-300"
                priority
              />
    
              {/* Enhanced Fight Target Areas with instant lock */}
              <div 
                className="cursor-target absolute inset-0 pointer-events-auto cursor-crosshair"
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
              >
                {/* Primary fighting scene target - larger area for easier targeting */}
                <div className="absolute top-1/4 left-1/3 w-1/3 h-1/2 pointer-events-none">
                  {/* Fighting scene highlight overlay */}
                  <div className={`absolute inset-0 border-2 border-red-500/50 rounded-lg transition-all duration-500 ${
                    isCursorActive ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                  }`}>
                    <div className="absolute inset-0 bg-red-500/10 rounded-lg animate-pulse" />
                  </div>
                  
                  {/* Detection status indicator */}
                  {isCursorActive && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-red-500/90 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap animate-bounce">
                      {detectionStatus}
                    </div>
                  )}
                </div>

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
              
              {/* AI Detection Status Overlay */}
              {isCursorActive && (
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-lg p-3 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-red-400 text-sm font-medium">AI Detection Active</span>
                  </div>
                  <p className="text-gray-300 text-xs mt-1">Instant lock-on detection system engaged</p>
                </div>
              )}

              {/* Interactive area indicator */}
              {!isCursorActive && (
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm border border-gray-500/30 rounded-lg p-2 opacity-70 hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" />
                    <span className="text-gray-300 text-xs">Hover to activate AI detection</span>
                  </div>
                </div>
              )}

              {/* Call to Action Button */}
              {!isCursorActive && !showDemoGuide && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <button
                    onClick={startDemo}
                    className="bg-red-500/90 hover:bg-red-500 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 animate-pulse"
                  >
                    🚀 Try AI Detection Demo
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

              {/* Simple hover hint */}
              {!isCursorActive && !showDemoGuide && (
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-gray-500/30 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-gray-300 text-xs">Hover to see AI in action</span>
                  </div>
                </div>
              )}
              
            </div>

              {/* Enhanced Thumbnail Gallery with Controls */}
            <div className="mt-6">
              {/* Gallery Controls - Mobile Optimized */}
              <div className={`flex items-center justify-between mb-4 ${isMobile ? 'flex-col gap-3' : ''}`}>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 touch-manipulation ${
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
                <div className="flex gap-2">
                  <button
                    onClick={() => handleImageSwitch((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length)}
                    className="p-2 rounded-full bg-gray-800/50 text-gray-300 hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 touch-manipulation active:scale-95"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => handleImageSwitch((selectedImageIndex + 1) % galleryImages.length)}
                    className="p-2 rounded-full bg-gray-800/50 text-gray-300 hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 touch-manipulation active:scale-95"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery - Mobile Responsive */}
              <div className={`flex gap-2 sm:gap-4 justify-between overflow-x-auto pb-2 ${isMobile ? 'snap-x snap-mandatory' : ''}`}>
                {galleryImages.map((image, idx) => (
                  <div
                    key={image.id}
                    onClick={() => handleImageSwitch(idx)}
                    className={`relative cursor-pointer transition-all duration-300 group flex-1 touch-manipulation ${
                      selectedImageIndex === idx 
                        ? 'scale-[1.05]' 
                        : 'hover:scale-[1.02] active:scale-[1.03]'
                    } ${isMobile ? 'snap-center min-w-[120px]' : ''}`}
                  >
                    <div className={`w-full h-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 relative ${
                      selectedImageIndex === idx
                        ? 'border-red-500 shadow-lg shadow-red-500/20'
                        : 'border-red-500/30 hover:border-red-500/50'
                    }`}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                    <div className="mt-2 text-center">
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
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">Progress</span>
                  <span className="text-sm text-red-400">{activeStep + 1} / {features.length}</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
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
              <div className="space-y-6">
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
                    <div className={`absolute left-0 top-0 w-14 h-14 rounded-full border-2 flex items-center justify-center text-base font-bold transition-all duration-300 ${
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
                      <div className="absolute left-7 top-14 w-0.5 h-6 transition-all duration-300 bg-red-500/40">
                        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent transition-all duration-300 ${
                          activeStep >= idx ? 'border-t-red-500' : 'border-t-red-500/40'
                        }`} />
                        {/* Animated flow indicator */}
                        {activeStep >= idx && (
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                        )}
                      </div>
                    )}

                    {/* Enhanced Feature card */}
                    <div className={`ml-20 rounded-lg border p-5 transition-all duration-300 ${
                      activeStep === idx
                        ? 'bg-card-bg/95 border-red-500/60 shadow-lg shadow-red-500/10'
                        : 'bg-card-bg/95 border-red-500/20 hover:border-red-500/40'
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className={`relative w-12 h-12 shrink-0 rounded-md overflow-hidden border transition-all duration-300 flex items-center justify-center ${
                          activeStep === idx
                            ? 'border-red-500/50 bg-red-500/10 rotate-3 scale-[1.05]'
                            : 'border-red-500/30 bg-black/90 group-hover:rotate-3 group-hover:scale-[1.03]'
                        }`}>
                          <img src={f.thumb} alt={f.title} className="w-6 h-6 text-red-500" />
                          {/* Glow effect for active step */}
                          {activeStep === idx && (
                            <div className="absolute inset-0 rounded-md bg-red-500/20 animate-pulse" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                            activeStep === idx
                              ? 'text-red-400'
                              : 'text-white group-hover:text-red-400'
                          }`}>
                            {f.title}
                          </h3>
                          <p className="text-gray-100 leading-relaxed text-sm">{f.description}</p>
                          
                          {/* Additional info for active step */}
                          {activeStep === idx && (
                            <div className="mt-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                              <p className="text-xs text-red-300 font-medium">
                                💡 Click to explore this step in detail
                              </p>
                              {/* Special indicator for fight detection step */}
                              {idx === 1 && (
                                <div className="mt-2 flex items-center gap-2">
                                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                  <p className="text-xs text-red-400 font-medium">
                                    🎯 Hover anywhere on the image for instant AI lock-on detection
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA */}
            <div className="mt-10">
              <div className="bg-card-bg/95 border border-red-500/20 rounded-2xl p-6 text-center relative overflow-hidden group">
                {/* Background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-2">Ready to Experience NightShield?</h3>
                  <p className="text-gray-300 text-sm mb-4">See our AI detection system in action with a live demonstration</p>
                  
                  <button
                    onClick={() => {
                      const element = document.querySelector('#contact')
                      if (element) element.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="btn-primary px-8 py-4 text-lg font-semibold relative overflow-hidden group/btn touch-manipulation active:scale-95"
                  >
                    <span className="relative z-10">Schedule Live Demo</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
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

