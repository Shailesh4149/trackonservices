import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const previewFAQs = [
  {
    question: "What areas does Trackon Courier serve in Mumbai?",
    answer: "We provide comprehensive courier services across all of Mumbai including Andheri, Bandra, Juhu, Powai, Thane, Navi Mumbai, and all major transit hubs like Mumbai Airport Terminal 1 & 2, CST, and Dadar. We also offer nationwide delivery to 500+ cities."
  },
  {
    question: "How long does domestic delivery take?",
    answer: "Standard domestic delivery takes 3-5 business days. We also offer express delivery (1-2 days) and same-day delivery for urgent shipments within Mumbai. International deliveries typically take 5-10 business days depending on the destination."
  },
  {
    question: "Is doorstep pickup available and is it free?",
    answer: "Yes! We offer free doorstep pickup for all shipments within Mumbai. Simply book your pickup online or call us, and our executive will collect your parcel from your location at your preferred time slot."
  },
  {
    question: "How can I track my shipment?",
    answer: "You can track your shipment 24/7 using our online tracking system. Simply enter your tracking number on our website or use the tracking link sent to your registered mobile/email. You'll receive real-time updates at every stage of delivery."
  },
  {
    question: "Do you offer same-day delivery in Mumbai?",
    answer: "Yes, we offer same-day delivery for shipments booked before 12 PM within Mumbai city limits. This service is perfect for urgent documents, medical supplies, and time-sensitive packages. Additional charges apply for same-day service."
  }
];

const FAQPreview = () => {
  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": previewFAQs.map(faq => ({
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
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <HelpCircle className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to the most common questions about our courier services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {previewFAQs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Have more questions? We've got answers.
              </p>
              <Button asChild size="lg">
                <Link to="/faq" className="inline-flex items-center gap-2">
                  View All FAQs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPreview;
