import { SignInButton } from "@clerk/nextjs";

export default function Guest() {
  return (
    <main className="w-2/3 mx-auto text-center mt-8">
      <h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Expense tracker
      </h1>
      <p className="mt-2">
        This is a simple expense tracker app that allows you to track your
        expenses.
      </p>
      <div className="mt-8">
        <SignInButton />
      </div>
    </main>
  );
}
