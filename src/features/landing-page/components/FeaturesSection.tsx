"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Rocket, BarChart2 } from "lucide-react";

export function FeaturesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const features = [
    {
      icon: Target,
      title: "Start with a Clear Roadmap",
      description:
        "Planify generates an AI-powered roadmap to kickstart your business marketing journey.",
    },
    {
      icon: Rocket,
      title: "AI-Generated Marketing Plans",
      description:
        "Get personalized strategies crafted by AI based on your business goals and inputs.",
    },
    {
      icon: BarChart2,
      title: "Track Your Business Progress",
      description:
        "Monitor your businesses and marketing plans with insightful, easy-to-use dashboards.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className="container mx-auto py-16 px-4"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
            }}
            whileHover={{ scale: 1.05 }}
            key={feature.title}
          >
            <Card className="h-full">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary" />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{feature.title}</CardTitle>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
