"use client";
import { useEffect, useRef } from "react";
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const TodoInput = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const refTextArea = useRef<HTMLTextAreaElement>(null);
  const { pending } = useFormStatus();
  useEffect(() => {
    if (refInput.current) {
      refInput.current.value = "";
    }
    if (refTextArea.current) {
      refTextArea.current.value = "";
    }
  }, [pending]);
  return (
    <>
      <label htmlFor="title">title :</label>
      <input
        ref={refInput}
        required
        name="title"
        type="text"
        className="bg-zinc-100 border border-zinc-800 p-1"
      />
      <label htmlFor="description">description :</label>
      <textarea
        ref={refTextArea}
        name="description"
        rows={5}
        className="bg-zinc-100 border border-zinc-800 mb-4 p-1"
      />
      <button
        type="submit"
        aria-disabled={pending}
        className="bg-zinc-800 w-fit"
      >
        <span
          className={`${
            pending ? "bg-zinc-500" : "bg-blue-500"
          } border border-zinc-800 flex items-center duration-200 px-4 py-2 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0`}
        >
          {pending ? "loading..." : "add todo!"}
        </span>
      </button>
    </>
  );
};

export default TodoInput;
