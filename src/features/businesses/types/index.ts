import { z } from "zod";
import { BusinessSchema, NewBusinessSchema } from "../schema";

export type Business = z.infer<typeof BusinessSchema>;

export type NewBusiness = z.infer<typeof NewBusinessSchema>;
