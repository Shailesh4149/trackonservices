import { Package, Truck, Plane, Clock, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Clock,
    title: "Same Day Courier Service",
    slug: "same-day-delivery",
    description: "Book before 2 PM for same-day courier delivery within Andheri West and nearby Mumbai areas.",
  },
  {
    icon: Truck,
    title: "Express Courier Service",
    slug: "express-delivery",
    description: "Urgent deliveries with express courier services. Get your package delivered within hours across Mumbai.",
  },
  {
    icon: Package,
    title: "Pan India Courier Service",
    slug: "domestic-courier",
    description: "Reliable courier services across India with tracking. Next-day delivery to major cities.",
  },
  {
    icon: Plane,
    title: "International Courier Service",
    slug: "international-shipping",
    description: "Send parcels worldwide with tracked international courier services to 200+ countries.",
  },
  {
    icon: MapPin,
    title: "Airport Courier (Terminal 1 & 2)",
    slug: "doorstep-pickup",
    description: "Quick courier pickup and delivery at Mumbai Airport Terminal 1 and Terminal 2. Ideal for urgent shipments.",
  },
  {
    icon: Shield,
    title: "Secure Document Courier",
    slug: "secure-packaging",
    description: "Safe handling and delivery of important documents with proof of delivery and tracking.",
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
            From local same-day deliveries to international shipping, Trackon Courier provides reliable solutions for all your courier needs in Andheri West and across Mumbai.
          </p>
        </header>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
          {services.map((service, index) => (
            <li key={service.title}>
              <Link
                to={`/services/${service.slug}`}
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
