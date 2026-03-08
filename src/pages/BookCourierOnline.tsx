import { useEffect } from "react";
import { useCanonical } from "@/hooks/useCanonical";
import { Link } from "react-router-dom";
import { Globe, Phone, MessageCircle, CheckCircle, ArrowRight, ShoppingCart, Smartphone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumb from "@/components/seo/Breadcrumb";

const BookCourierOnline = () => {
  const phoneNumber = "8097512951";

  useCanonical("/book-courier-online");

  useEffect(() => {
    document.title = "Book Courier Online – Instant Pickup in Mumbai | Trackon Courier";

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

    updateMeta("description", "Book courier online in Mumbai – WhatsApp or call for instant doorstep pickup in 30-60 minutes. Same day & express delivery. Trackon Courier Andheri West. Call 8097512951.");
    updateMeta("keywords", "book courier online, book courier online mumbai, online courier booking, courier booking whatsapp, schedule courier pickup online");
    updateMeta("og:title", "Book Courier Online – Instant Pickup in Mumbai | Trackon Courier", true);
    updateMeta("og:description", "Book courier online in Mumbai – WhatsApp or call for instant doorstep pickup in 30-60 minutes. Call 8097512951.", true);

    const existingScript = document.querySelector('script[data-service="book-courier-online"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-service", "book-courier-online");
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Book Courier Online – Mumbai Pickup & Delivery",
      "description": "Book a courier online for instant doorstep pickup in Mumbai. WhatsApp or call to schedule same day, express, or pan-India delivery.",
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
      "areaServed": ["Mumbai", "Andheri West", "Andheri East", "Bandra", "Juhu", "Versova", "Goregaon", "Malad", "Kandivali"],
      "serviceType": "Online Courier Booking"
    });
    document.head.appendChild(script);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I want to book a courier pickup online. Please share details.");
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Book Courier Online" }
  ];

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-primary/5 py-12 md:py-20">
          <div className="container">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-accent-gradient flex items-center justify-center flex-shrink-0">
                <ShoppingCart className="w-10 h-10 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Book Courier Online – Instant Pickup in Mumbai
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                  No app downloads, no registration. Book a courier in Mumbai with a single WhatsApp message or phone call. Doorstep pickup in 30-60 minutes, 7 days a week.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* How to Book */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">How to Book a Courier Online in 3 Simple Steps</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">1</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Send a WhatsApp Message or Call</h3>
                        <p className="text-muted-foreground">Tap the WhatsApp button below or call 8097512951. Share your pickup address, delivery address, and what you're sending (documents, parcel, package).</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Get Instant Rate & Confirmation</h3>
                        <p className="text-muted-foreground">We reply within 2 minutes with the exact price, pickup time, and delivery estimate. No hidden charges — what we quote is what you pay.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Doorstep Pickup in 30-60 Minutes</h3>
                        <p className="text-muted-foreground">Our executive arrives at your door, collects the shipment, and provides a tracking receipt. You can track delivery status via WhatsApp updates.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Why Book Online */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Why Book Your Courier Online with Trackon?</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Forget standing in queues at courier shops. With Trackon Courier, you book from the comfort of your home or office. Our WhatsApp-first booking system means you get instant confirmation without downloading any app or filling lengthy forms.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Whether you're sending important business documents, e-commerce returns, personal parcels, or bulk shipments — booking online with us is faster than any courier aggregator. We serve all of Mumbai with special focus on Andheri West, Bandra, Juhu, Versova, and surrounding areas.
                  </p>
                </article>

                {/* What You Can Send */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">What You Can Book Online</h2>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Documents & Legal Papers",
                      "E-commerce Returns & Parcels",
                      "Business Contracts & Files",
                      "Personal Gifts & Packages",
                      "Medical Reports & Samples",
                      "IT Equipment & Electronics",
                      "Passport & Visa Documents",
                      "Bulk Corporate Shipments"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                {/* Benefits */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Benefits of Online Courier Booking</h2>
                  <ul className="space-y-4">
                    {[
                      { title: "No App Required", desc: "Book via WhatsApp or phone call — no downloads, no sign-ups." },
                      { title: "Instant Price Quote", desc: "Get exact charges within 2 minutes. No hidden fees or surge pricing." },
                      { title: "30-60 Minute Pickup", desc: "Our executive reaches your doorstep within 30-60 minutes in Andheri West." },
                      { title: "Real-Time Tracking", desc: "Track your shipment via WhatsApp updates at every stage of delivery." },
                      { title: "Cash & UPI Payment", desc: "Pay conveniently via cash on pickup, UPI, or bank transfer." }
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">Book Your Courier Now</h2>
                  <address className="not-italic text-muted-foreground space-y-3 mb-6">
                    <p><strong className="text-foreground">Business:</strong> Trackon Courier</p>
                    <p><strong className="text-foreground">Office:</strong> Shop No. 1/2, Ever Shine Mens Wear, Juhu Versova Link Road, Andheri West, Mumbai - 400053</p>
                    <p><strong className="text-foreground">Phone:</strong> <a href="tel:8097512951" className="text-primary hover:underline">8097512951</a></p>
                    <p><strong className="text-foreground">Availability:</strong> 24/7, 365 days a year</p>
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
                      Book via WhatsApp
                    </Button>
                  </div>
                </article>

                {/* Internal Links */}
                <nav className="bg-muted/30 rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">Explore Other Services</h3>
                  <ul className="space-y-2">
                    <li><Link to="/same-day-courier-andheri-west" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Same Day Courier Service</Link></li>
                    <li><Link to="/courier-pickup-from-home" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Courier Pickup From Home</Link></li>
                    <li><Link to="/courier-charges-per-kg" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Courier Charges Per Kg</Link></li>
                    <li><Link to="/courier-near-me-open-now" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Courier Near Me Open Now</Link></li>
                    <li><Link to="/" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" />Back to Homepage</Link></li>
                  </ul>
                </nav>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 bg-card rounded-xl p-6 border border-border shadow-elevated">
                  <h3 className="text-xl font-bold text-foreground mb-6">Book Online Now</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Booking</span>
                      <span className="font-semibold text-foreground">WhatsApp / Call</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Pickup Time</span>
                      <span className="font-semibold text-foreground">30-60 mins</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Starting Price</span>
                      <span className="font-semibold text-foreground">₹50</span>
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
                      WhatsApp Booking
                    </Button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">📍 Serving all of Mumbai</p>
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

export default BookCourierOnline;
