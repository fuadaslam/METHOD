"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Facilities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const facilities = [
    {
      title: "Performance Lab",
      description:
        "State-of-the-art biomechanics analysis and movement screening",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    },
    {
      title: "Strength Platform",
      description:
        "Competition-grade equipment for powerlifting and Olympic lifting",
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
    },
    {
      title: "Recovery Suite",
      description:
        "Cryotherapy, infrared sauna, and advanced recovery protocols",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    },
  ];

  return (
    <motion.section
      id="facilities"
      ref={sectionRef}
      style={{ opacity }}
      className="relative min-h-screen bg-primary-white text-primary-black py-32 px-6 lg:px-12"
    >
      {/* Vertical SOUL text on left side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-6 pointer-events-none z-0">
        <div
          className="text-[120px] lg:text-[180px] font-heading font-black tracking-ultra-wide opacity-10"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          SOUL
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="text-sm font-mono text-primary-black/60 mb-4">
            MICROSPOT
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-black tracking-ultra-wide mb-8">
            FACILITIES
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-primary-black/80">
            Every square foot is purpose-built. Every piece of equipment is
            precision-engineered. This is where science meets sweat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group cursor-pointer"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="relative h-96 mb-6 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-100 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${facility.image}')`,
                    willChange: "transform, filter",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/60 via-transparent to-transparent" />
              </div>
              <h3 className="text-2xl font-heading font-black tracking-ultra-wide mb-3">
                {facility.title}
              </h3>
              <p className="text-primary-black/70 leading-relaxed">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
