import { Award, Users, Clock, Shield } from "lucide-react";
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const CountStat = ({ end, suffix, label, icon: Icon, colorClass }: { end: number; suffix: string; label: string; icon: React.ElementType; colorClass: string }) => {
  const { count, ref } = useCountUp(end, 1500, suffix);
  return (
    <li className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 text-center" ref={ref as React.Ref<HTMLLIElement>}>
      <div className={`w-12 h-12 rounded-full ${colorClass === 'accent' ? 'bg-accent/10' : 'bg-primary/10'} flex items-center justify-center mx-auto mb-3`} aria-hidden="true">
        <Icon className={`w-6 h-6 ${colorClass === 'accent' ? 'text-accent' : 'text-primary'}`} />
      </div>
      <p className={`text-3xl font-extrabold ${colorClass === 'accent' ? 'text-accent' : 'text-primary'} mb-1`}>{count}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </li>
  );
};

const LocalTrust = React.forwardRef<HTMLElement>((_, ref) => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-secondary" aria-labelledby="trust-heading" ref={sectionRef}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <article data-animate="slide-left">
            <span className="inline-block text-accent font-semibold mb-4">About Us</span>
            <h2 id="trust-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Courier Service in Andheri West
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Trackon Courier has been providing dependable courier and logistics services to businesses 
              and individuals in Andheri West and surrounding areas. Our local presence means faster pickups, 
              better understanding of delivery routes, and personalized service that larger companies cannot match.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              Over the years, we have built strong relationships with hundreds of satisfied customers in Mumbai – 
              from small business owners who rely on us for daily shipments, to families sending important documents 
              across India. Our commitment to on-time delivery and careful handling has made us a preferred choice 
              for courier services in Andheri West.
            </p>
            <p className="text-muted-foreground text-lg">
              Whether you need same-day delivery within Mumbai or express shipping to any city in India, 
              our experienced team ensures your parcels reach their destination safely and on schedule.
            </p>
          </article>

          <aside data-animate="slide-right">
            <ul className="grid grid-cols-2 gap-4 list-none">
              <CountStat end={10} suffix="+" label="Years of Experience" icon={Clock} colorClass="accent" />
              <CountStat end={5000} suffix="+" label="Happy Customers" icon={Users} colorClass="primary" />
              <CountStat end={98} suffix="%" label="On-Time Delivery" icon={Award} colorClass="accent" />
              <CountStat end={100} suffix="%" label="Secure Handling" icon={Shield} colorClass="primary" />
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
});

LocalTrust.displayName = "LocalTrust";

export default LocalTrust;
