import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Plane, Phone, MessageCircle, CheckCircle, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumb from "@/components/seo/Breadcrumb";

const AirportCourier = () => {
  const phoneNumber = "8097512951";

  useEffect(() => {
    document.title = "Airport Courier Service Mumbai | Terminal 1 & 2 Delivery";

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        if (isProperty) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    updateMeta("description", "Airport courier service in Mumbai near Terminal 1 & 2. Fast pickup and delivery near Mumbai Airport. Trackon Courier Andheri - Call 8097512951.");
    updateMeta("keywords", "airport courier mumbai, courier near mumbai airport, terminal 1 courier, terminal 2 delivery, sahar road courier");
    updateMeta("og:title", "Airport Courier Service Mumbai | Trackon Courier", true);
    updateMeta("og:description", "Airport courier service in Mumbai near Terminal 1 & 2. Fast pickup and delivery. Call 8097512951.", true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `${window.location.origin}/airport-courier-mumbai`);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", `${window.location.origin}/airport-courier-mumbai`);
      document.head.appendChild(canonical);
    }

    const existingScript = document.querySelector('script[data-service="airport-courier"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-service", "airport-courier");
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Airport Courier Service Mumbai",
      "description": "Courier pickup and delivery service near Mumbai Airport Terminal 1 and Terminal 2.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Trackon Courier",
        "telephone": `+91-${phoneNumber}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop No. 1/2, Ever Shine Mens Wear, Juhu Versova Link Road",
          "addressLocality": "Andheri West",
          "addressRegion": "Maharashtra",
          "postalCode": "400053",
          "addressCountry": "IN"
        }
      },
      "areaServed": ["Mumbai Airport", "Terminal 1", "Terminal 2", "Sahar", "Vile Parle"],
      "serviceType": "Airport Courier"
    });
    document.head.appendChild(script);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I need courier pickup/delivery near Mumbai Airport. Please share details.");
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Airport Courier Service" }
  ];

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-20">
          <div className="container">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-accent-gradient flex items-center justify-center flex-shrink-0">
                <Plane className="w-10 h-10 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Airport Courier Service in Mumbai
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                  Convenient courier pickup and delivery near Mumbai Airport. Serving Terminal 1 (Domestic), Terminal 2 (International), Sahar Road, and nearby areas with fast turnaround times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Service Overview */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Service Overview</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Trackon Courier's airport courier service is designed for travellers, businesses near the airport, and anyone requiring fast courier solutions in the Mumbai Airport vicinity. Our Andheri West office is strategically located just 10-15 minutes from both Terminal 1 and Terminal 2, enabling quick pickup and delivery.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Whether you need to send urgent documents before a flight, receive a package at your airport hotel, or arrange courier services for cargo offices near Sahar Road — we provide reliable solutions with flexible timing to match flight schedules and airport logistics.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our executives are familiar with the airport area layout, including domestic terminal, international terminal, cargo complex, and surrounding localities like Vile Parle East, Santacruz East, and Andheri East. This local expertise ensures efficient navigation and on-time pickups and deliveries.
                  </p>
                </article>

                {/* How It Works */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">How Our Airport Courier Works</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Contact Us</h3>
                        <p className="text-muted-foreground">Call 8097512951 with your location near the airport, package details, and preferred pickup or delivery time. We accommodate flight schedules when possible.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Fast Pickup</h3>
                        <p className="text-muted-foreground">Our executive reaches your location in the airport area within 30-60 minutes. We pick up from hotels, offices, cargo complexes, and residential addresses.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Delivery</h3>
                        <p className="text-muted-foreground">Your package is delivered to the destination — locally within Mumbai or dispatched via our domestic or international network as needed.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Areas Covered */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Areas Covered Near Mumbai Airport</h2>
                  <p className="text-muted-foreground mb-4">
                    Our airport courier service covers all localities surrounding Chhatrapati Shivaji Maharaj International Airport:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-accent" />
                        Terminal Areas
                      </h3>
                      <ul className="space-y-2">
                        {["Terminal 1 (Domestic)", "Terminal 2 (International)", "Sahar Road", "Sahar Village", "SEEPZ Area"].map((area) => (
                          <li key={area} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-accent" />
                        Nearby Localities
                      </h3>
                      <ul className="space-y-2">
                        {["Vile Parle East", "Vile Parle West", "Santacruz East", "Andheri East", "Chakala", "JB Nagar"].map((area) => (
                          <li key={area} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    We also serve airport hotels, cargo offices, logistics companies, and businesses operating in the airport zone.
                  </p>
                </article>

                {/* Why Choose Us */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Trackon Courier for Airport Deliveries</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Proximity to Airport</h3>
                        <p className="text-muted-foreground">Our Andheri West office is just 10-15 minutes from both terminals, enabling rapid response for airport-area pickups.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Local Area Knowledge</h3>
                        <p className="text-muted-foreground">Our executives know the airport zone well, including shortcuts and building locations for efficient pickups.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Flexible Timing</h3>
                        <p className="text-muted-foreground">We understand flight schedules and can arrange early morning or late evening pickups when needed.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Multiple Service Options</h3>
                        <p className="text-muted-foreground">From airport area to local Mumbai delivery, pan India shipping, or international courier — all services available.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Hotel & Office Pickup</h3>
                        <p className="text-muted-foreground">Pickup directly from airport hotels, business centres, and offices in the airport zone.</p>
                      </div>
                    </li>
                  </ul>
                </article>

                {/* Pickup Info */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Pickup & Contact Information</h2>
                  <address className="not-italic text-muted-foreground space-y-3 mb-6">
                    <p><strong className="text-foreground">Business:</strong> Trackon Courier</p>
                    <p><strong className="text-foreground">Office:</strong> Shop No. 1/2, Ever Shine Mens Wear, Juhu Versova Link Road, Andheri West, Mumbai - 400053</p>
                    <p><strong className="text-foreground">Phone:</strong> <a href="tel:8097512951" className="text-primary hover:underline">8097512951</a></p>
                    <p><strong className="text-foreground">Distance from Airport:</strong> ~15 minutes from Terminal 1 & 2</p>
                  </address>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="accent" size="lg" asChild>
                      <a href={`tel:${phoneNumber}`} className="flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        Call Now – 8097512951
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" onClick={handleWhatsAppClick}>
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Booking
                    </Button>
                  </div>
                </article>

                {/* Internal Links */}
                <nav className="bg-muted/30 rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">Explore Other Courier Services</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/same-day-courier-andheri-west" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Same Day Courier Service in Andheri West
                      </Link>
                    </li>
                    <li>
                      <Link to="/express-courier-mumbai" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Express Courier Service Mumbai
                      </Link>
                    </li>
                    <li>
                      <Link to="/international-courier-mumbai" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        International Courier Service Mumbai
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Back to Trackon Courier Homepage
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Right Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 bg-card rounded-xl p-6 border border-border shadow-elevated">
                  <h3 className="text-xl font-bold text-foreground mb-6">Book Airport Pickup</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Local Delivery</span>
                      <span className="font-semibold text-foreground">From ₹100</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Pan India</span>
                      <span className="font-semibold text-foreground">From ₹50</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Pickup Time</span>
                      <span className="font-semibold text-foreground text-sm">30-60 mins</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button variant="accent" size="lg" className="w-full" asChild>
                      <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        Call: 8097512951
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="w-full"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Enquiry
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      📍 15 mins from Mumbai Airport
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default AirportCourier;
