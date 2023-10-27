"use client";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2 py-12 px-4 border-t border-zinc-800">
      <div className="flex flex-col items-center">
        <p className="font-medium text-lg">get in touch!🤝</p>
        <div className="flex items-center gap-2 text-2xl">
          <Link
            className="hover:text-fuchsia-700 duration-200"
            href="https://instagram.com/muhammadfathurraiyan"
          >
            <FaInstagram />
          </Link>
          <Link
            className="hover:text-blue-700 duration-200"
            href="https://www.linkedin.com/in/muhammadfathurraiyan/"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="hover:text-gray-800 duration-200"
            href="https://github.com/muhammadfathurraiyan"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
      <p className="text-sm text-center">
        &copy;
        <Link
          href="/"
          className="underline font-medium duration-200 hover:no-underline"
        >
          listify.
        </Link>{" "}
        site designed with 💙 by:{" "}
        <Link
          className="font-medium underline duration-200 hover:no-underline"
          href="https://muhammadfathurraiyan.site"
          target="_blank"
        >
          raiyan.
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
