"use client";
import { UserButton } from "@clerk/nextjs";
import { CreditCardIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        <Link href="/resumes" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={35}
            height={35}
            className="rounded-full"
          />
          <span className="text-xl font-bold tracking-tight">
            Resume Builder
          </span>
        </Link>
        <UserButton
          appearance={{
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
    </header>
  );
}
