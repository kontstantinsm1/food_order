"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaHeadset } from "react-icons/fa";

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const steps = [
    {
      number: 1,
      title: "Voice Recognition",
      description:
        "Advanced speech recognition technology understands natural language with high accuracy, even in noisy environments.",
    },
    {
      number: 2,
      title: "Intent Processing",
      description:
        "AI algorithms identify customer intent, extract order details, and handle modifications, questions, and special requests.",
    },
    {
      number: 3,
      title: "Intelligent Response",
      description:
        "The system provides natural, conversational responses, asks clarifying questions when needed, and confirms order details.",
    },
    {
      number: 4,
      title: "Menu Integration",
      description:
        "Seamlessly connects with your restaurant's menu system, including all items, options, combinations, and pricing.",
    },
    {
      number: 5,
      title: "Order Processing",
      description:
        "Once confirmed, orders are automatically sent to your kitchen management system for immediate preparation.",
    },
    {
      number: 6,
      title: "Continuous Learning",
      description:
        "The system improves over time by learning from interactions, menu changes, and customer preferences.",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 relative grid-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How BotAI Works
          </h2>
          <p className="text-gray-300 text-lg">
            Our voice assistant leverages cutting-edge AI technology to provide
            a seamless food ordering experience.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className="bg-darkAlt/70 backdrop-blur-sm rounded-xl p-8 border border-white/5"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary text-2xl mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 mb-4">{step.description}</p>
              <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#demo"
            className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-primary/20 inline-flex items-center"
          >
            <FaHeadset className="mr-2" /> Request Live Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
