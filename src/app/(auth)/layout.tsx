import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="font-bold text-4xl">hello world.</h1>
      <p className="">
        welcome to{" "}
        <Link href="/" className="font-bold">
          listify
        </Link>{" "}
        todo app.👋
      </p>
      {children}
    </section>
  );
}
