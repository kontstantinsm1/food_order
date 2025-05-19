"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaHeadset } from "react-icons/fa";

export default function CTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Food Ordering Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading restaurants that have increased order volume, reduced
            errors, and delighted customers with our AI voice assistant.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-primary/20 inline-flex items-center"
            >
              <FaHeadset className="mr-2" /> Schedule Your Demo
            </a>

            <a
              href="#pricing"
              className="bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-full transition-all border border-white/20"
            >
              View Pricing Plans
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
