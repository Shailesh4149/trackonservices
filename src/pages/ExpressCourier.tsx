import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Truck, Phone, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumb from "@/components/seo/Breadcrumb";

const ExpressCourier = () => {
  const phoneNumber = "8097512951";

  useEffect(() => {
    document.title = "Express Courier Service Mumbai | Priority Delivery | Trackon";

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

    updateMeta("description", "Express courier service in Mumbai with priority handling. Urgent deliveries within 2-6 hours. Trackon Courier Mumbai - Call 8097512951 for express pickup.");
    updateMeta("keywords", "express courier mumbai, urgent courier service, priority delivery, fast courier mumbai, express delivery andheri");
    updateMeta("og:title", "Express Courier Service Mumbai | Trackon Courier", true);
    updateMeta("og:description", "Express courier service in Mumbai with priority handling. Urgent deliveries within 2-6 hours. Call 8097512951.", true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `${window.location.origin}/express-courier-mumbai`);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", `${window.location.origin}/express-courier-mumbai`);
      document.head.appendChild(canonical);
    }

    const existingScript = document.querySelector('script[data-service="express-courier"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-service", "express-courier");
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Express Courier Service Mumbai",
      "description": "Priority express courier delivery service in Mumbai with 2-6 hour delivery times.",
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
      "areaServed": "Mumbai",
      "serviceType": "Express Courier"
    });
    document.head.appendChild(script);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I need express courier pickup in Mumbai. Please share rates and availability.");
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Express Courier Service" }
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
                <Truck className="w-10 h-10 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Express Courier Service in Mumbai
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                  When time is critical, choose Trackon Courier's express delivery service. Priority handling and guaranteed delivery within 2-6 hours across Mumbai.
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
                    Express courier service is designed for time-critical shipments that cannot wait. At Trackon Courier Mumbai, we offer priority express delivery with dedicated vehicles and immediate dispatch for urgent packages.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Whether you need to send urgent medical samples, legal documents for court deadlines, or business contracts requiring immediate signatures — our express service ensures your package receives top priority from pickup to delivery.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Based in Andheri West, we serve all of Mumbai including South Mumbai, Central Mumbai, Western Suburbs, and extended areas like Thane and Navi Mumbai. Express delivery times typically range from 2 to 6 hours depending on the destination within Mumbai.
                  </p>
                </article>

                {/* How It Works */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">How Our Express Courier Works</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Immediate Booking</h3>
                        <p className="text-muted-foreground">Call 8097512951 for express pickup. Our team confirms availability and provides an estimated delivery time based on your destination.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Priority Pickup</h3>
                        <p className="text-muted-foreground">A dedicated executive is dispatched immediately to your location. For Andheri West, pickup typically happens within 30-45 minutes of booking.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Direct Delivery</h3>
                        <p className="text-muted-foreground">Your package is transported directly to the destination without hub transfers. Receive live updates and delivery confirmation with proof of receipt.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Areas Covered */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Areas Covered for Express Delivery</h2>
                  <p className="text-muted-foreground mb-4">
                    Our express courier service operates throughout Greater Mumbai:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Western Mumbai (2-3 hours)</h3>
                      <ul className="space-y-2">
                        {["Andheri West & East", "Bandra", "Juhu", "Goregaon", "Malad", "Kandivali", "Borivali"].map((area) => (
                          <li key={area} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Central & South Mumbai (3-5 hours)</h3>
                      <ul className="space-y-2">
                        {["Dadar", "Parel", "Worli", "Lower Parel", "Nariman Point", "Fort", "Colaba"].map((area) => (
                          <li key={area} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    Thane, Navi Mumbai, and Panvel are also covered with 4-6 hour express delivery options.
                  </p>
                </article>

                {/* Why Choose Us */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Trackon Courier for Express Delivery</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Dedicated Vehicles</h3>
                        <p className="text-muted-foreground">Your express package travels directly to the destination without shared routes or hub delays.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Priority Handling</h3>
                        <p className="text-muted-foreground">Express shipments receive immediate dispatch and priority over standard deliveries.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Live Tracking</h3>
                        <p className="text-muted-foreground">Real-time updates via SMS and WhatsApp so you know exactly where your package is.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">24/7 Support</h3>
                        <p className="text-muted-foreground">Our team is available round the clock for urgent booking requests and delivery updates.</p>
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
                    <p><strong className="text-foreground">Express Availability:</strong> 7 AM to 10 PM daily</p>
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
                      <Link to="/pan-india-courier" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Pan India Courier Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/airport-courier-mumbai" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Airport Courier Service Mumbai
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
                  <h3 className="text-xl font-bold text-foreground mb-6">Book Express Pickup</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Starting Price</span>
                      <span className="font-semibold text-foreground">₹150</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Delivery Time</span>
                      <span className="font-semibold text-foreground text-sm">2-6 hours</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Availability</span>
                      <span className="font-semibold text-foreground">7 AM - 10 PM</span>
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
                      📍 Based in Andheri West, Mumbai
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

export default ExpressCourier;
