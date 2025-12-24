import { useEffect } from "react";

const SEOHead = () => {
  useEffect(() => {
    // Update document title
    document.title = "Trackon Courier - Fast Courier Services in Mumbai | Same Day Delivery | 9864251628";

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Trackon Courier offers fast, reliable courier services in Mumbai & Pan India. Same-day delivery, express shipping, doorstep pickup. Call 9864251628 for instant quotes. Trusted by 50,000+ customers.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Trackon Courier offers fast, reliable courier services in Mumbai & Pan India. Same-day delivery, express shipping, doorstep pickup. Call 9864251628 for instant quotes. Trusted by 50,000+ customers.";
      document.head.appendChild(meta);
    }

    // Add keywords meta
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      const keywords = document.createElement("meta");
      keywords.name = "keywords";
      keywords.content = "courier services mumbai, trackon courier, courier near me, same day delivery mumbai, express courier, parcel delivery, shipping services india, courier services near me, best courier in mumbai";
      document.head.appendChild(keywords);
    }

    // Add Open Graph tags
    const ogTags = [
      { property: "og:title", content: "Trackon Courier - Fast & Reliable Courier Services in Mumbai" },
      { property: "og:description", content: "Same-day delivery, express shipping & doorstep pickup. Call 9864251628 for instant quotes." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
    ];

    ogTags.forEach(({ property, content }) => {
      if (!document.querySelector(`meta[property="${property}"]`)) {
        const meta = document.createElement("meta");
        meta.setAttribute("property", property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    });

    // Add JSON-LD structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trackon Courier",
        "description": "Fast and reliable courier services in Mumbai and Pan India. Same-day delivery, express shipping, and doorstep pickup available.",
        "telephone": "+91-9864251628",
        "email": "info@trackoncourier.com",
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
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "priceRange": "$$",
        "areaServed": [
          "Mumbai",
          "Delhi",
          "Bangalore",
          "Chennai",
          "Kolkata",
          "Hyderabad",
          "Pune"
        ],
        "serviceType": [
          "Domestic Courier",
          "International Shipping",
          "Express Delivery",
          "Same Day Delivery",
          "Doorstep Pickup"
        ],
        "sameAs": [],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1250"
        }
      });
      document.head.appendChild(script);
    }

    // Add canonical URL
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = window.location.origin;
      document.head.appendChild(canonical);
    }

  }, []);

  return null;
};

export default SEOHead;
