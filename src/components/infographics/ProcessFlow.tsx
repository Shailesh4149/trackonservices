import { Phone, Package, Truck, MapPin, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Book",
    description: "Call or book online",
    color: "bg-primary"
  },
  {
    icon: Package,
    title: "Pickup",
    description: "We collect from you",
    color: "bg-accent"
  },
  {
    icon: Truck,
    title: "Transit",
    description: "Safe transportation",
    color: "bg-primary"
  },
  {
    icon: MapPin,
    title: "Track",
    description: "Real-time updates",
    color: "bg-accent"
  },
  {
    icon: CheckCircle,
    title: "Delivered",
    description: "Safe & on time",
    color: "bg-primary"
  }
];

const ProcessFlow = () => {
  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Simple 5-Step Delivery Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From booking to delivery, we make shipping simple and transparent.
          </p>
        </div>
        
        {/* Desktop Flow */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Connection Line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-1 bg-border z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary h-full" 
                 style={{ width: '100%' }} />
          </div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center relative z-10">
                <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center text-white shadow-lg`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="mt-4 text-center">
                  <div className="font-bold text-foreground text-lg">{step.title}</div>
                  <div className="text-sm text-muted-foreground">{step.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Flow */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-foreground">{step.title}</div>
                  <div className="text-sm text-muted-foreground">{step.description}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className="text-muted-foreground">→</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
