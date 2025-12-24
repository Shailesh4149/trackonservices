import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AreasSection from "@/components/AreasSection";
import WhyChooseUs from "@/components/WhyChooseUs";
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
        <ServicesSection />
        <AreasSection />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Index;
