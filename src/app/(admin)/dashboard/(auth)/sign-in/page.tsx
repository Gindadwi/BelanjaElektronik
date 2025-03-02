import FormLogin from "./_components/form";

export default function SignInPage() {
  return (
    <main className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <FormLogin />
      </div>
    </main>
  );
}
