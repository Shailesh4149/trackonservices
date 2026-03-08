import { useEffect } from "react";
import { useCanonical } from "@/hooks/useCanonical";
import { Link } from "react-router-dom";
import { Home, Phone, MessageCircle, CheckCircle, ArrowRight, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumb from "@/components/seo/Breadcrumb";

const CourierPickupFromHome = () => {
  const phoneNumber = "8097512951";

  useCanonical("/courier-pickup-from-home");

  useEffect(() => {
    document.title = "Courier Pickup From Home in Mumbai | Free Doorstep Collection | Trackon";

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        meta = document.createElement("meta");
        if (isProperty) meta.setAttribute("property", name);
        else meta.setAttribute("name", name);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    updateMeta("description", "Free courier pickup from home in Mumbai. Doorstep collection within 30-60 minutes. No need to visit a courier shop. Trackon Courier Andheri West. Call 8097512951.");
    updateMeta("keywords", "courier pickup from home, home pickup courier mumbai, doorstep courier pickup, free courier pickup, courier collection from home");
    updateMeta("og:title", "Courier Pickup From Home in Mumbai | Trackon Courier", true);
    updateMeta("og:description", "Free courier pickup from home in Mumbai. Doorstep collection within 30-60 minutes. Call 8097512951.", true);

    const existingScript = document.querySelector('script[data-service="courier-pickup-home"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-service", "courier-pickup-home");
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Courier Pickup From Home – Mumbai Doorstep Collection",
      "description": "Free doorstep courier pickup from your home or office in Mumbai. Collection within 30-60 minutes across all areas.",
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
      "areaServed": ["Mumbai", "Andheri West", "Andheri East", "Bandra", "Juhu", "Versova", "Goregaon", "Malad", "Kandivali", "Vile Parle"],
      "serviceType": "Doorstep Courier Pickup"
    });
    document.head.appendChild(script);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I need a courier pickup from my home. Please arrange collection.");
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courier Pickup From Home" }
  ];

  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="bg-primary/5 py-12 md:py-20">
          <div className="container">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-accent-gradient flex items-center justify-center flex-shrink-0">
                <Home className="w-10 h-10 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Courier Pickup From Home in Mumbai – Free Doorstep Collection
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                  No need to step out. Trackon Courier picks up your parcel from your doorstep within 30-60 minutes — completely free of charge. Available across Mumbai, 7 days a week.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Home Pickup Over Visiting a Courier Shop?</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Gone are the days of carrying heavy parcels to the nearest courier shop and standing in queues. With Trackon Courier's free home pickup service, our trained executive comes to your home or office, collects your shipment, packs it if needed, and handles the rest.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    This is especially convenient for senior citizens, work-from-home professionals, mothers with young children, and anyone who values their time. We cover all residential areas across Mumbai — from high-rise apartments in Andheri to independent houses in Bandra, societies in Versova, and complexes in Goregaon.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Whether it's a single envelope or 20 boxes — we pick it all up from your doorstep with the same speed and care.
                  </p>
                </article>

                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">How Home Pickup Works</h2>
                  <div className="space-y-6">
                    {[
                      { step: "1", title: "Call or WhatsApp Us", desc: "Share your home address, what you're sending, and preferred pickup time. We're available 24/7." },
                      { step: "2", title: "Executive Arrives at Your Door", desc: "Our delivery executive reaches your home within 30-60 minutes in Andheri West, or within 2 hours across Mumbai." },
                      { step: "3", title: "Package Collected & Receipt Given", desc: "We weigh, pack (if needed), and collect your shipment. You receive a receipt with tracking number instantly." },
                      { step: "4", title: "Delivery with Live Updates", desc: "Your parcel is dispatched immediately. Track it via WhatsApp or SMS updates until delivered." }
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-primary">{item.step}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Home Pickup Areas in Mumbai</h2>
                  <p className="text-muted-foreground mb-4">We provide free doorstep pickup across all major Mumbai localities:</p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {["Andheri West", "Andheri East", "Bandra West", "Bandra East", "Juhu", "Versova", "Vile Parle", "Santacruz", "Goregaon", "Malad", "Kandivali", "Jogeshwari", "DN Nagar", "Lokhandwala", "Oshiwara", "Dadar"].map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{area}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Benefits of Doorstep Courier Pickup</h2>
                  <ul className="space-y-4">
                    {[
                      { title: "100% Free Pickup", desc: "No extra charge for home collection — the pickup is completely free across Mumbai." },
                      { title: "30-60 Minute Arrival", desc: "Our executive reaches your doorstep within 30-60 minutes in Andheri West and nearby areas." },
                      { title: "Packaging Assistance", desc: "Don't have packaging? We bring bubble wrap, boxes, and tape — packing done at your doorstep." },
                      { title: "Safe & Secure Handling", desc: "Trained executives handle documents, fragile items, and valuables with professional care." },
                      { title: "Available 24/7", desc: "Whether it's early morning or late night, we pick up at your convenience — 365 days." }
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Schedule a Home Pickup Now</h2>
                  <address className="not-italic text-muted-foreground space-y-3 mb-6">
                    <p><strong className="text-foreground">Business:</strong> Trackon Courier</p>
                    <p><strong className="text-foreground">Office:</strong> Shop No. 1/2, Ever Shine Mens Wear, Juhu Versova Link Road, Andheri West, Mumbai - 400053</p>
                    <p><strong className="text-foreground">Phone:</strong> <a href="tel:8097512951" className="text-primary hover:underline">8097512951</a></p>
                    <p><strong className="text-foreground">Pickup Time:</strong> 30-60 minutes from booking</p>
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
                      WhatsApp Pickup Request
                    </Button>
                  </div>
                </article>

                <nav className="bg-muted/30 rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">Explore Other Services</h3>
                  <ul className="space-y-2">
                    <li><Link to="/book-courier-online" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Book Courier Online</Link></li>
                    <li><Link to="/same-day-courier-andheri-west" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Same Day Courier Service</Link></li>
                    <li><Link to="/courier-charges-per-kg" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Courier Charges Per Kg</Link></li>
                    <li><Link to="/courier-near-me-open-now" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Courier Near Me Open Now</Link></li>
                    <li><Link to="/" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Back to Homepage</Link></li>
                  </ul>
                </nav>
              </div>

              <aside className="lg:col-span-1">
                <div className="sticky top-24 bg-card rounded-xl p-6 border border-border shadow-elevated">
                  <h3 className="text-xl font-bold text-foreground mb-6">Free Home Pickup</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Pickup Charge</span>
                      <span className="font-semibold text-accent">FREE</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Arrival Time</span>
                      <span className="font-semibold text-foreground">30-60 mins</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Packaging</span>
                      <span className="font-semibold text-foreground">Included</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Available</span>
                      <span className="font-semibold text-foreground">24/7</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button variant="accent" size="lg" className="w-full" asChild>
                      <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        Call: 8097512951
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" onClick={handleWhatsAppClick}>
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Pickup
                    </Button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">📍 Free pickup across Mumbai</p>
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

export default CourierPickupFromHome;
