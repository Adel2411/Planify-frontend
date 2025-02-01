import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface BusinessFormStepProps {
  step: { title: string; fields: string[] };
  formData: { [key: string]: string };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default function BusinessFormStep({
  step,
  formData,
  handleInputChange,
}: BusinessFormStepProps) {
  return (
    <>
      {step.fields.map((field) => (
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
              value={formData[field]}
              onChange={handleInputChange}
              className="w-full"
            />
          ) : (
            <Input
              type="text"
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              className="w-full"
            />
          )}
        </div>
      ))}
    </>
  );
}
