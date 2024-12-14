"use client";
import { motion } from "motion/react";
import { LayoutGrid, Link2, Zap } from "lucide-react";

export function IntegrationSection() {
  const integrations = [
    {
      icon: LayoutGrid,
      title: "Business Tool Integrations",
      description:
        "Connect Planify with your existing CRM, analytics, and marketing platforms to streamline your workflows.",
    },
    {
      icon: Link2,
      title: "Custom API Solutions",
      description:
        "Easily extend Planify's functionality by integrating your business's unique data through our API.",
    },
    {
      icon: Zap,
      title: "Accelerated Data Analysis",
      description:
        "Sync your data instantly for faster and more informed marketing decisions.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-16 px-4 bg-secondary/10"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Powerful Integrations</h2>
        <p className="text-muted-foreground mt-4">
          Connect, automate, and accelerate your business workflows
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {integrations.map((integration, index) => (
          <motion.div
            key={integration.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
            }}
            className="text-center p-6 bg-background rounded-lg shadow-md"
          >
            <integration.icon className="mx-auto mb-4 text-primary" size={48} />
            <h3 className="text-xl font-semibold mb-2">{integration.title}</h3>
            <p className="text-muted-foreground">{integration.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
