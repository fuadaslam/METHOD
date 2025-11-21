"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-primary-black text-primary-white py-16 px-6 lg:px-12 border-t border-primary-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-heading font-black tracking-ultra-wide mb-4">
              METHORD
            </h3>
            <p className="text-primary-white/60 text-sm">
              The Apex of Training
            </p>
          </div>

          <div>
            <h4 className="font-heading font-black tracking-ultra-wide text-sm mb-4">
              NAVIGATE
            </h4>
            <ul className="space-y-2 text-sm text-primary-white/60">
              <li>
                <a
                  href="#methodology"
                  className="hover:text-accent-lime transition-colors duration-500 ease-out"
                >
                  Methodology
                </a>
              </li>
              <li>
                <a
                  href="#coaching"
                  className="hover:text-accent-lime transition-colors duration-500 ease-out"
                >
                  Coaching
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  className="hover:text-accent-lime transition-colors duration-500 ease-out"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  href="#join-us"
                  className="hover:text-accent-lime transition-colors duration-500 ease-out"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-black tracking-ultra-wide text-sm mb-4">
              CONNECT
            </h4>
            <ul className="space-y-2 text-sm text-primary-white/60">
              <li>
                <a
                  href="#"
                  className="hover:text-accent-lime transition-colors duration-500 ease-out"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-lime transition-colors duration-500 ease-out"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-lime transition-colors duration-500 ease-out"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-white/10 text-center text-sm text-primary-white/40 relative">
          <p>
            © {new Date().getFullYear()} Methord by Binshad. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
