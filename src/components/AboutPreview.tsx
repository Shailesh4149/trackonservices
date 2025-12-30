import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description: "Every package handled with care"
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Fast delivery, always on time"
  },
  {
    icon: Award,
    title: "Quality",
    description: "Premium service standards"
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction, our priority"
  }
];

const AboutPreview = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Company Introduction */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              About Trackon Courier
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Mumbai's Most Trusted Courier Partner Since 2010
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              For over 14 years, Trackon Courier has been delivering excellence across Mumbai and beyond. 
              What started as a small local delivery service has grown into a comprehensive logistics 
              solution trusted by 50,000+ satisfied customers.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We combine local expertise with nationwide reach, ensuring your packages—whether documents, 
              parcels, or bulk shipments—reach their destination safely and on time, every time.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-secondary/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">14+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-3 bg-secondary/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-xs text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center p-3 bg-secondary/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-xs text-muted-foreground">On-Time Rate</div>
              </div>
            </div>

            <Button asChild size="lg">
              <Link to="/about" className="inline-flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right: Core Values */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
