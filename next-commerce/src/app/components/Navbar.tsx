import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
    <Link href={'/'} className="uppercase font-bold text-md h-12 flex items-center">
      Next Store
    </Link>
    <div className="flex items-center gap-8">
      <SignedIn>
        <UserButton/>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="uppercase rounded-md border-gray-400 px-3 py2">
            Fazer login
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  </nav>
  )
}

export default Navbar;