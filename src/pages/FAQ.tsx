import { useEffect } from "react";
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
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const phoneNumber = "8097512951";
  
  const faqCategories = [
    {
      category: "General Questions",
      faqs: [
        {
          question: "What areas does Trackon Courier serve?",
          answer: "Trackon Courier serves all of Mumbai and its suburbs, including Thane, Navi Mumbai, and the extended metropolitan region. We also provide domestic courier services to 500+ cities across India and international shipping to 200+ countries worldwide."
        },
        {
          question: "What are your operating hours?",
          answer: "Our customer support is available 24/7. Pickup services are available from 9 AM to 8 PM on weekdays and 9 AM to 6 PM on weekends. For urgent same-day deliveries, we offer extended hours till 10 PM."
        },
        {
          question: "How can I contact Trackon Courier?",
          answer: "You can reach us by phone at 8097512951, via WhatsApp, or through our website's contact form. Our team typically responds within 30 minutes during business hours."
        },
        {
          question: "Do you offer corporate accounts?",
          answer: "Yes, we offer corporate accounts with special pricing, dedicated account managers, monthly invoicing, and priority handling. Contact us to set up a corporate account for your business."
        },
      ]
    },
    {
      category: "Shipping & Delivery",
      faqs: [
        {
          question: "How long does domestic delivery take?",
          answer: "Domestic delivery times vary by destination: Same-day within Mumbai, 1-2 days for metro cities, and 2-4 days for other locations across India. Express options are available for faster delivery."
        },
        {
          question: "What is the cost of shipping?",
          answer: "Shipping costs depend on the weight, dimensions, destination, and service type. Domestic document courier starts from ₹50, while parcel rates start from ₹100. Use our quote calculator or call us for exact pricing."
        },
        {
          question: "Do you offer same-day delivery?",
          answer: "Yes, we offer same-day delivery within Mumbai city limits. Orders placed before 2 PM are delivered by 8 PM the same day. Express same-day options with 4-6 hour delivery are also available."
        },
        {
          question: "What is the maximum weight limit for parcels?",
          answer: "For standard courier, the weight limit is 30 kg per package. For heavier items, we offer cargo services with no weight restrictions. Oversized items may incur additional handling charges."
        },
        {
          question: "Do you deliver on weekends and holidays?",
          answer: "Yes, we operate 7 days a week including Sundays. For national holidays, delivery schedules may vary, but urgent deliveries can still be arranged with prior notice."
        },
      ]
    },
    {
      category: "Tracking & Security",
      faqs: [
        {
          question: "How do I track my shipment?",
          answer: "You'll receive a tracking number via SMS and email when your parcel is picked up. Use this number on our website or contact our support team for real-time updates on your shipment's location."
        },
        {
          question: "Is my package insured?",
          answer: "Basic insurance coverage is included for all shipments up to ₹5,000. For higher-value items, we offer additional insurance options. Declare the value of your items at the time of booking for appropriate coverage."
        },
        {
          question: "What happens if my package is lost or damaged?",
          answer: "In the rare event of loss or damage, please contact us within 24 hours. We investigate all claims promptly and provide compensation based on the declared value and insurance coverage."
        },
        {
          question: "Are my documents kept confidential?",
          answer: "Absolutely. We maintain strict confidentiality for all documents and parcels. Our staff is trained in handling sensitive materials, and we can provide tamper-evident packaging upon request."
        },
      ]
    },
    {
      category: "Pickup & Packaging",
      faqs: [
        {
          question: "Is doorstep pickup free?",
          answer: "Yes, doorstep pickup is free for all orders within Mumbai. Simply schedule a pickup time, and our executive will collect the package from your location. Multiple pickups from the same location are also free."
        },
        {
          question: "Do you provide packaging materials?",
          answer: "Yes, we offer professional packaging services for all types of items. Standard packaging materials are included with our secure packaging service. For fragile items, we use bubble wrap, foam, and custom boxes."
        },
        {
          question: "What items are prohibited for shipping?",
          answer: "Prohibited items include explosives, flammable materials, illegal substances, live animals, and perishable goods. For international shipping, additional restrictions may apply based on the destination country."
        },
        {
          question: "Can I schedule a specific pickup time?",
          answer: "Yes, you can schedule pickup for a specific 2-hour time window. Our executives will arrive within the scheduled window. For urgent pickups, we can dispatch within 30 minutes."
        },
      ]
    },
    {
      category: "International Shipping",
      faqs: [
        {
          question: "Which countries do you ship to?",
          answer: "We ship to over 200 countries worldwide including USA, UK, Canada, Australia, UAE, Singapore, Germany, and more. Some remote locations may have limited service availability."
        },
        {
          question: "How is customs handled for international shipments?",
          answer: "We handle all customs documentation and clearance for you. You'll need to provide accurate item descriptions and values. Customs duties and taxes are the responsibility of the recipient unless otherwise arranged."
        },
        {
          question: "How long does international delivery take?",
          answer: "International delivery times vary: Express (3-5 days), Standard (7-10 days), Economy (10-15 days). Actual delivery times depend on the destination country and customs clearance."
        },
        {
          question: "What documents are required for international shipping?",
          answer: "For documents: sender and receiver details. For parcels: commercial invoice, item description, and customs declaration. We assist with preparing all required documentation."
        },
      ]
    },
    {
      category: "Payment & Billing",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, UPI, credit/debit cards, net banking, and digital wallets. Corporate accounts can opt for monthly invoicing with 15-30 day payment terms."
        },
        {
          question: "Do you offer Cash on Delivery (COD)?",
          answer: "Yes, we offer COD services for domestic shipments. COD charges apply based on the collection amount. Funds are remitted to the sender within 3-5 business days of delivery."
        },
        {
          question: "Can I get a receipt or invoice?",
          answer: "Yes, digital receipts are sent via email and SMS for all shipments. GST invoices are available for all payments. Corporate accounts receive detailed monthly statements."
        },
      ]
    },
  ];

  // Flatten all FAQs for schema
  const allFaqs = faqCategories.flatMap(cat => cat.faqs);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  useEffect(() => {
    document.title = "Frequently Asked Questions | Trackon Courier Mumbai";
    
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

    updateMeta("description", "Find answers to common questions about Trackon Courier services - shipping, tracking, pricing, pickup, international delivery, and more. Call 8097512951 for help.");
    updateMeta("og:title", "FAQ | Trackon Courier Mumbai", true);
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "FAQ" }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I have a question about your courier services.");
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <Header />
      <main className="bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        {/* Hero Section */}
        <section className="bg-primary/5 py-12 md:py-20">
          <div className="container">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Find quick answers to common questions about our courier services. 
                Can't find what you're looking for? Contact our support team.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* FAQ Categories */}
              <div className="lg:col-span-2 space-y-8">
                {faqCategories.map((category) => (
                  <div key={category.category} className="bg-card rounded-xl p-6 md:p-8 border border-border">
                    <h2 className="text-xl font-bold text-foreground mb-6">{category.category}</h2>
                    <Accordion type="single" collapsible className="space-y-3">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`${category.category}-${index}`}
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
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Quick Links */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
                    <nav className="space-y-2">
                      {faqCategories.map((cat) => (
                        <a 
                          key={cat.category}
                          href={`#${cat.category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-muted-foreground hover:text-accent transition-colors"
                        >
                          {cat.category}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Contact Card */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="text-lg font-bold text-foreground mb-4">Still Have Questions?</h3>
                    <p className="text-muted-foreground mb-6">
                      Our support team is ready to help you with any queries.
                    </p>
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
                        WhatsApp Us
                      </Button>
                    </div>
                  </div>

                  {/* Related Pages */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="text-lg font-bold text-foreground mb-4">Helpful Resources</h3>
                    <nav className="space-y-2">
                      <Link to="/about" className="block text-muted-foreground hover:text-accent transition-colors">
                        About Us
                      </Link>
                      <Link to="/blog" className="block text-muted-foreground hover:text-accent transition-colors">
                        Blog & Tips
                      </Link>
                      <Link to="/#services" className="block text-muted-foreground hover:text-accent transition-colors">
                        Our Services
                      </Link>
                      <Link to="/#contact" className="block text-muted-foreground hover:text-accent transition-colors">
                        Contact Us
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default FAQ;
