"use client";
import { SquareArrowOutUpRight, Video } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["Pertanyaan", "Feedback", "Rating"],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 150,
  });

  return (
    <section className="bg-white-50 relative text-black">
      {/* Main background gradients */}
      <div className="">
        {/* Purple gradient */}
        <div className="absolute left-0 top-0 -z-50 h-1/3 w-full bg-gradient-to-br from-violet-500 via-transparent to-pink-400 blur-[110px]"></div>
        {/* Blue gradient */}
        <div className="absolute right-0 top-0 -z-50 h-1/6 w-[60%] bg-gradient-to-bl from-cyan-500 via-sky-300 to-green-500 blur-[110px]"></div>
      </div>
      <div className="mx-auto mt-4 max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto text-center">
          <h1 className="bg-gradient-to-l from-sky-600 via-purple-600 to-pink-600 bg-clip-text py-10 text-3xl font-extrabold text-transparent sm:text-7xl">
            Interview Smart, Career Start
            <span className="sm:block"> Persiapkan Dirimu Bersama AI </span>
          </h1>
          <h2 className="mb-8 text-4xl font-bold text-indigo-700 sm:text-5xl">
            AI akan memberikan kamu{" "}
            <span className="bg-gradient-to-bl from-sky-600 via-purple-600 to-pink-600 bg-clip-text py-10 font-extrabold text-transparent">
              {typeEffect}
            </span>
            <span className="animate-blink text-purple-700">|</span>
          </h2>
          <p className="mx-auto mt-2 max-w-5xl font-medium text-slate-600 sm:text-lg/relaxed">
            Platform wawancara interaktif dengan AI yang akan membantu kamu
            mempersiapkan diri menghadapi wawancara kerja. <br /> Dengan fitur
            yang lengkap seperti open kamera dan microphone membuat pengalaman
            interviewmu semakin nyata.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-md bg-indigo-600 px-8 py-3 text-lg font-semibold text-white hover:bg-gradient-to-bl hover:from-emerald-300 hover:via-teal-300 hover:to-cyan-300 hover:text-purple-600 sm:w-auto"
              href="/resumes"
            >
              Get Started
              <SquareArrowOutUpRight />
            </Link>
            <Link
              className="flex w-full items-center justify-center gap-4 rounded-md border border-purple-600 bg-purple-50 px-6 py-3 text-lg font-semibold text-purple-600 hover:border-purple-800 hover:bg-gradient-to-bl hover:from-purple-100 hover:via-violet-100 hover:to-indigo-100 focus:outline-none focus:ring active:bg-purple-200 sm:w-auto"
              href="https://wa.me/628996423135" // Menggunakan wa.me untuk tautan langsung
              target="_blank" // Membuka di tab baru
              rel="noopener noreferrer" // Untuk keamanan
            >
              <Video size={30} />
              Video Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
