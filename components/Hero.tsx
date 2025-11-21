"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -30]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale, y }}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-primary-black"
    >
      {/* Blurred grayscale background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale blur-3xl scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80')",
            filter: "blur(40px) grayscale(100%)",
          }}
        />
        <div className="absolute inset-0 bg-primary-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-6 mb-4 flex-wrap md:flex-nowrap">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-heading font-black tracking-ultra-wide text-accent-lime whitespace-nowrap"
            style={{ willChange: "transform, opacity" }}
          >
            METHOD
          </motion.h1>

          {/* MTD. Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="border-2 border-accent-lime rounded-lg px-2 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-3 flex-shrink-0"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="text-white text-xs sm:text-sm md:text-base font-heading font-black tracking-ultra-wide whitespace-nowrap">
              MTD.
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-accent-lime text-xl md:text-2xl lg:text-3xl font-body font-normal tracking-wide"
          style={{ willChange: "transform, opacity" }}
        >
          BY BINSHAD
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-12"
          style={{ willChange: "transform, opacity" }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-accent-lime text-primary-black font-heading font-black tracking-ultra-wide text-sm uppercase hover:bg-accent-lime-dark transition-colors duration-500 ease-out"
          >
            BEGIN YOUR JOURNEY
          </motion.button>
        </motion.div>
      </div>

      {/* Small icon - bottom left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-8 z-10"
      >
        <div className="w-8 h-8 rounded-full bg-primary-white/10 border border-primary-white/20 flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="text-primary-white/60"
          >
            <path
              d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
      {/* Scrolling text background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2">
          <div className="flex whitespace-nowrap scroll-text-header">
            <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-heading font-black tracking-ultra-wide text-primary-white/5 mr-32">
              MIND&nbsp;&nbsp;&nbsp;&nbsp;BODY&nbsp;&nbsp;&nbsp;&nbsp;SOLE&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-heading font-black tracking-ultra-wide text-primary-white/5 mr-32">
              MIND&nbsp;&nbsp;&nbsp;&nbsp;BODY&nbsp;&nbsp;&nbsp;&nbsp;SOLE&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-heading font-black tracking-ultra-wide text-primary-white/5">
              MIND&nbsp;&nbsp;&nbsp;&nbsp;BODY&nbsp;&nbsp;&nbsp;&nbsp;SOLE&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 right-1/2 transform translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent-lime/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-accent-lime/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
