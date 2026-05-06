import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import DashboardPreview from "@/components/DashboardPreview";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
