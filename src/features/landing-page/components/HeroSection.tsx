"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import { ArrowRight, Rocket, Target } from "lucide-react";
import { useRef } from "react";

const words = ["Plan", "Track", "Achieve"];

export function HeroSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 150]);

  return (
    <motion.div
      ref={ref}
      className="h-screen relative w-full overflow-hidden flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <Boxes />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center max-w-4xl px-4"
      >
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            opacity,
            scale,
          }}
          className={cn(
            "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold",
            "bg-gradient-to-r from-primary to-purple-600",
            "bg-clip-text text-transparent",
            "mb-6 tracking-tight",
          )}
        >
          Effortlessly
          <span className="text-primary mx-2">
            <FlipWords words={words} />
          </span>
          <br />
          Your Business Goals
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-md md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          style={{
            y,
            opacity,
          }}
        >
          Unlock the power of tailored marketing plans and project management.
          With Planify, transform your ideas into actionable strategies,
          streamline team collaboration, and accelerate your business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          style={{
            y,
            opacity,
          }}
        >
          <Button asChild size="lg" className="group w-full sm:w-auto">
            <Link href="/login" className="flex items-center">
              Try Now
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.8,
          type: "spring",
          stiffness: 50,
        }}
        className="absolute bottom-32 left-32 hidden md:block"
      >
        <Rocket className="text-primary/50 animate-float" size={48} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          type: "spring",
          stiffness: 50,
        }}
        className="absolute top-32 right-32 hidden md:block"
      >
        <Target className="text-purple-500/50 animate-float" size={48} />
      </motion.div>
    </motion.div>
  );
}
