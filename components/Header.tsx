"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      // Scroll menu to top when it opens - multiple attempts to ensure it works
      const scrollToTop = () => {
        if (menuRef.current) {
          menuRef.current.scrollTop = 0;
        }
      };
      // Immediate scroll
      scrollToTop();
      // After a short delay
      setTimeout(scrollToTop, 50);
      // After animation might complete
      setTimeout(scrollToTop, 500);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: "Home", href: "#", number: "01", isHighlighted: true },
    { label: "Method", href: "#methodology", number: "02" },
    { label: "Coaching", href: "#coaching", number: "03" },
    { label: "Facilities", href: "#facilities", number: "04" },
    { label: "Studio", href: "#studio", number: "05" },
    { label: "Plans", href: "#plans", number: "06" },
    { label: "Contact Us", href: "#join-us", number: "07" },
    // { label: "Jobs", href: "#jobs", number: "08" },
    // { label: "Investors", href: "#investors", number: "09" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? "bg-primary-black/95 backdrop-blur-sm" : "bg-transparent"
        }`}
        style={{ willChange: "transform" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 relative z-10">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl font-heading font-black tracking-ultra-wide text-accent-lime"
            >
              METHOD
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsMenuOpen(true)}
              className="relative w-8 h-8 flex flex-col justify-center items-center group z-50"
              aria-label="Open menu"
            >
              <span className="absolute w-6 h-0.5 bg-primary-white -translate-y-1.5 transition-all duration-500 ease-out" />
              <span className="absolute w-6 h-0.5 bg-primary-white transition-all duration-500 ease-out" />
              <span className="absolute w-6 h-0.5 bg-primary-white translate-y-1.5 transition-all duration-500 ease-out" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />
            {/* Half-screen menu */}
            <motion.nav
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              onAnimationStart={() => {
                // Scroll to top immediately when animation starts
                if (menuRef.current) {
                  menuRef.current.scrollTop = 0;
                }
              }}
              onAnimationComplete={() => {
                // Ensure menu scrolls to top after animation completes
                if (menuRef.current) {
                  menuRef.current.scrollTop = 0;
                }
              }}
              className="fixed top-0 right-0 w-full sm:w-4/5 md:w-1/2 lg:w-2/5 h-full bg-primary-black z-[70] overflow-y-auto shadow-2xl"
            >
              {/* Close button - top right */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[80] text-4xl sm:text-6xl font-light text-primary-white hover:text-accent-lime transition-colors duration-500 ease-out cursor-pointer"
                aria-label="Close menu"
                style={{ willChange: "transform, opacity" }}
              >
                ×
              </motion.button>

              {/* Navigation items */}
              <div className="relative z-10 flex flex-col px-4 sm:px-6 md:px-12 py-16 sm:py-20 pt-20 sm:pt-32">
                <ul className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 w-full max-w-3xl flex-shrink-0">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.05 + 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="group text-left flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full py-1 sm:py-2"
                      >
                        {/* Number */}
                        <span
                          className={`text-xs sm:text-sm md:text-base font-mono tracking-wider flex-shrink-0 min-w-[1.5rem] sm:min-w-[2rem] md:min-w-[2.5rem] ${
                            item.isHighlighted
                              ? "text-accent-lime"
                              : "text-primary-white/60"
                          }`}
                        >
                          {item.number}
                        </span>

                        {/* Label */}
                        <span
                          className={`font-heading font-black tracking-ultra-wide menu-item-label ${
                            item.isHighlighted
                              ? "text-accent-lime text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                              : "text-primary-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
                          }`}
                          style={
                            !item.isHighlighted
                              ? {
                                  WebkitTextStroke: "transparent",
                                  WebkitTextStrokeWidth: "1.5px",
                                }
                              : undefined
                          }
                          onMouseEnter={(e) => {
                            if (!item.isHighlighted) {
                              const element = e.currentTarget;
                              element.style.webkitTextStroke = "#A8FF00";
                              element.style.webkitTextStrokeWidth = "1.5px";
                              element.style.webkitTextFillColor = "transparent";
                              element.style.transform = "scale(1.1)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!item.isHighlighted) {
                              const element = e.currentTarget;
                              element.style.webkitTextStroke = "transparent";
                              element.style.webkitTextStrokeWidth = "1.5px";
                              element.style.webkitTextFillColor = "";
                              element.style.transform = "scale(1)";
                            }
                          }}
                        >
                          {item.label}
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
