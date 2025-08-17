import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import SubscribeSection from "@/components/SubscribeSection";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <HighlightsSection />
      <SubscribeSection />
    </div>
  );
}
