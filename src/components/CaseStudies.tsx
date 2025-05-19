"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function CaseStudies() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const caseStudies = [
    {
      title: "Pizza Chain Voice Ordering System",
      description:
        "Implementation of Bot AI voice assistant at 50+ locations of a national pizza chain.",
      category: "Pizza Chain",
      image:
        "https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: "Premium Sushi Restaurant AI Integration",
      description:
        "How a high-end sushi restaurant integrated voice ordering without compromising service quality.",
      category: "Fine Dining",
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: "Food Delivery App Voice Integration",
      description:
        "How a popular food delivery service integrated Bot AI to simplify mobile ordering.",
      category: "Food Delivery",
      image:
        "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: "Multi-Cuisine Restaurant Solution",
      description:
        "Implementing a single AI voice system for a food hall with multiple cuisine concepts.",
      category: "Multi-Concept",
      image:
        "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    },
  ];

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="py-20 bg-dark relative"
    >
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Related Case Studies
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-darkAlt rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  className="group-hover:scale-105 transition-transform duration-300"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{study.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {study.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                    {study.category}
                  </span>
                  <a
                    href="#"
                    className="text-primary text-sm font-medium hover:text-primary/80 transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#all-case-studies"
            className="inline-flex items-center text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors"
          >
            View All Case Studies <FaArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
