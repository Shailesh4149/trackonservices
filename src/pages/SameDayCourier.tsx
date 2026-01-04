import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Phone, MessageCircle, MapPin, CheckCircle, ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumb from "@/components/seo/Breadcrumb";

const SameDayCourier = () => {
  const phoneNumber = "8097512951";

  useEffect(() => {
    document.title = "Same Day Courier Service Andheri West | Trackon Courier";

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

    updateMeta("description", "Same day courier service in Andheri West, Mumbai. Book before 2 PM for delivery by evening. Trackon Courier offers fast local pickup. Call 8097512951.");
    updateMeta("keywords", "same day courier andheri west, same day delivery mumbai, urgent courier service, local courier andheri");
    updateMeta("og:title", "Same Day Courier Service in Andheri West | Trackon Courier Mumbai", true);
    updateMeta("og:description", "Same day courier service in Andheri West, Mumbai. Book before 2 PM for delivery by evening. Call 8097512951.", true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `${window.location.origin}/same-day-courier-andheri-west`);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", `${window.location.origin}/same-day-courier-andheri-west`);
      document.head.appendChild(canonical);
    }

    const existingScript = document.querySelector('script[data-service="same-day-courier"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-service", "same-day-courier");
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Same Day Courier Service in Andheri West",
      "description": "Fast same day courier delivery service in Andheri West, Mumbai. Book before 2 PM for evening delivery.",
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
      "areaServed": ["Andheri West", "Andheri East", "Bandra", "Juhu", "Versova", "DN Nagar"],
      "serviceType": "Same Day Courier"
    });
    document.head.appendChild(script);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I want to book a same day courier pickup in Andheri West.");
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Same Day Courier Service" }
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
                <Clock className="w-10 h-10 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Same Day Courier Service in Andheri West, Mumbai
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                  Need urgent delivery within Mumbai? Trackon Courier offers reliable same day courier service in Andheri West with doorstep pickup and guaranteed delivery by evening.
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
                    Same day courier service is ideal when you need to send documents, parcels, or packages urgently within Mumbai. At Trackon Courier, we understand the importance of time-sensitive deliveries for businesses and individuals alike.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Our same day delivery service operates throughout Andheri West and neighbouring areas including Andheri East, Bandra, Juhu, DN Nagar, and Versova. Simply book your pickup before 2 PM, and we guarantee delivery by 8 PM the same day within Mumbai city limits.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Whether you are sending important legal documents, medical reports, business contracts, or personal parcels — our trained delivery executives ensure safe handling and timely arrival at the destination.
                  </p>
                </article>

                {/* How It Works */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">How Our Same Day Courier Works</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Book Your Pickup</h3>
                        <p className="text-muted-foreground">Call us at 8097512951 or send a WhatsApp message with your pickup address, delivery address, and package details. Book before 2 PM for same day delivery.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Doorstep Pickup</h3>
                        <p className="text-muted-foreground">Our delivery executive arrives at your location within 1-2 hours in Andheri West. We collect the package, verify details, and provide a receipt.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Same Day Delivery</h3>
                        <p className="text-muted-foreground">Your package is delivered to the recipient before 8 PM. You receive SMS confirmation with proof of delivery upon completion.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Areas Covered */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Areas Covered for Same Day Delivery</h2>
                  <p className="text-muted-foreground mb-4">
                    Our same day courier service covers all major localities in Western Mumbai and beyond:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {["Andheri West", "Andheri East", "Bandra West", "Bandra East", "Juhu", "DN Nagar", "Versova", "Goregaon West", "Goregaon East", "Jogeshwari", "Vile Parle", "Santacruz"].map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{area}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    For deliveries to South Mumbai, Central Mumbai, Navi Mumbai, and Thane, please contact us for time estimates.
                  </p>
                </article>

                {/* Why Choose Us */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Trackon Courier for Same Day Delivery</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Fast Pickup in Andheri West</h3>
                        <p className="text-muted-foreground">We pick up your package within 1-2 hours of booking in Andheri West and nearby areas.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Guaranteed Delivery by Evening</h3>
                        <p className="text-muted-foreground">Book before 2 PM and your package will be delivered by 8 PM the same day.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Affordable Rates</h3>
                        <p className="text-muted-foreground">Competitive pricing for same day delivery starting from ₹100 for local deliveries.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Real-Time Updates</h3>
                        <p className="text-muted-foreground">Receive SMS notifications at every stage — pickup confirmation, in-transit, and delivery.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Safe Document Handling</h3>
                        <p className="text-muted-foreground">Important documents are handled with care and delivered with signature confirmation.</p>
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
                    <p><strong className="text-foreground">Same Day Cutoff:</strong> Book before 2 PM for evening delivery</p>
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
                      <Link to="/express-courier-mumbai" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Express Courier Service Mumbai
                      </Link>
                    </li>
                    <li>
                      <Link to="/pan-india-courier" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Pan India Courier Service
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
                  <h3 className="text-xl font-bold text-foreground mb-6">Book Same Day Pickup</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Starting Price</span>
                      <span className="font-semibold text-foreground">₹100</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Delivery Time</span>
                      <span className="font-semibold text-foreground text-sm">By 8 PM same day</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Booking Cutoff</span>
                      <span className="font-semibold text-foreground">Before 2 PM</span>
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
                      📍 Serving Andheri West & Mumbai
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

export default SameDayCourier;
