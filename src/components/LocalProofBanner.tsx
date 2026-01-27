import { Award, Package, Clock, MapPin } from "lucide-react";

const LocalProofBanner = () => {
  const proofItems = [
    {
      icon: Clock,
      text: "Serving Mumbai since 2019",
      accent: true
    },
    {
      icon: Package,
      text: "2,000+ successful deliveries",
      accent: false
    },
    {
      icon: MapPin,
      text: "Same-day pickup in Andheri West",
      accent: true
    },
    {
      icon: Award,
      text: "Trusted by local businesses",
      accent: false
    }
  ];

  return (
    <section className="py-4 bg-accent/10 border-y border-accent/20 overflow-hidden" aria-label="Trust signals">
      <div className="container px-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 list-none">
          {proofItems.map((item, index) => (
            <li 
              key={index} 
              className="flex items-center gap-2 text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              <item.icon 
                className={`w-4 h-4 flex-shrink-0 ${item.accent ? 'text-accent' : 'text-primary'}`} 
                aria-hidden="true" 
              />
              <span className="text-foreground">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LocalProofBanner;
