import z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be at most 100 characters")
    .regex(/[a-zA-Z]/, "Password must contain at least one letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

export const registerSchema = loginSchema
  .extend({
    fullName: z
      .string()
      .min(4, "Full name must be at least 4 characters")
      .max(50, "Full name must be at most 50 characters")
      .regex(/^[a-zA-Z ]+$/, "Full name must contain only letters and spaces")
      .refine((name) => !name.startsWith(" ") && !name.endsWith(" "), {
        message: "Full name must not start or end with a space",
      }),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    // under which field should the error be displayed
    path: ["passwordConfirmation"],
  });
