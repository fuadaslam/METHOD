'use client'

import { useEffect, ReactNode } from 'react'
import Lenis from '@studio-freight/lenis'

interface SmoothScrollProps {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic ease-out for smoother feel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      infinite: false,
      lerp: 0.1, // Lower lerp for smoother interpolation
    })

    // Use requestAnimationFrame for smooth updates
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Sync with Framer Motion
    lenis.on('scroll', () => {
      // Allow Framer Motion to work with Lenis
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return <div className="smooth-scroll-wrapper">{children}</div>
}

