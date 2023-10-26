"use client";
import { usePathname } from "next/navigation";

import { signOut } from "next-auth/react";

const Header = () => {
  const path = usePathname();
  return (
    <header
      className={`flex items-center justify-between px-8 max-sm:px-4 py-4 border-b border-zinc-800 ${
        (path === "/signin" || path === "/signup") && "hidden"
      }`}
    >
      <h1 className="text-3xl font-bold">listify.</h1>
      <div className="flex gap-5 items-center">
        <div className="max-sm:hidden">
          <button className="bg-zinc-800 w-fit">
            <span
              className={`bg-orange-500 justify-center border border-zinc-800 flex items-center duration-200 px-4 py-2 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0`}
            >
              donate☕
            </span>
          </button>
        </div>
        <button onClick={() => signOut()} className="bg-zinc-800 w-fit">
          <span
            className={`bg-fuchsia-500 justify-center border border-zinc-800 flex items-center duration-200 px-4 py-2 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0`}
          >
            signout🔒
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
