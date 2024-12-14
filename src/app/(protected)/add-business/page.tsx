"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addBusiness } from "@/features/dashboard/utils";
import { NewBusiness } from "@/features/dashboard/types";

const steps = [
  { title: "Basic Information", fields: ["name", "industry"] },
  { title: "Target Audience", fields: ["targetAudience"] },
  { title: "Goals", fields: ["goals"] },
  { title: "Budget & Timeline", fields: ["budget", "timeline"] },
];

export default function AddBusinessPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    targetAudience: "",
    goals: "",
    budget: "",
    timeline: "",
  });
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newBusiness: NewBusiness = {
        name: formData.name,
        industry: formData.industry,
        targetAudience: formData.targetAudience,
        goals: formData.goals,
        budget: formData.budget,
        timeline: formData.timeline,
      };
      await addBusiness(newBusiness);
      router.push("/dashboard");
    } catch (error) {
      console.error("Failed to add business:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Add New Business - Step {currentStep + 1}</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            {steps[currentStep].fields.map((field) => (
              <div key={field} className="mb-4">
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === "goals" ? (
                  <Textarea
                    id={field}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                ) : (
                  <Input
                    type="text"
                    id={field}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                )}
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            {currentStep === steps.length - 1 ? (
              <Button type="submit">Submit</Button>
            ) : (
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
