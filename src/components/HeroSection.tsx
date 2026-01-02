import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EnquiryForm from "./EnquiryForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary-foreground/20">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Fastest Courier Service in Mumbai & Pan India</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Fast & Reliable{" "}
              <span className="text-gradient">Courier Service</span>{" "}
              Near You
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
              Trackon Courier delivers your parcels safely and on time. Same-day delivery, express shipping, and doorstep pickup available across Mumbai and all major cities.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-medium">500+ Cities</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:8097512951" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now: 8097512951
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#services" className="flex items-center gap-2">
                  Our Services
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Enquiry Form */}
          <div className="lg:justify-self-end w-full max-w-md" style={{ animationDelay: "0.2s" }}>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
