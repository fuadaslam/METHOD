"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Newsletter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Newsletter signup:", { name, email });
    // Reset form
    setName("");
    setEmail("");
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-gray-200 to-gray-100 text-primary-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Left side labels */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block cursor-pointer"
          onClick={scrollToBottom}
        >
          <div className="flex flex-col items-start space-y-2">
            <span className="text-sm sm:text-base font-heading font-black tracking-ultra-wide">
              SCROLL
            </span>
            <span className="text-sm sm:text-base font-heading font-black tracking-ultra-wide">
              DOWN
            </span>
          </div>
        </motion.div>

        {/* Right side labels */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block cursor-pointer"
          onClick={scrollToTop}
        >
          <div className="flex flex-col items-end space-y-2">
            <span className="text-sm sm:text-base font-heading font-black tracking-ultra-wide">
              GO
            </span>
            <span className="text-sm sm:text-base font-heading font-black tracking-ultra-wide">
              TOP
            </span>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="text-center">
          {/* Newsletter title */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base sm:text-lg font-heading font-black tracking-ultra-wide mb-8 sm:mb-12"
          >
            NEWSLETTER
          </motion.h3>

          {/* Stay Updated heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-heading font-black tracking-ultra-wide leading-none mb-12 sm:mb-16 md:mb-20"
          >
            <div>STAY</div>
            <div>UPDATED</div>
          </motion.h2>

          {/* Call to action text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-center leading-relaxed mb-12 sm:mb-16"
          >
            SIGN UP FOR OUR NEWSLETTER TO GET THE BEST DIGITAL TIPS DELIVERED
            STRAIGHT TO YOUR INBOX AND STAY AT THE FOREFRONT OF DIGITAL
            INNOVATION.
          </motion.p>

          {/* Newsletter form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 bg-gray-800 rounded-lg p-4 sm:p-6 max-w-4xl mx-auto"
          >
            <div className="flex-1 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent text-white placeholder-white/70 border-2 border-white rounded-xl focus:outline-none focus:border-white focus:ring-0 px-4 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300"
                style={{ borderRadius: '12px' }}
              />
            </div>
            <div className="flex-1 w-full sm:w-auto sm:ml-6">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent text-white placeholder-white/70 border-2 border-white rounded-xl focus:outline-none focus:border-white focus:ring-0 px-4 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-300"
                style={{ borderRadius: '12px' }}
              />
            </div>
            <button
              type="submit"
              className="bg-transparent text-white font-heading font-black tracking-ultra-wide uppercase px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white/10 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              JOIN!
            </button>
          </motion.form>
        </div>

        {/* Mobile side labels */}
        <div className="md:hidden flex justify-between items-center mt-12">
          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={scrollToBottom}
            className="flex flex-col items-start space-y-1"
          >
            <span className="text-xs font-heading font-black tracking-ultra-wide">
              SCROLL
            </span>
            <span className="text-xs font-heading font-black tracking-ultra-wide">
              DOWN
            </span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={scrollToTop}
            className="flex flex-col items-end space-y-1"
          >
            <span className="text-xs font-heading font-black tracking-ultra-wide">
              GO
            </span>
            <span className="text-xs font-heading font-black tracking-ultra-wide">
              TOP
            </span>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

