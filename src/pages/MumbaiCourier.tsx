import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle, CheckCircle, Clock, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CustomerReviews from "@/components/CustomerReviews";

// All Mumbai micro-areas for internal linking
const mumbaiAreas = [
  { name: "Andheri", slug: "andheri" },
  { name: "Andheri West", slug: "andheri-west", isHQ: true },
  { name: "Andheri East", slug: "andheri-east" },
  { name: "Andheri Station", slug: "andheri-station" },
  { name: "Juhu", slug: "juhu" },
  { name: "DN Nagar", slug: "dn-nagar" },
  { name: "Azad Nagar", slug: "azad-nagar" },
  { name: "Versova", slug: "versova" },
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
  { name: "Bandra West", slug: "bandra-west" },
  { name: "Bandra East", slug: "bandra-east" },
  { name: "Santacruz", slug: "santacruz" },
];

const MumbaiCourier = () => {
  useEffect(() => {
    // SEO Meta Tags - CTR optimized
    document.title = "Fast Courier Service Mumbai – Call Now | Same Day Pickup | Trackon Courier";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Same Day Courier Near You in Mumbai. ★★★★★ rated, 2,000+ deliveries, serving Mumbai since 2019. Doorstep pickup in 1-2 hours. Based in Andheri West. Call 8097512951.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'courier service Mumbai, courier services in Mumbai, same day courier Mumbai, express courier Mumbai, Trackon Courier Mumbai, parcel delivery Mumbai, best courier Mumbai');
    }

    // JSON-LD Schema - links to main LocalBusiness, no duplication
    const existingSchema = document.querySelector('script[data-schema="mumbai-hub"]');
    if (existingSchema) existingSchema.remove();
    
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'mumbai-hub');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Courier Service in Mumbai",
      "description": "Fast & reliable courier service across Mumbai. Based in Andheri West, serving all Mumbai suburbs.",
      "url": "https://trackonservices.lovable.app/courier-service-mumbai",
      "mainEntity": {
        "@type": "LocalBusiness",
        "@id": "https://trackonservices.lovable.app/#organization"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://trackonservices.lovable.app/" },
          { "@type": "ListItem", "position": 2, "name": "Courier Service in Mumbai", "item": "https://trackonservices.lovable.app/courier-service-mumbai" }
        ]
      }
    });
    document.head.appendChild(schema);

    return () => {
      const schemaToRemove = document.querySelector('script[data-schema="mumbai-hub"]');
      if (schemaToRemove) schemaToRemove.remove();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-hero-gradient overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container relative z-10">
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <li><Link to="/" className="hover:text-primary-foreground">Home</Link></li>
                <li>/</li>
                <li className="text-primary-foreground font-medium">Courier Service in Mumbai</li>
              </ol>
            </nav>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-accent" />
                <span className="text-accent font-semibold">Headquarters: Andheri West, Mumbai</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                Fast Courier Service in Mumbai – Call Now
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-3xl">
                Trackon Courier is Mumbai's trusted courier partner, headquartered in Andheri West. 
                We provide fast, reliable courier services across all Mumbai suburbs with same-day pickup, 
                express delivery, and Pan India shipping.
              </p>
              <p className="text-primary-foreground/80 mb-8 flex flex-wrap items-center gap-4 text-sm font-medium">
                <span>★★★★★ Rated by local customers</span>
                <span>•</span>
                <span>2,000+ successful deliveries</span>
                <span>•</span>
                <span>Serving Mumbai since 2019</span>
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:8097512951">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                    <Phone className="w-5 h-5" />
                    Call 8097512951
                  </Button>
                </a>
                <a 
                  href="https://wa.me/918097512951?text=Hi, I need courier services in Mumbai. Please share rates."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Enquiry
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HQ Info Section */}
        <section className="py-12 bg-accent/10">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-card rounded-2xl shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Our Headquarters</h2>
                  <address className="text-muted-foreground not-italic">
                    Shop No. 1/2, Ever Shine Mens Wear, Juhu Versova Link Road,<br />
                    Near Shankri Hotel, Kapaswadi, Andheri West, Mumbai – 400053
                  </address>
                </div>
              </div>
              <Link to="/areas/courier-service-in-andheri-west">
                <Button variant="outline" className="gap-2">
                  <MapPin className="w-4 h-4" />
                  View Andheri West Service Area
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Mumbai's Trusted Courier Partner Since Day One
              </h2>
              <p className="text-muted-foreground text-lg">
                Based in the heart of Andheri West, Trackon Courier has built a reputation for fast, 
                reliable delivery across Mumbai. Our deep understanding of Mumbai's lanes, traffic patterns, 
                and localities allows us to provide same-day pickup and express delivery that larger 
                courier companies simply cannot match. Whether you're shipping documents from Bandra, 
                parcels from Goregaon, or urgent packages from Malad – our network ensures your 
                shipments reach their destination safely and on time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-2xl p-6 shadow-card text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">1-2 Hour Pickup</h3>
                <p className="text-muted-foreground">
                  Fast doorstep pickup across all Mumbai suburbs from our Andheri West hub.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">22+ Areas Covered</h3>
                <p className="text-muted-foreground">
                  From Andheri to Kandivali, Bandra to Santacruz – we serve all of suburban Mumbai.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-card text-center">
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">5.0 Rating</h3>
                <p className="text-muted-foreground">
                  Trusted by 500+ customers with a perfect 5-star Google Business Profile rating.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* All Mumbai Areas Grid */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block text-accent font-semibold mb-4">Complete Coverage</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Courier Services Across Mumbai Suburbs
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Click on any area below to learn more about our courier services in that location. 
                All areas are serviced from our headquarters in Andheri West.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mumbaiAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/areas/courier-service-in-${area.slug}`}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all ${
                    area.isHQ 
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                      : 'bg-card hover:bg-card/80 shadow-card hover:shadow-lg'
                  }`}
                >
                  <MapPin className={`w-5 h-5 flex-shrink-0 ${area.isHQ ? 'text-accent-foreground' : 'text-accent'}`} />
                  <div>
                    <span className={`font-medium ${area.isHQ ? 'text-accent-foreground' : 'text-foreground'}`}>
                      {area.name}
                    </span>
                    {area.isHQ && (
                      <span className="block text-xs text-accent-foreground/80">Headquarters</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Services Available Across Mumbai
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From same-day local delivery to international shipping, we offer comprehensive 
                courier solutions for businesses and individuals across Mumbai.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/same-day-courier-andheri-west" className="group">
                <article className="bg-card rounded-2xl p-6 shadow-card h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    Same Day Courier Service
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Urgent deliveries within Mumbai. Pickup within 1-2 hours from any location.
                  </p>
                  <span className="text-accent font-semibold">Learn More →</span>
                </article>
              </Link>

              <Link to="/express-courier-mumbai" className="group">
                <article className="bg-card rounded-2xl p-6 shadow-card h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    Express Courier Service
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Priority handling for time-sensitive shipments across India.
                  </p>
                  <span className="text-accent font-semibold">Learn More →</span>
                </article>
              </Link>

              <Link to="/pan-india-courier" className="group">
                <article className="bg-card rounded-2xl p-6 shadow-card h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    Pan India Courier
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Reliable delivery to all states and union territories across India.
                  </p>
                  <span className="text-accent font-semibold">Learn More →</span>
                </article>
              </Link>

              <Link to="/international-courier-mumbai" className="group">
                <article className="bg-card rounded-2xl p-6 shadow-card h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    International Courier
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Global shipping to 200+ countries with customs clearance support.
                  </p>
                  <span className="text-accent font-semibold">Learn More →</span>
                </article>
              </Link>

              <Link to="/airport-courier-mumbai" className="group">
                <article className="bg-card rounded-2xl p-6 shadow-card h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    Airport Courier (T1 & T2)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Specialized service for Mumbai airport terminals with priority handling.
                  </p>
                  <span className="text-accent font-semibold">Learn More →</span>
                </article>
              </Link>

              <article className="bg-card rounded-2xl p-6 shadow-card h-full">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Secure Document Courier
                </h3>
                <p className="text-muted-foreground mb-4">
                  Confidential document delivery with proof of delivery and insurance options.
                </p>
                <a href="tel:8097512951" className="text-accent font-semibold">Call for Details →</a>
              </article>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <CustomerReviews areaName="Mumbai" />

        {/* Local SEO Footer Block */}
        <section className="py-8 bg-secondary">
          <div className="container">
            <p className="text-center text-muted-foreground">
              <strong>Trackon Courier Mumbai</strong> – Headquarters: Andheri West, Mumbai – 400053 | 
              Serving all Mumbai suburbs including Andheri, Bandra, Goregaon, Malad, Kandivali, Santacruz, and more. 
              Find us on Google • Trusted by local customers.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-accent">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
              Need Courier Service in Mumbai?
            </h2>
            <p className="text-accent-foreground/90 mb-6 max-w-2xl mx-auto">
              Get instant quotes and same-day pickup from anywhere in Mumbai. 
              Our team is ready to serve you from our Andheri West headquarters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:8097512951">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  <Phone className="w-5 h-5" />
                  Call 8097512951
                </Button>
              </a>
              <a 
                href="https://wa.me/918097512951?text=Hi, I need courier service in Mumbai. Please share rates."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp for Rates
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default MumbaiCourier;
