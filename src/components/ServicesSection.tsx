import { Package, Truck, Plane, Clock, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Clock,
    title: "Same Day Courier Service",
    href: "/same-day-courier-andheri-west",
    description: "Book before 2 PM for guaranteed same-day delivery in Mumbai.",
    backgroundImage: "/services/same-day-bg.webp",
    imageAlt: "Clock with speed lines representing same day courier delivery",
  },
  {
    icon: Truck,
    title: "Express Courier Service",
    href: "/express-courier-mumbai",
    description: "Priority handling with 2-6 hour delivery across Mumbai.",
    backgroundImage: "/services/express-bg.webp",
    imageAlt: "Fast delivery truck in motion for express courier service",
  },
  {
    icon: Package,
    title: "Pan India Courier Service",
    href: "/pan-india-courier",
    description: "Nationwide delivery to 500+ cities with real-time tracking.",
    backgroundImage: "/services/pan-india-bg.webp",
    imageAlt: "India map with connected network showing nationwide courier coverage",
  },
  {
    icon: Plane,
    title: "International Courier Service",
    href: "/international-courier-mumbai",
    description: "Ship to 200+ countries with customs clearance included.",
    backgroundImage: "/services/international-bg.webp",
    imageAlt: "Globe with airplane for international shipping and courier service",
  },
  {
    icon: MapPin,
    title: "Airport Courier (Terminal 1 & 2)",
    href: "/airport-courier-mumbai",
    description: "Quick pickup and delivery near Mumbai Airport.",
    backgroundImage: "/services/airport-bg.webp",
    imageAlt: "Mumbai airport terminal for airport courier pickup and delivery",
  },
  {
    icon: Shield,
    title: "Secure Document Courier",
    href: "/services/secure-packaging",
    description: "Safe handling of important documents with proof of delivery.",
    backgroundImage: "/services/secure-bg.webp",
    imageAlt: "Shield and lock protecting secure document courier service",
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
                className="group relative overflow-hidden bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 border border-border cursor-pointer block h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image Layer */}
                <img
                  src={service.backgroundImage}
                  alt={service.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-card via-card/95 to-card/90" />
                
                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer bg-gradient-to-r from-transparent via-accent/5 to-transparent transition-opacity duration-500" />

                <article className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-gradient transition-colors duration-300" aria-hidden="true">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors duration-300 group-hover:animate-icon-float" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <span className="text-accent font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Learn More 
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
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
