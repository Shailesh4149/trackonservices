import { Link } from "react-router-dom";
import { Package, Truck, Plane, Clock, Shield, MapPin, ArrowRight } from "lucide-react";

const servicesInfo: Record<string, { icon: typeof Package; title: string; description: string }> = {
  "domestic-courier": {
    icon: Package,
    title: "Domestic Courier",
    description: "Pan India delivery in 1-3 days"
  },
  "international-shipping": {
    icon: Plane,
    title: "International Shipping",
    description: "Ship to 200+ countries worldwide"
  },
  "express-delivery": {
    icon: Truck,
    title: "Express Delivery",
    description: "Urgent delivery in 2-6 hours"
  },
  "same-day-delivery": {
    icon: Clock,
    title: "Same Day Delivery",
    description: "Delivered by evening same day"
  },
  "secure-packaging": {
    icon: Shield,
    title: "Secure Packaging",
    description: "Professional packaging for fragile items"
  },
  "doorstep-pickup": {
    icon: MapPin,
    title: "Doorstep Pickup",
    description: "Free pickup from your location"
  }
};

interface RelatedServicesProps {
  services: string[];
  currentService?: string;
}

const RelatedServices = ({ services, currentService }: RelatedServicesProps) => {
  const filteredServices = services.filter(s => s !== currentService && servicesInfo[s]);

  if (filteredServices.length === 0) return null;

  return (
    <div className="bg-secondary/50 rounded-xl p-6 md:p-8 border border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Related Services
      </h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {filteredServices.map((serviceSlug) => {
          const service = servicesInfo[serviceSlug];
          if (!service) return null;
          const Icon = service.icon;
          
          return (
            <Link
              key={serviceSlug}
              to={`/services/${serviceSlug}`}
              className="group bg-card rounded-lg p-4 border border-border hover:border-accent/50 hover:shadow-card transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-accent-gradient transition-colors">
                <Icon className="w-5 h-5 text-primary group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                Learn More <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedServices;
