"use client";
import Link from "next/link";
import { useState } from "react";
import { SignInSchema } from "@/lib/types";
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const LoginForm = () => {
  const [error, setError] = useState("");
  const { pending } = useFormStatus();

  const clientAction = async (data: FormData) => {
    // construct new signin
    const newSignIn = {
      email: data.get("email"),
      password: data.get("password"),
    };

    // clientside validate
    const result = SignInSchema.safeParse(newSignIn);
    if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
        errorMessage = errorMessage + issue.message;
      });
      setError(errorMessage);
    } else {
      setError("");
    }
  };

  return (
    <form
      action={clientAction}
      className="mt-4 flex flex-col justify-center gap-2"
    >
      {error && <p className="text-red-500">{error}</p>}
      <label htmlFor="email">email :</label>
      <input
        name="email"
        type="email"
        className="bg-zinc-100 border border-zinc-800 p-1"
      />
      <label htmlFor="password">password :</label>
      <input
        name="password"
        type="password"
        autoComplete="on"
        className="bg-zinc-100 border border-zinc-800 mb-4 p-1"
      />
      <div className="flex flex-col items-center justify-between gap-2">
        <button type="submit" className="bg-zinc-800 w-full">
          <span
            className={`${
              pending ? "bg-zinc-500" : "bg-green-500"
            } justify-center border border-zinc-800 flex items-center duration-200 px-4 py-2 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0`}
          >
            {pending ? "reidirecting..." : "signin🔓"}
          </span>
        </button>
        <Link
          href="/signup"
          className="underline hover:no-underline duration-200"
        >
          don't have account? register here..
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
