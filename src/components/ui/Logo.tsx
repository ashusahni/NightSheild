'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface LogoProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  fallbackText?: string
}

const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fallbackText = 'NS'
}) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  if (imageError) {
    // Fallback to text logo if image fails to load
    return (
      <div 
        className={`flex items-center justify-center bg-red-600 text-white font-bold rounded-full ${className}`}
        style={{ width, height }}
      >
        {fallbackText}
      </div>
    )
  }

  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        onError={handleImageError}
        onLoad={handleImageLoad}
        sizes="(max-width: 768px) 24px, (max-width: 1024px) 32px, 48px"
      />
      {!imageLoaded && !imageError && (
        <div 
          className={`absolute inset-0 bg-gray-800 animate-pulse rounded ${className}`}
          style={{ width, height }}
        />
      )}
    </div>
  )
}

export default Logo
