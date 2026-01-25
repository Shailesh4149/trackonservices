import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Plane, Phone, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumb from "@/components/seo/Breadcrumb";

const InternationalCourier = () => {
  const phoneNumber = "8097512951";

  useEffect(() => {
    document.title = "International Courier Service Mumbai | Worldwide Shipping";

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

    updateMeta("description", "International courier service from Mumbai to 200+ countries. Ship to USA, UK, UAE, Canada, Australia. Customs clearance included. Trackon Courier - Call 8097512951.");
    updateMeta("keywords", "international courier mumbai, worldwide shipping, courier to usa uk uae, international parcel service, overseas courier");
    updateMeta("og:title", "International Courier Service Mumbai | Trackon Courier", true);
    updateMeta("og:description", "International courier service from Mumbai to 200+ countries. Ship to USA, UK, UAE, Canada, Australia. Call 8097512951.", true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", `${window.location.origin}/international-courier-mumbai`);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", `${window.location.origin}/international-courier-mumbai`);
      document.head.appendChild(canonical);
    }

    const existingScript = document.querySelector('script[data-service="international-courier"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-service", "international-courier");
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "International Courier Service Mumbai",
      "description": "Worldwide courier delivery service from Mumbai to 200+ countries with customs clearance.",
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
      "areaServed": "Worldwide",
      "serviceType": "International Courier"
    });
    document.head.appendChild(script);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I want to send a parcel internationally. Please share rates and requirements.");
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "International Courier Service" }
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
                  International Courier Service in Mumbai
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                  Ship documents and parcels worldwide from Mumbai. Trackon Courier offers international delivery to 200+ countries including USA, UK, UAE, Canada, Australia, and Singapore.
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
                    International courier service from Trackon Courier connects you to the world. Whether you need to send important documents to the United States, business samples to the United Kingdom, or personal parcels to family in the UAE — we handle the complete shipping process including customs documentation.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    We partner with global courier networks to ensure your international shipments are handled professionally from pickup in Andheri West to doorstep delivery anywhere in the world. Our team assists with proper documentation, customs declarations, and provides accurate delivery timelines based on destination country requirements.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Both express and economy options are available to match your budget and timeline needs. Express international delivery typically takes 3-5 business days to major destinations, while economy services offer cost-effective solutions for non-urgent shipments.
                  </p>
                </article>

                {/* How It Works */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">How Our International Courier Works</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Enquiry & Quote</h3>
                        <p className="text-muted-foreground">Contact us at 8097512951 with your destination country, package contents, weight, and dimensions. We provide a detailed quote including customs duties estimate where applicable.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Documentation</h3>
                        <p className="text-muted-foreground">We assist with preparing customs declarations, commercial invoices (for goods), and any required export documentation. Proper documentation ensures smooth customs clearance.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Pickup & Processing</h3>
                        <p className="text-muted-foreground">We collect your package from Andheri West or Mumbai, verify documentation, and hand it over to our international courier partner for export processing.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">4</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">International Transit & Delivery</h3>
                        <p className="text-muted-foreground">Your package travels via air freight, clears destination customs, and is delivered to the recipient. Track the entire journey with our international tracking number.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Countries Covered */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Countries We Ship To</h2>
                  <p className="text-muted-foreground mb-4">
                    We deliver to 200+ countries worldwide. Popular destinations include:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Americas & Europe (3-7 days)</h3>
                      <ul className="space-y-2">
                        {["United States (USA)", "Canada", "United Kingdom (UK)", "Germany", "France", "Australia", "New Zealand"].map((country) => (
                          <li key={country} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{country}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Middle East & Asia (2-5 days)</h3>
                      <ul className="space-y-2">
                        {["United Arab Emirates (UAE)", "Saudi Arabia", "Qatar", "Singapore", "Malaysia", "Hong Kong", "Japan"].map((country) => (
                          <li key={country} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{country}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    Contact us for rates and delivery times to other countries in Africa, South America, and other regions.
                  </p>
                </article>

                {/* Why Choose Us */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Trackon Courier for International Shipping</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Customs Assistance</h3>
                        <p className="text-muted-foreground">We help prepare all required customs documentation to ensure your package clears both Indian and destination customs smoothly.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Express & Economy Options</h3>
                        <p className="text-muted-foreground">Choose express for urgent shipments or economy for cost-effective delivery. Both options include tracking.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Door-to-Door Service</h3>
                        <p className="text-muted-foreground">Pickup from your location in Mumbai and delivery to the recipient's doorstep anywhere in the world.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">International Tracking</h3>
                        <p className="text-muted-foreground">Track your shipment globally from pickup to delivery with detailed status updates at each checkpoint.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Secure Packaging</h3>
                        <p className="text-muted-foreground">Professional export-grade packaging to protect your shipment during international transit.</p>
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
                    <p><strong className="text-foreground">International Enquiries:</strong> Monday to Saturday, 10 AM to 6 PM</p>
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
                  <h3 className="text-xl font-bold text-foreground mb-6">Get International Quote</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Documents (500g)</span>
                      <span className="font-semibold text-foreground">From ₹1,500</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Parcels (1 kg)</span>
                      <span className="font-semibold text-foreground">From ₹2,500</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Delivery Time</span>
                      <span className="font-semibold text-foreground text-sm">3-7 days</span>
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
                      📍 Ship from Mumbai to Worldwide
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

export default InternationalCourier;
