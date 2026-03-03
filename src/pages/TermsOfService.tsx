import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | Trackon Courier – Courier Service in Mumbai";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-20 pb-16 bg-background min-h-screen">
        <div className="container max-w-3xl py-12">
          <nav className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Terms of Service</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-6">Last updated: March 2026</p>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using Trackon Courier services or accessing our website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Services Provided</h2>
              <p className="text-muted-foreground leading-relaxed">
                Trackon Courier provides courier and logistics services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Same-day delivery within Mumbai</li>
                <li>Express courier services</li>
                <li>Pan India domestic courier</li>
                <li>International shipping and courier</li>
                <li>Airport pickup and delivery services</li>
                <li>Secure document courier</li>
                <li>Doorstep pickup services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Booking and Pickup</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Bookings can be made via phone call, WhatsApp, or through our website enquiry form</li>
                <li>Pickup is available within Andheri West and nearby areas, typically within 30-60 minutes of booking</li>
                <li>Accurate sender and receiver details must be provided at the time of booking</li>
                <li>We reserve the right to refuse shipments that violate legal or safety regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Prohibited Items</h2>
              <p className="text-muted-foreground leading-relaxed">
                The following items are strictly prohibited from being shipped through Trackon Courier:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Hazardous or flammable materials</li>
                <li>Illegal substances or contraband</li>
                <li>Perishable goods without prior arrangement</li>
                <li>Firearms, weapons, or explosives</li>
                <li>Currency, jewellery, or precious metals (unless declared and insured)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Pricing and Payment</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Courier charges are based on weight, dimensions, destination, and service type</li>
                <li>Prices are quoted at the time of booking and are subject to change</li>
                <li>Payment can be made via cash, UPI, or bank transfer</li>
                <li>Additional charges may apply for re-delivery attempts or address corrections</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Delivery Timelines</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to meet all delivery timelines, estimated delivery dates are not guaranteed. Delays may occur due to weather, traffic, customs processing (for international shipments), or other factors beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Liability and Claims</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Trackon Courier takes reasonable care in handling all shipments</li>
                <li>Liability for lost or damaged items is limited to the declared value of the shipment</li>
                <li>Claims for loss or damage must be filed within 7 days of the expected delivery date</li>
                <li>We are not liable for delays caused by incorrect addresses, natural disasters, or government restrictions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">8. Cancellation and Refund</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bookings may be cancelled before pickup for a full refund. Once the shipment is picked up, cancellation charges may apply. Refunds, if applicable, will be processed within 7-10 business days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">9. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Trackon Courier reserves the right to modify these Terms of Service at any time. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these Terms of Service, please contact us:
              </p>
              <ul className="list-none space-y-2 mt-3 text-muted-foreground">
                <li>📞 <a href="tel:8097512951" className="text-accent hover:underline">8097512951</a></li>
                <li>📧 <a href="mailto:sonacourierservices@gmail.com" className="text-accent hover:underline">sonacourierservices@gmail.com</a></li>
                <li>📍 Shop No. 1/2, Juhu Versova Link Road, Kapaswadi, Andheri West, Mumbai</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;
