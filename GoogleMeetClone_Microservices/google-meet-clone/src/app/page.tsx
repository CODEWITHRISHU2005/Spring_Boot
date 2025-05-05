import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { GeminiSection } from "@/components/GeminiSection";
import { ConnectSection } from "@/components/ConnectSection";
import { DeviceSection } from "@/components/DeviceSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <GeminiSection />
        <ConnectSection />
        <DeviceSection />
        <FeaturesSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
