import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LocalProofBanner from "@/components/LocalProofBanner";
import SEOHead from "@/components/SEOHead";
import FloatingButtons from "@/components/FloatingButtons";
import SectionSkeleton from "@/components/SectionSkeleton";

// Lazy load below-fold components for faster initial load
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const AreasSection = lazy(() => import("@/components/AreasSection"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const LocalTrust = lazy(() => import("@/components/LocalTrust"));
const CustomerReviews = lazy(() => import("@/components/CustomerReviews"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <>
      <SEOHead />
      <Header />
      <main>
        <HeroSection />
        <LocalProofBanner />
        <Suspense fallback={<SectionSkeleton />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <AreasSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <LocalTrust />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <CustomerReviews areaName="Andheri West & Mumbai" />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <FloatingButtons />
    </>
  );
};

export default Index;
