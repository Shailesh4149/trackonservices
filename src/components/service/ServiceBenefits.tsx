import { Star, Shield, Clock, MapPin, Truck, CreditCard, Phone, CheckCircle } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  benefits: Benefit[];
}

const iconMap: Record<string, typeof Star> = {
  "Coverage": MapPin,
  "Pan India": MapPin,
  "Countries": MapPin,
  "Price": CreditCard,
  "Affordable": CreditCard,
  "Rate": CreditCard,
  "Track": MapPin,
  "Real-Time": Clock,
  "Live": Clock,
  "Door": Truck,
  "Pickup": Truck,
  "Fast": Clock,
  "Speed": Clock,
  "Hour": Clock,
  "Delivery": Truck,
  "Priority": Star,
  "Dedicated": Star,
  "Support": Phone,
  "Customs": Shield,
  "Safe": Shield,
  "Secure": Shield,
  "Protect": Shield,
  "Damage": Shield,
  "Professional": CheckCircle,
  "Quality": Star,
  "Peace": CheckCircle,
  "Time": Clock,
  "Free": CreditCard,
  "Flexible": Clock,
  "Convenience": Star,
  "Guaranteed": CheckCircle,
};

const getIcon = (title: string) => {
  for (const key in iconMap) {
    if (title.toLowerCase().includes(key.toLowerCase())) {
      return iconMap[key];
    }
  }
  return Star;
};

const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
  return (
    <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Key Benefits
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = getIcon(benefit.title);
          return (
            <div key={index} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceBenefits;
