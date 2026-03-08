import { useEffect } from "react";
import { useCanonical } from "@/hooks/useCanonical";
import { Link } from "react-router-dom";
import { Scale, Phone, MessageCircle, CheckCircle, ArrowRight, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumb from "@/components/seo/Breadcrumb";

const CourierChargesPerKg = () => {
  const phoneNumber = "8097512951";

  useCanonical("/courier-charges-per-kg");

  useEffect(() => {
    document.title = "Courier Charges Per Kg in Mumbai – Rates Starting ₹50 | Trackon";

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

    updateMeta("description", "Courier charges per kg in Mumbai starting ₹50. Check Trackon Courier rates for local, pan-India & international shipping. No hidden fees. Call 8097512951 for exact quote.");
    updateMeta("keywords", "courier charges per kg, courier rate per kg mumbai, parcel delivery charges, courier price list, courier cost calculator mumbai");
    updateMeta("og:title", "Courier Charges Per Kg in Mumbai – Rates Starting ₹50 | Trackon", true);
    updateMeta("og:description", "Courier charges per kg in Mumbai starting ₹50. Check rates for local, pan-India & international. Call 8097512951.", true);

    const existingScript = document.querySelector('script[data-service="courier-charges-kg"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-service", "courier-charges-kg");
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Courier Service – Per Kg Rates in Mumbai",
      "description": "Affordable courier charges per kg for local Mumbai, pan-India, and international deliveries. Transparent pricing with no hidden fees.",
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
      "areaServed": ["Mumbai", "India", "International"],
      "serviceType": "Courier Delivery"
    });
    document.head.appendChild(script);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I want to know the courier charges per kg for my shipment. Please share rates.");
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Courier Charges Per Kg" }
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
                <Scale className="w-10 h-10 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Courier Charges Per Kg in Mumbai – Affordable Rates
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                  Transparent courier pricing with no hidden fees. Local Mumbai delivery from ₹50, pan-India from ₹80/kg, and international from ₹350/kg. Get an exact quote in 2 minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Rate Table */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Courier Rate Chart – Per Kg Pricing</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-3 px-4 text-foreground font-semibold">Service Type</th>
                          <th className="py-3 px-4 text-foreground font-semibold">Weight</th>
                          <th className="py-3 px-4 text-foreground font-semibold">Starting Rate</th>
                          <th className="py-3 px-4 text-foreground font-semibold">Delivery Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { service: "Local Mumbai", weight: "Up to 1 kg", rate: "₹50", time: "Same day" },
                          { service: "Local Mumbai", weight: "1-5 kg", rate: "₹50-150", time: "Same day" },
                          { service: "Local Mumbai", weight: "5-10 kg", rate: "₹150-300", time: "Same day" },
                          { service: "Pan India (Metro)", weight: "Up to 1 kg", rate: "₹80", time: "2-3 days" },
                          { service: "Pan India (Metro)", weight: "1-5 kg", rate: "₹80-250", time: "2-3 days" },
                          { service: "Pan India (Non-Metro)", weight: "Up to 1 kg", rate: "₹100", time: "3-5 days" },
                          { service: "Pan India (Non-Metro)", weight: "1-5 kg", rate: "₹100-350", time: "3-5 days" },
                          { service: "International", weight: "Up to 0.5 kg", rate: "₹350", time: "5-7 days" },
                          { service: "International", weight: "0.5-2 kg", rate: "₹350-800", time: "5-7 days" },
                          { service: "Express (Priority)", weight: "Up to 1 kg", rate: "₹150", time: "Next day" },
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-border/50">
                            <td className="py-3 px-4 text-foreground">{row.service}</td>
                            <td className="py-3 px-4 text-muted-foreground">{row.weight}</td>
                            <td className="py-3 px-4 font-semibold text-accent">{row.rate}</td>
                            <td className="py-3 px-4 text-muted-foreground">{row.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    * Rates are indicative and may vary based on exact destination, dimensions, and shipment type. Call or WhatsApp for an exact quote.
                  </p>
                </article>

                {/* How Pricing Works */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">How Courier Pricing Works</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Courier charges are calculated based on two factors: <strong className="text-foreground">actual weight</strong> and <strong className="text-foreground">volumetric weight</strong>. The higher of the two is used for billing. Volumetric weight is calculated as (Length × Width × Height) ÷ 5000 in centimetres.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    For example, a lightweight but bulky package (like a pillow) may be charged by volumetric weight, while a heavy but compact item (like books) would be charged by actual weight.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    At Trackon Courier, we always quote the best available rate. There are no hidden surcharges, fuel charges, or surprise fees. The price we tell you on WhatsApp is the final price you pay.
                  </p>
                </article>

                {/* What Affects Pricing */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Factors That Affect Courier Charges</h2>
                  <ul className="space-y-4">
                    {[
                      { title: "Weight & Dimensions", desc: "Heavier and larger packages cost more. We use the higher of actual weight vs volumetric weight." },
                      { title: "Destination", desc: "Local Mumbai deliveries are cheapest. Pan-India metro cities cost less than tier-2/3 cities. International varies by country." },
                      { title: "Speed of Delivery", desc: "Same day and express services cost more than standard 3-5 day delivery." },
                      { title: "Shipment Type", desc: "Documents are cheaper than parcels. Fragile items may need special packaging at additional cost." },
                      { title: "Insurance & Value", desc: "High-value items can be insured for an additional premium for extra security." }
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

                {/* Why Trackon is Affordable */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Why Trackon Courier Offers the Best Rates</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    As a local Mumbai courier service, we have lower overhead costs than national chains. This allows us to offer competitive per-kg rates while maintaining quality service with doorstep pickup and real-time tracking.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We also offer bulk discounts for businesses sending 10+ shipments per month and special rates for regular customers. Contact us for a customized corporate rate card.
                  </p>
                </article>

                {/* Contact */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Get Your Exact Quote</h2>
                  <address className="not-italic text-muted-foreground space-y-3 mb-6">
                    <p><strong className="text-foreground">Business:</strong> Trackon Courier</p>
                    <p><strong className="text-foreground">Office:</strong> Shop No. 1/2, Ever Shine Mens Wear, Juhu Versova Link Road, Andheri West, Mumbai - 400053</p>
                    <p><strong className="text-foreground">Phone:</strong> <a href="tel:8097512951" className="text-primary hover:underline">8097512951</a></p>
                  </address>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="accent" size="lg" asChild>
                      <a href={`tel:${phoneNumber}`} className="flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        Call for Exact Rate
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" onClick={handleWhatsAppClick}>
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp for Quote
                    </Button>
                  </div>
                </article>

                <nav className="bg-muted/30 rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">Explore Other Services</h3>
                  <ul className="space-y-2">
                    <li><Link to="/book-courier-online" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Book Courier Online</Link></li>
                    <li><Link to="/courier-pickup-from-home" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Courier Pickup From Home</Link></li>
                    <li><Link to="/courier-near-me-open-now" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Courier Near Me Open Now</Link></li>
                    <li><Link to="/pricing" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Full Pricing Page</Link></li>
                    <li><Link to="/" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Back to Homepage</Link></li>
                  </ul>
                </nav>
              </div>

              <aside className="lg:col-span-1">
                <div className="sticky top-24 bg-card rounded-xl p-6 border border-border shadow-elevated">
                  <h3 className="text-xl font-bold text-foreground mb-6">Quick Rate Guide</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Local Mumbai</span>
                      <span className="font-semibold text-foreground">From ₹50</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Pan India</span>
                      <span className="font-semibold text-foreground">From ₹80/kg</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">International</span>
                      <span className="font-semibold text-foreground">From ₹350</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Hidden Fees</span>
                      <span className="font-semibold text-accent">ZERO</span>
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
                      Get WhatsApp Quote
                    </Button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">💰 No hidden charges guaranteed</p>
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

export default CourierChargesPerKg;
