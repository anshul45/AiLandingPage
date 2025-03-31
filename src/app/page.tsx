
import AiBenefits from "@/components/AiBenefits";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import PreBuiltTools from "@/components/PreBuiltTools";
import TrustedBrands from "@/components/TrustedBrands";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Navbar />
      <Hero />
      <Overview />
      <TrustedBrands />
      <Hero2 />
      <AiBenefits />
      <PreBuiltTools />
    </div>
  );
}
