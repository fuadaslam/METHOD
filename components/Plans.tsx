"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Plans() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const plans = [
    {
      name: "FOUNDATION",
      price: "299",
      period: "MONTH",
      description: "Perfect for those beginning their transformation journey.",
      features: [
        "Full gym access",
        "Group training sessions",
        "Basic movement assessment",
        "Nutrition guidance",
        "Mobile app access",
      ],
      isPopular: false,
    },
    {
      name: "ELITE",
      price: "699",
      period: "MONTH",
      description:
        "For the committed. Advanced training with personalized attention.",
      features: [
        "Everything in Foundation",
        "Personal coaching sessions (2x/week)",
        "Advanced movement analysis",
        "Custom training programs",
        "Performance tracking",
        "Priority facility access",
        "Recovery protocols",
      ],
      isPopular: true,
    },
    {
      name: "APEX",
      price: "1,499",
      period: "MONTH",
      description: "The ultimate experience. For those who demand excellence.",
      features: [
        "Everything in Elite",
        "Unlimited personal coaching",
        "1-on-1 movement specialist",
        "Biomechanical analysis",
        "Elite performance optimization",
        "24/7 facility access",
        "Recovery & wellness suite",
        "Nutrition consultation",
        "Competition preparation",
      ],
      isPopular: false,
    },
  ];

  const handleSelectPlan = (planName: string) => {
    // Handle plan selection - can integrate with payment system
    console.log(`Selected plan: ${planName}`);
    // Scroll to join-us form
    const element = document.querySelector("#join-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="plans"
      ref={sectionRef}
      className="relative min-h-screen bg-primary-black text-primary-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="text-xs sm:text-sm font-mono text-primary-white/60 mb-3 sm:mb-4">
            MEMBERSHIP
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-ultra-wide mb-4 sm:mb-6">
            CHOOSE YOUR PLAN
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-primary-white/80 max-w-2xl mx-auto px-4 sm:px-0">
            Transform your potential into performance. Select the membership
            tier that aligns with your commitment to excellence.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`relative flex flex-col ${
                plan.isPopular
                  ? "border-2 border-accent-lime bg-primary-black"
                  : "border border-primary-white/20 bg-primary-black/50"
              } p-6 sm:p-8 lg:p-10 hover:border-accent-lime transition-all duration-500 ease-out`}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent-lime text-primary-black px-3 sm:px-4 py-1 text-xs font-heading font-black tracking-ultra-wide">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-black tracking-ultra-wide mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs sm:text-sm text-primary-white/60 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-primary-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-accent-lime">
                    ₹{plan.price}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-primary-white/60 uppercase tracking-wide">
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-primary-white/80"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-accent-lime flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-xs sm:text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelectPlan(plan.name)}
                className={`w-full py-4 font-heading font-black tracking-ultra-wide text-xs uppercase transition-all duration-500 ease-out ${
                  plan.isPopular
                    ? "bg-accent-lime text-primary-black hover:bg-accent-lime-dark"
                    : "border-2 border-primary-white/30 text-primary-white hover:border-accent-lime hover:text-accent-lime"
                }`}
              >
                SELECT PLAN
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="text-center pt-8 border-t border-primary-white/10"
        >
          <p className="text-sm text-primary-white/60 mb-4">
            All plans include a complimentary initial assessment and facility
            tour.
          </p>
          <p className="text-sm text-primary-white/60">
            Membership is subject to application approval. Annual plans
            available with 15% discount.
          </p>
        </motion.div>
        <div className="h-[30px]"></div>
        {/* Scrolling text "by binshad" - vertical on left side, rotated 180deg, reading bottom to top */}
        <div
          className="absolute left-0 top-0 bottom-0 overflow-hidden pointer-events-none"
          style={{ width: "fit-content" }}
        >
          <div className="flex flex-col scroll-text-left h-full">
            <span
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-heading font-black tracking-ultra-wide text-primary-white/10 mb-8 sm:mb-12 md:mb-16 whitespace-nowrap inline-block"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              BY BINSHAD&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-heading font-black tracking-ultra-wide text-primary-white/10 mb-8 sm:mb-12 md:mb-16 whitespace-nowrap inline-block"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              BY BINSHAD&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span
              className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-heading font-black tracking-ultra-wide text-primary-white/10 whitespace-nowrap inline-block"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              BY BINSHAD&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
