"use server";
import prisma from "../lib/db";
import { revalidatePath } from "next/cache";
import { SignInSchema, SignUpSchema, TodoSchema } from "@/lib/types";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";

export const createTodo = async (newTodo: unknown) => {
  // server side validation
  const result = TodoSchema.safeParse(newTodo);
  if (!result.success) {
    let errorMessage = "";
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });

    return { error: errorMessage };
  }

  await prisma.todo.create({
    data: result.data,
  });

  revalidatePath("/");
};

export const deleteTodo = async (data: FormData) => {
  const id = data.get("id")?.valueOf() as string;
  await prisma.todo.delete({ where: { id } });
  revalidatePath("/");
};

export const createAccount = async (newAccount: unknown) => {
  // server side validation
  const result = SignUpSchema.safeParse(newAccount);
  if (!result.success) {
    let errorMessage = "";
    result.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.message;
    });
    return { error: errorMessage };
  }

  // validate if user email already exist
  const existingUser = await prisma.user.findUnique({
    where: { email: result.data.email },
  });
  if (existingUser) {
    return { error: "user with this email already exists." };
  }

  // hashing password
  const hashedPassword = await bcrypt.hash(result.data.password, 10);

  await prisma.user.create({
    data: {
      name: result.data.name,
      email: result.data.email,
      password: hashedPassword,
    },
  });

  redirect("/signin");
};
