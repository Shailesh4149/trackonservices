import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AreasSection from "@/components/AreasSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FloatingButtons from "@/components/FloatingButtons";
import StatsInfographic from "@/components/infographics/StatsInfographic";
import ProcessFlow from "@/components/infographics/ProcessFlow";
import DeliveryTimeChart from "@/components/infographics/DeliveryTimeChart";

const Index = () => {
  return (
    <>
      <SEOHead />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        
        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container">
            <StatsInfographic />
          </div>
        </section>

        <AreasSection />
        
        {/* Process Flow Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              How Our Courier Service Works
            </h2>
            <ProcessFlow />
          </div>
        </section>

        <WhyChooseUs />

        {/* Delivery Time Chart */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Estimated Delivery Times
            </h2>
            <DeliveryTimeChart />
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Index;
