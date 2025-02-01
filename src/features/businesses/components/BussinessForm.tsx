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
import { steps } from "@/features/businesses/constants";
import { NewBusiness } from "@/features/businesses/types";
import { addBusiness } from "@/features/businesses/lib/api";
import BusinessFormStep from "./BusinessFormStep";

export default function BusinessForm() {
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
      const newBusiness: NewBusiness = { ...formData };
      await addBusiness(newBusiness);
      router.push("/dashboard/businesses");
    } catch (error) {
      console.error("Failed to add business:", error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Add New Business - Step {currentStep + 1}</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <BusinessFormStep
              step={steps[currentStep]}
              formData={formData}
              handleInputChange={handleInputChange}
            />
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
