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
      title: "Personalized Marketing Goals",
      description:
        "Set tailored objectives for your business with insights driven by AI and your unique inputs.",
    },
    {
      icon: Rocket,
      title: "AI-Driven Marketing Plans",
      description:
        "Receive custom, actionable strategies to boost your marketing efforts and drive growth.",
    },
    {
      icon: BarChart2,
      title: "Insightful Analytics",
      description:
        "Track your campaigns and performance with clear dashboards and actionable data.",
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
