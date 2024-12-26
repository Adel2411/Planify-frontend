"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Planify create marketing roadmaps?",
      answer:
        "Planify uses AI to generate personalized marketing plans based on your answers to targeted questions about your business goals and audience.",
    },
    {
      question: "Can Planify be used for any type of business?",
      answer:
        "Absolutely! Planify is designed to support startups, small businesses, and enterprises in any industry, providing tailored strategies for their unique needs.",
    },
    {
      question: "What support options are available for Planify users?",
      answer:
        "We provide 24/7 customer support through email, live chat, and phone to ensure a seamless experience while using Planify.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-16 px-4 max-w-4xl"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">
          Got questions? We've got answers to help you understand Planify
          better.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.3,
            }}
          >
            <div
              className={`
                border rounded-lg overflow-hidden 
                ${activeIndex === index ? "border-primary" : "border-gray-200"}
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left 
                  hover:bg-secondary/10 transition-colors duration-200"
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`
                    transform transition-transform duration-300
                    ${activeIndex === index ? "rotate-180" : ""}
                  `}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-secondary/5 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
