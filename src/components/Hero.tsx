"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaPlayCircle,
  FaUtensils,
  FaMicrophone,
  FaBolt,
  FaLanguage,
} from "react-icons/fa";

export default function Hero() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".hero-animate");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        elements.forEach((el) => observerRef.current?.unobserve(el));
      }
    };
  }, []);

  return (
    <section className="pt-32 pb-20 relative grid-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-dark/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 hero-animate opacity-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Voice-Powered</span> Food Ordering
              Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              Revolutionize your restaurant experience with our AI voice
              assistant that makes ordering pizza and sushi as simple as having
              a conversation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#demo"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-primary/20 inline-flex items-center"
              >
                <FaPlayCircle className="mr-2" /> Try voice assistant
              </a>
              <a
                href="#pricing"
                className="bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-3 rounded-full transition-all border border-white/20"
              >
                View Pricing
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center hero-animate opacity-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative w-full h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80"
                alt="Pizza ordering through voice assistant"
                className="rounded-2xl shadow-2xl shadow-primary/10 rotate-3 object-cover"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center hero-animate opacity-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <FaUtensils className="text-primary text-3xl mb-4 mx-auto" />
            <h3 className="font-semibold text-xl mb-2">Multiple Cuisines</h3>
            <p className="text-gray-400">
              Pizza, sushi, and more cuisine options
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <FaMicrophone className="text-primary text-3xl mb-4 mx-auto" />
            <h3 className="font-semibold text-xl mb-2">Voice First</h3>
            <p className="text-gray-400">
              Natural conversation ordering experience
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <FaBolt className="text-primary text-3xl mb-4 mx-auto" />
            <h3 className="font-semibold text-xl mb-2">Fast & Accurate</h3>
            <p className="text-gray-400">
              Instant order processing without errors
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <FaLanguage className="text-primary text-3xl mb-4 mx-auto" />
            <h3 className="font-semibold text-xl mb-2">Multilingual</h3>
            <p className="text-gray-400">
              Supports multiple languages for global use
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent"></div>
    </section>
  );
}
