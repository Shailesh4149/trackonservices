import { useEffect } from "react";
import { useCanonical } from "@/hooks/useCanonical";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pricingData = [
  {
    category: "Local Mumbai Delivery",
    services: [
      { service: "Same Day Delivery (within Andheri)", weight: "Up to 500g", price: "₹50 – ₹80", time: "2-4 hours" },
      { service: "Same Day Delivery (Andheri to Bandra/Juhu)", weight: "Up to 500g", price: "₹70 – ₹120", time: "3-5 hours" },
      { service: "Same Day Delivery (Across Mumbai)", weight: "Up to 1 kg", price: "₹100 – ₹200", time: "4-8 hours" },
      { service: "Express Delivery (Priority)", weight: "Up to 1 kg", price: "₹150 – ₹300", time: "2-6 hours" },
    ],
  },
  {
    category: "Pan India Courier",
    services: [
      { service: "Metro Cities (Delhi, Bangalore, etc.)", weight: "Up to 500g", price: "₹80 – ₹150", time: "2-4 days" },
      { service: "Tier 2 Cities", weight: "Up to 500g", price: "₹100 – ₹200", time: "3-5 days" },
      { service: "Remote Areas", weight: "Up to 500g", price: "₹150 – ₹300", time: "5-7 days" },
      { service: "Heavy Parcel (Pan India)", weight: "1-5 kg", price: "₹200 – ₹800", time: "3-6 days" },
    ],
  },
  {
    category: "International Courier",
    services: [
      { service: "South East Asia", weight: "Up to 500g", price: "₹800 – ₹1,500", time: "3-5 days" },
      { service: "USA / Canada / UK", weight: "Up to 500g", price: "₹1,200 – ₹2,500", time: "5-7 days" },
      { service: "Europe", weight: "Up to 500g", price: "₹1,000 – ₹2,200", time: "5-8 days" },
      { service: "Middle East (UAE, Saudi)", weight: "Up to 500g", price: "₹900 – ₹1,800", time: "3-5 days" },
    ],
  },
  {
    category: "Specialised Services",
    services: [
      { service: "Airport Pickup/Delivery (T1 & T2)", weight: "Up to 2 kg", price: "₹150 – ₹400", time: "1-3 hours" },
      { service: "Secure Document Courier", weight: "Documents", price: "₹50 – ₹150", time: "Same day" },
      { service: "Bulk / Business Shipments", weight: "Custom", price: "Custom Quote", time: "Varies" },
    ],
  },
];

const Pricing = () => {
  const sectionRef = useScrollAnimation();

  useCanonical("/pricing");

  useEffect(() => {
    document.title = "Courier Charges & Rates Mumbai | Trackon Courier – Affordable Pricing";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "Check Trackon Courier charges and rates for same-day delivery, Pan India, and international courier from Mumbai. Affordable pricing starting ₹50. Call 8097512951 for exact quote.";
    if (meta) meta.setAttribute("content", desc);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20 pb-16 bg-background min-h-screen" ref={sectionRef}>
        <div className="container py-12">
          <nav className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Pricing & Rates</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </nav>

          <header className="text-center max-w-2xl mx-auto mb-12" data-animate>
            <span className="inline-block text-accent font-semibold mb-4">Transparent Pricing</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Courier Charges & Rate Card
            </h1>
            <p className="text-muted-foreground text-lg">
              Affordable courier rates from Andheri West, Mumbai. No hidden fees – what you see is what you pay. Call for exact pricing based on your shipment.
            </p>
          </header>

          <div className="space-y-10">
            {pricingData.map((category) => (
              <section key={category.category} className="bg-card rounded-xl border border-border shadow-card overflow-hidden" data-animate>
                <div className="bg-primary px-6 py-4">
                  <h2 className="text-lg font-bold text-primary-foreground">{category.category}</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="px-6 py-3 text-sm font-semibold text-foreground">Service</th>
                        <th className="px-6 py-3 text-sm font-semibold text-foreground">Weight</th>
                        <th className="px-6 py-3 text-sm font-semibold text-foreground">Estimated Price</th>
                        <th className="px-6 py-3 text-sm font-semibold text-foreground">Delivery Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.services.map((item, i) => (
                        <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                          <td className="px-6 py-4 text-sm text-foreground font-medium">{item.service}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{item.weight}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-accent">{item.price}</td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">{item.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center" data-animate>
            <h2 className="text-2xl font-bold text-foreground mb-3">Need an Exact Quote?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Prices vary based on exact weight, dimensions, and destination. Call us for a free, no-obligation quote tailored to your shipment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="accent" size="lg" asChild>
                <a href="tel:8097512951" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 8097512951
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/918097512951?text=Hi%20Trackon%20Courier%2C%20I%20need%20a%20rate%20quote" target="_blank" rel="noopener noreferrer">
                  WhatsApp Quote
                </a>
              </Button>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8">
            * All prices are indicative and may vary based on actual weight, dimensions, and destination. GST extra where applicable. Rates effective as of March 2026.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
