"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Workflow, Clock, BarChart3, Layers } from "lucide-react";

export function WorkflowSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const workflowSteps = [
    {
      icon: Workflow,
      title: "Create a Business Plan",
      description:
        "Answer a series of targeted questions to shape your unique business roadmap.",
      color: "text-blue-500",
    },
    {
      icon: Layers,
      title: "AI-Generated Marketing Roadmap",
      description:
        "Receive a step-by-step marketing plan tailored to your business goals and audience.",
      color: "text-green-500",
    },
    {
      icon: Clock,
      title: "Structured Task Management",
      description:
        "Follow an organized timeline with prioritized tasks to bring your plan to life efficiently.",
      color: "text-purple-500",
    },
    {
      icon: BarChart3,
      title: "Track Progress and Refine",
      description:
        "Monitor your business growth, adjust your strategies, and stay aligned with your goals.",
      color: "text-orange-500",
    },
  ];

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className="container mx-auto py-16 px-4 bg-secondary/10"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Streamline Your Workflow</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Transform your business processes with our intelligent workflow
          management
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 bg-primary/50 -z-10 h-full absolute"></div>
        </div>
        <div className="grid gap-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              } space-x-6`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center 
                ${step.color} bg-secondary/20 shadow-md`}
              >
                <step.icon size={32} />
              </div>
              <div
                className={`flex-1 p-6 bg-background rounded-lg shadow-md 
                ${index % 2 === 0 ? "mr-16" : "ml-16"}`}
              >
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
