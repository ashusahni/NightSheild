'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'



const HowItWorks = () => {
  const { isMobile } = useIsMobile()

  const features = useMemo(() => ([
    {
      id: 1,
      title: 'Capture & Enhance',
      description: 'Multi-camera intake with noise reduction and night-vision enhancement for crystal clear frames.',
      thumb: '/images/icons/icon-services.svg',
    },
    {
      id: 2,
      title: 'Fight Detection',
      description: 'AI instantly identifies physical altercations and aggressive behavior patterns in real-time.',
      thumb: '/images/icons/icon-consulting.svg',
    },
    {
      id: 3,
      title: 'Instant Alerts',
      description: 'Push notifications with snapshots and map pins reach security staff in under a second.',
      thumb: '/images/icons/icon-bitcoin-circle.svg',
    },
    {
      id: 4,
      title: 'Evidence Vault',
      description: 'Tamper-proof recording archives incidents and audit trails for legal use.',
      thumb: '/images/icons/icon-blockchain.svg',
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

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  const [showTargetLock, setShowTargetLock] = useState<boolean>(false)
  const [isCursorLocked, setIsCursorLocked] = useState<boolean>(false)
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  // Simple scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowTargetLock(true)
          } else {
            setShowTargetLock(false)
            setIsCursorLocked(false) // Unlock cursor when leaving section
          }
        })
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // Cursor lock functionality
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isCursorLocked && stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setCursorPosition({ x, y })
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCursorLocked) {
        setIsCursorLocked(false)
      }
    }

    if (isCursorLocked) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.cursor = 'none'
    } else {
      document.body.style.cursor = 'default'
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.cursor = 'default'
    }
  }, [isCursorLocked])

  // Handle cursor lock on image click
  const handleImageClick = () => {
    if (showTargetLock) {
      setIsCursorLocked(!isCursorLocked)
    }
  }

  // Simple target lock component
  const TargetLockOverlay = () => {
    if (!showTargetLock) return null

    const currentImage = galleryImages[selectedImageIndex]
    const targets = currentImage.fightingTargets

    return (
      <div className="absolute inset-0 pointer-events-none">
        {/* Show target locks on fighting parts */}
        {targets.map((target, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
            style={{ 
              left: `${target.x}%`, 
              top: `${target.y}%`
            }}
          >
            {/* Simple target lock crosshair */}
            <div className="relative w-16 h-16">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-spin" 
                   style={{ animationDuration: '2s' }} />
              
              {/* Inner crosshair */}
              <div className="absolute inset-2 rounded-full border border-red-500">
                {/* Horizontal line */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-500 transform -translate-y-1/2" />
                {/* Vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-500 transform -translate-x-1/2" />
                
                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
              </div>
            </div>
          </div>
        ))}

        {/* Custom cursor crosshair when locked */}
        {isCursorLocked && (
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
            style={{ 
              left: `${cursorPosition.x}%`, 
              top: `${cursorPosition.y}%`
            }}
          >
            <div className="relative w-8 h-8">
              {/* Crosshair lines */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-500 transform -translate-y-1/2 shadow-lg shadow-red-500/50" />
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-500 transform -translate-x-1/2 shadow-lg shadow-red-500/50" />
              
              {/* Center dot */}
              <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-red-500/50" />
              
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-red-500/60 animate-pulse" />
            </div>
          </div>
        )}
      </div>
    )
  }

  // Simple image switch handler
  const handleImageSwitch = (idx: number) => {
    setSelectedImageIndex(idx)
  }

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-card-bg to-black" />
      <div className="absolute inset-0 grid-texture opacity-10" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-4 mb-5">
            <Image src="/images/logo/LOGO TRANSPARENT.png" alt="NightShield Logo" width={56} height={56} className="w-12 h-12" />
            <h2 className="text-4xl md:text-5xl font-bold">How <span className="text-red-500">NightShield</span> Works</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Experience NightShield's advanced AI detection system in action. Explore our comprehensive security workflow below.
          </p>
        </div>

        <div ref={containerRef} className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Sticky Security Visual */}
          <div className="lg:col-span-7">
            <div
              ref={stickyRef}
              className="aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-red-500/20 sticky top-24 cursor-pointer"
              onClick={handleImageClick}
            >
             
              <Image
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].alt}
                fill
                className="object-cover"
                priority
              />
    
              {/* Target Lock Overlay */}
              <TargetLockOverlay />
    
              {/* Dim vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
              
              {/* Status indicator */}
              {showTargetLock && (
                <div className="absolute bottom-4 left-4 bg-black/80 text-white text-sm px-3 py-2 rounded-lg border border-red-500/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span>{isCursorLocked ? 'Cursor Locked - Press ESC to unlock' : 'Click to lock cursor'}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="mt-4">
              <div className="flex gap-4 justify-between">
                {galleryImages.map((image, idx) => (
                  <div
                    key={image.id}
                    onClick={() => handleImageSwitch(idx)}
                    className={`relative cursor-pointer transition-all duration-300 group flex-1 ${
                      selectedImageIndex === idx 
                        ? 'scale-[1.02]' 
                        : 'hover:scale-[1.02]'
                    }`}
                  >
                    <div className={`w-full h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImageIndex === idx
                        ? 'border-red-500'
                        : 'border-red-500/30 hover:border-red-500/50'
                    }`}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay */}
                      <div className={`absolute inset-0 transition-all duration-300 ${
                        selectedImageIndex === idx
                          ? 'bg-red-500/20'
                          : 'bg-black/40 group-hover:bg-black/20'
                      }`} />
                    </div>
                    {/* Image title */}
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

          {/* Feature List */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/60 via-red-500/40 to-red-500/20" />
              
              {/* Workflow steps */}
              <div className="space-y-6">
                {features.map((f, idx) => (
                  <div
                    key={f.id}
                    ref={(el) => { cardRefs.current[idx] = el }}
                    data-index={idx}
                    className="group relative transition-all duration-300 cursor-pointer hover:scale-[1.01]"
                  >
                    {/* Step number circle */}
                    <div className="absolute left-0 top-0 w-14 h-14 rounded-full border-2 flex items-center justify-center text-base font-bold transition-all duration-300 border-red-500/40 bg-black/80 text-red-500/80 group-hover:border-red-500/60 group-hover:text-red-400">
                      {idx + 1}
                    </div>

                    {/* Connecting arrow (except for last item) */}
                    {idx < features.length - 1 && (
                      <div className="absolute left-7 top-14 w-0.5 h-6 transition-all duration-300 bg-red-500/40">
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent transition-all duration-300 border-t-red-500/40" />
                      </div>
                    )}

                    {/* Feature card */}
                    <div className="ml-20 rounded-lg border p-5 transition-all duration-300 bg-card-bg/95 border-red-500/20 hover:border-red-500/40" style={{ textRendering: 'optimizeLegibility' }}>
                      <div className="flex items-start gap-4">
                        <div className="relative w-12 h-12 shrink-0 rounded-md overflow-hidden border border-red-500/30 bg-black/90 group-hover:rotate-3 group-hover:scale-[1.03] transition-transform duration-300">
                          <Image src={f.thumb} alt={f.title} fill className="object-contain p-2" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-red-400 transition-colors" style={{ textRendering: 'optimizeLegibility' }}>{f.title}</h3>
                          <p className="text-gray-100 leading-relaxed text-sm" style={{ textRendering: 'optimizeLegibility' }}>{f.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <div className="bg-card-bg/95 border border-red-500/20 rounded-2xl p-6 text-center">
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-primary px-8 py-4 text-lg font-semibold"
                >
                  Schedule Live Demo
                </button>
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

