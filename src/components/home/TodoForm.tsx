"use client";
import { createTodo } from "@/action/action";
import { TodoSchema } from "@/lib/types";
import { useRef, useState } from "react";
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const TodoForm = () => {
  const [error, setError] = useState("");
  const ref = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  const clientAction = async (data: FormData) => {
    // construct new todo
    const newTodo = {
      title: data.get("title"),
      description: data.get("description"),
    };

    // client side validation
    const result = TodoSchema.safeParse(newTodo);
    if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
        errorMessage =
          errorMessage + issue.path[0] + ": " + issue.message + ". ";
      });
      // reset form
      setError(errorMessage);
      return;
    } else {
      ref.current?.reset();
      setError("");
    }

    const response = await createTodo(result.data);
    if (response?.error) {
      // output error message
      setError(response.error);
    }
  };

  return (
    <form
      ref={ref}
      action={clientAction}
      className="mt-4 flex flex-col justify-center gap-2"
    >
      {error && <p className="text-red-500">{error}</p>}
      <label htmlFor="title">title :</label>
      <input
        name="title"
        type="text"
        className="bg-zinc-100 border border-zinc-800 p-1"
      />
      <label htmlFor="description">description :</label>
      <textarea
        name="description"
        rows={5}
        className="bg-zinc-100 border border-zinc-800 mb-4 p-1"
      />
      <button
        type="submit"
        aria-disabled={pending}
        className="bg-zinc-800 w-fit"
      >
        <span
          className={`${
            pending ? "bg-zinc-500" : "bg-blue-500"
          } border border-zinc-800 flex items-center duration-200 px-4 py-2 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0`}
        >
          {pending ? "loading..." : "add todo!"}
        </span>
      </button>
    </form>
  );
};

export default TodoForm;
