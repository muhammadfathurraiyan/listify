import Link from "next/link";

type TChildren = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: TChildren) {
  return (
    <>
      <h1 className="font-bold text-4xl">hello world.</h1>
      <p className="">
        welcome to{" "}
        <Link href="/" className="font-bold">
          listify
        </Link>{" "}
        todo app.👋
      </p>
      {children}
    </>
  );
}
