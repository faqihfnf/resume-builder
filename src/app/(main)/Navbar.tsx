"use client";
import ThemeToggle from "@/components/sections/ThemeToggle";
import { UserButton } from "@clerk/nextjs";
import { CreditCardIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme } = useTheme();
  return (
    <header className="shadow-sm">
      <div className="mx-auto ml-1 flex items-center justify-between p-1">
        <div className="flex items-center">
          <Link href="/">
            <Image src={"/logo.png"} alt="logo" width={60} height={60} />
          </Link>
          <h1 className="-ml-3 bg-gradient-to-r from-purple-500 via-sky-500 to-emerald-500 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
            Resumify.
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: "h-35 w-35",
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Billing"
                labelIcon={<CreditCardIcon className="h-4 w-4" />}
                href="/billing"
              />
            </UserButton.MenuItems>
          </UserButton>
        </div>
      </div>
    </header>
  );
}
