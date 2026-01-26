import { useEffect } from "react";

const SEOHead = () => {
  useEffect(() => {
    // Update document title - CTR optimized
    document.title = "Fast Courier Pickup Andheri West – Call Now | Same Day Courier Near You | 8097512951";

    // Add meta description - CTR optimized, human-readable
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = "Same Day Courier Near You – Trusted Local Service in Andheri West, Mumbai. 2,000+ successful deliveries, serving Mumbai since 2019. Doorstep pickup within 30-60 mins. ★★★★★ rated by local customers. Call 8097512951 for instant quote.";
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }

    // Add keywords meta - optimized for singular/plural variations
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "courier service, courier services, courier service near me, courier services near me, courier tracking, courier charges, courier office near me, fastest courier service in india, fastest courier service, fastest courier service in mumbai, fastest courier service near me, trackon courier, trackon courier mumbai, trackon courier DN nagar, trackon courier Jogeshwari, trackon courier Goregaon, trackon courier near me, trackon courier tracking, trackon courier Andheri, trackon courier Versova, same day delivery mumbai, express courier, parcel delivery, shipping services india, best courier in mumbai, courier service mumbai, courier services mumbai, cheap courier service, cheap courier services, document courier, parcel courier, international courier service, international courier services, domestic courier, domestic courier service";
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywordsContent);
    } else {
      const keywords = document.createElement("meta");
      keywords.name = "keywords";
      keywords.content = keywordsContent;
      document.head.appendChild(keywords);
    }

    // Add Open Graph tags - CTR optimized
    const ogTags = [
      { property: "og:title", content: "Fast Courier Pickup Andheri West – Call Now | Trackon Courier" },
      { property: "og:description", content: "Same Day Courier Near You – Trusted Local Service. 2,000+ deliveries, ★★★★★ rated. Doorstep pickup in 30-60 mins. Serving Mumbai since 2019. Call 8097512951." },
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
        "alternateName": ["Trackon Courier", "Trackon Courier Service", "Trackon Courier Services"],
        "description": "Fastest courier service in Mumbai. Best courier services near me. Courier tracking, courier charges, courier office near me. Trackon Courier Andheri, DN Nagar, Jogeshwari, Goregaon, Versova. Same-day delivery and express shipping.",
        "telephone": "+91-8097512951",
        "email": "sonacourierservices@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop No. 1/2 Ever Shine Mens Wear, Juhu Versova Link Road, Kapaswadi Loknayak Nagar, Near Hotel Shankri",
          "addressLocality": "Andheri West, Mumbai",
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
          "Andheri",
          "DN Nagar",
          "Jogeshwari",
          "Goregaon",
          "Versova",
          "Bandra",
          "Juhu",
          "Vile Parle",
          "Malad",
          "Kandivali",
          "Chandivali",
          "Vikhroli",
          "SEEPZ",
          "Mahakali",
          "Lokhandwala",
          "Oshiwara",
          "Vasai",
          "Virar",
          "Nalasopara",
          "Delhi",
          "Bangalore",
          "Chennai",
          "Kolkata",
          "Hyderabad",
          "Pune"
        ],
        "serviceType": [
          "Courier Service",
          "Courier Services",
          "Domestic Courier",
          "International Shipping",
          "Express Delivery",
          "Same Day Delivery",
          "Doorstep Pickup",
          "Courier Tracking",
          "Fastest Courier Service"
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
