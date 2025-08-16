import Faq from "@/components/sections/Faq";
import FooterLandingPage from "@/components/sections/FooterLandingPage";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import PlusPoint from "@/components/sections/PlusPoint";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <Hero />
      <PlusPoint />
      <Faq />
      <FooterLandingPage />
    </div>
  );
}
