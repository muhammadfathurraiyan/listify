"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="flex items-center justify-between px-8 max-sm:px-4 py-4 border-b border-zinc-800 ">
      <Link href={session ? "/home" : "/"}>
        <h1 className="text-3xl font-bold">listify.</h1>
      </Link>
      <div className="flex gap-5 items-center">
        <Link
          href="https://linktr.ee/muhammadfathurraiyan"
          className="bg-zinc-800 w-fit max-sm:hidden"
        >
          <span
            className={`bg-orange-500 justify-center border border-zinc-800 flex items-center duration-200 px-4 py-2 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0`}
          >
            donate☕
          </span>
        </Link> 
        {session ? (
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-zinc-800 w-fit"
          >
            <span
              className={`bg-fuchsia-500 justify-center border border-zinc-800 flex items-center duration-200 px-4 py-2 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0`}
            >
              signout🔒
            </span>
          </button>
        ) : (
          <Link href="/signin" className="bg-zinc-800 w-fit">
            <span
              className={`bg-blue-500 justify-center border border-zinc-800 flex items-center duration-200 px-4 py-2 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0`}
            >
              signin🔓
            </span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
