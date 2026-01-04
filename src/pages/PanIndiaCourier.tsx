import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Package, Phone, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumb from "@/components/seo/Breadcrumb";

const PanIndiaCourier = () => {
  const phoneNumber = "8097512951";

  useEffect(() => {
    document.title = "Pan India Courier Service | All India Delivery | Trackon";

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

    updateMeta("description", "Pan India courier service from Mumbai to all major cities. Reliable parcel delivery to Delhi, Bangalore, Chennai, Kolkata. Trackon Courier - Call 8097512951.");
    updateMeta("keywords", "pan india courier, all india courier service, domestic courier mumbai, parcel delivery india, courier to delhi bangalore");
    updateMeta("og:title", "Pan India Courier Service | Trackon Courier Mumbai", true);
    updateMeta("og:description", "Pan India courier service from Mumbai to all major cities. Delivery to 500+ cities. Call 8097512951.", true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `${window.location.origin}/pan-india-courier`);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", `${window.location.origin}/pan-india-courier`);
      document.head.appendChild(canonical);
    }

    const existingScript = document.querySelector('script[data-service="pan-india-courier"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-service", "pan-india-courier");
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Pan India Courier Service",
      "description": "Nationwide courier delivery service from Mumbai to 500+ cities across India.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Trackon Courier Mumbai",
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
      "areaServed": "India",
      "serviceType": "Pan India Courier"
    });
    document.head.appendChild(script);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I want to send a parcel to another city in India. Please share rates.");
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Pan India Courier Service" }
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
                <Package className="w-10 h-10 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Pan India Courier Service
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                  Send parcels anywhere in India with Trackon Courier Mumbai. Reliable delivery to 500+ cities including Delhi, Bangalore, Chennai, Kolkata, and Hyderabad.
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
                    Trackon Courier's pan India courier service connects Mumbai to every corner of the country. Whether you need to send documents to Delhi, products to Bangalore, or parcels to Chennai — our nationwide network ensures safe and timely delivery.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    We partner with established courier networks across India to provide reliable coverage in metro cities, tier-2 towns, and even remote locations. From our Andheri West office, your shipment enters a well-coordinated logistics chain with multiple checkpoints and tracking updates.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our pan India service is suitable for businesses shipping products to customers nationwide, individuals sending personal parcels to family in other states, and e-commerce sellers requiring bulk shipment solutions.
                  </p>
                </article>

                {/* How It Works */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">How Our Pan India Courier Works</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Get a Quote</h3>
                        <p className="text-muted-foreground">Call 8097512951 with your destination city, package weight, and dimensions. We provide transparent rates with no hidden charges.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Doorstep Pickup</h3>
                        <p className="text-muted-foreground">Schedule a free pickup from your location in Andheri West or anywhere in Mumbai. We collect, pack (if needed), and generate your tracking number.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Transit & Tracking</h3>
                        <p className="text-muted-foreground">Your package moves through our network with updates at each checkpoint. Track online or receive SMS notifications throughout the journey.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Delivery & Confirmation</h3>
                        <p className="text-muted-foreground">The package is delivered to the recipient's doorstep. You receive confirmation with delivery proof once completed.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Areas Covered */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Cities We Deliver To</h2>
                  <p className="text-muted-foreground mb-4">
                    Our pan India courier network covers all major cities and towns:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Metro Cities (1-3 days)</h3>
                      <ul className="space-y-2">
                        {["Delhi NCR", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad"].map((city) => (
                          <li key={city} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{city}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Other Major Cities (2-5 days)</h3>
                      <ul className="space-y-2">
                        {["Jaipur", "Lucknow", "Chandigarh", "Kochi", "Indore", "Bhopal", "Patna"].map((city) => (
                          <li key={city} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{city}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    We also deliver to tier-2 and tier-3 cities, as well as rural areas with pin code verification. Contact us for delivery timelines to specific locations.
                  </p>
                </article>

                {/* Why Choose Us */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Trackon Courier for Pan India Delivery</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Nationwide Network</h3>
                        <p className="text-muted-foreground">Delivery to 500+ cities and towns across all 28 states and 8 union territories of India.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Competitive Rates</h3>
                        <p className="text-muted-foreground">Affordable pricing based on weight and destination. Bulk discounts available for regular shippers.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Online Tracking</h3>
                        <p className="text-muted-foreground">Track your shipment in real-time from pickup to delivery with our tracking system.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">COD Available</h3>
                        <p className="text-muted-foreground">Cash on Delivery option available for e-commerce shipments to select cities.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Insurance Option</h3>
                        <p className="text-muted-foreground">Protect valuable shipments with our optional transit insurance coverage.</p>
                      </div>
                    </li>
                  </ul>
                </article>

                {/* Pickup Info */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Pickup & Contact Information</h2>
                  <address className="not-italic text-muted-foreground space-y-3 mb-6">
                    <p><strong className="text-foreground">Business:</strong> Trackon Courier Mumbai</p>
                    <p><strong className="text-foreground">Office:</strong> Shop No. 1/2, Ever Shine Mens Wear, Juhu Versova Link Road, Andheri West, Mumbai - 400053</p>
                    <p><strong className="text-foreground">Phone:</strong> <a href="tel:8097512951" className="text-primary hover:underline">8097512951</a></p>
                    <p><strong className="text-foreground">Pickup Hours:</strong> Monday to Saturday, 9 AM to 7 PM</p>
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
                      WhatsApp Enquiry
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
                  <h3 className="text-xl font-bold text-foreground mb-6">Get Pan India Quote</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Documents (500g)</span>
                      <span className="font-semibold text-foreground">From ₹50</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Parcels (1 kg)</span>
                      <span className="font-semibold text-foreground">From ₹80</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Delivery Time</span>
                      <span className="font-semibold text-foreground text-sm">1-5 days</span>
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
                      📍 Pickup from Andheri West, Mumbai
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

export default PanIndiaCourier;
