import Button from "@/components/Button";
import Link from "next/link";

export default function Login() {
  return (
    <div className="mt-8 bg-zinc-800 w-96 max-sm:w-full">
      <div className="border border-zinc-800 bg-zinc-200 p-4 -translate-x-2 -translate-y-2">
        <h2 className="text-2xl font-bold">login to continue.</h2>
        <form className="mt-4 flex flex-col justify-center gap-2">
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
              className="bg-zinc-100 border border-zinc-800 mb-4 p-1"
            />
          </>
          <div className="flex items-center justify-between">
            <Button color="blue" text="login🔓" />
            <Link
              href="/register"
              className="underline hover:no-underline duration-200 text-sm"
            >
              don't have account? <br /> register here..
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
