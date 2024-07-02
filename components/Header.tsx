import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { checkUser } from "@/lib/checkUser";

export const Header = () => {
  const user = checkUser();

  return (
    <div className="container flex items-center justify-between mx-auto p-4">
      <div>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
        </Link>
      </div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};
