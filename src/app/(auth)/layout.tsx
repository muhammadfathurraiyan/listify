import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/home");
  }
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4 py-8">
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
