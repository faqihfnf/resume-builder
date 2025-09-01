"use client";
import {
  SquareArrowOutUpRight,
  Sparkles,
  FileText,
  Zap,
  MessageSquareShare,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["Professional", "ATS-Friendly", "Eye-Catching", "Modern"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Purple gradient */}
        <div className="absolute left-0 mt-48 h-1/3 w-full bg-gradient-to-tl from-violet-300 via-transparent to-pink-300 blur-[120px]"></div>
        {/* Blue gradient */}
        <div className="absolute right-0 mt-48 h-1/6 w-[60%] bg-gradient-to-tr from-cyan-200 via-sky-200 to-green-200 blur-[110px]"></div>
        {/* Grid pattern overlay */}
      </div>

      {/* Floating elements */}
      <div className="animation-delay-1000 absolute right-16 top-20 animate-bounce">
        <div className="rounded-2xl border border-white/20 bg-white/80 p-4 shadow-xl backdrop-blur-sm">
          <FileText className="text-blue-600" size={24} />
        </div>
      </div>
      <div className="animation-delay-3000 absolute left-10 top-1/3 animate-bounce">
        <div className="rounded-2xl border border-white/20 bg-white/80 p-4 shadow-xl backdrop-blur-sm">
          <Sparkles className="text-purple-600" size={24} />
        </div>
      </div>
      <div className="animation-delay-2000 absolute bottom-1/3 right-6 animate-bounce">
        <div className="rounded-2xl border border-white/20 bg-white/80 p-4 shadow-xl backdrop-blur-sm">
          <Zap className="text-emerald-600" size={24} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-2">
        <div className="space-y-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-indigo-100 px-3 py-2 text-xs font-medium text-indigo-700 shadow-lg backdrop-blur-sm">
            <Sparkles size={16} className="text-indigo-700" />
            AI-Powered Resume Builder
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-sky-600 via-purple-600 to-pink-700 bg-clip-text text-transparent">
                Build Resume
              </span>
              <span className="mt-2 block bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Effortlessly
              </span>
            </h1>
          </div>

          {/* Dynamic Subheading */}
          <div className="mt-0">
            <h2 className="text-2xl font-bold text-slate-700 sm:text-3xl lg:text-4xl">
              Create{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text font-extrabold text-transparent">
                  {typeEffect}
                </span>
                <span className="animate-pulse font-normal text-blue-600">
                  |
                </span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="mx-auto max-w-4xl">
            <p className="text-lg font-medium leading-relaxed text-slate-600 sm:text-xl">
              Start transform your career with our intelligent resume builder.
              <span className="font-semibold text-blue-600">
                {" "}
                AI-powered suggestions
              </span>
              ,
              <span className="font-semibold text-purple-600">
                {" "}
                ATS optimization
              </span>
              , and
              <span className="font-semibold text-emerald-600">
                {" "}
                professional templates
              </span>{" "}
              - all in one powerful platform.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/resumes"
              className="group relative inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 active:scale-95 sm:w-auto"
            >
              <span className="relative z-10">Get Started</span>
              <SquareArrowOutUpRight
                className="relative z-10 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                size={20}
              />

              {/* Animated background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>

            <Link
              href="https://wa.me/628996423135"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white/80 px-8 py-4 text-lg font-bold text-slate-700 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:shadow-2xl active:scale-95 sm:w-auto"
            >
              <MessageSquareShare
                size={24}
                className="text-blue-600 transition-colors duration-200 group-hover:text-purple-600"
              />
              <span className="transition-colors duration-200 group-hover:text-blue-600">
                Feedback
              </span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
                <span>ATS Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="animation-delay-1000 h-2 w-2 animate-pulse rounded-full bg-blue-500"></div>
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="animation-delay-2000 h-2 w-2 animate-pulse rounded-full bg-purple-500"></div>
                <span>Professional Templates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
