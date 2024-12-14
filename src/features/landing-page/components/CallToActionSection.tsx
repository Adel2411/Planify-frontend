"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CallToActionSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-16 px-4 bg-primary text-primary-foreground"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          className="text-4xl font-bold mb-6"
        >
          Transform Your Business Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl mb-8"
        >
          Join thousands of businesses leveraging Planify to turn ideas into
          success
        </motion.p>
        <div className="flex justify-center space-x-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
