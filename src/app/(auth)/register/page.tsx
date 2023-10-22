import Button from "@/components/Button";
import Link from "next/link";

export default function Register() {
  return (
    <div className="mt-8 bg-zinc-800 w-96 max-sm:w-full">
      <div className="border border-zinc-800 bg-zinc-200 p-4 -translate-x-1.5 -translate-y-1.5">
        <h2 className="text-2xl font-bold">register a new account.</h2>
        <form className="mt-4 flex flex-col justify-center gap-2">
          <>
            <label htmlFor="name">name :</label>
            <input
              name="name"
              type="name"
              className="bg-zinc-100 border border-zinc-800 p-1"
            />
          </>
          <>
            <label htmlFor="email">email :</label>
            <input
              name="email"
              type="email"
              className="bg-zinc-100 border border-zinc-800 p-1"
            />
          </>
          <>
            <label htmlFor="password">password :</label>
            <input
              name="password"
              type="password"
              className="bg-zinc-100 border border-zinc-800 p-1"
            />
          </>
          <>
            <label htmlFor="confirm-password">confirm password :</label>
            <input
              name="confirm-password"
              type="password"
              className="bg-zinc-100 border border-zinc-800 mb-4 p-1"
            />
          </>
          <div className="flex items-center justify-between">
            <Button color="blue" text="register" />
            <Link
              href="/login"
              className="underline hover:no-underline duration-200 text-sm"
            >
              already have an account? <br /> login here..
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
