import { Award, Users, Clock, Shield } from "lucide-react";
import React from "react";

const LocalTrust = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section className="py-16 md:py-24 bg-secondary" aria-labelledby="trust-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <article>
            <span className="inline-block text-accent font-semibold mb-4">About Us</span>
            <h2 id="trust-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Courier Service in Andheri West
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Trackon Courier Mumbai has been providing dependable courier and logistics services to businesses 
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

          <aside>
            <ul className="grid grid-cols-2 gap-4 list-none">
              <li className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <p className="text-3xl font-extrabold text-accent mb-1">10+</p>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </li>
              <li className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-extrabold text-primary mb-1">5000+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </li>
              <li className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <p className="text-3xl font-extrabold text-accent mb-1">98%</p>
                <p className="text-sm text-muted-foreground">On-Time Delivery</p>
              </li>
              <li className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-extrabold text-primary mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Secure Handling</p>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
});

LocalTrust.displayName = "LocalTrust";

export default LocalTrust;
