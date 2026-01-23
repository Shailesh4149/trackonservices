import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LocalProofBanner from "@/components/LocalProofBanner";
import ServicesSection from "@/components/ServicesSection";
import AreasSection from "@/components/AreasSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocalTrust from "@/components/LocalTrust";
import CustomerReviews from "@/components/CustomerReviews";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <>
      <SEOHead />
      <Header />
      <main>
        <HeroSection />
        <LocalProofBanner />
        <ServicesSection />
        <AreasSection />
        <WhyChooseUs />
        <LocalTrust />
        <CustomerReviews areaName="Andheri West & Mumbai" />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Index;
