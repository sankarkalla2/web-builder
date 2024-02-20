import { auth } from "@/auth";
import { LoginButton } from "@/components/auth/login-button";
import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { currentUser } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <div className="p-4 flex items-center justify-between relative">
      <aside className="flex items-center gap-x-2">
        <Image
          src={"./assets/plura-logo.svg"}
          height={40}
          width={40}
          alt="logo"
        />
        <span className="text-xl font-bold">Web Agency</span>
      </aside>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-8 justify-center absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>Absolute</Link>
          <Link href={"#"}>Documentation</Link>
          <Link href={"#"}>Features</Link>
        </ul>
      </nav>
      <aside className="flex items-center gap-x-2">
        {user?.id ? (
          <UserButton />
        ) : (
          <LoginButton>
            <Button>LogIn</Button>
          </LoginButton>
        )}
        <ThemeToggle />
      </aside>
    </div>
  );
};

export default Navbar;
