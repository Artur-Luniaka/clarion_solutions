import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import JoinSection from "@/components/JoinSection";
import OurService from "@/components/OurService";
import SeoPartnerSection from "@/components/SeoPartnerSection";
import WhyClarionSol from "@/components/WhyClarionSol";
import FormAndContactSection from "@/components/FormAndContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container w-[360px] md:w-[768px] lg:w-[1280px]">
        <HeroSection />
        <SeoPartnerSection />
        <WhyClarionSol />
        <OurService />
        <JoinSection />
        <FormAndContactSection />
      </main>
      <Footer />
    </>
  );
}
