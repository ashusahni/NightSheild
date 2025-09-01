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
      hotspot: { x: 72, y: 32 } as TargetPoint,
      thumb: '/images/icons/icon-services.svg',
    },
    {
      id: 2,
      title: 'AI Target Lock',
      description: 'Real-time object tracking identifies anomalies and locks onto suspicious motion patterns.',
      hotspot: { x: 28, y: 58 } as TargetPoint,
      thumb: '/images/icons/icon-consulting.svg',
    },
  
    {
      id: 4,
      title: 'Instant Alerts',
      description: 'Push notifications with snapshots and map pins reach security staff in under a second.',
      hotspot: { x: 82, y: 54 } as TargetPoint,
      thumb: '/images/icons/icon-bitcoin-circle.svg',
    },
    {
      id: 5,
      title: 'Evidence Vault',
      description: 'Tamper-proof recording archives incidents and audit trails for legal use.',
      hotspot: { x: 42, y: 38 } as TargetPoint,
      thumb: '/images/icons/icon-blockchain.svg',
    },
  ]), [])

  const containerRef = useRef<HTMLDivElement | null>(null)
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const [cursorFollowing, setCursorFollowing] = useState<boolean>(true)
  const [lockedIndex, setLockedIndex] = useState<number | null>(null)
  const [targetPoint, setTargetPoint] = useState<TargetPoint>({ x: 50, y: 50 })
  
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
      if (!cursorFollowing) return
      const rect = el.getBoundingClientRect()
      const relX = ((e.clientX - rect.left) / rect.width) * 100
      const relY = ((e.clientY - rect.top) / rect.height) * 100
      setTargetPoint({ x: Math.max(2, Math.min(98, relX)), y: Math.max(2, Math.min(98, relY)) })
    }

    const onEnter = () => setCursorFollowing(true)
    const onLeave = () => {
      if (lockedIndex !== null) {
        setCursorFollowing(false)
        setTargetPoint(features[lockedIndex].hotspot)
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
            Scroll to see the AI target-lock engage while features light up in real-time.
          </p>
        </div>

        <div ref={containerRef} className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Sticky Target-Lock Visual */}
          <div className="lg:col-span-3">
            <div
              ref={stickyRef}
              className="howitworks-cursor-target md:cursor-none aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-red-500/20 backdrop-blur-sm sticky top-24"
            >
             
              <Image
                src="/images/Gemini_Generated_Image_vrl1twvrl1twvrl1.png"
                alt="NightShield Target View"
                fill
                className="object-cover opacity-80"
                priority
              />
    
              {/* Dim vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

              {/* Radar pulse */}
              <div
                className="pointer-events-none absolute"
                style={{
                  left: `${targetPoint.x}%`,
                  top: `${targetPoint.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border border-red-500/50 animate-ping" />
                  <div className="w-16 h-16 rounded-full border border-red-500/60 absolute inset-0 m-auto" />
                  <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/80" />

                  {/* Crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-px h-16 bg-red-500" />
                    <div className="absolute w-16 h-px bg-red-500" />
                  </div>

                  {/* Corner brackets */}
                  <div className="absolute -top-3 -left-3 w-4 h-4 border-l-2 border-t-2 border-red-500" />
                  <div className="absolute -top-3 -right-3 w-4 h-4 border-r-2 border-t-2 border-red-500" />
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 border-l-2 border-b-2 border-red-500" />
                  <div className="absolute -bottom-3 -right-3 w-4 h-4 border-r-2 border-b-2 border-red-500" />
                </div>
              </div>

              {/* HUD overlay */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-black/70 backdrop-blur-sm px-4 flex items-center justify-between text-xs font-mono">
                <span className="text-red-500 font-bold">NS CAM 01</span>
                <span className="text-gray-300">TARGET LOCK {lockedIndex !== null ? `#${features[lockedIndex].id}` : 'IDLE'}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          {/* Feature List */}
          <div className="lg:col-span-2 space-y-4">
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
                  if (lockedIndex === null) setCursorFollowing(true)
                }}
                className={`group relative rounded-lg border p-4 transition-all duration-300 cursor-pointer bg-card-bg/70 backdrop-blur-sm will-change-transform ${
                  lockedIndex === idx
                    ? 'border-red-500/60 shadow-[0_0_0_2px_rgba(229,18,47,0.25)] translate-y-[-2px]'
                    : 'border-red-500/20 hover:border-red-500/40 hover:translate-y-[-2px]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative w-12 h-12 shrink-0 rounded-md overflow-hidden border border-red-500/30 bg-black/60 group-hover:rotate-3 group-hover:scale-[1.03] transition-transform duration-300">
                    <Image src={f.thumb} alt={f.title} fill className="object-contain p-2" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-red-500/20 rounded-md" />
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(60px 60px at 50% 50%, rgba(229,18,47,0.15), transparent 60%)' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-0.5 group-hover:text-red-400 transition-colors">{f.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{f.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="mt-10">
              <div className="bg-card-bg border border-red-500/20 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-3">See Target Lock Live</h3>
                <p className="text-gray-300 mb-5">Get a personalized walkthrough for your venue layout and risk profile.</p>
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-primary px-6 py-3"
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
