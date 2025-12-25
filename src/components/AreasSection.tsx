import { MapPin, CheckCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const mumbaiAreas = [
  { name: "Andheri East", slug: "andheri-east" },
  { name: "Andheri West", slug: "andheri-west" },
  { name: "Andheri Station", slug: "andheri-station" },
  { name: "Bandra", slug: "bandra" },
  { name: "Juhu", slug: "juhu" },
  { name: "DN Nagar", slug: "dn-nagar" },
  { name: "Azad Nagar", slug: "azad-nagar" },
  { name: "Versova", slug: "versova" },
  { name: "Vile Parle", slug: "vile-parle" },
  { name: "Goregaon East", slug: "goregaon-east" },
  { name: "Goregaon West", slug: "goregaon-west" },
  { name: "Malad", slug: "malad" },
  { name: "Kandivali", slug: "kandivali" },
  { name: "Jogeshwari", slug: "jogeshwari" },
  { name: "Saki Naka", slug: "saki-naka" },
  { name: "Marol", slug: "marol" },
  { name: "Kapaswadi", slug: "kapaswadi" },
  { name: "Juhu Versova Link Road", slug: "juhu-versova-link-road" },
  { name: "Andheri Airport", slug: "andheri-airport" },
  { name: "Airport Terminal 1", slug: "airport-terminal-1" },
  { name: "Airport Terminal 2", slug: "airport-terminal-2" },
  { name: "Airport Road", slug: "airport-road" },
  { name: "Dadar", slug: "dadar" },
  { name: "CST", slug: "cst" },
];

const majorCities = [
  { name: "Delhi NCR", slug: "delhi" },
  { name: "Bengaluru", slug: "bengaluru" },
  { name: "Chennai", slug: "chennai" },
  { name: "Kolkata", slug: "kolkata" },
  { name: "Hyderabad", slug: "hyderabad" },
  { name: "Pune", slug: "pune" },
  { name: "Ahmedabad", slug: "ahmedabad" },
  { name: "Jaipur (Rajasthan)", slug: "rajasthan" },
  { name: "Valsad", slug: "valsad" },
  { name: "South India", slug: "south-india" },
  { name: "Goa", slug: "goa" },
  { name: "Lucknow", slug: "lucknow" },
  { name: "Chandigarh", slug: "chandigarh" },
  { name: "Indore", slug: "indore" },
  { name: "Nagpur", slug: "nagpur" },
];

const AreasSection = () => {
  return (
    <section id="areas" className="py-16 md:py-24 bg-secondary" aria-label="Service Areas">
      <div className="container">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-accent font-semibold mb-4">Service Coverage</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Courier Services Across Mumbai & Pan India
          </h2>
          <p className="text-muted-foreground text-lg">
            Fast courier services in Andheri, Bandra, Juhu, DN Nagar, Goregaon, Malad, Kandivali, Vile Parle, Versova & 500+ cities. 
            Call <a href="tel:9864251628" className="text-accent font-semibold hover:underline">9864251628</a> for same-day delivery.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mumbai Areas */}
          <article className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Mumbai & Suburbs</h3>
                <p className="text-muted-foreground text-sm">Same-day delivery available | Call 9864251628</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {mumbaiAreas.map((area) => (
                <Link 
                  key={area.slug} 
                  to={`/area/${area.slug}`}
                  className="flex items-center gap-2 hover:text-accent transition-colors group"
                  title={`Courier services in ${area.name}`}
                >
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground text-sm group-hover:text-accent">{area.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <a 
                href="tel:9864251628" 
                className="flex items-center gap-2 text-accent font-semibold hover:underline"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: 9864251628</span>
              </a>
            </div>
          </article>

          {/* Pan India */}
          <article className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Pan India & International</h3>
                <p className="text-muted-foreground text-sm">Express delivery in 24-48 hours</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {majorCities.map((city) => (
                <Link 
                  key={city.slug} 
                  to={`/area/${city.slug}`}
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                  title={`Courier services for ${city.name}`}
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground text-sm group-hover:text-primary">{city.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <a 
                href="https://wa.me/919864251628?text=Hi, I need courier services for Pan India delivery" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <span>WhatsApp for Quick Quote</span>
              </a>
            </div>
          </article>
        </div>

        {/* SEO Content Block */}
        <div className="mt-12 bg-card rounded-2xl p-6 md:p-8 shadow-card">
          <h3 className="text-xl font-bold text-foreground mb-4">Best Courier Services in Mumbai</h3>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p>
              <strong>Trackon Courier</strong> provides the best courier services in Mumbai with coverage across all major areas including 
              <strong> Andheri East, Andheri West, Bandra, Juhu, DN Nagar, Azad Nagar, Versova, Vile Parle, Goregaon, Malad, Kandivali, 
              Jogeshwari, Saki Naka, Marol, Kapaswadi, </strong> and <strong>Juhu Versova Link Road</strong>.
            </p>
            <p className="mt-3">
              We also offer specialized <strong>airport courier services</strong> at <strong>Andheri Airport, Terminal 1, Terminal 2, 
              and Airport Road</strong>. For <strong>Pan India delivery</strong>, we cover <strong>Delhi, Bengaluru, Chennai, Kolkata, 
              Hyderabad, Pune, Rajasthan, Valsad, South India,</strong> and all major cities.
            </p>
            <p className="mt-3">
              Looking for <strong>fast courier services near you</strong>? <strong>Cheap courier services in Mumbai</strong>? 
              Call <a href="tel:9864251628" className="text-accent font-semibold">9864251628</a> for instant quotes and same-day pickup!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;