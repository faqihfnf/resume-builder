import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto mt-0.5 flex h-16 gap-8 p-2 sm:justify-between">
        <Link href="/" className="flex items-center">
          <Image src={"/logo.png"} alt="logo" width={60} height={60} />
          <h1 className="-ml-3 bg-gradient-to-r from-purple-500 via-sky-500 to-emerald-500 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
            Resumefly.
          </h1>
        </Link>
        <div className="flex gap-4"></div>
      </div>
    </header>
  );
}

export default Header;
