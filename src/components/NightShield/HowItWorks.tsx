'use client'

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin' 

gsap.registerPlugin(ScrollToPlugin);

const HowItWorks = () => {
    const { isMobile } = useIsMobile()

    // --- Data Definitions (Unchanged) ---
    const features = useMemo(() => ([
        {
            id: 1,
            title: 'Capture & Enhance',
            description: 'Multi-camera intake with noise reduction and image enhancement for crystal clear frames.',
            thumb: '/images/icons/icon-camera-lens.svg',
            color: 'blue'
        },
        {
            id: 2,
            title: 'Fight Detection',
            description: 'AI instantly identifies physical altercations and aggressive behavior patterns in real-time.',
            thumb: '/images/icons/icon-shield-detection.svg',
            color: 'red'
        },
        {
            id: 3,
            title: 'Instant Alerts',
            description: 'Push notifications with snapshots and map pins reach security staff in under a second.',
            thumb: '/images/icons/icon-alert-bell.svg',
            color: 'yellow'
        },
        {
            id: 4,
            title: 'Evidence Vault',
            description: 'Tamper-proof recording archives incidents and audit trails for legal use.',
            thumb: '/images/icons/icon-vault-secure.svg',
            color: 'green'
        },
    ]), [])

    const galleryImages = useMemo(() => [
        { id: 1, src: '/images/Gemini_Generated_Image_qu6y1oqu6y1oqu6y.png', alt: 'NightShield Target View', title: 'Main Security View' },
        { id: 2, src: '/images/Gemini_Generated_Image_x4rg8gx4rg8gx4rg.png', alt: 'NightShield Linear View', title: 'Linear Detection' },
        { id: 3, src: '/images/ezgif-46cf96e654a1ca.jpg', alt: 'NightShield Cover', title: 'System Overview' }
    ], [])

    // --- State and Refs ---
    const containerRef = useRef<HTMLDivElement | null>(null)
    const visualRef = useRef<HTMLDivElement | null>(null) 
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])
    
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
    const [activeStep, setActiveStep] = useState<number>(0)
    const [isCursorActive, setIsCursorActive] = useState<boolean>(false)
    const [detectionStatus, setDetectionStatus] = useState<string>('')
    const [showDemoGuide, setShowDemoGuide] = useState<boolean>(false)
    const [demoStep, setDemoStep] = useState<number>(0)

    // Helper to get color class for Tailwind dynamic classes
    const getColorClass = (stepIndex: number) => {
        const colors = ['blue', 'red', 'yellow', 'green'];
        return colors[stepIndex % colors.length];
    }
    
    // --- Interaction Handlers (Finalized) ---
    
    const handleDetectionSequence = useCallback((stepIndex: number) => {
        setIsCursorActive(true)
        setDetectionStatus('') // Clear previous status
        
        let messages: string[] = [];
        if (stepIndex === 0) { // Capture & Enhance
            messages = ['📹 Processing...', '🔧 Noise Reduction', '✨ Enhancement Complete', '🎯 Crystal Clear'];
        } else if (stepIndex === 1) { // Fight Detection - Static Image, Focused Detection
            messages = ['👁️ AI Analyzing...', '🚨 Threat Detected!', '🔴 Lock-on Confirmed!', '⚡ Alert System Primed'];
            setSelectedImageIndex(0); // Ensure we start on the main view for focused detection
        } else if (stepIndex === 2) { // Instant Alerts
            messages = ['🔔 Alert System Activated', '📊 Analyzing Threat Level', '📱 Notification Sent', '📍 GPS Location Marked'];
        } else if (stepIndex === 3) { // Evidence Vault
            messages = ['🔒 Vault Accessing...', '🔐 Encryption Keys Verified', '🛡️ Tamper-Proof Applied', '⚖️ Evidence Ready'];
        }
        
        let delay = 0;
        messages.forEach((msg: string, i: number) => {
            setTimeout(() => {
                setDetectionStatus(msg);
                
                // Only cycle images for non-Fight Detection steps
                if (stepIndex !== 1) {
                    setSelectedImageIndex(i % galleryImages.length);
                }
            }, delay);
            delay += isMobile ? 400 : 600; 
        });

        setTimeout(() => {
            setIsCursorActive(false);
            setDetectionStatus('');
            // Ensure the image returns to the first one after the sequence ends, UNLESS it was Fight Detection
            if (stepIndex !== 1) {
                setSelectedImageIndex(0);
            }
        }, delay + (isMobile ? 500 : 800));
        
    }, [isMobile, galleryImages.length])


    const handleStepClick = useCallback((stepIndex: number) => {
        setActiveStep(stepIndex);
        
        // 1. SCROLL TO VISUAL ON MOBILE
        if (isMobile && visualRef.current) {
            gsap.to(window, { 
                duration: 0.5, 
                scrollTo: { 
                    y: visualRef.current, 
                    offsetY: 20 
                }, 
                ease: "power2.out" 
            });
        }
        
        // 2. TRIGGER ANIMATION SEQUENCE
        handleDetectionSequence(stepIndex);

    }, [isMobile, handleDetectionSequence])

    // --- Mobile-Specific Logic ---
    useEffect(() => {
        if (isMobile) {
            // Initiate the first step sequence on mount for a dynamic start
            handleDetectionSequence(0); 
        }
        return () => {
             setIsCursorActive(false);
             setDetectionStatus('');
        }
    }, [isMobile, handleDetectionSequence])

    // Handle mobile "Tap to explore" button within the image
    const handleVisualTap = useCallback(() => {
        if (isMobile && !isCursorActive) {
            // Cycle to the next step when tapping the image
            const nextStep = (activeStep + 1) % features.length;
            handleStepClick(nextStep);
        } else if (isMobile && isCursorActive) {
            // If an animation is active, maybe stop it or do nothing
            resetDemo();
        }
    }, [isMobile, activeStep, features.length, handleStepClick])


    const resetDemo = useCallback(() => {
        setShowDemoGuide(false)
        setDemoStep(0)
        setIsCursorActive(false)
        setDetectionStatus('')
        setSelectedImageIndex(0)
    }, [])
    
    // --- Render Logic ---
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
                @keyframes mobileTapPulse {
                    0% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.05); opacity: 1; }
                    100% { transform: scale(1); opacity: 0.8; }
                }
                .mobile-tap-pulse {
                    animation: mobileTapPulse 1.5s infinite;
                }
                /* Hide scrollbar for gallery */
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
                @keyframes scannerPulse {
                    0% { box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7); }
                    70% { box-shadow: 0 0 0 10px rgba(255, 0, 0, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }
                }
                .scanner-pulse {
                    animation: scannerPulse 1.5s infinite;
                }
                @keyframes scanLine {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                .scan-line {
                    animation: scanLine 1.5s linear infinite;
                }
            `}</style>
            
            <div className="container relative z-10">
                <div className={`text-center ${isMobile ? 'mb-6 px-4' : 'mb-8 sm:mb-12 md:mb-16 px-4'}`}>
                    <div className={`flex justify-center items-center ${isMobile ? 'space-x-2 mb-2' : 'space-x-2 sm:space-x-4 mb-3 sm:mb-5'}`}>
                        <Image src="/images/logo/LOGO TRANSPARENT.png" alt="NightShield Logo" width={56} height={56} className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'}`} />
                        <h2 className={`${isMobile ? 'text-xl' : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'} font-bold`}>How <span className="text-red-500">NightShield</span> Works</h2>
                    </div>
                    <p className={`${isMobile ? 'text-sm' : 'text-sm sm:text-base md:text-lg lg:text-xl'} text-gray-300 max-w-3xl mx-auto`}>
                        Experience NightShield's advanced AI detection system in action.
                    </p>
                </div>

                <div ref={containerRef} className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'lg:grid-cols-12 gap-4 sm:gap-6'} items-start`}>
                    
                    {/* ---------------------------------------------------------------------
                        1. VISUALIZER SECTION
                        ---------------------------------------------------------------------
                    */}
                    <div className={`${isMobile ? 'order-1' : 'lg:col-span-7 order-2 lg:order-1'}`}>
                        <div
                            ref={visualRef}
                            className={`${isMobile ? 'aspect-[4/3] rounded-lg' : 'aspect-[16/10] lg:aspect-[4/3] rounded-xl sm:rounded-2xl lg:sticky lg:top-24'} 
                                overflow-hidden bg-black/60 border border-red-500/20 backdrop-blur-sm group transition-all duration-300 relative`}
                        >
                            {/* Main Image */}
                            <Image
                                key={selectedImageIndex}
                                src={galleryImages[selectedImageIndex].src}
                                alt={galleryImages[selectedImageIndex].alt}
                                fill
                                className="object-cover opacity-90 transition-opacity duration-300"
                                priority={!isMobile}
                                sizes={isMobile ? "100vw" : "50vw"}
                                quality={isMobile ? 75 : 90}
                            />
                            
                            {/* Interactive/Animation Overlay (Finalized Focused Detection) */}
                            <div
                                className={`absolute inset-0 pointer-events-auto touch-manipulation ${isMobile ? 'cursor-default' : 'cursor-pointer'}`}
                                onClick={handleVisualTap} 
                            >
                                {/* Active Step Animation Area */}
                                {isCursorActive && activeStep === 1 && (
                                    <div className={`absolute w-1/2 h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 pointer-events-none`}>
                                        
                                        {/* Focused Detection Box with Pulse */}
                                        <div className={`absolute inset-0 border-4 border-red-500/80 rounded-lg bg-red-500/10 scanner-pulse`}>
                                            
                                            {/* Scanning Line (Desktop style) */}
                                            <div className="absolute top-0 left-0 w-full h-1 bg-red-400/80 scan-line rounded-full" />
                                            
                                            {/* Status Message */}
                                            <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 
                                                px-3 py-1 rounded-full font-semibold text-xs animate-fadeIn 
                                                bg-red-500 text-white whitespace-nowrap`}>
                                                {detectionStatus}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* General Animation for other steps (non-focused) */}
                                {isCursorActive && activeStep !== 1 && (
                                    <div className={`absolute inset-0 transition-all duration-300 pointer-events-none ${
                                        activeStep === 0 ? 'border-4 border-blue-500/50 bg-blue-500/10 animate-pulse' :
                                        activeStep === 2 ? 'border-4 border-yellow-500/50 bg-yellow-500/10 animate-pulse' :
                                        activeStep === 3 ? 'border-4 border-green-500/50 bg-green-500/10 animate-pulse' : ''
                                    }`}>
                                        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                            px-4 py-2 rounded-full font-semibold text-sm animate-fadeIn mobile-tap-pulse 
                                            ${activeStep === 0 ? 'bg-blue-500 text-white' : activeStep === 2 ? 'bg-yellow-500 text-black' : 'bg-green-500 text-white'}`}>
                                            {detectionStatus}
                                        </div>
                                    </div>
                                )}
                                
                                {/* Mobile Tap to Advance Hint */}
                                {!isCursorActive && isMobile && (
                                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                                        <button
                                            onClick={handleVisualTap}
                                            className="bg-black/60 backdrop-blur-sm border border-red-500/30 text-white font-medium px-4 py-2 rounded-full text-xs mobile-tap-pulse"
                                        >
                                            Tap to Cycle Next Step ({activeStep + 1}/{features.length})
                                        </button>
                                    </div>
                                )}

                            </div>
                            
                            {/* Reset Button (Always available when active) */}
                            {(isCursorActive || showDemoGuide) && (
                                <div className="absolute top-4 right-4 z-20">
                                    <button
                                        onClick={resetDemo}
                                        className="bg-gray-600/80 hover:bg-gray-600 text-white px-4 py-2 rounded-full font-medium text-xs shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                                    >
                                        🔄 Reset Demo
                                    </button>
                                </div>
                            )}

                        </div>

                        {/* Thumbnail Gallery (Centered and Mobile Friendly) */}
                        <div className={`${isMobile ? 'mt-4 px-4' : 'mt-4 sm:mt-6'}`}>
                            <div className={`flex gap-2 justify-center overflow-x-auto pb-2 scrollbar-hide`}>
                                {galleryImages.map((image, idx) => (
                                    <div
                                        key={image.id}
                                        onClick={() => setSelectedImageIndex(idx)}
                                        className={`relative cursor-pointer transition-all duration-300 shrink-0 ${isMobile ? 'w-1/4 max-w-[90px]' : 'w-24'}`} 
                                    >
                                        <div className={`w-full h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 relative ${
                                            selectedImageIndex === idx
                                                ? 'border-red-500 shadow-lg shadow-red-500/20'
                                                : 'border-red-500/30 hover:border-red-500/50'
                                        }`}>
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover transition-transform duration-300"
                                                sizes={isMobile ? "25vw" : "12vw"}
                                                quality={60}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="mt-1 text-center">
                                            <p className={`text-xs font-medium ${selectedImageIndex === idx ? 'text-red-400' : 'text-gray-400'}`}>
                                                {image.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* ---------------------------------------------------------------------
                        2. FEATURE LIST SECTION
                        ---------------------------------------------------------------------
                    */}
                    <div className={`${isMobile ? 'order-2 px-4' : 'lg:col-span-5 order-1 lg:order-2'}`}>
                        <div className="relative">
                            
                            {!isMobile && (
                                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/60 via-red-500/40 to-red-500/20 origin-top" />
                            )}
                            
                            <div className={`space-y-4`}>
                                {features.map((f, idx) => (
                                    <div
                                        key={f.id}
                                        ref={(el) => { cardRefs.current[idx] = el }}
                                        onClick={() => handleStepClick(idx)}
                                        className={`relative transition-all duration-300 cursor-pointer will-change-transform touch-manipulation 
                                            ${activeStep === idx ? 'scale-[1.02] border-red-500/60 shadow-lg shadow-red-500/10' : 'hover:scale-[1.01] border-red-500/20 hover:border-red-500/40'}
                                            ${isMobile ? 'p-3' : 'p-4 md:p-5'} rounded-lg border bg-card-bg/95`}
                                    >
                                        {/* Step number and Icon - unified styling */}
                                        <div className="flex items-start gap-3">
                                            <div className={`w-8 h-8 shrink-0 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 
                                                ${activeStep === idx ? `border-${f.color}-500 bg-${f.color}-500/20 text-${f.color}-400` : 'border-red-500/40 bg-black/80 text-red-500/80'}`}
                                            >
                                                {idx + 1}
                                            </div>
                                            
                                            <div className="flex-1">
                                                <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold ${activeStep === idx ? 'text-red-400' : 'text-white'}`}>
                                                    {f.title}
                                                </h3>
                                                <p className={`text-gray-300 leading-relaxed ${isMobile ? 'text-xs mt-1' : 'text-sm mt-1'}`}>{f.description}</p>
                                            </div>
                                        </div>
                                        
                                        {/* Mobile Active Indicator */}
                                        {activeStep === idx && isMobile && (
                                            <div className={`absolute top-0 right-0 h-full w-1 rounded-r-lg ${
                                                activeStep === 0 ? 'bg-blue-500' :
                                                activeStep === 1 ? 'bg-red-500' :
                                                activeStep === 2 ? 'bg-yellow-500' :
                                                'bg-green-500'
                                            } animate-pulse`} />
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* REMOVED: Mobile Call to Action - as requested */}

                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default HowItWorks