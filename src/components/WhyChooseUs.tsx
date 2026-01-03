import { Truck, Users, IndianRupee, MapPin, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Pickup Within Andheri",
    description: "Our delivery team is based locally, ensuring quick pickup from your doorstep in Andheri West and nearby areas.",
  },
  {
    icon: Users,
    title: "Trusted Local Courier Partner",
    description: "We have been serving businesses and individuals in Andheri for years with reliable, consistent service.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Courier Charges",
    description: "Competitive pricing for local and long-distance deliveries. No hidden fees – transparent rates always.",
  },
  {
    icon: MapPin,
    title: "Real-Time Shipment Tracking",
    description: "Track your parcel at every step with live updates via SMS and our online tracking system.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Customer Support",
    description: "Our support team is available to assist you with bookings, tracking, and any delivery queries.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-background" aria-labelledby="why-choose-heading">
      <div className="container">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-accent font-semibold mb-4">Why Us</span>
          <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Trackon Courier Mumbai
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine local expertise with professional courier services to deliver your packages safely and on time.
          </p>
        </header>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
          {features.map((feature, index) => (
            <li
              key={feature.title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <article>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4" aria-hidden="true">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
