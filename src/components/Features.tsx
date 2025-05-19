"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaPizzaSlice, FaFish, FaCheck, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 bg-darkAlt relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Intelligent Voice Ordering Experience
          </h2>
          <p className="text-gray-300 text-lg">
            Our AI-powered voice assistant transforms how customers order food,
            making it faster, more accurate, and delightfully interactive.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="order-2 md:order-1" variants={itemVariants}>
            <div className="bg-gradient-to-br from-secondary/30 to-primary/30 p-1 rounded-2xl shadow-xl">
              <div className="relative w-full h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80"
                  alt="Voice assistant pizza ordering interface"
                  className="rounded-2xl w-full h-full"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="order-1 md:order-2" variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-primary/20 text-primary w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <FaPizzaSlice />
              </span>
              Pizza Ordering Made Simple
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-lg">
                    Natural Language Understanding
                  </h4>
                  <p className="text-gray-400">
                    Order any pizza with toppings, size, and crust preferences
                    using natural conversation.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <FaCheck className="text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-lg">
                    Custom Order Modifications
                  </h4>
                  <p className="text-gray-400">
                    Easily add, remove, or substitute toppings with simple voice
                    commands.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <FaCheck className="text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-lg">
                    Special Offers Recognition
                  </h4>
                  <p className="text-gray-400">
                    The assistant automatically suggests relevant deals and
                    promotions for your order.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <FaCheck className="text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-lg">Order Confirmation</h4>
                  <p className="text-gray-400">
                    Clear verbal summaries ensure your order is exactly what you
                    wanted before finalizing.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="#pizza-demo"
              className="mt-8 inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
            >
              See pizza ordering in action <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-primary/20 text-primary w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <FaFish />
              </span>
              Seamless Sushi Ordering
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheck className="text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-lg">
                    Specialized Menu Knowledge
                  </h4>
                  <p className="text-gray-400">
                    Expert understanding of sushi terminology, styles, and
                    ingredients for accurate ordering.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <FaCheck className="text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-lg">
                    Dietary Preferences Handling
                  </h4>
                  <p className="text-gray-400">
                    Easily specify vegetarian options, allergies, or preferences
                    like no raw fish.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <FaCheck className="text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-lg">
                    Combo Recommendations
                  </h4>
                  <p className="text-gray-400">
                    Smart suggestions for pairing rolls, sashimi, and sides
                    based on your preferences.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <FaCheck className="text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-lg">
                    Pronunciation Assistance
                  </h4>
                  <p className="text-gray-400">
                    Understanding various pronunciations of Japanese menu items
                    for a frustration-free experience.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="#sushi-demo"
              className="mt-8 inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
            >
              See sushi ordering in action <FaArrowRight className="ml-2" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-secondary/30 to-primary/30 p-1 rounded-2xl shadow-xl">
              <div className="relative w-full h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80"
                  alt="Voice assistant sushi ordering interface"
                  className="rounded-2xl w-full h-full"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
