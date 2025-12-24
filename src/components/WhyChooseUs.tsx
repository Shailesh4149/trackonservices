import { Shield, Clock, Truck, HeadphonesIcon, Award, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    stat: "98%",
    description: "Delivery success rate",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    stat: "100%",
    description: "Insured shipments",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    stat: "24hr",
    description: "Express delivery",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    stat: "365",
    description: "Days availability",
  },
  {
    icon: Award,
    title: "Years Experience",
    stat: "15+",
    description: "In courier industry",
  },
  {
    icon: ThumbsUp,
    title: "Happy Customers",
    stat: "50K+",
    description: "Satisfied clients",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-accent font-semibold mb-4">Why Trackon Courier</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Thousands for Reliable Delivery
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine speed, safety, and exceptional customer service to deliver your parcels on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-extrabold text-accent mb-1">{feature.stat}</div>
              <div className="text-sm font-medium text-foreground mb-1">{feature.title}</div>
              <div className="text-xs text-muted-foreground">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
