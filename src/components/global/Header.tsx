"use client";
import { usePathname } from "next/navigation";
import Button from "../Button";

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
          <Button color="orange" text="donate☕" />
        </div>
        <Button color="fuchsia" text="logout🔒" />
      </div>
    </header>
  );
};

export default Header;
