import { z } from "zod";

const BaseBusinessSchema = z.object({
  name: z.string().min(1, "Name is required"),
  industry: z.string().min(1, "Industry is required"),
  targetAudience: z.string().min(1, "Target audience is required"),
  goals: z.string().min(1, "Goals are required"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

const BusinessSchema = BaseBusinessSchema.extend({
  id: z.string().toLowerCase(),
  createdAt: z.string().min(1, "Creation date is required"),
});

const NewBusinessSchema = BaseBusinessSchema;

export { BusinessSchema, NewBusinessSchema };
