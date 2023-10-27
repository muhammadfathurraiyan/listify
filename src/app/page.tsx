import React from "react";
import Illustration from "../../public/illustration.svg";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="sm:w-1/2 mb-2">
        <h1 className="font-bold text-5xl max-sm:text-2xl text-center leading-[1.18]">
          listify, manage <span className="underline sm:decoration-[6px]">tasks</span> and{" "}
          <span className="underline sm:decoration-[6px]">responsibilities</span>
        </h1>
      </div>
      <p className="mb-4 text-center">
        todo list app that helps people to stay organized and efficient.
      </p>
      <Link href="/signin" className="bg-zinc-800 w-fit mb-4">
        <span className="bg-green-500 justify-center border border-zinc-800 flex items-center duration-200 px-4 py-2 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0">
          get started!🚀
        </span>
      </Link>
      <Image
        src={Illustration}
        alt="illustration"
        width={300}
        height={300}
        className="-mt-2"
      />
    </section>
  );
}
