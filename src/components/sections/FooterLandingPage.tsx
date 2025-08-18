import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

function FooterLandingPage() {
  return (
    <footer className="bg-cyan-950">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-start">
              <Link href="/" className="flex items-center">
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={60}
                  height={60}
                  className="-ml-3"
                />
                <h1 className="-ml-3 bg-gradient-to-r from-purple-500 via-sky-500 to-emerald-500 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
                  Resumefly.
                </h1>
              </Link>
            </div>
            <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
              Resumefly is a simple and easy way to create a resume. You can
              build resume effortlessly.
            </p>
            {/* Social links Start */}
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <Link
                  href="https://www.facebook.com/faqihnurfahmi"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-indigo-600"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebookF className="size-6" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/faqih.fnf"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-indigo-600"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="size-6" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/faqihfnf"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-indigo-600"
                >
                  <span className="sr-only">GitHub</span>
                  <FaGithub className="size-6" />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.linkedin.com/in/faqih-nur-fahmi-b51bb1ab/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white transition hover:text-indigo-600"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="size-6" />
                </Link>
              </li>
            </ul>
            {/* Social links End */}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Our Services</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="relative text-white/70 transition hover:text-indigo-600"
                    href="/"
                  >
                    <span>Mock Interview</span>
                    <span className="absolute top-[-6px] ml-1 text-xs font-bold text-yellow-400">
                      soon
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="relative text-white/70 transition hover:text-indigo-600"
                    href="https://resumeaizer.my.id"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>CV Review</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="relative text-white/70 transition hover:text-indigo-600"
                    href="/resumes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>CV Maker</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Helpful Links</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-white/70 transition hover:text-indigo-600"
                    href="#faq"
                  >
                    {" "}
                    FAQs{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/628996423135" // Menggunakan wa.me untuk tautan langsung
                    target="_blank" // Membuka di tab baru
                    rel="noopener noreferrer" // Untuk keamanan
                    className="text-white/70 transition hover:text-indigo-600"
                  >
                    {" "}
                    Support{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/628996423135" // Menggunakan wa.me untuk tautan langsung
                    target="_blank" // Membuka di tab baru
                    rel="noopener noreferrer" // Untuk keamanan
                    className="group flex items-center justify-center gap-1.5 sm:justify-start"
                  >
                    <span className="text-white/70 transition group-hover:text-indigo-600">
                      Live Chat
                    </span>
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Me</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <MdOutlineEmail className="size-5 shrink-0 text-white" />
                    <span className="flex-1 text-white/70">
                      faqih.fnf@gmail.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <FaPhone className="size-4 shrink-0 text-white" />
                    <span className="flex-1 text-white/70">
                      +62 899 6423 135
                    </span>
                  </a>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <IoLocation className="size-5 shrink-0 text-white" />

                  <address className="-mt-0.5 flex-1 not-italic text-white/70">
                    Kampung Makasar, Jakarta Timur, <br /> DKI Jakarta -
                    Indonesia
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-300">
              Created with ❤️ by{" "}
              <span className="text-md sm:text-md bg-gradient-to-l from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text font-extrabold text-transparent">
                Faqih Nur Fahmi
              </span>
            </p>
            <p className="mt-4 text-sm text-gray-300 sm:order-first sm:mt-0">
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterLandingPage;
