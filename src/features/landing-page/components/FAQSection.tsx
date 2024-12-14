"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Planify assist with marketing strategy?",
      answer:
        "Planify generates AI-powered, personalized marketing strategies tailored to your business goals, helping you reach the right audience and maximize results.",
    },
    {
      question: "Is Planify suitable for all industries?",
      answer:
        "Yes! Planify is designed to cater to businesses across various industries, providing customizable plans that address the unique challenges of each sector.",
    },
    {
      question: "What kind of customer support is available?",
      answer:
        "We offer round-the-clock support via email, live chat, and phone to ensure you get the help you need to optimize your experience with Planify.",
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
