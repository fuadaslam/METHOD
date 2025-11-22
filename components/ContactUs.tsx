"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function ContactUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.section
      id="contact-us"
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative min-h-screen bg-primary-black text-primary-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-sm sm:text-base font-heading font-black tracking-ultra-wide">
            CONTACT US
          </h3>
        </motion.div>

        {/* Main content area */}
        <div className="relative">
          {/* Contact info on left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-heading font-black tracking-ultra-wide mb-2">
                PHONE
              </div>
              <div className="text-sm sm:text-base font-body">
                +966 55 226 5416
              </div>
            </div>
          </motion.div>

          {/* Contact info on right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="space-y-3 text-right">
              <div className="text-xs sm:text-sm font-heading font-black tracking-ultra-wide mb-2">
                EMAIL
              </div>
              <div className="text-sm sm:text-base font-body">
                CONTACT@AFW-DIGITAL.COM
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black tracking-ultra-wide text-center mb-8 sm:mb-12 leading-none"
            style={{ willChange: "transform, opacity" }}
          >
            <div>GET IN</div>
            <div>TOUCH</div>
            <div>WITH</div>
            <div>US</div>
          </motion.h2>

          {/* Message text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-sm sm:text-base md:text-lg font-heading font-black tracking-ultra-wide leading-relaxed">
              WE ARE A TEAM OF VERY FRIENDLY PEOPLE
            </p>
            <p className="text-sm sm:text-base md:text-lg font-heading font-black tracking-ultra-wide leading-relaxed">
              DROP US YOUR MESSAGE TODAY
            </p>
          </motion.div>
        </div>

        {/* Mobile contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:hidden flex justify-between mb-12"
        >
          <div className="space-y-2">
            <div className="text-xs font-heading font-black tracking-ultra-wide">
              PHONE
            </div>
            <div className="text-sm font-body">+966 55 226 5416</div>
          </div>
          <div className="space-y-2 text-right">
            <div className="text-xs font-heading font-black tracking-ultra-wide">
              EMAIL
            </div>
            <div className="text-sm font-body">CONTACT@AFW-DIGITAL.COM</div>
          </div>
        </motion.div>

        {/* Form section */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
            {/* Left column */}
            <div className="space-y-8">
              <div>
                <label className="block text-xs sm:text-sm font-heading font-black tracking-ultra-wide mb-3">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-primary-white/30 py-3 text-primary-white placeholder-primary-white/50 font-body text-sm sm:text-base focus:outline-none focus:border-accent-lime transition-colors duration-500 ease-out"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-heading font-black tracking-ultra-wide mb-3">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-primary-white/30 py-3 text-primary-white placeholder-primary-white/50 font-body text-sm sm:text-base focus:outline-none focus:border-accent-lime transition-colors duration-500 ease-out"
                  placeholder=""
                />
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              <div>
                <label className="block text-xs sm:text-sm font-heading font-black tracking-ultra-wide mb-3">
                  Your last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-primary-white/30 py-3 text-primary-white placeholder-primary-white/50 font-body text-sm sm:text-base focus:outline-none focus:border-accent-lime transition-colors duration-500 ease-out"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-heading font-black tracking-ultra-wide mb-3">
                  Phone
                </label>
                <div className="flex items-center border-b-2 border-primary-white/30 focus-within:border-accent-lime transition-colors duration-500 ease-out">
                  <div className="flex items-center mr-2 py-3">
                    <span className="text-2xl mr-1">🇮🇳</span>
                    <select className="bg-transparent text-primary-white font-body text-sm sm:text-base focus:outline-none border-none pr-1">
                      <option value="+91">+91</option>
                      <option value="+966">+966</option>
                      <option value="+1">+1</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 bg-transparent py-3 text-primary-white placeholder-primary-white/50 font-body text-sm sm:text-base focus:outline-none"
                    placeholder="81234 56789"
                  />
                </div>
              </div>
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-accent-lime text-primary-black font-heading font-black tracking-ultra-wide text-xs sm:text-sm uppercase hover:bg-accent-lime-dark transition-colors duration-500 ease-out"
          >
            SEND MESSAGE
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}

