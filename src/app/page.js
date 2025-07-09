import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container w-[360px] md:w-[768px] lg:w-[1280px]">
        <HeroSection />
      </main>
    </>
  );
}
