"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaCircleExclamation,
  FaTriangleExclamation,
  FaBullseye,
  FaMicrochip,
  FaSitemap,
  FaCheck,
} from "react-icons/fa6";

export default function SolutionOverview() {
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

  return (
    <section id="solution" ref={sectionRef} className="py-20 bg-darkAlt">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Solution Overview
            </h2>

            <div className="bg-dark/50 rounded-xl p-8 mb-8 border border-white/5">
              <h3 className="text-xl font-bold mb-4">Problem Statement</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2 flex items-center">
                  <FaCircleExclamation className="text-primary mr-2" />{" "}
                  Challenge Description
                </h4>
                <p className="text-gray-300">
                  Restaurants struggle with phone order accuracy, staff
                  availability during peak hours, and consistent customer
                  service, leading to lost revenue and customer dissatisfaction.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2 flex items-center">
                  <FaTriangleExclamation className="text-primary mr-2" /> Key
                  Pain Points
                </h4>
                <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                  <li>
                    High error rates in phone orders leading to customer
                    complaints
                  </li>
                  <li>Inability to handle multiple orders during peak times</li>
                  <li>
                    Inconsistent order-taking experience depending on staff
                  </li>
                  <li>Lost revenue from abandoned calls when lines are busy</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center">
                  <FaBullseye className="text-primary mr-2" /> Specific Goals
                </h4>
                <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                  <li>Implement an AI voice assistant to handle food orders</li>
                  <li>Reduce order errors by at least 50%</li>
                  <li>Handle unlimited concurrent orders during peak times</li>
                  <li>
                    Provide consistent ordering experience for every customer
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-dark/50 rounded-xl p-8 border border-white/5">
              <h3 className="text-xl font-bold mb-4">Detailed Explanation</h3>
              <p className="text-gray-300 mb-6">
                We developed a sophisticated multi-agent AI voice assistant
                capable of handling food orders across multiple cuisines. The
                system evolves from a single agent to multiple specialized
                agents, each with unique instructions and knowledge bases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <FaMicrochip className="text-primary mr-2" /> AI
                    Technologies Used
                  </h4>
                  <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                    <li>OpenAI GPT-4 for natural language processing</li>
                    <li>Custom NLP models for food-specific terminology</li>
                    <li>Elevenlabs for text-to-speech synthesis</li>
                    <li>DeepGram for speech-to-text conversion</li>
                    <li>Pipecat for orchestration and data pipelines</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <FaSitemap className="text-primary mr-2" /> Architecture
                  </h4>
                  <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                    <li>Frontend: React/Next.js web interface</li>
                    <li>Backend: Node.js with Python AI logic</li>
                    <li>Cloud Infrastructure: AWS for scalability</li>
                    <li>Kitchen Integration: REST APIs</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="md:mt-12" variants={itemVariants}>
            <div className="bg-gradient-to-br from-secondary to-primary p-0.5 rounded-xl overflow-hidden">
              <div className="bg-dark rounded-xl overflow-hidden">
                <div className="bg-darkAlt p-4 flex justify-between items-center border-b border-white/10">
                  <div className="flex space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-400">Bot AI Assistant</div>
                  <div className="w-5"></div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="col-span-3 text-center text-sm font-medium text-gray-400 bg-white/5 rounded py-2">
                      Service Plans
                    </div>
                    <div className="text-center rounded-xl bg-white/5 py-3 px-4">
                      <div className="text-primary font-semibold mb-1">
                        Intro
                      </div>
                      <div className="text-sm text-gray-400">4-6 weeks</div>
                    </div>
                    <div className="text-center rounded-xl bg-primary/20 border border-primary/30 py-3 px-4">
                      <div className="text-primary font-semibold mb-1">
                        Plus
                      </div>
                      <div className="text-sm text-gray-400">+Features</div>
                    </div>
                    <div className="text-center rounded-xl bg-white/5 py-3 px-4">
                      <div className="text-primary font-semibold mb-1">Pro</div>
                      <div className="text-sm text-gray-400">Enterprise</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <FaCheck className="text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">
                          Separate agent for each cuisine type
                        </h4>
                        <p className="text-sm text-gray-400">
                          Specialized knowledge for pizza and sushi
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <FaCheck className="text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">
                          Dynamic parsing of menu information
                        </h4>
                        <p className="text-sm text-gray-400">
                          Keeps assistant updated with latest menu options
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <FaCheck className="text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">
                          Dynamic creation of food item databases
                        </h4>
                        <p className="text-sm text-gray-400">
                          Automatically builds detailed menu knowledge
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <FaCheck className="text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">Nearest location search</h4>
                        <p className="text-sm text-gray-400">
                          Based on customer's address or zip code
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <FaCheck className="text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">
                          Enhanced order recording with AI analysis
                        </h4>
                        <p className="text-sm text-gray-400">
                          Identifies patterns and optimizes menu offerings
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <FaCheck className="text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">
                          Multiple ordering options
                        </h4>
                        <p className="text-sm text-gray-400">
                          Voice, chat, or hybrid interaction models
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <a
                      href="#"
                      className="block text-center bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg transition-all"
                    >
                      REQUEST A DEMO
                    </a>
                    <a
                      href="#"
                      className="block text-center bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg transition-all"
                    >
                      COMPARE PACKAGES
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="mt-8 bg-dark/50 rounded-xl p-8 border border-white/5"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-6">Expected Outcomes</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">
                    Quantitative Results
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-primary font-bold text-xl mr-2">
                        75%
                      </span>
                      reduction in order errors
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary font-bold text-xl mr-2">
                        40%
                      </span>
                      increase in order volume during peak hours
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary font-bold text-xl mr-2">
                        60%
                      </span>
                      reduction in staff workload for order taking
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">
                    Qualitative Results
                  </h4>
                  <ul className="space-y-2 text-gray-300 ml-6 list-disc">
                    <li>
                      Improved customer satisfaction with consistent experience
                    </li>
                    <li>Enhanced ability to handle special dietary requests</li>
                    <li>Valuable data collection on customer preferences</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
