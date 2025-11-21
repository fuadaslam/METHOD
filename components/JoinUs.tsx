"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function JoinUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <motion.section
      id="join-us"
      ref={sectionRef}
      className="relative min-h-screen bg-primary-black text-primary-white py-32 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="text-sm font-mono text-primary-white/60 mb-4">
              CONTACT/JOBS
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-black tracking-ultra-wide mb-8">
              JOIN US
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-primary-white/80">
              Ready to transcend your limits? Membership is by application only.
              We're not looking for everyone—we're looking for the committed.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-primary-white/80">
              If you're serious about transformation, if you understand that
              excellence is a process, not an outcome—we want to hear from you.
            </p>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="space-y-6"
            style={{ willChange: "transform, opacity" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full bg-transparent border-b-2 border-primary-white/30 py-4 text-primary-white placeholder-primary-white/50 font-heading tracking-ultra-wide text-sm uppercase focus:outline-none focus:border-accent-lime transition-colors duration-500 ease-out"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-primary-white/30 py-4 text-primary-white placeholder-primary-white/50 font-heading tracking-ultra-wide text-sm uppercase focus:outline-none focus:border-accent-lime transition-colors duration-500 ease-out"
                />
              </div>
              <div>
                <textarea
                  placeholder="MESSAGE"
                  rows={6}
                  className="w-full bg-transparent border-b-2 border-primary-white/30 py-4 text-primary-white placeholder-primary-white/50 font-heading tracking-ultra-wide text-sm uppercase focus:outline-none focus:border-accent-red transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-accent-lime text-primary-black font-heading font-black tracking-ultra-wide text-xs uppercase hover:bg-accent-lime-dark transition-all duration-500 ease-out"
              >
                SUBMIT APPLICATION
              </motion.button>
            </form>

            <div className="pt-8 border-t border-primary-white/10">
              <p className="text-sm text-primary-white/60 mb-4">
                CAREER OPPORTUNITIES
              </p>
              <p className="text-primary-white/80 mb-4">
                We're always looking for exceptional coaches, movement
                specialists, and performance scientists.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary-white/30 text-primary-white font-heading font-black tracking-ultra-wide text-xs uppercase hover:border-accent-lime hover:text-accent-lime transition-all duration-500 ease-out"
              >
                VIEW OPENINGS
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
