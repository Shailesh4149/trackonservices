import { Package, Truck, Plane, Clock, Shield, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Package,
    title: "Domestic Courier",
    description: "Fast and reliable courier services across India. Same-day and next-day delivery options available.",
  },
  {
    icon: Plane,
    title: "International Shipping",
    description: "Send parcels worldwide with tracked international courier services to 200+ countries.",
  },
  {
    icon: Truck,
    title: "Express Delivery",
    description: "Urgent deliveries with express courier services. Get your package delivered within hours.",
  },
  {
    icon: Clock,
    title: "Same Day Delivery",
    description: "Book before 2 PM for same-day courier delivery within city limits in Mumbai.",
  },
  {
    icon: Shield,
    title: "Secure Packaging",
    description: "Professional packaging services for fragile items. 100% safe delivery guaranteed.",
  },
  {
    icon: MapPin,
    title: "Doorstep Pickup",
    description: "Free doorstep pickup for your convenience. Schedule a pickup at your preferred time.",
  },
];

const ServicesSection = () => {
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
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-gradient transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="tel:9864251628" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call to Enquire
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
