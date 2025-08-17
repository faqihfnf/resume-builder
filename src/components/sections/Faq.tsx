import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <section id="faq" className="px-2 py-2 md:px-6 md:py-6">
      <div className="px-4 py-8 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-black sm:text-4xl lg:text-5xl">
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full text-black">
        <AccordionItem
          value="item-1"
          className="mb-2 rounded-lg bg-slate-50/20 px-4"
        >
          <AccordionTrigger className="text-md text-left md:text-lg lg:text-xl">
            Apakah platform ini gratis?
          </AccordionTrigger>
          <AccordionContent className="text-sm font-semibold text-indigo-800 md:text-lg">
            Ya! Platform ini gratis untuk membantu kalian mempersiapkan diri
            menghadapi wawancara kerja.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="mb-2 rounded-lg bg-slate-50/20 px-4"
        >
          <AccordionTrigger className="text-md text-left md:text-lg lg:text-xl">
            Bagaimana cara kerja platform ini?
          </AccordionTrigger>
          <AccordionContent className="text-sm font-semibold text-indigo-800 md:text-lg">
            Platform ini dibuat untuk membantu anda membuat resume yang menarik
            dan profesional. Dilengkapi dengan AI untuk memberikan summary
            singkat tentang diri anda.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="mb-2 rounded-lg bg-slate-50/20 px-4"
        >
          <AccordionTrigger className="text-md text-left md:text-lg lg:text-xl">
            Apakah platform ini cocok untuk semua tingkat pengalaman?
          </AccordionTrigger>
          <AccordionContent className="text-sm font-semibold text-indigo-800 md:text-lg">
            Ya, platform ini dirancang untuk semua pencari kerja, dari fresh
            graduate hingga profesional berpengalaman.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="mb-2 rounded-lg bg-slate-50/20 px-4"
        >
          <AccordionTrigger className="text-md text-left md:text-lg lg:text-xl">
            Apakah ada batasan jumlah resume yang dapat dibuat?
          </AccordionTrigger>
          <AccordionContent className="text-sm font-semibold text-indigo-800 md:text-lg">
            Ya! Untuk saat ini anda dapat membuat maksimal 3 resume.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="mb-2 rounded-lg bg-slate-50/20 px-4"
        >
          <AccordionTrigger className="text-md text-left md:text-lg lg:text-xl">
            Apakah resume akan disimpan?
          </AccordionTrigger>
          <AccordionContent className="text-sm font-semibold text-indigo-800 md:text-lg">
            Ya! Resume yang anda buat akan disimpan. Dan anda dapat mencetak
            atau mengunduhnya dengan mudah.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="">
        {/* Purple gradient */}
        <div className="absolute left-0 -z-50 -mt-64 h-1/3 w-full bg-gradient-to-tl from-violet-300 via-transparent to-pink-300 blur-[120px]"></div>
        {/* Blue gradient */}
        <div className="absolute right-0 -z-50 -mt-64 h-1/6 w-[60%] bg-gradient-to-tr from-cyan-200 via-sky-200 to-green-200 blur-[110px]"></div>
      </div>
    </section>
  );
}

export default Faq;
