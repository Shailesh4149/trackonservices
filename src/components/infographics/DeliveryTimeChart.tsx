import { Clock, Truck, Plane, Zap } from "lucide-react";

const deliveryOptions = [
  {
    icon: Zap,
    service: "Express",
    time: "2-6 hours",
    coverage: "Mumbai",
    price: "₹150+",
    color: "bg-accent",
    width: "w-[20%]"
  },
  {
    icon: Clock,
    service: "Same Day",
    time: "By 8 PM",
    coverage: "Mumbai",
    price: "₹100+",
    color: "bg-primary",
    width: "w-[35%]"
  },
  {
    icon: Truck,
    service: "Domestic",
    time: "1-3 days",
    coverage: "Pan India",
    price: "₹50+",
    color: "bg-primary/70",
    width: "w-[60%]"
  },
  {
    icon: Plane,
    service: "International",
    time: "3-7 days",
    coverage: "200+ Countries",
    price: "₹1500+",
    color: "bg-accent/70",
    width: "w-full"
  }
];

const DeliveryTimeChart = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Delivery Time Comparison
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the right service based on your delivery urgency.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {deliveryOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div key={index} className="bg-card rounded-lg p-4 border border-border">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-10 h-10 rounded-lg ${option.color} flex items-center justify-center text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-foreground">{option.service}</div>
                    <div className="text-sm text-muted-foreground">{option.coverage}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-foreground">{option.time}</div>
                    <div className="text-sm text-accent">{option.price}</div>
                  </div>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${option.color} rounded-full ${option.width} transition-all duration-500`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          * Delivery times are estimates and may vary based on location and conditions
        </p>
      </div>
    </section>
  );
};

export default DeliveryTimeChart;
