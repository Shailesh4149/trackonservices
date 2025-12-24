import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-hero-gradient">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <span className="inline-block text-accent font-semibold mb-4">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Ship? Get in Touch!
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Contact Trackon Courier for all your shipping needs. Our team is available 24/7 to assist you with pickups, deliveries, and enquiries.
            </p>

            <div className="space-y-6">
              <a href="tel:9864251628" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-accent-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/70">Call Us Now</div>
                  <div className="text-2xl font-bold">9864251628</div>
                </div>
              </a>

              <a href="mailto:info@trackoncourier.com" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20 group-hover:bg-primary-foreground/20 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/70">Email Us</div>
                  <div className="text-lg font-semibold">info@trackoncourier.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/70">Head Office</div>
                  <div className="text-lg font-semibold">Mumbai, Maharashtra, India</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/70">Working Hours</div>
                  <div className="text-lg font-semibold">24/7 Available</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-elevated">
            <h3 className="text-2xl font-bold text-foreground mb-2">Quick Enquiry</h3>
            <p className="text-muted-foreground mb-6">Send us a WhatsApp message for instant response</p>
            
            <Button 
              variant="accent" 
              size="lg" 
              className="w-full mb-4"
              asChild
            >
              <a 
                href={`https://wa.me/919864251628?text=${encodeURIComponent("Hi, I want to enquire about courier services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="w-full"
              asChild
            >
              <a href="tel:9864251628" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call: 9864251628
              </a>
            </Button>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Or fill out the enquiry form above for a detailed quote
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
