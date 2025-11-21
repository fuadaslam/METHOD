'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function Studio() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const studioPhotos = [
    {
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
      title: 'Main Training Floor',
    },
    {
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      title: 'Equipment Zone',
    },
    {
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      title: 'Performance Lab',
    },
    {
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
      title: 'Strength Platform',
    },
    {
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
      title: 'Recovery Area',
    },
    {
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      title: 'Training Space',
    },
  ]

  return (
    <motion.section
      id="studio"
      ref={sectionRef}
      style={{ opacity }}
      className="relative min-h-screen bg-primary-white text-primary-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="text-xs sm:text-sm font-mono text-primary-black/60 mb-3 sm:mb-4">
            STUDIO
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-ultra-wide mb-6 sm:mb-8">
            OUR SPACE
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-primary-black/80 px-4 sm:px-0">
            Step inside our world-class facility. Every corner is designed for
            performance, every detail optimized for excellence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {studioPhotos.map((photo, index) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group cursor-pointer"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="relative h-64 sm:h-72 md:h-80 mb-3 sm:mb-4 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-100 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${photo.image}')`,
                    willChange: 'transform, filter',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-xl font-heading font-black tracking-ultra-wide text-primary-white">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

