import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Package, Truck, Plane, Clock, Shield, MapPin, Phone, MessageCircle, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumb from "@/components/seo/Breadcrumb";
import ServiceFAQ from "@/components/service/ServiceFAQ";
import HowItWorks from "@/components/service/HowItWorks";
import ServiceUseCases from "@/components/service/ServiceUseCases";
import ServiceBenefits from "@/components/service/ServiceBenefits";
import ServiceComparison from "@/components/service/ServiceComparison";
import RelatedServices from "@/components/service/RelatedServices";
import { serviceFAQs } from "@/data/serviceFAQs";

const servicesData = {
  "domestic-courier": {
    icon: Package,
    title: "Domestic Courier Services in Mumbai",
    shortTitle: "Domestic Courier",
    description: "Fast and reliable courier services across India. Same-day and next-day delivery options available.",
    details: "Our domestic courier service covers all major cities and towns across India. We offer flexible pickup and delivery options with real-time tracking. Whether you need to send documents, parcels, or bulk shipments, we ensure timely and secure delivery.",
    features: ["Pan India coverage", "Real-time tracking", "Doorstep pickup", "Insurance available", "COD facility"],
    metaDescription: "Trackon Courier offers fast domestic courier services in Mumbai & across India. Same-day delivery, doorstep pickup, real-time tracking. Call 9864251628 for instant quotes.",
    keywords: "domestic courier mumbai, courier services india, parcel delivery, same day courier, document courier",
    areas: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad"],
    pricing: "Starting from ₹50 for documents",
    deliveryTime: "1-3 business days across India",
  },
  "international-shipping": {
    icon: Plane,
    title: "International Shipping & Courier Services",
    shortTitle: "International Shipping",
    description: "Send parcels worldwide with tracked international courier services to 200+ countries.",
    details: "Ship your packages to over 200 countries worldwide with our reliable international courier service. We handle customs documentation and ensure your shipments reach their destination safely and on time.",
    features: ["200+ countries", "Customs clearance", "Express & economy options", "Door-to-door delivery", "Online tracking"],
    metaDescription: "International courier services from Mumbai to 200+ countries. Customs clearance, express shipping, door-to-door delivery. Contact Trackon Courier at 9864251628.",
    keywords: "international courier mumbai, worldwide shipping, international parcel delivery, customs clearance, express international shipping",
    areas: ["USA", "UK", "Canada", "Australia", "UAE", "Singapore", "Germany", "Japan"],
    pricing: "Starting from ₹1500 for documents",
    deliveryTime: "3-7 business days worldwide",
  },
  "express-delivery": {
    icon: Truck,
    title: "Express Delivery Services in Mumbai",
    shortTitle: "Express Delivery",
    description: "Urgent deliveries with express courier services. Get your package delivered within hours.",
    details: "For time-sensitive shipments, our express delivery service guarantees the fastest possible delivery. Perfect for urgent documents, medical supplies, or any critical packages that need immediate attention.",
    features: ["Same-day delivery", "Priority handling", "Dedicated vehicles", "Live updates", "24/7 support"],
    metaDescription: "Express courier delivery in Mumbai - urgent packages delivered within hours. Priority handling, 24/7 support. Call Trackon Courier 9864251628 for express shipping.",
    keywords: "express delivery mumbai, urgent courier, fast delivery service, priority courier, same day express",
    areas: ["Mumbai Central", "Andheri", "Bandra", "Dadar", "Thane", "Navi Mumbai", "Borivali", "Goregaon"],
    pricing: "Starting from ₹150 for local express",
    deliveryTime: "2-6 hours within Mumbai",
  },
  "same-day-delivery": {
    icon: Clock,
    title: "Same Day Delivery Services Mumbai",
    shortTitle: "Same Day Delivery",
    description: "Book before 2 PM for same-day courier delivery within city limits in Mumbai.",
    details: "Need it delivered today? Book before 2 PM and we'll deliver your package within the same day across Mumbai city limits. Ideal for last-minute gifts, important documents, or urgent business needs.",
    features: ["Delivery by evening", "Mumbai city coverage", "Quick pickup", "SMS notifications", "Proof of delivery"],
    metaDescription: "Same day courier delivery in Mumbai. Book before 2 PM, delivered by evening. Trackon Courier - your trusted same day delivery partner. Call 9864251628.",
    keywords: "same day delivery mumbai, today delivery courier, urgent same day courier, local courier mumbai",
    areas: ["South Mumbai", "Western Suburbs", "Central Mumbai", "Eastern Suburbs", "Harbour Line areas"],
    pricing: "Starting from ₹100 within city",
    deliveryTime: "Delivered by 8 PM same day",
  },
  "secure-packaging": {
    icon: Shield,
    title: "Secure Packaging Services for Fragile Items",
    shortTitle: "Secure Packaging",
    description: "Professional packaging services for fragile items. 100% safe delivery guaranteed.",
    details: "We provide professional packaging solutions for all types of items, especially fragile and valuable goods. Our trained staff uses quality materials to ensure your items are protected during transit.",
    features: ["Bubble wrap & foam", "Custom boxes", "Fragile item handling", "Damage protection", "Free assessment"],
    metaDescription: "Professional secure packaging for fragile items in Mumbai. Custom boxes, bubble wrap, 100% damage protection. Trackon Courier packaging services. Call 9864251628.",
    keywords: "secure packaging mumbai, fragile item courier, custom packaging, safe delivery packaging",
    areas: ["Mumbai", "All service areas"],
    pricing: "Free with shipments over ₹500",
    deliveryTime: "Packaging done within 30 minutes",
  },
  "doorstep-pickup": {
    icon: MapPin,
    title: "Free Doorstep Pickup Service Mumbai",
    shortTitle: "Doorstep Pickup",
    description: "Free doorstep pickup for your convenience. Schedule a pickup at your preferred time.",
    details: "No need to visit our office. We offer free doorstep pickup service across Mumbai. Schedule a pickup at your preferred time slot and our executive will collect the package from your location.",
    features: ["Free pickup", "Flexible timing", "Scheduled pickups", "Multiple pickups", "Corporate accounts"],
    metaDescription: "Free doorstep pickup courier service in Mumbai. Schedule pickup at your convenience. Trackon Courier - call 9864251628 for home pickup.",
    keywords: "doorstep pickup mumbai, home pickup courier, free pickup service, scheduled courier pickup",
    areas: ["All Mumbai locations", "Thane", "Navi Mumbai", "Kalyan", "Dombivli", "Vasai-Virar"],
    pricing: "FREE pickup for all orders",
    deliveryTime: "Pickup within 2 hours of booking",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug as keyof typeof servicesData] : null;
  const phoneNumber = "9864251628";

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Trackon Courier Mumbai | ${phoneNumber}`;

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

      updateMeta("description", service.metaDescription);
      updateMeta("keywords", service.keywords);
      updateMeta("og:title", service.title, true);
      updateMeta("og:description", service.metaDescription, true);
      updateMeta("og:type", "website", true);
      updateMeta("geo.region", "IN-MH");
      updateMeta("geo.placename", "Mumbai");
      updateMeta("geo.position", "19.0760;72.8777");
      updateMeta("ICBM", "19.0760, 72.8777");

      // Add JSON-LD structured data for service
      const existingScript = document.querySelector(`script[data-service="${slug}"]`);
      if (existingScript) existingScript.remove();

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-service", slug || "");
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.details,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Trackon Courier",
          "telephone": `+91-${phoneNumber}`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "19.0760",
            "longitude": "72.8777"
          }
        },
        "areaServed": service.areas.map(area => ({
          "@type": "Place",
          "name": area
        })),
        "serviceType": service.shortTitle,
        "offers": {
          "@type": "Offer",
          "description": service.pricing
        }
      });
      document.head.appendChild(script);

      // Update canonical
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", `${window.location.origin}/services/${slug}`);
      } else {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("href", `${window.location.origin}/services/${slug}`);
        document.head.appendChild(canonical);
      }
    }
  }, [service, slug]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi, I want to enquire about ${service?.shortTitle} service.`);
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  if (!service) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
            <Link to="/" className="text-accent hover:underline">← Back to Home</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const ServiceIcon = service.icon;
  const serviceData = slug ? serviceFAQs[slug as keyof typeof serviceFAQs] : null;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: service.shortTitle }
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
                <ServiceIcon className="w-10 h-10 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {service.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                  {service.description}
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
                {/* About Service */}
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-4">About This Service</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.details}
                  </p>
                </div>

                {/* Features */}
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Areas */}
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Service Areas</h2>
                  <div className="flex flex-wrap gap-3">
                    {service.areas.map((area) => (
                      <span 
                        key={area}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* How It Works */}
                {serviceData?.howItWorks && serviceData.howItWorks.length > 0 && (
                  <HowItWorks steps={serviceData.howItWorks} serviceName={service.shortTitle} />
                )}

                {/* Benefits */}
                {serviceData?.benefits && serviceData.benefits.length > 0 && (
                  <ServiceBenefits benefits={serviceData.benefits} />
                )}

                {/* Use Cases */}
                {serviceData?.useCases && serviceData.useCases.length > 0 && (
                  <ServiceUseCases useCases={serviceData.useCases} />
                )}

                {/* Comparison */}
                {serviceData?.comparison && serviceData.comparison.length > 0 && (
                  <ServiceComparison 
                    comparison={serviceData.comparison} 
                    serviceName={service.shortTitle}
                    alternativeName="Alternative"
                  />
                )}

                {/* FAQ */}
                {serviceData?.faqs && serviceData.faqs.length > 0 && (
                  <ServiceFAQ faqs={serviceData.faqs} serviceName={service.shortTitle} />
                )}

                {/* Related Services */}
                {serviceData?.relatedServices && serviceData.relatedServices.length > 0 && (
                  <RelatedServices services={serviceData.relatedServices} currentService={slug} />
                )}
              </div>

              {/* Right Sidebar - Contact Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card rounded-xl p-6 border border-border shadow-elevated">
                  <h3 className="text-xl font-bold text-foreground mb-6">Get Started Today</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Pricing</span>
                      <span className="font-semibold text-foreground">{service.pricing}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Delivery Time</span>
                      <span className="font-semibold text-foreground text-right text-sm">{service.deliveryTime}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button variant="accent" size="lg" className="w-full" asChild>
                      <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        Call: {phoneNumber}
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
                      📍 Based in Mumbai, serving Pan India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary/5">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Ship with Trackon Courier?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get instant quotes and reliable delivery for all your courier needs. Contact us now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <a href={`tel:${phoneNumber}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now: {phoneNumber}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/#contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default ServiceDetail;
