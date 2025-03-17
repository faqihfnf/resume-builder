import Faq from "@/components/Faq";
import FooterLandingPage from "@/components/FooterLandingPage";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlusPoint from "@/components/PlusPoint";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <PlusPoint />
      <Faq />
      <FooterLandingPage />
    </div>
  );
}
