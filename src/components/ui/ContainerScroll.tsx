"use client";
import { cn } from "@/lib/utils";

import { useRef, useState, useEffect, useCallback } from "react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Optimized resize handler with debouncing
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkMobile, 100);
    };

    checkMobile();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [checkMobile]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center sticky top-0"
      style={{
        // Performance optimizations
        willChange: 'transform',
        transform: 'translateZ(0)', // Force hardware acceleration
        backfaceVisibility: 'hidden',
      }}
    >
      <div
        className={cn(
          "w-full container mx-auto px-4 relative",
          isMobile ? "h-[60vh]" : "h-[80vh]"
        )}
      >
        <div
          className="div relative mx-auto w-full h-full max-w-6xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-slate-700/50">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/10 rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/50 to-black rounded-2xl" />
          </div>
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            {children}
          </div>
        </div>
        <div
          className="absolute top-4 left-4 md:top-8 md:left-8"
        >
          {titleComponent}
        </div>
      </div>
    </div>
  );
};

export const ScrollCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm",
        className
      )}
      style={{
        // Performance optimizations
        willChange: 'auto',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}
    >
      {children}
    </div>
  );
};
