import z from "zod";
import { loginSchema, registerSchema } from "../schema";

export type LoginInputs = z.infer<typeof loginSchema>;

export type RegisterInputs = z.infer<typeof registerSchema>;

export interface AuthContainerProps {
  children: React.ReactNode;
  Title: "Login" | "Register";
}

export interface User {
  _id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  session: string;
  iat: number;
  exp: number;
}
