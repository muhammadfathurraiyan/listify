import SignInForm from "@/components/auth/SignInForm";

export default function Login() {
  return (
    <div className="mt-8 bg-zinc-800 w-96 max-sm:w-full">
      <div className="border border-zinc-800 bg-zinc-200 p-4 -translate-x-2 -translate-y-2">
        <h2 className="text-2xl font-bold">login to continue.</h2>
        <SignInForm />
      </div>
    </div>
  );
}
