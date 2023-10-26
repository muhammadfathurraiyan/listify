"use client";
import Link from "next/link";
import { createAccount } from "@/action/action";
import { SignUpSchema } from "@/lib/types";
import { useState } from "react";
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SignUpForm = () => {
  const [error, setError] = useState("");
  const { pending } = useFormStatus();

  const clientSide = async (data: FormData) => {
    // construct new account
    const newAccount = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    };

    // client side validation
    const result = SignUpSchema.safeParse(newAccount);
    if (!result.success) {
      let errorMessage = "";
      result.error.issues.forEach((issue) => {
        errorMessage = errorMessage + issue.message;
      });
      // reset form
      setError(errorMessage);
      return;
    } else {
      setError("");
    }

    const response = await createAccount(result.data);
    if (response?.error) {
      // output error message
      setError(response.error);
    }
  };
  return (
    <form
      action={clientSide}
      className="mt-4 flex flex-col justify-center gap-2"
    >
      {error && <p className="text-red-500">{error}</p>}
      <label htmlFor="name">name :</label>
      <input
        name="name"
        type="name"
        className="bg-zinc-100 border border-zinc-800 p-1"
      />
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
        className="bg-zinc-100 border border-zinc-800 p-1"
      />
      <label htmlFor="confirmPassword">confirm password :</label>
      <input
        name="confirmPassword"
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
            {pending ? "reidirecting..." : "signup🔐"}
          </span>
        </button>
        <p>-----or-----</p>
        <Link
          href="/signin"
          className="underline hover:no-underline duration-200"
        >
          already have account? login here..
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
