import RegisterForm from "@/components/auth/SignUpForm";

export default function Register() {
  return (
    <div className="mt-8 bg-zinc-800 w-96 max-sm:w-full">
      <div className="border border-zinc-800 bg-zinc-200 p-4 -translate-x-2 -translate-y-2">
        <h2 className="text-2xl font-bold">register a new account.</h2>
        <RegisterForm />
      </div>
    </div>
  );
}
