import z from "zod";
import { loginSchema, registerSchema } from "../schema";

export type LoginInputs = z.infer<typeof loginSchema>;

export type RegisterInputs = z.infer<typeof registerSchema>;

export interface AuthContainerProps {
  children: React.ReactNode;
  Title: "Login" | "Register";
}

export interface User {
  fullName: string;
  email: string;
  sub: 1 | 2 | 3;
}

export interface AuthResponse {
  message: string;
}
