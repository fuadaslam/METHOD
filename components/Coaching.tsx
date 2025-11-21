'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function Coaching() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.section
      id="coaching"
      ref={sectionRef}
      style={{ opacity }}
      className="relative min-h-screen bg-primary-black text-primary-white py-32 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative h-[600px] lg:h-[800px] order-2 lg:order-1"
            style={{ willChange: 'transform, opacity' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              style={{
                willChange: 'filter',
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-black/20 to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="text-sm font-mono text-primary-white/60 mb-4">
              M-PATROL
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-black tracking-ultra-wide mb-8">
              COACHING
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-primary-white/80">
              One-on-one attention. Personalized programming. Real-time
              adjustments. Our coaches are not just trainers—they're movement
              scientists, performance analysts, and your dedicated partners in
              transformation.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-primary-white/80">
              Every session is a masterclass. Every rep is analyzed. Every
              detail matters. This is coaching elevated to an art form.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-accent-lime text-primary-black font-heading font-black tracking-ultra-wide text-xs uppercase hover:bg-accent-lime-dark transition-all duration-500 ease-out"
            >
              MEET THE TEAM
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

