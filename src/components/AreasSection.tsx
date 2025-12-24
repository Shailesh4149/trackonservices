import { MapPin, CheckCircle } from "lucide-react";

const mumbaiAreas = [
  "Andheri", "Bandra", "Borivali", "Churchgate", "Dadar",
  "Goregaon", "Juhu", "Kandivali", "Kurla", "Malad",
  "Marine Lines", "Mulund", "Powai", "Thane", "Vashi",
  "Worli", "BKC", "Lower Parel", "Santacruz", "Vikhroli","DN Nagar","Kapaswadi","Mahada"
];

const majorCities = [
  "Delhi NCR", "Bangalore", "Chennai", "Kolkata", "Hyderabad",
  "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Surat",
  "Chandigarh", "Kochi", "Indore", "Nagpur", "Goa"
];

const AreasSection = () => {
  return (
    <section id="areas" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-accent font-semibold mb-4">Service Coverage</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Courier Services Across India
          </h2>
          <p className="text-muted-foreground text-lg">
            We serve 500+ cities with dedicated services in Mumbai and all major metropolitan areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mumbai Areas */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Mumbai & Suburbs</h3>
                <p className="text-muted-foreground text-sm">Same-day delivery available</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {mumbaiAreas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pan India */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Pan India Coverage</h3>
                <p className="text-muted-foreground text-sm">Express delivery in 24-48 hours</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {majorCities.map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
