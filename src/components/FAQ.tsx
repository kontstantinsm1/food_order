"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can the BotAI be multilingual?",
      answer:
        "Yes, BotAI supports multiple languages out of the box, including English, Spanish, French, Italian, Japanese, and Mandarin Chinese. Additional languages can be added based on your specific requirements. Our system maintains natural conversation flow and understanding across all supported languages.",
    },
    {
      question: "Do you offer any guarantees for the BotAI's performance?",
      answer:
        "We guarantee a minimum 95% order accuracy rate and 99.9% system uptime. Our service level agreements include performance metrics for response time, order processing speed, and speech recognition accuracy. If the system fails to meet these guaranteed metrics, we provide service credits according to our SLA terms.",
    },
    {
      question: "How does the BotAI handle customer data privacy and security?",
      answer:
        "Bot AI complies with GDPR, CCPA, and other relevant data protection regulations. All customer data is encrypted both in transit and at rest. Personal information is stored only as long as necessary for order fulfillment and is automatically purged according to configurable retention policies. We never sell or share customer data with third parties, and you maintain complete ownership of all collected information.",
    },
    {
      question:
        "How does the BotAI stay updated with new menu items and promotions?",
      answer:
        "Our system integrates directly with your menu management system, automatically updating in real-time whenever menu changes occur. For special promotions, an easy-to-use dashboard allows you to program limited-time offers, discounts, and combo deals. The AI is trained to naturally incorporate these specials into customer conversations, suggesting relevant offers at appropriate moments during the ordering process.",
    },
    {
      question:
        "Can the system handle complex orders with multiple modifications?",
      answer:
        'Yes, Bot AI excels at managing complex orders with multiple items and modifications. The system can handle requests like "half-and-half pizzas," "no onions but extra cheese," or "spicy level 3" for sushi rolls. It asks clarifying questions when needed and provides clear summaries of complex orders before confirmation, ensuring accuracy even with the most detailed customizations.',
    },
    {
      question: "What kind of analytics and insights does the system provide?",
      answer:
        "Bot AI generates comprehensive analytics including popular items, common modifications, peak ordering times, average order value, frequent combinations, and customer satisfaction ratings. These insights help optimize your menu, identify trends, and improve operations. Custom reports can be scheduled and automatically delivered to stakeholders, and all data can be exported or accessed via API for integration with your business intelligence tools.",
    },
    {
      question: "How does the system handle payment processing?",
      answer:
        "Bot AI integrates with all major payment processors including Stripe, Square, PayPal, and restaurant-specific POS systems. The assistant can securely collect payment information, process credit cards, apply gift cards, and handle split payments. For returning customers, the system can use tokenized payment methods for quick checkout. All payment handling is PCI-DSS compliant with end-to-end encryption.",
    },
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-darkAlt">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-dark/50 rounded-xl overflow-hidden border border-white/5"
            >
              <button
                className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
