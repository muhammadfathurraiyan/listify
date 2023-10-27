import { z } from "zod";

export const TodoSchema = z.object({
  title: z
    .string()
    .min(1, { message: "title must be at least 1 character long." })
    .max(50, { message: "title must be at most 50 characters long." }),
  description: z.string().optional(),
  belongsTo: z.string(),
});

export const SignUpSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "name must be at least 1 character long. \n" })
      .max(30, { message: "name must be at most 30 characters long. \n" }),
    email: z
      .string()
      .email("invalid email. \n")
      .min(1, { message: "email must be at least 1 character long. \n" })
      .max(30, { message: "email must be at most 30 characters long. \n" }),
    password: z
      .string()
      .min(8, { message: "password must be at least 8 characters long. \n" }),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password must match",
  });

export const SignInSchema = z.object({
  email: z
    .string()
    .email("invalid email. \n")
    .min(1, { message: "email must be at least 1 character long. \n" })
    .max(30, { message: "email must be at most 30 characters long. \n" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters long. \n" }),
});
