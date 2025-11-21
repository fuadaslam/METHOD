"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Methodology() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <motion.section
      id="methodology"
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative min-h-screen bg-primary-white text-primary-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12"
    >
      {/* Vertical MIND text on left side */}
      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 lg:left-6 pointer-events-none z-0">
        <div
          className="text-[100px] md:text-[120px] lg:text-[180px] font-heading font-black tracking-ultra-wide opacity-10"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          MIND
        </div>
      </div>
      <div className="max-w-7xl mx-auto overflow-hidden relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ willChange: "transform, opacity" }}
            className="overflow-hidden"
          >
            <div className="text-xs sm:text-sm font-mono text-primary-black/60 mb-3 sm:mb-4">
              M-PLATFORM
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-ultra-wide mb-6 sm:mb-8 break-words">
              METHODOLOGY
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-primary-black/80">
              Our proprietary training system combines cutting-edge exercise
              science with precision biomechanics. Every movement is analyzed,
              optimized, and executed with surgical precision.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-primary-black/80">
              We don't follow trends—we set them. Our methodology is built on
              decades of research, refined through thousands of hours of
              elite-level training, and continuously evolved through data-driven
              insights.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary-black text-primary-black font-heading font-black tracking-ultra-wide text-xs uppercase hover:bg-primary-black hover:text-primary-white transition-all duration-500 ease-out"
            >
              EXPLORE THE SYSTEM
            </motion.button>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px]"
            style={{ willChange: "transform, opacity" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              style={{
                willChange: "filter",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
