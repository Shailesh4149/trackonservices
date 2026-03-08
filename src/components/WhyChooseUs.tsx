import { Truck, Users, IndianRupee, MapPin, HeadphonesIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Truck,
    title: "Fast Pickup Within Andheri",
    description: "Our delivery team is based locally, ensuring quick pickup from your doorstep in Andheri West and nearby areas.",
    backgroundImage: "/why-choose/fast-pickup-bg.webp",
    imageAlt: "Delivery truck speeding through Andheri city streets for fast courier pickup",
  },
  {
    icon: Users,
    title: "Trusted Local Courier Partner",
    description: "We have been serving businesses and individuals in Andheri for years with reliable, consistent service.",
    backgroundImage: "/why-choose/trusted-partner-bg.webp",
    imageAlt: "Handshake representing trusted local courier partnership in Andheri",
  },
  {
    icon: IndianRupee,
    title: "Affordable Courier Charges",
    description: "Competitive pricing for local and long-distance deliveries. No hidden fees – transparent rates always.",
    backgroundImage: "/why-choose/affordable-rates-bg.webp",
    imageAlt: "Indian rupee symbol with price tag showing affordable courier rates",
  },
  {
    icon: MapPin,
    title: "Real-Time Shipment Tracking",
    description: "Track your parcel at every step with live updates via SMS and our online tracking system.",
    backgroundImage: "/why-choose/tracking-bg.webp",
    imageAlt: "Smartphone showing GPS map with real-time courier tracking pin",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Customer Support",
    description: "Our support team is available to assist you with bookings, tracking, and any delivery queries.",
    backgroundImage: "/why-choose/customer-support-bg.webp",
    imageAlt: "Customer support agent with headphones helping courier service customers",
  },
];

const WhyChooseUs = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-background" aria-labelledby="why-choose-heading" ref={sectionRef}>
      <div className="container">
        <header className="text-center max-w-2xl mx-auto mb-12" data-animate>
          <span className="inline-block text-accent font-semibold mb-4">Why Us</span>
          <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Trackon Courier
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine local expertise with professional courier services to deliver your packages safely and on time.
          </p>
        </header>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="group relative overflow-hidden bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 border border-border hover:-translate-y-1"
              data-animate="scale"
            >
              <img
                src={feature.backgroundImage}
                alt={feature.imageAlt}
                width={400}
                height={300}
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-card/90 via-card/80 to-card/70" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer bg-gradient-to-r from-transparent via-accent/5 to-transparent transition-opacity duration-500" />

              <article className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-gradient transition-colors duration-300" aria-hidden="true">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors duration-300 group-hover:animate-icon-float" />
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
