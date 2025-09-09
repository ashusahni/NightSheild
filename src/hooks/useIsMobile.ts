import { useState, useEffect } from 'react'

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const checkMobile = () => {
      const width = window.innerWidth
      // Use a more conservative mobile breakpoint
      setIsMobile(width < 768)
    }
    
    checkMobile()
    
    // Throttle resize events for better performance
    let timeoutId: NodeJS.Timeout
    const throttledCheckMobile = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkMobile, 100)
    }
    
    window.addEventListener('resize', throttledCheckMobile)
    
    return () => {
      window.removeEventListener('resize', throttledCheckMobile)
      clearTimeout(timeoutId)
    }
  }, [])

  return { isMobile, isClient }
}
