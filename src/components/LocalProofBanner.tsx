import { Award, Package, Clock, MapPin } from "lucide-react";

const LocalProofBanner = () => {
  const proofItems = [
    { icon: Clock, text: "Serving Mumbai since 2019", accent: true },
    { icon: Package, text: "2,000+ successful deliveries", accent: false },
    { icon: MapPin, text: "Same-day pickup in Andheri West", accent: true },
    { icon: Award, text: "Trusted by local businesses", accent: false },
  ];

  // Duplicate items for seamless marquee
  const marqueeItems = [...proofItems, ...proofItems];

  return (
    <section className="py-4 bg-accent/10 border-y border-accent/20 overflow-hidden" aria-label="Trust signals">
      <div className="flex animate-marquee w-max">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-xs sm:text-sm font-medium whitespace-nowrap px-6"
          >
            <item.icon
              className={`w-4 h-4 flex-shrink-0 ${item.accent ? 'text-accent' : 'text-primary'}`}
              aria-hidden="true"
            />
            <span className="text-foreground">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalProofBanner;
