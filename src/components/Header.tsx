import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto flex h-16 gap-8 p-2 sm:justify-between">
        <div className="flex gap-2">
          <Link href="/">
            {/* <Image src={"/images/logo.png"} alt="logo" width={60} height={60} /> */}
          </Link>
          <h1 className="bg-gradient-to-l from-sky-600 via-violet-600 to-pink-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
            ResumeAi.
          </h1>
        </div>
        <div className="flex gap-4">
          <ThemeToggle />
          {/* <Link
            className="hidden items-center rounded-md border border-purple-600 bg-purple-100 px-2 text-sm font-semibold text-purple-600 transition hover:bg-gradient-to-bl hover:from-purple-200 hover:via-violet-200 hover:to-indigo-200 hover:text-purple-800 md:flex"
            href="https://tally.so/r/w8pYvx"
          >
            Give Feedback
          </Link> */}
          {/* <Link
            className="hidden items-center rounded-md bg-indigo-600 p-1 px-4 py-3 text-center text-xs font-semibold text-white transition hover:bg-gradient-to-bl hover:from-emerald-300 hover:via-teal-300 hover:to-cyan-300 hover:text-purple-600 sm:flex md:text-sm lg:px-5 lg:py-3"
            href="/resumes"
          >
            Get Started
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
