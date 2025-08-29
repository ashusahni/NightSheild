import { useState, useEffect } from 'react'

interface UseCounterProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  decimals?: number
}

export const useCounter = ({ 
  end, 
  start = 0, 
  duration = 2000, 
  delay = 0,
  decimals = 1 
}: UseCounterProps) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now()
      const difference = end - start

      const updateCounter = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const current = start + (difference * easeOutQuart)
        
        setCount(Number(current.toFixed(decimals)))

        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        }
      }

      updateCounter()
    }, delay)

    return () => clearTimeout(timer)
  }, [end, start, duration, delay, decimals])

  return count
}
