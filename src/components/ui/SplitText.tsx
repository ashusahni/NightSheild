'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'

interface SplitTextProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  staggerDelay?: number
  splitBy?: 'chars' | 'words'
  animationType?: 'slideUp' | 'fadeIn' | 'slideDown' | 'scale'
}

const SplitText: React.FC<SplitTextProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  staggerDelay = 0.05,
  splitBy = 'chars',
  animationType = 'slideUp'
}) => {
  const textRef = useRef<HTMLSpanElement>(null)

  const splitText = (text: string, type: 'chars' | 'words') => {
    if (type === 'words') {
      return text.split(' ').map((word, index) => ({
        content: word,
        index,
        isSpace: false
      }))
    } else {
      return text.split('').map((char, index) => ({
        content: char,
        index,
        isSpace: char === ' '
      }))
    }
  }

  const getAnimationVariants = (type: string) => {
    const variants = {
      slideUp: {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 }
      },
      slideDown: {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 }
      },
      fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 }
      },
      scale: {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 }
      }
    }
    return variants[type as keyof typeof variants] || variants.slideUp
  }

  const animationVariants = getAnimationVariants(animationType)
  const elements = splitText(children, splitBy)

  return (
    <span ref={textRef} className={`split-text-container ${className}`}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={animationVariants.initial}
          animate={animationVariants.animate}
          transition={{
            duration,
            delay: delay + (index * staggerDelay),
            ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth animation
          }}
          className={`inline-block ${element.isSpace ? 'w-[0.25em]' : ''}`}
          style={{ 
            overflow: 'visible',
            whiteSpace: splitBy === 'words' ? 'nowrap' : 'normal',
            transform: 'translateZ(0)' // Force hardware acceleration
          }}
        >
          {element.content === ' ' ? '\u00A0' : element.content}
          {splitBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  )
}

export default SplitText
