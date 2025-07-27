"use client";
import { Brain, FileText, Zap, Target, Download, Sparkles } from "lucide-react";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function PlusPoint() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });

  return (
    <section className="overflow-hidden">
      {/* Enhanced Background Elements - Seamless continuation */}
      <div className="absolute inset-0">
        {/* Purple gradient */}
        <div className="absolute left-0 mt-48 h-1/3 w-full bg-gradient-to-tl from-violet-300 via-transparent to-pink-300 blur-[120px]"></div>
        {/* Blue gradient */}
        <div className="absolute right-0 mt-48 h-1/6 w-[60%] bg-gradient-to-tr from-cyan-200 via-sky-200 to-green-200 blur-[110px]"></div>

        {/* Grid pattern overlay */}
        {/* <div className="bg-grid-slate-100 absolute inset-0 opacity-20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div> */}
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-6 py-2 text-sm font-medium text-blue-700 shadow-lg backdrop-blur-sm">
            <Sparkles size={16} className="text-blue-500" />
            Why Choose Our AI Resume Builder
          </div> */}

          <h2 className="mb-6 text-3xl font-black sm:text-4xl lg:text-5xl">
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>

          <p className="text-md font-medium leading-relaxed text-slate-600 sm:text-lg">
            Experience the future of resume building with our intelligent
            features designed to help you land your dream job effortlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* AI Content Generation */}
          <div
            className="group relative rounded-3xl border border-white/20 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-blue-300 hover:shadow-2xl"
            data-aos="fade-down-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-3 shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  AI Content Generation
                </h3>
              </div>
              <p className="leading-relaxed text-slate-600">
                Our advanced AI analyzes your experience and generates
                compelling, professional content tailored to your industry and
                role, ensuring your resume stands out to recruiters.
              </p>
            </div>
          </div>

          {/* Smart Template Selection */}
          <div
            className="group relative rounded-3xl border border-white/20 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-purple-300 hover:shadow-2xl"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 p-3 shadow-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Smart Template Selection
                </h3>
              </div>
              <p className="leading-relaxed text-slate-600">
                Choose from professionally designed, ATS-friendly templates. Our
                AI recommends the perfect layout based on your career level and
                industry requirements.
              </p>
            </div>
          </div>

          {/* ATS Optimization */}
          <div
            className="group relative rounded-3xl border border-white/20 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-emerald-300 hover:shadow-2xl"
            data-aos="fade-down-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 p-3 shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  ATS Optimization
                </h3>
              </div>
              <p className="leading-relaxed text-slate-600">
                Automatically optimize your resume for Applicant Tracking
                Systems. Our AI ensures proper formatting, keyword placement,
                and structure to pass initial screening filters.
              </p>
            </div>
          </div>

          {/* Real-time Suggestions */}
          <div
            className="group relative rounded-3xl border border-white/20 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-cyan-300 hover:shadow-2xl"
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-3 shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Real-time AI Suggestions
                </h3>
              </div>
              <p className="leading-relaxed text-slate-600">
                Get instant, intelligent recommendations as you build. Our AI
                provides real-time feedback on content, formatting, and keyword
                optimization to maximize your resume's impact.
              </p>
            </div>
          </div>

          {/* Multiple Format Export */}
          <div
            className="group relative rounded-3xl border border-white/20 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-indigo-300 hover:shadow-2xl"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-3 shadow-lg">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Multiple Export Formats
                </h3>
              </div>
              <p className="leading-relaxed text-slate-600">
                Download your resume in various formats including PDF, Word, and
                plain text. Each format is optimized for different application
                methods and ATS requirements.
              </p>
            </div>
          </div>

          {/* Industry-Specific Optimization */}
          <div
            className="group relative rounded-3xl border border-white/20 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-pink-300 hover:shadow-2xl"
            data-aos="fade-up-left"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-r from-pink-500 to-rose-600 p-3 shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Industry-Specific AI
                </h3>
              </div>
              <p className="leading-relaxed text-slate-600">
                Our AI understands different industries and roles. Get tailored
                content suggestions, relevant keywords, and formatting that
                matches your target job market perfectly.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-6 py-2 text-sm font-medium text-emerald-700 shadow-lg backdrop-blur-sm">
            <Zap size={16} className="text-emerald-500" />
            Ready to Build Your Perfect Resume?
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlusPoint;
