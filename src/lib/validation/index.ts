import { z } from "zod";

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Too Short" })
    .max(50, { message: "Too Long" }),
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8, { message: "Too Short" }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Too Short" }),
});

export const postValidation = z.object({
  caption: z.string().min(2).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});
