import { Package, Truck, Plane, Clock, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Package,
    title: "Domestic Courier",
    slug: "domestic-courier",
    description: "Fast and reliable courier services across India. Same-day and next-day delivery options available.",
  },
  {
    icon: Plane,
    title: "International Shipping",
    slug: "international-shipping",
    description: "Send parcels worldwide with tracked international courier services to 200+ countries.",
  },
  {
    icon: Truck,
    title: "Express Delivery",
    slug: "express-delivery",
    description: "Urgent deliveries with express courier services. Get your package delivered within hours.",
  },
  {
    icon: Clock,
    title: "Same Day Delivery",
    slug: "same-day-delivery",
    description: "Book before 2 PM for same-day courier delivery within city limits in Mumbai.",
  },
  {
    icon: Shield,
    title: "Secure Packaging",
    slug: "secure-packaging",
    description: "Professional packaging services for fragile items. 100% safe delivery guaranteed.",
  },
  {
    icon: MapPin,
    title: "Doorstep Pickup",
    slug: "doorstep-pickup",
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
            <Link
              key={service.title}
              to={`/services/${service.slug}`}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border cursor-pointer block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <article>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-gradient transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <span className="text-accent font-semibold text-sm">View Details →</span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
