import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
const ContactSection = React.forwardRef<HTMLElement>((props, ref) => {
  return <section id="contact" ref={ref} className="py-16 md:py-24 bg-hero-gradient" aria-labelledby="contact-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <article className="text-primary-foreground">
            <span className="inline-block text-accent font-semibold mb-4">Get in Touch</span>
            <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Contact Trackon Courier Andheri West
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-6 md:mb-8">
              Ready to ship? Contact us for quick pickup and reliable delivery services in Andheri West and across Mumbai. 
              Our team is available to assist you with all your courier needs.
            </p>

            {/* NAP - Name, Address, Phone */}
            <address className="space-y-4 md:space-y-6 not-italic">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20 flex-shrink-0" aria-hidden="true">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-primary-foreground/70">Business Name</p>
                  <p className="text-base md:text-lg font-bold">Trackon Courier </p>
                  <p className="text-sm text-primary-foreground/70 mt-1">Service Area: Andheri West, Mumbai</p>
                </div>
              </div>

              <a href="tel:8097512951" className="flex items-start gap-3 md:gap-4 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent-gradient flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-accent-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-primary-foreground/70">Phone Number</p>
                  <p className="text-xl md:text-2xl font-bold">8097512951</p>
                  <p className="text-sm text-primary-foreground/70 mt-1">Click to call</p>
                </div>
              </a>

              <a href="mailto:sonacourierservices@gmail.com" className="flex items-start gap-3 md:gap-4 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20 group-hover:bg-primary-foreground/20 transition-colors flex-shrink-0" aria-hidden="true">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-primary-foreground/70">Email</p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold break-all">sonacourierservices@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20 flex-shrink-0" aria-hidden="true">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-primary-foreground/70">Office Address</p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold">
                    Shop No. 1/2 Ever Shine Mens Wear, Juhu Versova Link Road, 
                    Kapaswadi Loknayak Nagar, Near Hotel Shankri, Andheri (W) Mumbai
                  </p>
                </div>
              </div>
            </address>
          </article>

          <aside className="bg-card rounded-2xl p-6 md:p-8 shadow-elevated">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Request a Pickup</h3>
            <p className="text-muted-foreground mb-6">Get in touch for instant courier booking and quotes</p>
            
            <Button variant="accent" size="lg" className="w-full mb-4" asChild>
              <a href={`https://wa.me/918097512951?text=${encodeURIComponent("Hi, I want to book a courier pickup from Andheri West.")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Request Pickup on WhatsApp
              </a>
            </Button>

            <Button variant="outline" size="lg" className="w-full" asChild>
              <a href="tel:8097512951" className="flex items-center gap-2">
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call: 8097512951
              </a>
            </Button>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Available for pickup in Andheri West, Bandra, Juhu, DN Nagar, Versova, and Goregaon
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>;
});
ContactSection.displayName = "ContactSection";
export default ContactSection;