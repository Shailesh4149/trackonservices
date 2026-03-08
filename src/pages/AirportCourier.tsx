import { useEffect } from "react";
import { useCanonical } from "@/hooks/useCanonical";
import { Link } from "react-router-dom";
import { Plane, Phone, MessageCircle, CheckCircle, ArrowRight, MapPin, FileText, Clock, Hotel, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumb from "@/components/seo/Breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const airportFAQs = [
  {
    question: "Is courier pickup available at Mumbai Airport terminals?",
    answer: "Yes, Trackon Courier provides pickup and delivery services near both Terminal 1 (Domestic) and Terminal 2 (International) of Chhatrapati Shivaji Maharaj International Airport. Our Andheri West office is just 10-15 minutes away, enabling fast pickups from the airport vicinity, hotels, cargo offices, and nearby localities."
  },
  {
    question: "Do you deliver to airport hotels like ITC Maratha and JW Marriott?",
    answer: "Absolutely. We regularly pick up and deliver parcels, documents, and packages to major airport hotels including ITC Maratha, JW Marriott Sahar, Hyatt Regency, Holiday Inn, and Courtyard by Marriott. Simply call us with your hotel name and room details, and our executive will arrive within 30-60 minutes."
  },
  {
    question: "What are the courier charges from Mumbai Airport area?",
    answer: "Courier charges from the Mumbai Airport area start at ₹50 for pan-India shipments and ₹100 for local Mumbai deliveries. International courier rates depend on the destination country and package weight. Call 8097512951 for an instant quote based on your specific requirements."
  },
  {
    question: "Is late night or early morning pickup available near the airport?",
    answer: "Yes, we offer flexible timing for airport-area pickups to accommodate flight schedules. Whether you have a red-eye departure at 2 AM or an early morning flight at 5 AM, we can arrange pickup accordingly. Contact us in advance to schedule your preferred time slot."
  },
  {
    question: "Can I send cargo or heavy parcels from near the airport?",
    answer: "Yes, we handle cargo and heavy parcel shipments from the Mumbai Airport area, including the Airport Cargo Complex on Sahar Road. We courier IT equipment, electronics, bulk documents, trade samples, and commercial cargo both domestically and internationally."
  },
  {
    question: "How do I send documents urgently from the airport area?",
    answer: "For urgent document courier from the airport area, call 8097512951 immediately. We offer same-day and express document delivery for passports, visas, legal papers, business contracts, and certificates. Our executive can reach your location within 30 minutes for pickup."
  },
  {
    question: "Do you offer international courier near Mumbai Airport?",
    answer: "Yes, Trackon Courier provides international courier services from the Mumbai Airport area to over 200 countries. We handle documents, parcels, commercial shipments, and e-commerce orders with full tracking and customs clearance support."
  },
  {
    question: "What areas near CSIA does Trackon Courier cover?",
    answer: "We cover all areas surrounding Chhatrapati Shivaji Maharaj International Airport (CSIA) including Terminal 1, Terminal 2, Sahar Road, Sahar Village, SEEPZ, Vile Parle East & West, Santacruz East, Andheri East & West, Chakala, JB Nagar, Marol, Saki Naka, Navpada, Kalina, Airport Cargo Complex, and Air India Colony."
  }
];

const AirportCourier = () => {
  const phoneNumber = "8097512951";

  useCanonical("/airport-courier-mumbai");

  useEffect(() => {
    document.title = "Airport Courier Service Mumbai – 24/7 Pickup Near Terminal 1 & 2 | Call 8097512951";

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

    updateMeta("description", "Airport courier service in Mumbai near Terminal 1 & 2. Document courier, cargo pickup, hotel delivery & late night service near CSIA. Trackon Courier Andheri – Call 8097512951.");
    updateMeta("keywords", "airport courier mumbai, airport courier services mumbai, courier near mumbai airport, terminal 1 courier, terminal 2 delivery, sahar road courier, cargo courier near mumbai airport, document courier airport mumbai, courier pickup airport hotel, late night courier near airport, urgent courier terminal 1, courier near CSIA, parcel delivery mumbai airport, courier service sahar road, airport area courier pickup, 24/7 courier mumbai airport, airport cargo complex courier, courier for travellers mumbai, hotel delivery near mumbai airport, express courier airport mumbai, courier pickup from airport hotel, mumbai airport document delivery, international courier near airport, same day courier airport mumbai, courier near terminal 2 mumbai");
    updateMeta("og:title", "Airport Courier Service Mumbai – 24/7 Near Terminal 1 & 2 | Trackon Courier", true);
    updateMeta("og:description", "Document, cargo & parcel courier near Mumbai Airport. Hotel pickup, late night service, Terminal 1 & 2 coverage. Call 8097512951.", true);

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
      "description": "Complete courier pickup and delivery service near Mumbai Airport — documents, cargo, parcels, hotel pickup, and late night service near Terminal 1 and Terminal 2.",
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
      "areaServed": ["Mumbai Airport", "Terminal 1", "Terminal 2", "Sahar", "Sahar Road", "Vile Parle", "Vile Parle East", "Santacruz East", "Andheri East", "Chakala", "JB Nagar", "Marol", "Saki Naka", "Navpada", "Kalina", "Airport Cargo Complex", "Air India Colony", "SEEPZ"],
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": airportFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

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
                  Convenient courier pickup and delivery near Mumbai Airport. Serving Terminal 1 (Domestic), Terminal 2 (International), Sahar Road, airport hotels, and cargo complex with fast turnaround — available for early morning and late night flight schedules.
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
                    Whether you need to send urgent documents before a flight, receive a package at your airport hotel, arrange courier services for cargo offices near Sahar Road, or ship heavy cargo from the Airport Cargo Complex — we provide reliable solutions with flexible timing to match flight schedules and airport logistics.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Our executives are familiar with the airport area layout, including the domestic terminal, international terminal, cargo complex, and surrounding localities like Vile Parle East, Santacruz East, Andheri East, Marol, Saki Naka, and Kalina. This local expertise ensures efficient navigation and on-time pickups and deliveries for every airport courier request.
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
                        <p className="text-muted-foreground">Call 8097512951 with your location near the airport, package details, and preferred pickup or delivery time. We accommodate flight schedules, red-eye departures, and early morning arrivals.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">2</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Fast Pickup</h3>
                        <p className="text-muted-foreground">Our executive reaches your location in the airport area within 30-60 minutes. We pick up from hotels like ITC Maratha and JW Marriott, offices, cargo complexes, and residential addresses near CSIA.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-primary">3</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Delivery</h3>
                        <p className="text-muted-foreground">Your package is delivered to the destination — locally within Mumbai, dispatched via our pan-India network, or shipped internationally to 200+ countries with full tracking.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Document & Cargo Courier */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Document & Cargo Courier Near Mumbai Airport</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    The Mumbai Airport area is a hub for businesses, freight forwarders, and logistics companies that regularly need <strong className="text-foreground">document courier</strong> and <strong className="text-foreground">cargo shipping services</strong>. Trackon Courier specialises in handling time-sensitive shipments from the airport zone with same-day and express delivery options.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-secondary/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-accent" />
                        Document Courier
                      </h3>
                      <ul className="space-y-1.5 text-muted-foreground text-sm">
                        <li>• Passport & visa documents</li>
                        <li>• Legal papers & affidavits</li>
                        <li>• Business contracts & agreements</li>
                        <li>• Certificates & transcripts</li>
                        <li>• Trade & export documents</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Package className="w-4 h-4 text-accent" />
                        Cargo & Heavy Parcels
                      </h3>
                      <ul className="space-y-1.5 text-muted-foreground text-sm">
                        <li>• IT equipment & electronics</li>
                        <li>• Trade samples & prototypes</li>
                        <li>• Bulk commercial shipments</li>
                        <li>• E-commerce inventory</li>
                        <li>• Airport Cargo Complex pickups</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Our proximity to the <strong className="text-foreground">Airport Cargo Complex on Sahar Road</strong> makes us the preferred courier partner for freight companies, customs clearing agents, and exporters who need reliable last-mile delivery from the cargo zone to anywhere in Mumbai or across India.
                  </p>
                </article>

                {/* Late Night & Early Morning */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Late Night & Early Morning Airport Courier Service</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Mumbai Airport operates 24/7, and so does the need for courier services. Whether you're catching a <strong className="text-foreground">red-eye flight at 2 AM</strong> and need to dispatch documents before departure, or arriving on an <strong className="text-foreground">early morning flight at 5 AM</strong> with parcels that need immediate delivery — Trackon Courier offers flexible scheduling to match your travel timeline.
                  </p>
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-foreground mb-3">When You Might Need Late Night / Early Morning Service:</h3>
                    <ul className="space-y-2">
                      {[
                        "Urgent document dispatch before an early morning international flight",
                        "Receiving time-sensitive cargo arriving on late night flights",
                        "Hotel checkout courier — send luggage or documents before checking out",
                        "Pre-flight pickup of forgotten items from home or office",
                        "Transit passenger needing to courier items during a layover"
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Call us in advance at <a href="tel:8097512951" className="text-primary font-semibold hover:underline">8097512951</a> to schedule your preferred pickup time. We understand the urgency of airport-related deliveries and work around your flight schedule — no rigid time-slot restrictions.
                  </p>
                </article>

                {/* Airport Hotel Pickup */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Hotel className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Airport Hotel Pickup & Delivery Service</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Staying at a hotel near Mumbai Airport and need to send or receive a courier? Trackon Courier provides <strong className="text-foreground">direct hotel pickup and delivery</strong> for transit passengers, business travellers, and airline crew staying in the airport zone. Our executive comes to your hotel lobby — no need to step out.
                  </p>
                  <div className="bg-secondary/30 rounded-lg p-5 mb-4">
                    <h3 className="font-semibold text-foreground mb-3">Hotels We Regularly Serve Near Mumbai Airport:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "ITC Maratha",
                        "JW Marriott Sahar",
                        "Hyatt Regency Mumbai",
                        "Holiday Inn Mumbai",
                        "Courtyard by Marriott",
                        "The Leela Mumbai",
                        "Hilton Mumbai Airport",
                        "Niranta Transit Hotel"
                      ].map((hotel) => (
                        <div key={hotel} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{hotel}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Common hotel courier requests include sending forgotten documents or items home, dispatching business materials after meetings, shipping purchased goods back to your city, and receiving urgent deliveries before checkout. Simply call with your hotel name and we'll coordinate the pickup seamlessly.
                  </p>
                </article>

                {/* Areas Covered */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Areas Covered Near Mumbai Airport</h2>
                  <p className="text-muted-foreground mb-4">
                    Our airport courier service covers all localities surrounding Chhatrapati Shivaji Maharaj International Airport (CSIA):
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-accent" />
                        Terminal & Airport Areas
                      </h3>
                      <ul className="space-y-2">
                        {["Terminal 1 (Domestic)", "Terminal 2 (International)", "Sahar Road", "Sahar Village", "SEEPZ Area", "Airport Cargo Complex", "Air India Colony"].map((area) => (
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
                        {["Vile Parle East", "Vile Parle West", "Santacruz East", "Andheri East", "Chakala", "JB Nagar", "Marol", "Saki Naka", "Navpada", "Kalina", "Kurla (W)"].map((area) => (
                          <li key={area} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    We also serve airport hotels, cargo offices, freight forwarding companies, customs clearing agents, and businesses operating in the airport zone. Our familiarity with the CSIA area ensures efficient pickups even in complex cargo and terminal locations.
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
                        <p className="text-muted-foreground">Our executives know the airport zone well — terminal access roads, cargo complex layout, hotel locations, and neighbourhood shortcuts for efficient pickups.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Flexible Timing for Flight Schedules</h3>
                        <p className="text-muted-foreground">We understand flight schedules and can arrange early morning, late evening, or overnight pickups to match your travel timeline.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Multiple Service Options</h3>
                        <p className="text-muted-foreground">Local Mumbai delivery, pan-India shipping, international courier to 200+ countries, document express, and cargo services — all available from one provider.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Hotel & Office Pickup</h3>
                        <p className="text-muted-foreground">Direct pickup from airport hotels like ITC Maratha, JW Marriott, Hyatt Regency, business centres, and offices in the airport zone.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Document & Cargo Specialists</h3>
                        <p className="text-muted-foreground">From a single passport document to bulk cargo from the Airport Cargo Complex — we handle all shipment types with care and proper packaging.</p>
                      </div>
                    </li>
                  </ul>
                </article>

                {/* FAQ Section */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Frequently Asked Questions — Airport Courier Service Mumbai
                  </h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {airportFAQs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`faq-${index}`}
                        className="border border-border rounded-lg px-4 data-[state=open]:bg-secondary/50"
                      >
                        <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </article>

                {/* Pickup Info */}
                <article className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Pickup & Contact Information</h2>
                  <address className="not-italic text-muted-foreground space-y-3 mb-6">
                    <p><strong className="text-foreground">Business:</strong> Trackon Courier</p>
                    <p><strong className="text-foreground">Office:</strong> Shop No. 1/2, Ever Shine Mens Wear, Juhu Versova Link Road, Andheri West, Mumbai - 400053</p>
                    <p><strong className="text-foreground">Phone:</strong> <a href="tel:8097512951" className="text-primary hover:underline">8097512951</a></p>
                    <p><strong className="text-foreground">Distance from Airport:</strong> ~15 minutes from Terminal 1 & 2</p>
                    <p><strong className="text-foreground">Coverage:</strong> All terminal areas, airport hotels, cargo complex, and 15+ nearby localities</p>
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
                      <Link to="/book-courier-online" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Book Courier Online
                      </Link>
                    </li>
                    <li>
                      <Link to="/courier-pickup-from-home" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Courier Pickup From Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/courier-near-me-open-now" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Courier Near Me Open Now
                      </Link>
                    </li>
                    <li>
                      <Link to="/courier-charges-per-kg" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Courier Charges Per Kg
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
                      <span className="text-muted-foreground">International</span>
                      <span className="font-semibold text-foreground">From ₹250</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Pickup Time</span>
                      <span className="font-semibold text-foreground text-sm">30-60 mins</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Availability</span>
                      <span className="font-semibold text-foreground text-sm">Flexible Hours</span>
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

                  <div className="mt-6 pt-6 border-t border-border space-y-2">
                    <p className="text-sm text-muted-foreground text-center">
                      📍 15 mins from Mumbai Airport
                    </p>
                    <p className="text-xs text-muted-foreground text-center">
                      Documents • Parcels • Cargo • Hotel Pickup
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
