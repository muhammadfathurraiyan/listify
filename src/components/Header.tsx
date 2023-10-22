"use client";
import { usePathname } from "next/navigation";
import Button from "./Button";

const Header = () => {
  const path = usePathname();
  return (
    <header
      className={`absolute top-4 flex items-center justify-between w-11/12 ${
        path === "/login" || path === "/register" ? "hidden" : ""
      }`}
    >
      <h1 className="text-3xl font-bold">listify.</h1>
      <div className="flex gap-5 items-center">
        <p className="max-sm:hidden">
          support developer with <br /> a glass of coffee? ☕
        </p>
        <Button color="orange" text="Donate🚀" />
      </div>
    </header>
  );
};

export default Header;
