"use server";
import prisma from "./db";
import { revalidatePath } from "next/cache";

export const createTodo = async (data: FormData) => {
  const title: string = data.get("title")?.valueOf() as string;
  const description: string = data.get("description")?.valueOf() as string;

  await prisma.todo.create({
    data: {
      title,
      description,
    },
  });

  revalidatePath("/");
};

export const deleteTodo = async (data: FormData) => {
  const id: string = data.get("id")?.valueOf() as string;
  await prisma.todo.delete({ where: { id } });
  revalidatePath("/");
};
