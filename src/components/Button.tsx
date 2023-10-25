"use client";
type TButton = {
  text: string;
  color: string;
};

type TColorVariants = Record<string, string>;

const Button = ({ text, color }: TButton) => {
  const colorVariants: TColorVariants = {
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    fuchsia: "bg-fuchsia-500",
    green: "bg-green-500",
  };

  return (
    <button
      className="bg-zinc-800 w-full"
    >
      <span
        className={`${colorVariants[color]} justify-center border border-zinc-800 flex items-center duration-200 px-4 py-2 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0`}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
