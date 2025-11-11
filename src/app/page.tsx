"use client";

import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCarsCarousel from "@/components/FeaturedCarsCarousel";
import CarCategoriesSection from "@/components/CarCategoriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import PricingPlans from "@/components/PricingPlans";
// import AboutSection from "@/components/AboutSection";
import DownloadAppSection from "@/components/DownloadAppSection";
import Footer from "@/components/Footer";
import UnifiedBackground from "@/components/UnifiedBackground";

export default function Home() {
  return (
    <div className='min-h-screen bg-[#0E0E0E]'>
      <UnifiedBackground />
      <Header />
      <main>
        <HeroSection />
        <FeaturedCarsCarousel />
        <CarCategoriesSection />
        <WhyChooseUs />
        <Testimonials />
        <PricingPlans />
        {/* <AboutSection /> */}
        <DownloadAppSection />
      </main>
      <Footer />
    </div>
  );
}
