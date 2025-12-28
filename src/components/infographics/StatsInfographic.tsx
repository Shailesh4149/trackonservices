import { Package, MapPin, Users, Clock, Star, Truck } from "lucide-react";

const stats = [
  {
    icon: Package,
    value: "50,000+",
    label: "Parcels Delivered",
    color: "text-accent"
  },
  {
    icon: MapPin,
    value: "500+",
    label: "Cities Covered",
    color: "text-primary"
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Customers",
    color: "text-accent"
  },
  {
    icon: Clock,
    value: "99%",
    label: "On-Time Delivery",
    color: "text-primary"
  },
  {
    icon: Star,
    value: "4.8/5",
    label: "Customer Rating",
    color: "text-accent"
  },
  {
    icon: Truck,
    value: "24/7",
    label: "Support Available",
    color: "text-primary"
  }
];

const StatsInfographic = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Trusted by Thousands Across India
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our numbers speak for themselves. Here's why customers choose Trackon Courier.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-5 text-center border border-border hover:shadow-card transition-shadow"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-secondary flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsInfographic;
