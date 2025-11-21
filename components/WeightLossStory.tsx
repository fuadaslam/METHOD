'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function WeightLossStory() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50])

  return (
    <motion.section
      id="weight-loss-story"
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative min-h-screen bg-primary-white text-primary-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ willChange: 'transform, opacity' }}
            className="overflow-hidden"
          >
            <div className="text-xs sm:text-sm font-mono text-primary-black/60 mb-3 sm:mb-4">
              SUCCESS STORY
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-ultra-wide mb-6 sm:mb-8 break-words">
              TRANSFORMATION
            </h2>
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg leading-relaxed text-primary-black/80">
                "I had tried everything—countless diets, gym memberships, and
                quick fixes. Nothing worked until I found METHOD. The
                personalized approach and scientific methodology changed
                everything."
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-primary-black/80">
                In just 6 months, I lost 45 pounds and gained a completely new
                relationship with my body. But more importantly, I gained
                confidence, strength, and a sustainable lifestyle that I can
                maintain forever.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-primary-black/80">
                The coaches didn't just train me—they educated me. Every session
                was a lesson in understanding my body, my movement, and my
                potential. This isn't just weight loss. This is transformation."
              </p>
            </div>
            <div className="border-l-4 border-accent-lime pl-4 sm:pl-6 mb-6 sm:mb-8">
              <div className="text-xs sm:text-sm font-mono text-primary-black/60 mb-2">
                RESULTS
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-black text-accent-lime mb-1">
                    45
                  </div>
                  <div className="text-xs sm:text-sm text-primary-black/60">
                    Pounds Lost
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-black text-accent-lime mb-1">
                    6
                  </div>
                  <div className="text-xs sm:text-sm text-primary-black/60">Months</div>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary-black text-primary-black font-heading font-black tracking-ultra-wide text-xs uppercase hover:bg-primary-black hover:text-primary-white transition-all duration-500 ease-out"
            >
              START YOUR JOURNEY
            </motion.button>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px]"
            style={{ willChange: 'transform, opacity' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              style={{
                willChange: 'filter',
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

