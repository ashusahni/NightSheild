import { useEffect, useRef, useState, useCallback } from 'react';

// Hook to detect if element is in viewport for performance optimization
export const useInViewport = (options: IntersectionObserverInit = {}) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInViewport };
};

// Hook to throttle expensive operations
export const useThrottle = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
) => {
  const lastRun = useRef(Date.now());

  return useCallback((...args: Parameters<T>) => {
    if (Date.now() - lastRun.current >= delay) {
      callback(...args);
      lastRun.current = Date.now();
    }
  }, [callback, delay]);
};

// Hook to debounce expensive operations
export const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback((...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => callback(...args), delay);
  }, [callback, delay]);
};

// Hook to detect reduced motion preference
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Hook to detect device performance capabilities
export const useDevicePerformance = () => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  useEffect(() => {
    // Check for common low-performance indicators
    const checkPerformance = () => {
      const memory = (performance as any).memory;
      const hardwareConcurrency = navigator.hardwareConcurrency || 1;
      const deviceMemory = (navigator as any).deviceMemory || 4;
      
      // Consider device low performance if:
      // - Less than 4 CPU cores
      // - Less than 4GB RAM
      // - Or if memory is limited
      const lowCPU = hardwareConcurrency < 4;
      const lowRAM = deviceMemory < 4;
      const lowMemory = memory && memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8;
      
      setIsLowPerformance(lowCPU || lowRAM || lowMemory);
    };

    checkPerformance();
    
    // Check again after a delay to account for page load
    const timer = setTimeout(checkPerformance, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return isLowPerformance;
};

// Utility to optimize CSS animations based on device performance
export const getOptimizedAnimationDuration = (baseDuration: number, isLowPerformance: boolean) => {
  if (isLowPerformance) {
    return baseDuration * 1.5; // Slower animations for low-performance devices
  }
  return baseDuration;
};

// Utility to conditionally apply performance-heavy effects
export const shouldApplyHeavyEffects = (isLowPerformance: boolean, prefersReducedMotion: boolean) => {
  return !isLowPerformance && !prefersReducedMotion;
};

// Utility to optimize image loading
export const optimizeImageProps = (isLowPerformance: boolean) => ({
  loading: isLowPerformance ? 'lazy' : 'eager' as const,
  decoding: 'async' as const,
  fetchPriority: isLowPerformance ? 'low' : 'auto' as const,
});

// Utility to optimize scroll performance
export const optimizeScrollContainer = (element: HTMLElement) => {
  // Force hardware acceleration
  element.style.transform = 'translateZ(0)';
  element.style.willChange = 'auto';
  element.style.backfaceVisibility = 'hidden';
  
  // Optimize for scrolling
  element.style.overflowScrolling = 'touch';
  element.style.webkitOverflowScrolling = 'touch';
};

// Utility to batch DOM updates for better performance
export const batchDOMUpdates = (updates: (() => void)[]) => {
  if (typeof window !== 'undefined' && window.requestAnimationFrame) {
    requestAnimationFrame(() => {
      updates.forEach(update => update());
    });
  } else {
    updates.forEach(update => update());
  }
};

// Performance monitoring utility
export const measurePerformance = (name: string, fn: () => void) => {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start}ms`);
  } else {
    fn();
  }
};

// Hook to monitor component render performance
export const useRenderPerformance = (componentName: string) => {
  const renderCount = useRef(0);
  const lastRenderTime = useRef(performance.now());

  useEffect(() => {
    renderCount.current++;
    const currentTime = performance.now();
    const timeSinceLastRender = currentTime - lastRenderTime.current;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} rendered ${renderCount.current} times, ${timeSinceLastRender.toFixed(2)}ms since last render`);
    }
    
    lastRenderTime.current = currentTime;
  });

  return { renderCount: renderCount.current };
};
