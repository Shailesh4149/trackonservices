import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Trackon Courier – Courier Service in Mumbai";
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
              <BreadcrumbItem><BreadcrumbPage>Privacy Policy</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-6">Last updated: March 2026</p>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground/90">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you use Trackon Courier services or visit our website, we may collect the following information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Your name, phone number, and email address</li>
                <li>Pickup and delivery addresses</li>
                <li>Package details (weight, dimensions, contents description)</li>
                <li>Payment information for processing transactions</li>
                <li>Website usage data (pages visited, time spent, device information)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To process and deliver your courier shipments</li>
                <li>To provide real-time tracking updates via SMS or email</li>
                <li>To respond to your enquiries and provide customer support</li>
                <li>To send service-related notifications and updates</li>
                <li>To improve our website and courier services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your data only with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>Delivery partners and logistics providers to fulfil your shipment</li>
                <li>Payment processors to handle transactions securely</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information from unauthorised access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, update, or delete your personal information. To exercise these rights, contact us at{" "}
                <a href="mailto:sonacourierservices@gmail.com" className="text-accent hover:underline">sonacourierservices@gmail.com</a>{" "}
                or call <a href="tel:8097512951" className="text-accent hover:underline">8097512951</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
