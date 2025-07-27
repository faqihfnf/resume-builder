import Faq from "@/components/Faq";
import FooterLandingPage from "@/components/FooterLandingPage";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlusPoint from "@/components/PlusPoint";

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
