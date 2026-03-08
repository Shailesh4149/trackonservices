import { useEffect } from "react";
import { useCanonical } from "@/hooks/useCanonical";
import { Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle, CheckCircle, ArrowRight, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumb from "@/components/seo/Breadcrumb";

const CourierNearMeOpenNow = () => {
  const phoneNumber = "8097512951";

  useCanonical("/courier-near-me-open-now");

  useEffect(() => {
    document.title = "Courier Near Me Open Now – 24/7 Pickup Mumbai | Trackon Courier";

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

    updateMeta("description", "Looking for a courier near you open right now? Trackon Courier is open 24/7 in Mumbai with doorstep pickup in 30-60 minutes. Andheri West base. Call 8097512951.");
    updateMeta("keywords", "courier near me open now, courier service near me, courier open now mumbai, 24 hour courier service, late night courier mumbai");
    updateMeta("og:title", "Courier Near Me Open Now – 24/7 in Mumbai | Trackon Courier", true);
    updateMeta("og:description", "Courier open 24/7 near you in Mumbai. Doorstep pickup in 30-60 minutes. Call 8097512951 now.", true);

    const existingScript = document.querySelector('script[data-service="courier-near-me"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-service", "courier-near-me");
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Trackon Courier",
      "description": "24/7 courier service in Mumbai with doorstep pickup in 30-60 minutes. Open right now for urgent and scheduled deliveries.",
      "telephone": `+91-${phoneNumber}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No. 1/2, Ever Shine Mens Wear, Juhu Versova Link Road",
        "addressLocality": "Andheri West",
        "addressRegion": "Maharashtra",
        "postalCode": "400053",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.1364",
        "longitude": "72.8296"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "areaServed": ["Andheri West", "Andheri East", "Bandra", "Juhu", "Versova", "Goregaon", "Malad", "Kandivali", "Vile Parle", "Jogeshwari"],
      "priceRange": "₹50-₹2000"
    });
    document.head.appendChild(script);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I need a courier pickup right now. Are you available? Please confirm.");
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courier Near Me Open Now" }
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
                <MapPin className="w-10 h-10 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Courier Near Me Open Now – 24/7 Service in Mumbai
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                  Yes, we're open right now! Trackon Courier operates 24/7, 365 days a year from Andheri West, Mumbai. Doorstep pickup in 30-60 minutes — no matter what time it is.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Open Now Banner */}
                <article className="bg-accent/10 rounded-xl p-6 md:p-8 border border-accent/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h2 className="text-2xl font-bold text-foreground">We Are Open Right Now</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Unlike most courier shops that close by 8 PM, Trackon Courier is available 24 hours a day, 7 days a week. Whether it's a Sunday morning, a public holiday, or 2 AM on a weeknight — we accept bookings and dispatch pickups.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our 24/7 availability is especially valuable for medical emergencies, last-minute business documents, airport cargo, late-night e-commerce orders, and time-sensitive legal filings.
                  </p>
                </article>

                {/* When People Search This */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">When You Might Need a Courier Open Now</h2>
                  <div className="space-y-6">
                    {[
                      { title: "Late Night Document Urgency", desc: "Forgot to send an important contract that's due tomorrow? We pick up even at midnight for next-morning delivery." },
                      { title: "Medical Emergency Courier", desc: "Need to send medical reports, lab samples, or medicines urgently? We handle medical shipments with priority care, any time of day." },
                      { title: "Airport Cargo & Passport Delivery", desc: "Flight departing in a few hours? We rush your passport, visa, or documents to the airport within 60 minutes." },
                      { title: "Weekend & Holiday Shipping", desc: "Most couriers close on Sundays and holidays. We don't. Book a pickup any day — Diwali, Christmas, or Republic Day." }
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                {/* Location & Coverage */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Our Location & Coverage Area</h2>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">📍 Trackon Courier Office</h3>
                    <address className="not-italic text-muted-foreground">
                      Shop No. 1/2, Ever Shine Mens Wear, Juhu Versova Link Road,<br />
                      Andheri West, Mumbai - 400053<br />
                      <strong className="text-foreground">Open:</strong> 24/7, 365 days
                    </address>
                  </div>
                  <p className="text-muted-foreground mb-4">Areas with fastest pickup (30-60 minutes):</p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {["Andheri West", "Andheri East", "DN Nagar", "Versova", "Juhu", "Lokhandwala", "Oshiwara", "Vile Parle", "Bandra West", "Bandra East", "Goregaon", "Jogeshwari", "Santacruz", "Malad", "Kandivali", "Chakala"].map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{area}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    For South Mumbai, Navi Mumbai, Thane, Vasai-Virar — pickup within 2-3 hours. Call to confirm.
                  </p>
                </article>

                {/* Why Choose Us */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Trackon Over Other Couriers Near You</h2>
                  <ul className="space-y-4">
                    {[
                      { title: "Genuinely Open 24/7", desc: "Not just a phone line — we dispatch pickups at any hour. Most 'open now' couriers only take bookings, we actually pick up." },
                      { title: "Fastest Local Pickup", desc: "30-60 minutes in Andheri West and nearby areas. No courier shop visit needed." },
                      { title: "Transparent Pricing", desc: "Same rates day or night. No surge pricing for late-night or weekend pickups." },
                      { title: "5-Star Rated Service", desc: "Rated 5.0 on Google with 30+ verified reviews from real Mumbai customers." },
                      { title: "All Delivery Types", desc: "Same day, express, pan-India, and international — all available 24/7." }
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

                {/* Contact */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us Right Now</h2>
                  <address className="not-italic text-muted-foreground space-y-3 mb-6">
                    <p><strong className="text-foreground">Business:</strong> Trackon Courier</p>
                    <p><strong className="text-foreground">Phone:</strong> <a href="tel:8097512951" className="text-primary hover:underline">8097512951</a> (available 24/7)</p>
                    <p><strong className="text-foreground">WhatsApp:</strong> <a href="https://wa.me/918097512951" className="text-primary hover:underline">Chat on WhatsApp</a></p>
                    <p><strong className="text-foreground">Status:</strong> <span className="text-green-600 font-semibold">✅ Open Now</span></p>
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
                      WhatsApp Now
                    </Button>
                  </div>
                </article>

                <nav className="bg-muted/30 rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">Explore Other Services</h3>
                  <ul className="space-y-2">
                    <li><Link to="/book-courier-online" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Book Courier Online</Link></li>
                    <li><Link to="/courier-pickup-from-home" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Courier Pickup From Home</Link></li>
                    <li><Link to="/courier-charges-per-kg" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Courier Charges Per Kg</Link></li>
                    <li><Link to="/same-day-courier-andheri-west" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Same Day Courier Service</Link></li>
                    <li><Link to="/" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Back to Homepage</Link></li>
                  </ul>
                </nav>
              </div>

              <aside className="lg:col-span-1">
                <div className="sticky top-24 bg-card rounded-xl p-6 border border-border shadow-elevated">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h3 className="text-xl font-bold text-foreground">Open Now</h3>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Hours</span>
                      <span className="font-semibold text-foreground">24/7</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Pickup Speed</span>
                      <span className="font-semibold text-foreground">30-60 mins</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Starting Rate</span>
                      <span className="font-semibold text-foreground">₹50</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Night Surcharge</span>
                      <span className="font-semibold text-accent">NONE</span>
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
                      WhatsApp Now
                    </Button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">📍 Andheri West, Mumbai – Open 24/7</p>
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

export default CourierNearMeOpenNow;
