import { Package, Truck, Plane, Clock, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Clock,
    title: "Same Day Courier Service",
    href: "/same-day-courier-andheri-west",
    description: "Book before 2 PM for guaranteed same-day delivery in Mumbai.",
  },
  {
    icon: Truck,
    title: "Express Courier Service",
    href: "/express-courier-mumbai",
    description: "Priority handling with 2-6 hour delivery across Mumbai.",
  },
  {
    icon: Package,
    title: "Pan India Courier Service",
    href: "/pan-india-courier",
    description: "Nationwide delivery to 500+ cities with real-time tracking.",
  },
  {
    icon: Plane,
    title: "International Courier Service",
    href: "/international-courier-mumbai",
    description: "Ship to 200+ countries with customs clearance included.",
  },
  {
    icon: MapPin,
    title: "Airport Courier (Terminal 1 & 2)",
    href: "/airport-courier-mumbai",
    description: "Quick pickup and delivery near Mumbai Airport.",
  },
  {
    icon: Shield,
    title: "Secure Document Courier",
    href: "/services/secure-packaging",
    description: "Safe handling of important documents with proof of delivery.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background" aria-labelledby="services-heading">
      <div className="container">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-accent font-semibold mb-4">What We Offer</span>
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Courier Services in Andheri West
          </h2>
          <p className="text-muted-foreground text-lg">
            From local same-day deliveries to international shipping — reliable courier solutions for Andheri West and Mumbai.
          </p>
        </header>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
          {services.map((service, index) => (
            <li key={service.title}>
              <Link
                to={service.href}
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border cursor-pointer block h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-gradient transition-colors duration-300" aria-hidden="true">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <span className="text-accent font-semibold text-sm">Learn More →</span>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
