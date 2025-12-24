import { Package, Truck, Plane, Clock, Shield, MapPin, Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const services = [
  {
    icon: Package,
    title: "Domestic Courier",
    description: "Fast and reliable courier services across India. Same-day and next-day delivery options available.",
    details: "Our domestic courier service covers all major cities and towns across India. We offer flexible pickup and delivery options with real-time tracking. Whether you need to send documents, parcels, or bulk shipments, we ensure timely and secure delivery.",
    features: ["Pan India coverage", "Real-time tracking", "Doorstep pickup", "Insurance available", "COD facility"],
  },
  {
    icon: Plane,
    title: "International Shipping",
    description: "Send parcels worldwide with tracked international courier services to 200+ countries.",
    details: "Ship your packages to over 200 countries worldwide with our reliable international courier service. We handle customs documentation and ensure your shipments reach their destination safely and on time.",
    features: ["200+ countries", "Customs clearance", "Express & economy options", "Door-to-door delivery", "Online tracking"],
  },
  {
    icon: Truck,
    title: "Express Delivery",
    description: "Urgent deliveries with express courier services. Get your package delivered within hours.",
    details: "For time-sensitive shipments, our express delivery service guarantees the fastest possible delivery. Perfect for urgent documents, medical supplies, or any critical packages that need immediate attention.",
    features: ["Same-day delivery", "Priority handling", "Dedicated vehicles", "Live updates", "24/7 support"],
  },
  {
    icon: Clock,
    title: "Same Day Delivery",
    description: "Book before 2 PM for same-day courier delivery within city limits in Mumbai.",
    details: "Need it delivered today? Book before 2 PM and we'll deliver your package within the same day across Mumbai city limits. Ideal for last-minute gifts, important documents, or urgent business needs.",
    features: ["Delivery by evening", "Mumbai city coverage", "Quick pickup", "SMS notifications", "Proof of delivery"],
  },
  {
    icon: Shield,
    title: "Secure Packaging",
    description: "Professional packaging services for fragile items. 100% safe delivery guaranteed.",
    details: "We provide professional packaging solutions for all types of items, especially fragile and valuable goods. Our trained staff uses quality materials to ensure your items are protected during transit.",
    features: ["Bubble wrap & foam", "Custom boxes", "Fragile item handling", "Damage protection", "Free assessment"],
  },
  {
    icon: MapPin,
    title: "Doorstep Pickup",
    description: "Free doorstep pickup for your convenience. Schedule a pickup at your preferred time.",
    details: "No need to visit our office. We offer free doorstep pickup service across Mumbai. Schedule a pickup at your preferred time slot and our executive will collect the package from your location.",
    features: ["Free pickup", "Flexible timing", "Scheduled pickups", "Multiple pickups", "Corporate accounts"],
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const phoneNumber = "9864251628";

  const handleWhatsAppClick = (serviceName: string) => {
    const message = encodeURIComponent(`Hi, I want to enquire about ${serviceName} service.`);
    window.open(`https://web.whatsapp.com/send?phone=91${phoneNumber}&text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-accent font-semibold mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Courier Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From local deliveries to international shipping, we provide end-to-end courier services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              onClick={() => setSelectedService(service)}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-gradient transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <span className="text-accent font-semibold text-sm">Click for details →</span>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-lg">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <selectedService.icon className="w-8 h-8 text-primary" />
                </div>
                <DialogTitle className="text-2xl">{selectedService.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedService.details}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-3">Get in Touch:</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="accent" className="flex-1" asChild>
                    <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call: {phoneNumber}
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleWhatsAppClick(selectedService.title)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
