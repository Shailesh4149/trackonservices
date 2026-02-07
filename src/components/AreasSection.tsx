import { MapPin, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const primaryAreas = [
  { name: "Andheri", slug: "andheri" },
  { name: "Andheri West", slug: "andheri-west" },
  { name: "Andheri East", slug: "andheri-east" },
  { name: "Juhu", slug: "juhu" },
  { name: "DN Nagar", slug: "dn-nagar" },
  { name: "Versova", slug: "versova" },
  { name: "Bandra West", slug: "bandra-west" },
  { name: "Bandra East", slug: "bandra-east" },
];

const additionalAreas = [
  { name: "Andheri Station", slug: "andheri-station" },
  { name: "Azad Nagar", slug: "azad-nagar" },
  { name: "Juhu Versova Link Road", slug: "juhu-versova-link-road" },
  { name: "Saki Naka", slug: "saki-naka" },
  { name: "Marol", slug: "marol" },
  { name: "Jogeshwari", slug: "jogeshwari" },
  { name: "Kapaswadi", slug: "kapaswadi" },
  { name: "Chakala", slug: "chakala" },
  { name: "Vile Parle", slug: "vile-parle" },
  { name: "Goregaon West", slug: "goregaon-west" },
  { name: "Goregaon East", slug: "goregaon-east" },
  { name: "Malad", slug: "malad" },
  { name: "Kandivali", slug: "kandivali" },
  { name: "Santacruz", slug: "santacruz" },
];

const AreasSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="areas" className="py-16 md:py-24 bg-secondary" aria-labelledby="areas-heading" ref={sectionRef}>
      <div className="container">
        <header className="text-center max-w-3xl mx-auto mb-12" data-animate>
          <span className="inline-block text-accent font-semibold mb-4">Service Coverage</span>
          <h2 id="areas-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Areas We Serve in Andheri &amp; Nearby Locations
          </h2>
          <p className="text-muted-foreground text-lg">
            Trackon Courier provides fast pickup and delivery services across Andheri West and surrounding areas. 
            Call <a href="tel:8097512951" className="text-accent font-semibold hover:underline">8097512951</a> for same-day courier service.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-shadow duration-300" data-animate="slide-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center" aria-hidden="true">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Primary Service Areas</h3>
                <p className="text-muted-foreground text-sm">Same-day delivery available</p>
              </div>
            </div>
            <ul className="space-y-3 list-none">
              {primaryAreas.map((area) => (
                <li key={area.slug}>
                  <Link 
                    to={`/areas/courier-service-in-${area.slug}`}
                    className="flex items-center gap-3 hover:text-accent transition-colors group p-2 rounded-lg hover:bg-accent/5"
                    title={`Courier service in ${area.name}`}
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                    <span className="text-foreground font-medium group-hover:text-accent">{area.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-border">
              <a href="tel:8097512951" className="flex items-center gap-2 text-accent font-semibold hover:underline">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call Now: 8097512951</span>
              </a>
            </div>
          </article>

          <article className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-shadow duration-300" data-animate="slide-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center" aria-hidden="true">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Additional Coverage Areas</h3>
                <p className="text-muted-foreground text-sm">Express delivery within 24 hours</p>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-3 list-none">
              {additionalAreas.map((area) => (
                <li key={area.slug}>
                  <Link 
                    to={`/areas/courier-service-in-${area.slug}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors group"
                    title={`Courier service in ${area.name}`}
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-foreground text-sm group-hover:text-primary">{area.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-border">
              <a 
                href="https://wa.me/918097512951?text=Hi, I need courier services in Mumbai" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <span>WhatsApp for Quick Quote</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
