'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'
import TargetCursor from './TargetCursor';


type TargetPoint = { x: number; y: number }

const HowItWorks = () => {
  const { isMobile } = useIsMobile()

  const features = useMemo(() => ([
    {
      id: 1,
      title: 'Capture & Enhance',
      description: 'Multi-camera intake with noise reduction and night-vision enhancement for crystal clear frames.',
      hotspot: { x: 75, y: 25 } as TargetPoint,
      thumb: '/images/icons/icon-services.svg',
    },
    {
      id: 2,
      title: 'Fight Detection',
      description: 'AI instantly identifies physical altercations and aggressive behavior patterns in real-time.',
      hotspot: { x: 45, y: 55 } as TargetPoint, // Center of the fight scene
      thumb: '/images/icons/icon-consulting.svg',
    },
    {
      id: 3,
      title: 'AI Target Lock',
      description: 'Precision targeting system locks onto multiple subjects involved in incidents simultaneously.',
      hotspot: { x: 35, y: 50 } as TargetPoint, // Left figure in the fight
      thumb: '/images/icons/icon-star.svg',
    },
    {
      id: 4,
      title: 'Instant Alerts',
      description: 'Push notifications with snapshots and map pins reach security staff in under a second.',
      hotspot: { x: 85, y: 30 } as TargetPoint,
      thumb: '/images/icons/icon-bitcoin-circle.svg',
    },
    {
      id: 5,
      title: 'Evidence Vault',
      description: 'Tamper-proof recording archives incidents and audit trails for legal use.',
      hotspot: { x: 60, y: 65 } as TargetPoint,
      thumb: '/images/icons/icon-blockchain.svg',
    },
  ]), [])

  // Add image gallery data
  const galleryImages = useMemo(() => [
    {
      id: 1,
      src: '/images/ezgif-46cf96e654a1ca.jpg',
    
      alt: 'NightShield Target View',
      title: 'Main Security View'
    },
    {
      id: 2,
      src: '/images/ezgif-46cf96e654a1ca.jpg',
      alt: 'NightShield Linear View',
      title: 'Linear Detection'
    },
    {
      id: 3,
      src: '/images/ezgif-46cf96e654a1ca.jpg',
      alt: 'NightShield Cover',
      title: 'System Overview'
    }
  ], [])

  const containerRef = useRef<HTMLDivElement | null>(null)
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const [cursorFollowing, setCursorFollowing] = useState<boolean>(true)
  const [lockedIndex, setLockedIndex] = useState<number | null>(null)
  const [targetPoint, setTargetPoint] = useState<TargetPoint>({ x: 45, y: 55 })
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  
  // Disable auto-selection of feature cards on scroll
  const enableAutoSelectOnScroll = false

  // Update target lock from scroll position using IntersectionObserver
  useEffect(() => {
    if (!enableAutoSelectOnScroll) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio - a.intersectionRatio))
        if (visible[0]) {
          const idx = Number(visible[0].target.getAttribute('data-index'))
          if (!Number.isNaN(idx)) {
            setLockedIndex(idx)
            setTargetPoint(features[idx].hotspot)
            setCursorFollowing(false)
          }
        }
      },
      { root: null, threshold: [0.3, 0.5, 0.7] }
    )

    cardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [features, enableAutoSelectOnScroll])

  // Mouse tracking within the big image container
  useEffect(() => {
    const el = stickyRef.current
    if (!el || isMobile) return

    const onMove = (e: MouseEvent) => {
      // Only update target point if cursor following is enabled AND no feature is locked
      if (!cursorFollowing || lockedIndex !== null) return
      const rect = el.getBoundingClientRect()
      const relX = ((e.clientX - rect.left) / rect.width) * 100
      const relY = ((e.clientY - rect.top) / rect.height) * 100
      setTargetPoint({ x: Math.max(2, Math.min(98, relX)), y: Math.max(2, Math.min(98, relY)) })
    }

    const onEnter = () => {
      // Only enable cursor following if no feature is currently locked
      if (lockedIndex === null) {
        setCursorFollowing(true)
      }
    }
    
    const onLeave = () => {
      // When leaving the image, if we have a locked feature, keep it locked
      // If no feature is locked, reset to center
      if (lockedIndex !== null) {
        setCursorFollowing(false)
        setTargetPoint(features[lockedIndex].hotspot)
      } else {
        setCursorFollowing(false)
        setTargetPoint({ x: 45, y: 55 }) // Return to fight center
      }
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [cursorFollowing, lockedIndex, isMobile, features])

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
            Watch the AI target-lock automatically detect and focus on conflict zones. Hover over features to see precision targeting in action.
          </p>
        </div>

        <div ref={containerRef} className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Sticky Target-Lock Visual */}
          <div className="lg:col-span-7">
            <div
              ref={stickyRef}
              className="howitworks-cursor-target md:cursor-none aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-red-500/20 backdrop-blur-sm sticky top-24"
            >
             
              <Image
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].alt}
                fill
                className="object-cover opacity-90"
                priority
              />
    
              {/* Target Lock Overlay */}
              <div 
                className="absolute w-16 h-16 border-2 border-red-500 bg-red-500/10 transition-all duration-500 ease-out pointer-events-none"
                style={{
                  left: `${targetPoint.x}%`,
                  top: `${targetPoint.y}%`,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 20px rgba(239, 68, 68, 0.6), inset 0 0 10px rgba(239, 68, 68, 0.2)'
                }}
              >
                {/* Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-0.5 bg-red-500 opacity-80"></div>
                  <div className="absolute w-0.5 h-full bg-red-500 opacity-80"></div>
                </div>
                
                {/* Corner brackets */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-red-400"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-red-400"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-red-400"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-red-400"></div>
                
                {/* Pulsing center dot */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
              </div>
    
              {/* Dim vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
            </div>

            {/* Thumbnail Gallery */}
            <div className="mt-4">
              <div className="flex gap-4 justify-between">
                {galleryImages.map((image, idx) => (
                  <div
                    key={image.id}
                    onClick={() => setSelectedImageIndex(idx)}
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
                    onMouseEnter={() => {
                      setLockedIndex(idx)
                      setTargetPoint(f.hotspot)
                      setCursorFollowing(false)
                    }}
                    onMouseLeave={() => {
                      if (lockedIndex === null) {
                        setCursorFollowing(true)
                      }
                    }}
                    className={`group relative transition-all duration-300 cursor-pointer will-change-transform ${
                      lockedIndex === idx
                        ? 'scale-[1.02]'
                        : 'hover:scale-[1.01]'
                    }`}
                  >
                    {/* Step number circle */}
                    <div className={`absolute left-0 top-0 w-14 h-14 rounded-full border-2 flex items-center justify-center text-base font-bold transition-all duration-300 ${
                      lockedIndex === idx
                        ? 'border-red-500 bg-red-500/20 text-red-400'
                        : 'border-red-500/40 bg-black/80 text-red-500/80 group-hover:border-red-500/60 group-hover:text-red-400'
                    }`}>
                      {idx + 1}
                    </div>

                    {/* Connecting arrow (except for last item) */}
                    {idx < features.length - 1 && (
                      <div className={`absolute left-7 top-14 w-0.5 h-6 transition-all duration-300 ${
                        lockedIndex === idx ? 'bg-red-400' : 'bg-red-500/40'
                      }`}>
                        <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent transition-all duration-300 ${
                          lockedIndex === idx ? 'border-t-red-400' : 'border-t-red-500/40'
                        }`} />
                      </div>
                    )}

                    {/* Feature card */}
                    <div className={`ml-20 rounded-lg border p-5 transition-all duration-300 bg-card-bg/95 ${
                      lockedIndex === idx
                        ? 'border-red-500/60'
                        : 'border-red-500/20 hover:border-red-500/40'
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className="relative w-12 h-12 shrink-0 rounded-md overflow-hidden border border-red-500/30 bg-black/90 group-hover:rotate-3 group-hover:scale-[1.03] transition-transform duration-300">
                          <Image src={f.thumb} alt={f.title} fill className="object-contain p-2" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-red-400 transition-colors">{f.title}</h3>
                          <p className="text-gray-100 leading-relaxed text-sm">{f.description}</p>
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

        {/* Mount scoped target cursor; only active over .howitworks-cursor-target (desktop only) */}
        {!isMobile && (
          <TargetCursor targetSelector=".howitworks-cursor-target" hideDefaultCursor={false} />
        )}

        {/* Secondary gallery removed to match requested compact layout */}
      </div>
    </section>
  )
}

export default HowItWorks

